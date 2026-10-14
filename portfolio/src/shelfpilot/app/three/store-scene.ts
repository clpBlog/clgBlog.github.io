import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildPackageModel, normalizeMeasuredCamera } from './three-stage';
import { buildPharmacyTemplate, pharmacyLabel, type PharmacyTemplate } from './pharmacy-template';
import type { SpatialData, SpatialPlacement } from '../stores/contracts';
import type { PackageSpec, Vec3 } from './types';
import { resolutionForCanvas, type CanvasRenderQuality as RenderQuality } from '../../lib/render-quality.mjs';

export type StoreScene = {
  setData(data: SpatialData | null, imageURL: (url: string) => string): void;
  select(id: string | null, focus?: boolean): void;
  highlight(ids: string[]): void;
  setCabinetEditing(enabled:boolean,onMove?:(shelfId:string,pose:CabinetPose)=>boolean,onCabinetSelect?:(id:string)=>void):void;
  selectCabinet(id:string|null):void;
  view(preset:'isometric'|'top'|'front'):void;
  setQuality(quality:RenderQuality):void;
  setGlassVisible(visible:boolean):void;
  fit(): void;
  dispose(): void;
};
export type CabinetPose={x:number;z:number;rotation:number};
const vec = (v: Vec3) => new THREE.Vector3(...v);
const valid = (v: unknown): v is Vec3 => Array.isArray(v) && v.length === 3 && v.every(n => Number.isFinite(n) && Math.abs(n) < 1e10);

