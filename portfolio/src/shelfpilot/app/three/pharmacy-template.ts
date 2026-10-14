import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/** A reusable shop interior. These fittings are illustrations, never scanned inventory. */
export type PharmacyTemplate = {
  schema_version: 'pharmacy-template/1';
  width: number; depth: number; height: number;
  name?: string;
  manual_count?: number;
  origin?: readonly [number, number, number];
  entrance?: readonly [number, number, number];
  positioned_count?: number; pending_count?: number;
  staging?: { min: readonly [number, number, number]; max: readonly [number, number, number] } | null;
};

type LabelOptions = { foreground?: string; background?: string; subtitle?: string; width?: number; height?: number; wrap?: boolean; fontWeight?: number };

/** Canvas lettering stays local and adds no network or AI dependency. */
export function pharmacyLabel(text: string, textures: Set<THREE.Texture>, options: LabelOptions = {}) {
  const width = Math.max(.05, options.width || 3), height = Math.max(.04, options.height || .58);
  const letters=Array.from(text),wrapped=options.wrap&&letters.length>12;
  const lines=wrapped?[letters.slice(0,Math.ceil(letters.length/2)).join(''),letters.slice(Math.ceil(letters.length/2)).join('')]:[text];
  // Match the physical plaque's aspect ratio. A fixed canvas used to stretch Chinese
  // lettering horizontally on wide fasciae, and squeeze subtitles on narrow signs.
  const rasterHeight = options.subtitle || wrapped ? 320 : 192;
  const rasterScale = Math.min(1, 2048 / (rasterHeight * width / height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(64, Math.round(rasterHeight * width / height * rasterScale));
  canvas.height = Math.max(32, Math.round(rasterHeight * rasterScale));
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = options.background || '#174b3e'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  const font = (size: number, weight: number) => `${weight} ${size}px "Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", sans-serif`;
  function lettering(line: string, centerY: number, availableHeight: number, weight: number, color: string) {
    let size = availableHeight;
    ctx.font = font(size, weight);
    const initial = ctx.measureText(line);
    size *= Math.min(1, canvas.width * .91 / Math.max(1, initial.width), availableHeight / Math.max(1, initial.actualBoundingBoxAscent + initial.actualBoundingBoxDescent));
    ctx.font = font(size, weight); ctx.fillStyle = color;
    const measured = ctx.measureText(line);
    ctx.fillText(line, canvas.width / 2, centerY + (measured.actualBoundingBoxAscent - measured.actualBoundingBoxDescent) / 2);
  }
  const mainHeight = canvas.height * (options.subtitle ? .70 : 1), lineHeight = mainHeight / lines.length;
  lines.forEach((line, index) => lettering(line, lineHeight * (index + .5), lineHeight * .79, options.fontWeight || 600, options.foreground || '#fff9e9'));
  if (options.subtitle) lettering(options.subtitle, canvas.height * .84, canvas.height * .18, 500, '#e0e9dc');
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true; texture.minFilter = THREE.LinearMipmapLinearFilter; texture.magFilter = THREE.LinearFilter;
  // The renderer applies device-appropriate anisotropy alongside original-photo textures.
  texture.userData.pharmacyLabel = true; textures.add(texture);
  const transparent = options.background === 'transparent';
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, toneMapped:false, transparent, depthWrite:!transparent, alphaTest:transparent ? .02 : 0 }));
  return plane;
}