/** Approximate shelves use the user's photos; measured maps retain their original points. */
export function createStoreScene(canvas: HTMLCanvasElement, onSelect: (id: string) => void, onError: (message: string) => void): StoreScene {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setClearColor('#122723');
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene(), content = new THREE.Group();
  const ambient = new THREE.HemisphereLight('#ffffff', '#5b655e', 2.6);
  scene.add(content, ambient);
  const sun = new THREE.DirectionalLight('#ffffff', 2); sun.position.set(3, 8, 5); scene.add(sun);
  scene.add(sun.target);
  renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate=false;
  sun.shadow.autoUpdate=false;
  sun.shadow.mapSize.set(1024,1024);
  sun.shadow.radius=2;
  sun.shadow.intensity=.65;
  sun.shadow.bias=-.0002;
  sun.shadow.normalBias=.012;
  let environment:THREE.WebGLRenderTarget|null=null,environmentAttempted=false;
  const camera = new THREE.PerspectiveCamera(48, 1, .001, 1e7);
  camera.position.set(3, 2, 5);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = false;
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
  const entries = new Map<string, { object: THREE.Group; position: THREE.Vector3; halo: THREE.Mesh; radius: number; front: THREE.Vector3 | null }>();
  type CabinetEntry={id:string;object:THREE.Group;proxy:THREE.Mesh;outline:THREE.LineSegments;packages:Array<{object:THREE.Group;position:THREE.Vector3}>};
  const cabinets=new Map<string,CabinetEntry>();
  const textures = new Set<THREE.Texture>();
  const decodedImages = new Map<string, Promise<HTMLImageElement>>();
  let serial = 0, disposed = false, frame = 0, selected: string | null = null, highlights = new Set<string>(), span = 1;
  let start: [number, number] | null = null;
  let pharmacy: PharmacyTemplate | null = null, shelfFront = new THREE.Vector3(0, 0, 1);
  let autoFrame = true;
  let glassVisible = true;
  let currentView:'isometric'|'top'|'front'='isometric';
  let cabinetEditing=false,selectedCabinet:string|null=null;
  let cabinetMove:((id:string,pose:CabinetPose)=>boolean)|undefined,cabinetSelect:((id:string)=>void)|undefined;
  let dragging:{pointerId:number;cabinet:CabinetEntry;grab:THREE.Vector3;origin:THREE.Vector3;packages:Array<{entry:{object:THREE.Group;position:THREE.Vector3};origin:THREE.Vector3}>;moved:boolean}|null=null;
  const ground=new THREE.Plane(new THREE.Vector3(0,1,0),0);
  const fitCorners: THREE.Vector3[] = [];
  const bounds = new THREE.Box3();
  let quality:RenderQuality='clear',interacting=false,settleTimer:ReturnType<typeof setTimeout>|undefined;
  let canvasWidth=0,canvasHeight=0;
  const maxDimension=Math.min(4096,renderer.capabilities.maxTextureSize,renderer.getContext().getParameter(renderer.getContext().MAX_RENDERBUFFER_SIZE));
  const maxAnisotropy=renderer.capabilities.getMaxAnisotropy();
  function ensureEnvironment(){
    if(environmentAttempted)return;
    environmentAttempted=true;
    // A small local room capture supplies broad reflections without downloads or
    // per-frame environment rendering. Keep only the final prefiltered target.
    const room=new RoomEnvironment(),generator=new THREE.PMREMGenerator(renderer);
    try{environment=generator.fromScene(room,.04,.1,100,{size:128});}
    catch{environment=null;}
    finally{room.traverse(object=>{if(object instanceof THREE.InstancedMesh)object.dispose();});room.dispose();generator.dispose();}
  }
  function releaseShadow(){sun.shadow.dispose();sun.shadow.map=null;sun.shadow.mapPass=null;}
  function markShadowDirty(){
    if(!renderer.shadowMap.enabled)return;
    renderer.shadowMap.needsUpdate=true;sun.shadow.needsUpdate=true;
  }
  function applyShadowPolicy(){
    const enabled=!!pharmacy&&quality==='clear';
    if(renderer.shadowMap.enabled===enabled&&sun.castShadow===enabled)return;
    renderer.shadowMap.enabled=enabled;sun.castShadow=enabled;
    if(enabled)markShadowDirty();else releaseShadow();
  }
  function configureLighting(){
    if(pharmacy)ensureEnvironment();
    scene.environment=pharmacy?environment?.texture||null:null;
    scene.environmentIntensity=.45;
    renderer.toneMapping=pharmacy?THREE.NeutralToneMapping:THREE.NoToneMapping;
    renderer.toneMappingExposure=1;
    ambient.intensity=pharmacy ? (environment ? .65 : .95) : 2.6;
    sun.intensity=pharmacy?2.8:2;
    ambient.color.set(pharmacy?'#f5f8ff':'#ffffff');
    ambient.groundColor.set(pharmacy?'#9d9e98':'#5b655e');
    sun.color.set(pharmacy?'#fffaf2':'#ffffff');
    if(!pharmacy){sun.position.set(3,8,5);sun.target.position.set(0,0,0);}
    applyShadowPolicy();
  }
  function fitShadow(){
    if(!pharmacy||bounds.isEmpty())return;
    const center=bounds.getCenter(new THREE.Vector3()),radius=Math.max(3,bounds.getSize(new THREE.Vector3()).length()*.6);
    sun.target.position.copy(center);
    sun.position.copy(center).addScaledVector(new THREE.Vector3(.55,1,.8).normalize(),radius*2.3);
    const shadowCamera=sun.shadow.camera;
    shadowCamera.left=-radius;shadowCamera.right=radius;shadowCamera.top=radius;shadowCamera.bottom=-radius;
    shadowCamera.near=.1;shadowCamera.far=radius*5;shadowCamera.updateProjectionMatrix();
    markShadowDirty();
  }
  function sampleTexture(texture:THREE.Texture){texture.anisotropy=Math.min(quality==='clear'?8:4,maxAnisotropy);texture.needsUpdate=true;}
  function applyResolution(){
    if(!canvasWidth||!canvasHeight||disposed)return;
    const target=resolutionForCanvas({width:canvasWidth,height:canvasHeight,devicePixelRatio:window.devicePixelRatio||1,quality,interacting,maxDimension});
    // CSS dimensions stay fixed; only the drawing buffer changes while interacting.
    if(Math.abs(renderer.getPixelRatio()-target.pixelRatio)>.0001)renderer.setPixelRatio(target.pixelRatio);
    renderer.setSize(canvasWidth,canvasHeight,false);requestRender();
  }
  function beginInteraction(){clearTimeout(settleTimer);if(!interacting){interacting=true;applyResolution();}}
  function endInteraction(){clearTimeout(settleTimer);if(disposed)return;settleTimer=setTimeout(()=>{if(disposed)return;interacting=false;applyResolution();},180);}
  function requestRender() { if (disposed || frame) return; frame = requestAnimationFrame(() => { frame = 0; if (!disposed) renderer.render(scene, camera); }); }
  controls.addEventListener('change', requestRender);
  const stopAutoFrame = () => { autoFrame = false;beginInteraction(); };
  controls.addEventListener('start',stopAutoFrame);
  controls.addEventListener('end',endInteraction);
  const resize = () => { const { width, height } = canvas.getBoundingClientRect(); if (!width || !height) return; canvasWidth=width;canvasHeight=height;applyResolution();camera.aspect = width / height; camera.updateProjectionMatrix(); if(autoFrame&&!bounds.isEmpty())frameView();else requestRender(); };
  const observer = new ResizeObserver(resize); observer.observe(canvas); resize();
  function pointerRay(event:PointerEvent){const rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height)return false;pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);return true;}
  function hitCabinet(){content.updateMatrixWorld(true);const hit=raycaster.intersectObjects([...cabinets.values()].map(c=>c.proxy),false)[0];return hit?cabinets.get(hit.object.userData.cabinetId):undefined;}
  function paintCabinets(){
    cabinets.forEach(c=>{c.outline.visible=cabinetEditing&&!!pharmacy;const material=c.outline.material as THREE.LineBasicMaterial;material.color.set(c.id===selectedCabinet?'#e1a631':'#508c77');material.opacity=c.id===selectedCabinet?1:.45;});
    let changed=false;
    content.traverse(object=>{if(object.userData.optionalFitting){const visible=!cabinetEditing&&!(pharmacy?.manual_count);if(object.visible!==visible){object.visible=visible;changed=true;}}});
    if(changed)markShadowDirty();
    requestRender();
  }
  function paintGlass(){
    let changed=false;
    content.traverse(object=>{if(object.userData.wallGlass&&object.visible!==glassVisible){object.visible=glassVisible;changed=true;}});
    if(changed)markShadowDirty();
    requestRender();
  }
  function finishDrag(commit:boolean){
    const drag=dragging;if(!drag)return;dragging=null;
    const pose={x:drag.cabinet.object.position.x,z:drag.cabinet.object.position.z,rotation:drag.cabinet.object.rotation.y};
    // Preview is transient; the caller validates and supplies the next authoritative draft.
    drag.cabinet.object.position.copy(drag.origin);drag.packages.forEach(p=>{p.entry.object.position.copy(p.origin);p.entry.position.copy(p.origin);});
    controls.enabled=true;canvas.style.cursor=cabinetEditing?'grab':'';
    endInteraction();
    if(canvas.hasPointerCapture(drag.pointerId))canvas.releasePointerCapture(drag.pointerId);
    markShadowDirty();requestRender();if(commit&&drag.moved)cabinetMove?.(drag.cabinet.id,pose);
  }
  const down = (event: PointerEvent) => {
    if(cabinetEditing&&pharmacy){
      start=null;if(event.button!==0||dragging||!pointerRay(event))return;
      const cabinet=hitCabinet(),point=raycaster.ray.intersectPlane(ground,new THREE.Vector3());
      if(!cabinet||!point)return;
      event.preventDefault();event.stopImmediatePropagation();autoFrame=false;controls.enabled=false;beginInteraction();
      dragging={pointerId:event.pointerId,cabinet,grab:point.clone().sub(cabinet.object.position),origin:cabinet.object.position.clone(),packages:cabinet.packages.map(entry=>({entry,origin:entry.object.position.clone()})),moved:false};
      selectedCabinet=cabinet.id;canvas.setPointerCapture(event.pointerId);canvas.style.cursor='grabbing';paintCabinets();cabinetSelect?.(cabinet.id);return;
    }
    start = [event.clientX, event.clientY];
  };
  const move=(event:PointerEvent)=>{
    if(!cabinetEditing||!pharmacy)return;
    if(!pointerRay(event))return;
    if(dragging){
      if(event.pointerId!==dragging.pointerId)return;
      const point=raycaster.ray.intersectPlane(ground,new THREE.Vector3());if(!point||!point.toArray().every(n=>Number.isFinite(n)&&Math.abs(n)<1000))return;
      event.preventDefault();event.stopImmediatePropagation();
      const destination=point.sub(dragging.grab);destination.y=dragging.origin.y;
      const delta=destination.clone().sub(dragging.origin);if(delta.length()>.02)dragging.moved=true;
      dragging.cabinet.object.position.copy(destination);dragging.packages.forEach(p=>{p.entry.object.position.copy(p.origin).add(delta);p.entry.position.copy(p.entry.object.position);});requestRender();
    }else canvas.style.cursor=hitCabinet()?'grab':'';
  };
  const up = (event: PointerEvent) => {
    if(cabinetEditing){if(dragging&&event.pointerId===dragging.pointerId){event.preventDefault();event.stopImmediatePropagation();finishDrag(true);}start=null;return;}
    if (!start || Math.hypot(event.clientX - start[0], event.clientY - start[1]) > 6) return;
    start = null; const rect = canvas.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects([...entries.values()].map(entry => entry.object), true);
    for (const hit of hits) { let object: THREE.Object3D | null = hit.object; while (object && !object.userData.placementId) object = object.parent; if (object?.userData.placementId) { onSelect(object.userData.placementId); break; } }
  };
  const cancel=(event:PointerEvent)=>{if(dragging?.pointerId===event.pointerId)finishDrag(false);start=null;};
  const contextLost = (event: Event) => { event.preventDefault(); finishDrag(false); onError('三维画布暂时不可用，请刷新页面恢复。'); };
  canvas.addEventListener('pointerdown', down,true); canvas.addEventListener('pointermove',move,true);canvas.addEventListener('pointerup', up,true);canvas.addEventListener('pointercancel',cancel);canvas.addEventListener('lostpointercapture',cancel); canvas.addEventListener('webglcontextlost', contextLost);
  function clear() {
    finishDrag(false);serial++; entries.clear();cabinets.clear(); fitCorners.length=0;
    const geometries = new Set<THREE.BufferGeometry>(), materials = new Set<THREE.Material>();
    content.traverse(object => { if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.LineSegments) { geometries.add(object.geometry); (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => materials.add(material)); } if(object instanceof THREE.InstancedMesh)object.dispose(); });
    geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose());
    content.clear(); textures.forEach(texture => texture.dispose()); textures.clear();
    requestRender();
  }
  function paint() {
    entries.forEach((entry, id) => { const active = selected === id, match = highlights.has(id); const material = entry.halo.material as THREE.MeshBasicMaterial; entry.halo.visible = active || match; material.color.set(active ? '#f8d982' : '#62e4b4'); material.opacity = active ? .32 : .22; entry.halo.scale.setScalar(entry.halo.userData.photoHighlight?1:active ? 1.5 : 1.2); });
    requestRender();
  }
  function fit(){currentView='isometric';frameView();}
  function frameView() {
    if (bounds.isEmpty()) return;
    autoFrame = true;
    const center = bounds.getCenter(new THREE.Vector3());
    const size=bounds.getSize(new THREE.Vector3()), halfFov=THREE.MathUtils.degToRad(camera.fov/2);
    let distance=Math.max(size.y/2/Math.tan(halfFov),size.x/2/(Math.tan(halfFov)*camera.aspect))*1.28+size.z;
    const direction = pharmacy ? (currentView==='top'?new THREE.Vector3(0,1,.002):currentView==='front'?new THREE.Vector3(0,.20,1):new THREE.Vector3(.90,1.05,1.5)).normalize() : shelfFront.clone().add(new THREE.Vector3(.12, .08, 0)).normalize();
    if (pharmacy) {
      // Fit the isometric projection, including a separate pad for unconfirmed cabinets.
      const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), direction).normalize(), up = new THREE.Vector3().crossVectors(direction, right).normalize();
      const projected = fitCorners.length ? fitCorners : [bounds.min,bounds.max];
      let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
      for(const p of projected){const x=p.dot(right),y=p.dot(up);minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}
      center.addScaledVector(right,(minX+maxX)/2-center.dot(right)).addScaledVector(up,(minY+maxY)/2-center.dot(up));
      distance = 0;
      for (const corner of projected) {
        const p = corner.clone().sub(center), toward = p.dot(direction);
        distance = Math.max(distance, Math.abs(p.dot(up)) / Math.tan(halfFov) + toward, Math.abs(p.dot(right)) / (Math.tan(halfFov) * camera.aspect) + toward);
      }
      distance *= 1.045;
    }
    camera.up.set(0,1,0); controls.target.copy(center); camera.position.copy(center).addScaledVector(direction,distance);
    camera.near = Math.max(span / 10000, .00001); camera.far = Math.max(span * 100, 100); camera.updateProjectionMatrix(); controls.update();
    if(pharmacy&&fitCorners.length){
      // Perspective shifts a shallow room toward the bottom of its bounding rectangle.
      // Re-centre the actual projected silhouette, instead of leaving an empty top half.
      const right=new THREE.Vector3().crossVectors(new THREE.Vector3(0,1,0),direction).normalize(),up=new THREE.Vector3().crossVectors(direction,right).normalize();
      for(let i=0;i<3;i++){
        camera.updateMatrixWorld(true);let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
        for(const point of fitCorners){const p=point.clone().project(camera);minX=Math.min(minX,p.x);maxX=Math.max(maxX,p.x);minY=Math.min(minY,p.y);maxY=Math.max(maxY,p.y);}
        const offset=right.clone().multiplyScalar((minX+maxX)/2*distance*Math.tan(halfFov)*camera.aspect).addScaledVector(up,(minY+maxY)/2*distance*Math.tan(halfFov));
        controls.target.add(offset);camera.position.add(offset);
        const fitScale=Math.max((maxX-minX)/1.84,(maxY-minY)/1.84);
        if(Number.isFinite(fitScale)&&fitScale>.2&&fitScale<3){distance*=Math.max(.7,Math.min(1.4,fitScale));camera.position.copy(controls.target).addScaledVector(direction,distance);}
        controls.update();
      }
    }
    requestRender();
  }
  function decoded(url: string): Promise<HTMLImageElement> {
    let existing=decodedImages.get(url);
    if(!existing){
      if(decodedImages.size>=6){const oldest=decodedImages.keys().next().value;if(oldest)decodedImages.delete(oldest);}
      existing=fetch(url,{credentials:'same-origin'}).then(r=>{if(!r.ok)throw Error('照片未加载');return r.blob();}).then(blob=>new Promise<HTMLImageElement>((resolve,reject)=>{
        const source=URL.createObjectURL(blob),picture=new Image();
        picture.onload=()=>{URL.revokeObjectURL(source);resolve(picture);};picture.onerror=()=>{URL.revokeObjectURL(source);reject(Error('照片无法解码'));};picture.src=source;
      }));
      decodedImages.set(url,existing); void existing.catch(()=>{if(decodedImages.get(url)===existing)decodedImages.delete(url);});
    }
    return existing;
  }
  async function addTexture(model: THREE.Group, spec: PackageSpec, imageURL: (url: string) => string, epoch: number) {
    const front = spec.frontTexture; if (!front) return;
    try {
      const bitmap = await decoded(imageURL(front.url));
      if (disposed || epoch !== serial) return;
      const crop = front.bboxPixels || [0, 0, bitmap.width, bitmap.height], width = Math.max(1, crop[2] - crop[0]), height = Math.max(1, crop[3] - crop[1]);
      const scale = Math.min(1, 512 / Math.max(width, height)), image = document.createElement('canvas'); image.width = Math.max(1, Math.round(width * scale)); image.height = Math.max(1, Math.round(height * scale));
      image.getContext('2d')?.drawImage(bitmap, crop[0], crop[1], width, height, 0, 0, image.width, image.height);
      const texture = new THREE.CanvasTexture(image); texture.colorSpace = THREE.SRGBColorSpace; sampleTexture(texture);textures.add(texture);
      model.traverse(object => { if (object instanceof THREE.Mesh) { const materials = Array.isArray(object.material) ? object.material : [object.material]; for (const material of materials) if (material.userData.front_evidence || material.name === 'shelfpilot_front_evidence') { (material as THREE.MeshBasicMaterial).map = texture; (material as THREE.MeshBasicMaterial).color.set('#ffffff'); material.needsUpdate = true; } } });
      requestRender();
    } catch { if(!disposed&&epoch===serial)onError('部分包装照片未能加载，请刷新记录重试。'); }
  }
  async function paintPhotoCabinet(face:THREE.Mesh<THREE.PlaneGeometry,THREE.MeshBasicMaterial>,shelf:NonNullable<NonNullable<SpatialData['scene']>['shelves']>[number],imageURL:(url:string)=>string,epoch:number){
    const panels=shelf.photo_panels||[];
    const images=await Promise.all(panels.map(async p=>{try{return await decoded(imageURL(p.image_url));}catch{return null;}}));
    if(disposed||serial!==epoch)return;
    const picture=document.createElement('canvas'),aspect=shelf.width/shelf.height;
    picture.width=Math.max(1,Math.round(aspect>=1?2048:2048*aspect));picture.height=Math.max(1,Math.round(aspect>=1?2048/aspect:2048));
    const ctx=picture.getContext('2d');if(!ctx)return;
    // Main photo has priority in overlaps. One atlas prevents coplanar flicker and duplicate drug models.
    ctx.globalCompositeOperation='destination-over';
    panels.forEach((p,i)=>{const image=images[i];if(!image)return;const a=p.source_crop,b=p.target_crop;ctx.drawImage(image,a[0]/1000*image.width,a[1]/1000*image.height,(a[2]-a[0])/1000*image.width,(a[3]-a[1])/1000*image.height,b[0]/1000*picture.width,b[1]/1000*picture.height,(b[2]-b[0])/1000*picture.width,(b[3]-b[1])/1000*picture.height);});
    ctx.fillStyle='#e9e6dd';ctx.fillRect(0,0,picture.width,picture.height);ctx.globalCompositeOperation='source-over';
    ctx.fillStyle='#766e5e';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`${Math.max(14,Math.min(picture.width*.075,48))}px sans-serif`;
    for(const [from,to] of shelf.missing_ranges||[])if(to-from>=35)ctx.fillText('未拍到 · 待补拍',picture.width/2,(from+to)/2000*picture.height,picture.width*.9);
    const texture=new THREE.CanvasTexture(picture);texture.colorSpace=THREE.SRGBColorSpace;sampleTexture(texture);textures.add(texture);face.material.map=texture;face.material.color.set('#ffffff');face.material.needsUpdate=true;requestRender();
    if(images.some(i=>!i))onError('部分柜面照片加载失败，请刷新记录重试。');
  }
  function shelfPackage(spec:PackageSpec):THREE.Group {
    const group=new THREE.Group(),{width:w,height:h,depth:d}=spec.dimensions;
    const shape=spec.extra?.displayShape,flat=spec.extra?.displayPose==='flat';
    const body=new THREE.MeshStandardMaterial({color:spec.bodyColor||'#dae0d5',roughness:.8});
    const front=new THREE.MeshBasicMaterial({color:'#dbe3dd',side:THREE.DoubleSide,toneMapped:false});front.userData.front_evidence=true;
    if(shape==='jar'||shape==='bottle'){
      const radius=Math.min(w,d)/2,capH=h*(shape==='jar'?.075:.13);
      const cylinder=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,h-capH,20),body);cylinder.position.y=(h-capH)/2;group.add(cylinder);
      const cap=new THREE.Mesh(new THREE.CylinderGeometry(radius*(shape==='jar'?1.02:.75),radius*(shape==='jar'?1.02:.75),capH,20),new THREE.MeshStandardMaterial({color:shape==='jar'?'#a99464':'#deded4',roughness:.6}));cap.position.y=h-capH/2;group.add(cap);
      const face=new THREE.Mesh(new THREE.PlaneGeometry(w,h-capH),front);face.position.set(0,(h-capH)/2,radius+.001);group.add(face);
    }else{
      const materials=[body,body,flat?front:body,body,flat?body:front,body];
      const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,shape==='pouch'?Math.min(d,.055):d),materials);mesh.position.y=h/2;group.add(mesh);
    }
    return group;
  }
  function addPlacement(placement: SpatialPlacement, imageURL: (url: string) => string, epoch: number) {
    if (!['located', 'estimated'].includes(placement.position_status) || !valid(placement.position_3d)) return;
    const position = vec(placement.photo_display&&valid(placement.photo_position)?placement.photo_position:placement.position_3d), object = new THREE.Group(); object.userData.placementId = placement.id; object.position.copy(position);
    const yaw = Number(placement.rotation_y || 0), approximate = placement.position_status === 'estimated';
    if (approximate && Number.isFinite(yaw)) object.rotation.y = yaw;
    let radius = span * .009;
    if(placement.photo_display&&placement.photo_dimensions){
      const {width,height}=placement.photo_dimensions;
      const hit=new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false,side:THREE.DoubleSide}));
      object.add(hit);radius=Math.max(width,height)*.5;
    }
    if (!placement.photo_display && placement.position_status === 'estimated' && placement.spec && placement.dimensions) {
      const dimensions = placement.dimensions;
      if ([dimensions.width, dimensions.height, dimensions.depth].every(value => Number.isFinite(value) && value > .0001 && value < 10000)) {
        const spec: PackageSpec = {...placement.spec,dimensions:{...dimensions,unit:'display'}};
        const model = spec.extra?.shelfLayout ? shelfPackage(spec) : buildPackageModel(spec); model.position.y = -dimensions.height / 2; object.add(model);
        if(pharmacy)model.traverse(mesh=>{if(mesh instanceof THREE.Mesh){const materials=Array.isArray(mesh.material)?mesh.material:[mesh.material];mesh.castShadow=materials.some(material=>!material.transparent);mesh.receiveShadow=true;}});
        radius = Math.max(dimensions.width, dimensions.height) * .43; void addTexture(model, spec, imageURL, epoch);
      }
    }
    const surface = placement.surface;
    if (surface && Array.isArray(surface.corners) && surface.corners.length === 4 && surface.corners.every(valid) && placement.spec && valid(surface.normal)) {
      const corners = surface.corners.map(vec), width = corners[0].distanceTo(corners[1]), height = corners[0].distanceTo(corners[3]);
      if (width > .0001 && height > .0001 && width < span && height < span) {
        radius = Math.max(width, height) * .45;
        const normal = vec(surface.normal).normalize(), right = corners[1].clone().sub(corners[0]).normalize(), up = new THREE.Vector3().crossVectors(normal, right).normalize();
        if (up.dot(corners[0].clone().sub(corners[3])) < 0) { up.negate(); normal.negate(); }
        const depth = width * .18; // Inferred thickness is explicitly labelled as an approximation in the UI.
        const spec: PackageSpec = { ...placement.spec, dimensions: { width, height, depth, unit: 'display' } };
        try {
          const model = buildPackageModel(spec), orientation = new THREE.Matrix4().makeBasis(right, up, normal);
          model.quaternion.setFromRotationMatrix(orientation);
          const center = valid(surface.center) ? vec(surface.center) : position;
          model.position.copy(center).sub(position).addScaledVector(up, -height / 2).addScaledVector(normal, -depth / 2);
          object.add(model); void addTexture(model, spec, imageURL, epoch);
        } catch { /* Keep a measured-position marker if the surface cannot support the model. */ }
      }
    }
    const markerSpan = pharmacy ? Math.min(span, 6) : span;
    if (!object.children.length) object.add(new THREE.Mesh(new THREE.SphereGeometry(Math.max(markerSpan * .004, radius * .12), 12, 8), new THREE.MeshBasicMaterial({ color: '#f5e6b0' })));
    const halo = new THREE.Mesh(placement.photo_display&&placement.photo_dimensions?new THREE.PlaneGeometry(placement.photo_dimensions.width,placement.photo_dimensions.height):new THREE.SphereGeometry(Math.max(markerSpan * .009, radius), 16, 12), new THREE.MeshBasicMaterial({ color: '#62e4b4', transparent: true, opacity: .09, depthWrite: false }));
    if(placement.photo_display){halo.position.z=.002;halo.userData.photoHighlight=true;}object.add(halo); content.add(object); entries.set(placement.id, { object, position, halo, radius, front: approximate ? new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw)) : null });
    if(placement.shelf_id)cabinets.get(placement.shelf_id)?.packages.push({object,position});
  }
  return {
    setData(data, imageURL) {
      const keepView=cabinetEditing&&!!pharmacy&&!!data?.scene?.pharmacy&&!bounds.isEmpty();
      clear(); bounds.makeEmpty(); const epoch = serial;
      pharmacy = data?.scene?.pharmacy || null;
      if (pharmacy && ![pharmacy.width,pharmacy.depth,pharmacy.height].every(n=>Number.isFinite(n)&&n>0&&n<200)) pharmacy=null;
      renderer.setClearColor(pharmacy ? '#efeee6' : '#122723');
      configureLighting();
      camera.fov=pharmacy?36:48;
      controls.maxPolarAngle = pharmacy ? Math.PI * .485 : Math.PI;
      shelfFront.set(0,0,1);
      if(pharmacy){const occupiedZones=(data?.scene?.shelves||[]).filter(s=>s.layout_status==='positioned').map(s=>s.location?.zone||'unknown');const fittings=buildPharmacyTemplate(pharmacy,textures,{occupiedZones,hideOptional:cabinetEditing||!!pharmacy.manual_count});content.add(fittings);bounds.expandByObject(fittings);}
      const points = data?.scene?.points || [], positions: number[] = [], colors: number[] = [];
      for (const point of points) { if (point.length < 6 || !point.every(Number.isFinite)) continue; positions.push(point[0], point[1], point[2]); colors.push(point[3] / 255, point[4] / 255, point[5] / 255); bounds.expandByPoint(new THREE.Vector3(point[0], point[1], point[2])); }
      for (const shelf of data?.scene?.shelves || []) {
        if (!valid(shelf.origin) || ![shelf.width,shelf.height,shelf.depth].every(value => Number.isFinite(value) && value > 0)) continue;
        const [x,y,z] = shelf.origin, w = shelf.width, h = shelf.height, d = shelf.depth, yaw = Number(shelf.rotation_y || 0);
        const cabinet = new THREE.Group(); cabinet.position.set(x,y,z); cabinet.rotation.y=Number.isFinite(yaw)?yaw:0; content.add(cabinet);
        shelfFront.set(Math.sin(cabinet.rotation.y),0,Math.cos(cabinet.rotation.y));
        const appearance=shelf.appearance;
        const wood = new THREE.MeshStandardMaterial({color:appearance?.body_color||(appearance?.material==='wood'?'#bca17b':pharmacy?'#f2f3f0':'#d2d6c0'),roughness:appearance?.material==='metal'?.38:.68,metalness:appearance?.material==='metal'?.65:.025}), edge = Math.min(w,h)*.016;
        let rail:THREE.MeshStandardMaterial|undefined;
        const beam = (width:number,height:number,depth:number,px:number,py:number,pz:number,material:THREE.Material=wood) => { const geometry=pharmacy?new RoundedBoxGeometry(width,height,depth,1,Math.min(.005,height*.2,depth*.2)):new THREE.BoxGeometry(width,height,depth);const box = new THREE.Mesh(geometry,material); box.position.set(px,py,pz);box.castShadow=!!pharmacy;box.receiveShadow=!!pharmacy;cabinet.add(box); };
        if(shelf.reviewed){
          for(const side of [-1,1]) beam(edge,h,d,side*(w/2+edge/2),h/2,d/2);
          for(const board of shelf.boards||[]){beam(w+edge*2,edge,d,0,board-edge/2,d/2);if(pharmacy)beam(w,.018,.018,0,board-edge*.65,d+.006,rail ||= new THREE.MeshStandardMaterial({color:'#c8cecc',roughness:.38,metalness:.65}));}
          if(pharmacy){
            beam(w+edge*2,edge,d,0,h,d/2); if(appearance?.has_kickplate===true)beam(w+edge*2,.10,d,0,.05,d/2,new THREE.MeshStandardMaterial({color:'#bec2be',roughness:.58,metalness:.2}));
            if(appearance?.has_header_light===true)beam(w+edge*2,.23,.07,0,h+.125,d-.015);
            for(let bay=1;bay<(appearance?.bays||1);bay++)beam(edge,h,d,-w/2+w*bay/(appearance?.bays||1),h/2,d/2);
            const header=pharmacyLabel(shelf.name||'药品陈列',textures,{width:w-.06,height:.18,foreground:'#294a3f',background:'#f2f3f0'});header.position.set(0,h+.13,d+.023);cabinet.add(header);
            if(shelf.coverage_label){const note=pharmacyLabel(shelf.coverage_label,textures,{width:w,height:.10,foreground:'#6e654e',background:'#f5f1e7'});note.position.set(0,h+.29,d+.023);cabinet.add(note);}
            if(appearance?.has_header_light===true)beam(w-.07,.018,.025,0,h-.06,d-.06,new THREE.MeshStandardMaterial({color:'#faf9f2',emissive:'#fff9e9',emissiveIntensity:.15}));
          }
        }
        const face = new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({color:pharmacy?'#e4e7e2':'#c7ceb9',side:THREE.DoubleSide,roughness:.88})); face.position.set(0,h/2,0);face.castShadow=!!pharmacy;face.receiveShadow=!!pharmacy;cabinet.add(face);
        if(pharmacy){
          const boxGeometry=new THREE.BoxGeometry(w+.11,h+.23,d+.07),proxy=new THREE.Mesh(boxGeometry,new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false}));
          proxy.position.set(0,(h+.23)/2,d/2);proxy.userData.cabinetId=shelf.id;proxy.userData.fitIgnore=true;cabinet.add(proxy);
          const outline=new THREE.LineSegments(new THREE.EdgesGeometry(boxGeometry),new THREE.LineBasicMaterial({color:'#508c77',transparent:true,opacity:.45,depthTest:false}));outline.position.copy(proxy.position);outline.visible=false;outline.renderOrder=5;cabinet.add(outline);
          cabinets.set(shelf.id,{id:shelf.id,object:cabinet,proxy,outline,packages:[]});
        }
        cabinet.updateMatrixWorld(true); bounds.expandByObject(cabinet);
        if(shelf.photo_display&&shelf.photo_panels?.length){
          const front=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:'#ebe8df',side:THREE.FrontSide,toneMapped:false}));front.position.set(0,h/2,d+.005);cabinet.add(front);
          void paintPhotoCabinet(front,shelf,imageURL,epoch);
          if(appearance?.material==='glass_door'){
            for(let bay=0;bay<(appearance.bays||1);bay++)beam(.015,h*.09,.023,-w/2+w*(bay+.87)/(appearance.bays||1),h*.48,d+.027,rail ||=new THREE.MeshStandardMaterial({color:'#a9afad',metalness:.7,roughness:.35}));
          }
        }
        const source = imageURL(shelf.image_url);
        if(!shelf.reviewed)void decoded(source).then(bitmap=>{if(disposed||epoch!==serial)return; const picture=document.createElement('canvas');const scale=Math.min(1,2048/Math.max(bitmap.width,bitmap.height));picture.width=Math.round(bitmap.width*scale);picture.height=Math.round(bitmap.height*scale);picture.getContext('2d')?.drawImage(bitmap,0,0,picture.width,picture.height);const texture=new THREE.CanvasTexture(picture);texture.colorSpace=THREE.SRGBColorSpace;sampleTexture(texture);textures.add(texture);face.material.map=texture;face.material.color.set('#ffffff');face.material.needsUpdate=true;requestRender();}).catch(()=>onError('有一张货架照片暂时无法加载，可刷新记录重试。'));
      }
      if (bounds.isEmpty()) return;
      span = Math.max(bounds.getSize(new THREE.Vector3()).length(), .001);
      if(positions.length){const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      content.add(new THREE.Points(geometry, new THREE.PointsMaterial({ vertexColors: true, size: Math.max(span / 900, .00001), sizeAttenuation: true })));}
      let solidCount=0;
      for (const placement of (data?.placements || []).filter(p=>!p.alias&&p.position_3d&&(p.photo_display||solidCount++<200))) addPlacement(data?.geometry_kind==='photo_shelf_approximation'?{...placement,spec:null}:placement, imageURL, epoch);
      fitShadow();
      if(pharmacy){
        // Use the occupied geometry, not empty corners spanning the shop and staging pad.
        content.updateMatrixWorld(true);
        content.traverse(object=>{
          if(!(object instanceof THREE.Mesh)||object instanceof THREE.InstancedMesh||object.userData.fitIgnore)return;
          object.geometry.computeBoundingBox();const box=object.geometry.boundingBox;if(!box)return;
          for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])fitCorners.push(new THREE.Vector3(x,y,z).applyMatrix4(object.matrixWorld));
        });
      }
      if(!keepView)frameView();else{autoFrame=false;camera.near=Math.max(span/10000,.00001);camera.far=Math.max(span*100,100);camera.updateProjectionMatrix();requestRender();}
      const calibrated = !pharmacy && data?.scene?.cameras?.[0];
      if (calibrated) { try { const pose = normalizeMeasuredCamera(calibrated); camera.position.copy(vec(pose.center)); camera.up.copy(vec(pose.down).negate()); controls.target.copy(camera.position).addScaledVector(vec(pose.forward), span * .45); controls.update(); autoFrame=false; } catch { /* Bounds view remains usable for maps without camera extrinsics. */ } }
      textures.forEach(sampleTexture);paint();paintCabinets();paintGlass();
    },
    select(id, focus = false) { selected = id; paint(); const entry = id ? entries.get(id) : null; if (entry && focus) { autoFrame=false; const direction = entry.front ? entry.front.clone().add(new THREE.Vector3(0,.18,0)).normalize() : camera.position.clone().sub(controls.target).normalize(); controls.target.copy(entry.position); camera.position.copy(entry.position).addScaledVector(direction, Math.max(entry.radius * 7, pharmacy ? 1.3 : span * .08)); controls.update(); } },
    highlight(ids) { highlights = new Set(ids); paint(); },
    setCabinetEditing(enabled,onMove,onCabinetSelect){if(enabled!==cabinetEditing){finishDrag(false);start=null;controls.enabled=true;canvas.style.cursor='';}cabinetEditing=enabled;cabinetMove=onMove;cabinetSelect=onCabinetSelect;paintCabinets();},
    selectCabinet(id){selectedCabinet=id;paintCabinets();},
    view(preset){finishDrag(false);currentView=preset;frameView();},
    setQuality(value){if(value!=='clear'&&value!=='smooth')return;quality=value;applyShadowPolicy();textures.forEach(sampleTexture);applyResolution();},
    setGlassVisible(visible){glassVisible=visible;paintGlass();},
    fit,
    dispose() { disposed = true;cancelAnimationFrame(frame);clearTimeout(settleTimer);observer.disconnect();clear();decodedImages.clear();scene.environment=null;environment?.dispose();environment=null;releaseShadow();controls.removeEventListener('start',stopAutoFrame);controls.removeEventListener('end',endInteraction);controls.dispose();renderer.renderLists.dispose();renderer.dispose();canvas.style.cursor='';canvas.removeEventListener('pointerdown', down,true);canvas.removeEventListener('pointermove',move,true);canvas.removeEventListener('pointerup', up,true);canvas.removeEventListener('pointercancel',cancel);canvas.removeEventListener('lostpointercapture',cancel);canvas.removeEventListener('webglcontextlost', contextLost); },
  };
}