export function buildPharmacyTemplate(layout: PharmacyTemplate, textures: Set<THREE.Texture>, options: {occupiedZones?: string[];hideOptional?:boolean} = {}): THREE.Group {
  const group = new THREE.Group(); group.name = 'pharmacy-template-fittings';
  group.userData.templateProp = true;
  const optionalFittings=new THREE.Group();optionalFittings.name='optional-template-fittings';optionalFittings.userData.optionalFitting=true;optionalFittings.visible=!options.hideOptional;group.add(optionalFittings);
  // The enclosure, its framing and attached signage share one visibility switch.
  // Freestanding furnishings and display-cabinet glass stay independent.
  const wallGlass = new THREE.Group(); wallGlass.name = 'pharmacy-wall-glass'; wallGlass.userData.wallGlass = true; group.add(wallGlass);
  const w = Math.max(4, layout.width), d = Math.max(4, layout.depth), h = Math.max(2.8, layout.height), front = d / 2, rear = -d / 2;
  const cream = new THREE.MeshStandardMaterial({ color: '#f0f0ec', roughness: .76 });
  const porcelain = new THREE.MeshStandardMaterial({ color: '#fafaf8', roughness: .44 });
  const emerald = new THREE.MeshStandardMaterial({ color: '#24574c', roughness: .66 });
  const dark = new THREE.MeshStandardMaterial({ color: '#414745', roughness: .7 });
  const mint = new THREE.MeshStandardMaterial({ color: '#d1d8d2', roughness: .8 });
  const brushedMetal = new THREE.MeshStandardMaterial({ color: '#bfc3c1', roughness: .46, metalness: .66 });
  // Subtle, deterministic oak grain is shared by the counter inset and waiting seat.
  // Keeping it local avoids external assets and registers it with the normal disposal set.
  const woodCanvas = document.createElement('canvas'); woodCanvas.width=256; woodCanvas.height=128;
  const woodContext=woodCanvas.getContext('2d')!, grainImage=woodContext.createImageData(256,128);
  for(let y=0;y<128;y++)for(let x=0;x<256;x++){
    const grain=Math.sin(y*.57+Math.sin(x*.025)*1.25)*2.5+Math.sin(y*2.7+x*.011)*.85;
    const noise=Math.sin(x*12.9898+y*78.233)*43758.5453, variation=grain+(noise-Math.floor(noise)-.5)*2.5, at=(y*256+x)*4;
    grainImage.data[at]=203+variation;grainImage.data[at+1]=184+variation;grainImage.data[at+2]=155+variation;grainImage.data[at+3]=255;
  }
  woodContext.putImageData(grainImage,0,0);
  const woodTexture=new THREE.CanvasTexture(woodCanvas);woodTexture.colorSpace=THREE.SRGBColorSpace;woodTexture.wrapS=woodTexture.wrapT=THREE.RepeatWrapping;textures.add(woodTexture);
  const wood = new THREE.MeshStandardMaterial({ color:'#ffffff',map:woodTexture,roughness:.73 });
  const lightStrip = new THREE.MeshStandardMaterial({color:'#faf9ef',emissive:'#fff8e9',emissiveIntensity:.45,roughness:.55});
  const aluminum = new THREE.MeshStandardMaterial({color:'#bdc2c0',roughness:.42,metalness:.65});
  const glass = new THREE.MeshStandardMaterial({ color: '#b2ddd9', transparent: true, opacity: .16, roughness: .18, metalness: .05, depthWrite: false, side: THREE.DoubleSide });
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  function box(width: number, height: number, depth: number, x: number, y: number, z: number, material: THREE.Material = cream) {
    const mesh = new THREE.Mesh(boxGeometry, material); mesh.scale.set(width, height, depth); mesh.position.set(x, y, z); group.add(mesh); return mesh;
  }
  function rounded(width:number,height:number,depth:number,x:number,y:number,z:number,material:THREE.Material=cream,radius=.008){const mesh=new THREE.Mesh(new RoundedBoxGeometry(width,height,depth,2,Math.min(radius,height*.45,depth*.45)),material);mesh.position.set(x,y,z);group.add(mesh);return mesh;}
  function wallBox(width:number,height:number,depth:number,x:number,y:number,z:number,material:THREE.Material=aluminum){const mesh=box(width,height,depth,x,y,z,material);wallGlass.add(mesh);return mesh;}
  function label(text: string, x: number, y: number, z: number, width: number, height: number, options: LabelOptions = {}) {
    const mesh = pharmacyLabel(text, textures, { ...options, width, height }); mesh.position.set(x, y, z); group.add(mesh); return mesh;
  }
  // A single transparent pane per wall avoids the doubled tint of transparent boxes.
  // The shared highlight is an illustration of reflected light, not an environment map.
  const reflectionCanvas = document.createElement('canvas'); reflectionCanvas.width = 256; reflectionCanvas.height = 256;
  const reflectionContext = reflectionCanvas.getContext('2d')!;
  const reflectionGradient = reflectionContext.createLinearGradient(0, 15, 256, 210);
  for (const [at, alpha] of [[0,0],[.14,0],[.26,.13],[.37,.035],[.46,0],[.65,0],[.77,.08],[.87,0],[1,0]]) reflectionGradient.addColorStop(at, `rgba(243,255,252,${alpha})`);
  reflectionContext.fillStyle = reflectionGradient; reflectionContext.fillRect(0,0,256,256);
  const reflectionTexture = new THREE.CanvasTexture(reflectionCanvas); reflectionTexture.colorSpace = THREE.SRGBColorSpace; textures.add(reflectionTexture);
  const wallPaneMaterial = new THREE.MeshStandardMaterial({color:'#90c8bd',transparent:true,opacity:.105,roughness:.16,metalness:.08,depthWrite:false,side:THREE.DoubleSide,forceSinglePass:true});
  const wallReflectionMaterial = new THREE.MeshBasicMaterial({map:reflectionTexture,transparent:true,opacity:.8,depthWrite:false,side:THREE.DoubleSide,forceSinglePass:true,toneMapped:false});
  const glassEdgeMaterial = new THREE.LineBasicMaterial({color:'#78b5a7',transparent:true,opacity:.38,depthWrite:false});
  const glassPlaneGeometry = new THREE.PlaneGeometry(1,1), glassEdgeGeometry = new THREE.EdgesGeometry(glassPlaneGeometry);
  function wallPane(width:number,height:number,x:number,y:number,z:number,yaw=0) {
    const pane = new THREE.Group(); pane.position.set(x,y,z); pane.rotation.y=yaw; wallGlass.add(pane);
    const surface = new THREE.Mesh(glassPlaneGeometry,wallPaneMaterial); surface.scale.set(width,height,1); pane.add(surface);
    const reflection = new THREE.Mesh(glassPlaneGeometry,wallReflectionMaterial); reflection.scale.set(width,height,1); reflection.position.z=.003; pane.add(reflection);
    const edge = new THREE.LineSegments(glassEdgeGeometry,glassEdgeMaterial); edge.scale.set(width,height,1); edge.position.z=.004; pane.add(edge);
  }
  // A thin neutral floor slab replaces the miniature-style green display plinth.
  // Cached scene lighting supplies actual contact shadows; there are no tinted blobs.
  const slab=rounded(w+.32,.08,d+.71,0,-.032,.12,new THREE.MeshStandardMaterial({color:'#bfc1bc',roughness:.9}),.006);slab.userData.floorSurface=true;
  const floor=box(w,.028,d,0,.015,0,new THREE.MeshStandardMaterial({color:'#b9bcb8',roughness:.94}));floor.userData.floorSurface=true;
  const nx = Math.min(32, Math.max(6, Math.ceil(w / .72))), nz = Math.min(36, Math.max(6, Math.ceil(d / .72)));
  const tiles = new THREE.InstancedMesh(boxGeometry, porcelain, nx * nz), tileTransform = new THREE.Object3D();
  for (let iz = 0; iz < nz; iz++) for (let ix = 0; ix < nx; ix++) {
    tileTransform.position.set(-w / 2 + (ix + .5) * w / nx, .037, rear + (iz + .5) * d / nz);
    tileTransform.scale.set(w / nx - .004, .016, d / nz - .004); tileTransform.updateMatrix(); tiles.setMatrixAt(iz * nx + ix, tileTransform.matrix);
    const shade=227+(ix*13+iz*7)%5;
    tiles.setColorAt(iz*nx+ix,new THREE.Color(`rgb(${shade+2},${shade+1},${shade-1})`));
  }
  tiles.userData.floorSurface=true;
  group.add(tiles);

  // Full-height glass replaces the solid rear and low side walls, on the same footprint.
  // Hide the complete enclosure together, including mullions and wall-mounted fittings.
  const wallHeight = h-.16, wallY = .10+wallHeight/2;
  wallPane(w+.015,wallHeight,0,wallY,rear-.065);
  wallBox(w+.14,.05,.08,0,h,rear-.09);
  wallBox(w-.18,.025,.025,0,h-.13,rear+.009,lightStrip);
  wallBox(w+.06,.045,.06,0,.09,rear-.065);
  const rearSections = Math.min(5, Math.max(2, Math.ceil(w/2.7)));
  for(let i=1;i<rearSections;i++)wallBox(.035,wallHeight,.045,-w/2+i*w/rearSections,wallY,rear-.065);
  for (const side of [-1, 1]) {
    wallPane(d-.08,wallHeight,side*(w/2+.05),wallY,0,-side*Math.PI/2);
    wallBox(.065,h,.065,side*(w/2+.05),h/2,rear);
    wallBox(.07,h,.07,side*(w/2+.05),h/2,front);
    wallBox(.06,.045,d,side*(w/2+.05),.09,0);
    wallBox(.06,.045,d,side*(w/2+.05),h-.015,0);
    const sideSections = Math.min(6,Math.max(2,Math.ceil(d/2.8)));
    for(let i=1;i<sideSections;i++)wallBox(.045,wallHeight,.035,side*(w/2+.05),wallY,rear+i*d/sideSections);
  }

  // A pharmacy shopfront provides the visual identity; the open doorway preserves sightlines.
  const fasciaHeight = .64, fasciaY = h + .06;
  rounded(w+.45,fasciaHeight,.27,0,fasciaY,front+.025,emerald,.006);
  rounded(w+.47,.035,.30,0,fasciaY+fasciaHeight/2+.0175,front+.025,aluminum,.004);
  box(w+.47,.025,.29,0,fasciaY-fasciaHeight/2,front+.08,brushedMetal);
  // Narrow metal inlays and a recessed border give the sign a manufactured edge.
  for(const side of [-1,1]) {
    box(.009,fasciaHeight-.075,.009,side*(w/2+.155),fasciaY,front+.166,brushedMetal);
    box(.034,fasciaHeight+.015,.04,side*(w/2+.21),fasciaY,front+.145,dark);
  }
  box(w+.28,.009,.009,0,fasciaY+fasciaHeight/2-.048,front+.166,brushedMetal);
  box(w+.27,.018,.025,0,fasciaY-fasciaHeight/2+.046,front+.169,dark);
  const longName=Array.from(layout.name||'').length>12;
  label(layout.name?.trim() || '药房', 0, fasciaY + (longName?.02:.06), front + .177, Math.min(w * .55, 5.2),longName?.50:.43, {wrap:true,fontWeight:700,background:'transparent'});
  if(!longName)label('P H A R M A C Y',0,fasciaY-.205,front+.177,Math.min(w*.28,2.7),.096,{foreground:'#e4e9e4',fontWeight:500,background:'transparent'});
  const crossX = -Math.min(w * .33, 3.1), crossY = fasciaY + .01;
  const crossMat = new THREE.MeshBasicMaterial({ color: '#e7f6cf',toneMapped:false });
  rounded(.59,.59,.045,crossX,crossY,front+.172,brushedMetal,.018);
  rounded(.55,.55,.045,crossX,crossY,front+.191,new THREE.MeshStandardMaterial({color:'#326454',roughness:.5}),.014);
  box(.12, .38, .045, crossX, crossY, front + .229, crossMat); box(.38, .12, .045, crossX, crossY, front + .229, crossMat);
  const sideSign=new THREE.Group();sideSign.position.set(w/2+.20,h-.63,front-.17);sideSign.rotation.y=Math.PI/2;wallGlass.add(sideSign);
  const signDisk=new THREE.Mesh(new THREE.CylinderGeometry(.31,.31,.075,24),cream);signDisk.rotation.x=Math.PI/2;sideSign.add(signDisk);
  const signInset=new THREE.Mesh(new THREE.CylinderGeometry(.274,.274,.012,24),mint);signInset.rotation.x=Math.PI/2;signInset.position.z=.042;sideSign.add(signInset);
  for(const size of [[.105,.39],[.39,.105]]){const mark=new THREE.Mesh(new THREE.BoxGeometry(size[0],size[1],.018),emerald);mark.position.z=.047;sideSign.add(mark);}
  const signArm=new THREE.Mesh(new THREE.BoxGeometry(.035,.035,.32),brushedMetal);signArm.position.set(0,.27,-.14);sideSign.add(signArm);
  // A slim timber-lined canopy, outside the shop, leaves the interior unobstructed.
  wallGlass.add(rounded(w+.34,.06,.55,0,h-.325,front+.36,aluminum,.006));
  wallBox(w+.18,.018,.44,0,h-.365,front+.34,cream);
  wallBox(w+.21,.04,.025,0,h-.34,front+.65,aluminum);
  wallBox(w-.12,.016,.022,0,h-.379,front+.53,lightStrip);
  const doorWidth = Math.min(2, w * .25), windowWidth = Math.max(.7, (w - doorWidth) / 2);
  const frontGlassHeight = h-.52, frontGlassY=.12+frontGlassHeight/2;
  for (const side of [-1, 1]) {
    const x = side * (doorWidth / 2 + windowWidth / 2);
    wallPane(windowWidth-.10,frontGlassHeight,x,frontGlassY,front+.035);
    wallBox(windowWidth,.045,.06,x,h-.39,front+.035);
    wallBox(windowWidth,.045,.085,x,.09,front+.035);
    wallBox(.028,frontGlassHeight,.05,x,frontGlassY,front+.035);
    wallBox(.055,h-.38,.065,side*doorWidth/2,(h-.38)/2,front+.035);
    wallBox(.018,h-.45,.013,side*(doorWidth/2-.022),(h-.38)/2,front+.075);
  }
  box(doorWidth+.2,.018,.80,0,.073,front-.16,dark).userData.floorSurface=true;
  box(doorWidth+.17,.016,.065,0,.063,front+.265,brushedMetal).userData.floorSurface=true;
  const welcome = label('欢迎光临', 0, .088, front - .14, doorWidth * .72, .28, { background:'transparent',foreground:'#e6e8e1' }); welcome.rotation.x = -Math.PI / 2;
  const backLabel = label('健康生活 · 专业守护', 0, h - .26, rear + .005, Math.min(w * .56, 4.6), .34, { foreground: '#16624e', background: '#f4f0df' });
  backLabel.userData.templateProp = true; wallGlass.add(backLabel);

  // Empty, labelled fittings make the reusable template recognisable without inventing stock.
  // An observed zone always wins; we never insert these among real scanned cabinets.
  const occupied=new Set(options.occupiedZones||[]);
  const cabinetMaterial=new THREE.MeshStandardMaterial({color:'#f1f2ef',roughness:.76});
  const cabinetBack=new THREE.MeshStandardMaterial({color:'#e1e4df',roughness:.88});
  function emptyCabinet(x:number,z:number,width:number,yaw:number,glazed:boolean){
    const cabinet=new THREE.Group();cabinet.name='empty-template-cabinet';cabinet.userData.templateProp=true;cabinet.position.set(x,0,z);cabinet.rotation.y=yaw;optionalFittings.add(cabinet);
    const height=2.3,depth=.52;
    function piece(sx:number,sy:number,sz:number,px:number,py:number,pz:number,material:THREE.Material=cabinetMaterial){const mesh=new THREE.Mesh(boxGeometry,material);mesh.scale.set(sx,sy,sz);mesh.position.set(px,py,pz);cabinet.add(mesh);}
    piece(width,height,.075,0,height/2,0,cabinetBack);
    for(const side of [-1,1])piece(.055,height,depth,side*width/2,height/2,depth/2);
    for(const y of [.1,.62,1.14,1.66,2.25]){
      piece(width,.04,depth,0,y,depth/2);
      piece(width-.03,.025,.018,0,y-.009,depth+.008,aluminum);
    }
    piece(width+.025,.045,depth+.025,0,height-.006,depth/2,cabinetMaterial);
    piece(width,.36,depth,0,.22,depth/2);
    piece(width-.09,.10,depth-.04,0,.055,depth/2,aluminum);
    piece(width-.10,.025,.025,0,height-.08,depth-.025,lightStrip);
    for(const dx of [-width*.23,width*.23])piece(width*.39,.25,.026,dx,.27,depth+.015,cream);
    for(const dx of [-width*.16,width*.16])piece(.15,.018,.022,dx,.30,depth+.033,brushedMetal);
    const heading=pharmacyLabel('模板柜 · 待补照片',textures,{background:'#6d7b74',width:width+.06,height:.21});heading.position.set(0,height+.12,depth+.005);cabinet.add(heading);
    const note=pharmacyLabel(glazed?'处方玻璃柜 · 空柜示意':'陈列柜 · 空柜示意',textures,{background:'#a5b9ad',foreground:'#355448',width:width*.86,height:.2});note.position.set(0,1.42,.06);cabinet.add(note);
    if(glazed){
      piece(width-.06,height-.36,.022,0,height/2+.1,depth+.008,glass);
      for(const dx of [-.07,.07])piece(.028,.25,.035,dx,1.12,depth+.035,dark);
      piece(.022,height-.36,.024,0,height/2+.1,depth+.029,mint);
      for(const side of [-1,1])piece(.022,height-.36,.024,side*(width/2-.042),height/2+.1,depth+.029,aluminum);
    }
  }
  if(!occupied.has('back')){
    const run=Math.max(2,w-2.8),count=Math.min(5,Math.max(2,Math.floor(run/1.7))),cw=(run-.10*(count-1))/count;
    for(let i=0;i<count;i++)emptyCabinet(-run/2+cw/2+i*(cw+.10),rear+.18,cw,0,i>=count/2);
  }
  for(const side of [-1,1])if(!occupied.has(side===-1?'left':'right')){
    const run=Math.max(2,d-4.2),count=Math.min(4,Math.max(2,Math.floor(run/1.9))),cw=(run-.10*(count-1))/count;
    for(let i=0;i<count;i++)emptyCabinet(side*(w/2-.18),rear+1.35+cw/2+i*(cw+.10),cw,side===-1?Math.PI/2:-Math.PI/2,true);
  }
  // A low consultation table occupies only the otherwise unused central template aisle.
  if(!occupied.has('island')&&w>=7&&d>=8){
    const tableZ=-.4;optionalFittings.add(rounded(1.5,.05,.92,0,.9575,tableZ,wood,.006));
    optionalFittings.add(box(1.25,.78,.64,0,.49,tableZ,cream));
    optionalFittings.add(label('健康咨询',0,.62,tableZ+.328,1.1,.25,{background:'#f4f0df',foreground:'#16624e'}));
    // Leaflets have no product names and cannot be selected or searched.
    optionalFittings.add(box(.35,.025,.26,-.25,1.003,tableZ+.10,mint),box(.30,.02,.22,-.20,1.024,tableZ+.12,porcelain));
    const tableNote=label('模板服务区',.31,1.12,tableZ+.03,.56,.14,{background:'#f4f0df',foreground:'#526c5f'});tableNote.rotation.x=-.15;optionalFittings.add(tableNote);
  }

  // Service furniture sits in the reserved entrance area, away from the scanned cabinets.
  const counterWidth = Math.min(2.15, w * .27), counterX = w / 2 - counterWidth / 2 - .28, counterZ = front - .83;
  rounded(counterWidth,.96,.69,counterX,.53,counterZ,cream,.009);
  rounded(counterWidth+.10,.095,.82,counterX,1.055,counterZ,porcelain,.007);
  box(counterWidth+.02,.014,.019,counterX,1.007,counterZ+.389,brushedMetal);
  box(counterWidth-.14,.055,.045,counterX,.11,counterZ+.345,dark);
  box(counterWidth-.20,.69,.018,counterX,.54,counterZ+.353,wood);
  rounded(Math.min(1.3,counterWidth*.72),.32,.016,counterX,.63,counterZ+.375,cream,.004);
  label('服务台',counterX,.65,counterZ+.386,Math.min(1.2,counterWidth*.68),.22,{background:'transparent',foreground:'#345b50'});
  // Register and card terminal are abstract fittings, with no invented medicine information.
  box(.23, .04, .20, counterX + .32, 1.125, counterZ, dark);
  box(.045, .21, .045, counterX + .32, 1.22, counterZ, dark);
  const monitor = box(.38, .26, .035, counterX + .32, 1.37, counterZ, dark); monitor.rotation.x = -.12;
  const screen = box(.32, .205, .006, counterX + .32, 1.37, counterZ + .022, new THREE.MeshBasicMaterial({ color: '#a5d8c3' })); screen.rotation.x = -.12;
  box(.22, .045, .16, counterX - .34, 1.13, counterZ + .1, dark);
  label('咨询 · 取药', counterX - .31, 1.30, counterZ + .10, .42, .15, { background: '#fafaf1', foreground: '#16624e' });

  // A little waiting bench and greenery lend scale without inventing another cabinet.
  const benchX = -w / 2 + 1.05, benchZ = front - .83, benchWidth = Math.min(1.55, w * .2);
  rounded(benchWidth,.045,.48,benchX,.5125,benchZ,wood,.005);
  rounded(benchWidth,.28,.035,benchX,.73,benchZ-.22,wood,.005);
  for (const dx of [-benchWidth*.34,benchWidth*.34]) {
    for(const dz of [-.17,.17])box(.04,.43,.04,benchX+dx,.26,benchZ+dz,aluminum);
    box(.04,.70,.04,benchX+dx,.42,benchZ-.22,aluminum);
  }
  const plantX = -w / 2 + .40, plantZ = front - 1.56;
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(.19,.145,.34,24),cream);pot.position.set(plantX,.22,plantZ);group.add(pot);
  const soilMaterial=new THREE.MeshStandardMaterial({color:'#51473b',roughness:1});
  const soil=new THREE.Mesh(new THREE.CylinderGeometry(.173,.173,.012,24),soilMaterial);soil.position.set(plantX,.386,plantZ);group.add(soil);
  const stemMaterial=new THREE.MeshStandardMaterial({color:'#657750',roughness:.94});
  const leafShape=new THREE.Shape();leafShape.moveTo(0,0);leafShape.bezierCurveTo(-.10,.09,-.095,.31,0,.40);leafShape.bezierCurveTo(.09,.31,.10,.09,0,0);
  const leafGeo=new THREE.ShapeGeometry(leafShape,7),leafPositions=leafGeo.getAttribute('position');
  for(let i=0;i<leafPositions.count;i++)leafPositions.setZ(i,Math.sin(leafPositions.getY(i)/.4*Math.PI)*.029);
  leafGeo.computeVertexNormals();
  const leafMaterials=['#456948','#57774d','#3f6146'].map(color=>new THREE.MeshStandardMaterial({color,roughness:.68,side:THREE.DoubleSide}));
  const stemGeometry=new THREE.CylinderGeometry(.006,.008,1,5),stemStart=new THREE.Vector3(plantX,.38,plantZ),up=new THREE.Vector3(0,1,0);
  for(let i=0;i<8;i++){
    const angle=i*2.4,base=new THREE.Vector3(plantX+Math.sin(angle)*.095,.46+(i%4)*.105,plantZ+Math.cos(angle)*.095),direction=base.clone().sub(stemStart);
    const stem=new THREE.Mesh(stemGeometry,stemMaterial);stem.scale.y=direction.length();stem.position.copy(stemStart).add(base).multiplyScalar(.5);stem.quaternion.setFromUnitVectors(up,direction.normalize());group.add(stem);
    const leaf=new THREE.Mesh(leafGeo,leafMaterials[i%leafMaterials.length]);leaf.position.copy(base);leaf.rotation.set(.4+(i%3)*.13,angle,-.2);leaf.scale.setScalar(.8+(i%3)*.1);group.add(leaf);
  }

  // Unconfirmed cabinet groups live on a visibly separate work pad, never in an invented aisle.
  if (layout.staging) {
    const { min, max } = layout.staging, sw = max[0] - min[0], sd = max[2] - min[2];
    if ([sw, sd].every(n => Number.isFinite(n) && n > 0 && n < 200)) {
      const sx = (min[0] + max[0]) / 2, sz = (min[2] + max[2]) / 2;
      rounded(sw+.42,.085,sd+.46,sx,-.005,sz,new THREE.MeshStandardMaterial({color:'#d9dcd6',roughness:.92}),.005).userData.floorSurface=true;
      box(sw+.18,.014,.022,sx,.052,max[2]+.13,brushedMetal).userData.floorSurface=true;
      label('待确认位置',sx,2.78,min[2]-.12,Math.min(sw,3.2),.48,{background:'#696f69',subtitle:'照片不足，未摆入店内'});
    }
  }
  // Natural scene shadows are cached by the renderer. Glass and lettering never cast
  // rectangular opaque shadows; slab and tiles only receive furniture/cabinet shadows.
  group.traverse(object=>{
    if(!(object instanceof THREE.Mesh))return;
    const materials=Array.isArray(object.material)?object.material:[object.material];
    const opaqueSurface=materials.every(material=>!material.transparent&&material instanceof THREE.MeshStandardMaterial);
    object.castShadow=opaqueSurface&&!object.userData.floorSurface&&!materials.includes(lightStrip);
    object.receiveShadow=opaqueSurface;
  });
  return group;
}
