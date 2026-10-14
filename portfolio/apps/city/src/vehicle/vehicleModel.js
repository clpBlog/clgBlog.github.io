// Extracted from intelligent_vehicle/src/vehicle.js; original geometry and materials preserved.
import * as T from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { addIndustrialDetails } from './industrial.js'
import { disposeObjects } from './resources.js'
import { createCargoFurniture } from './cargoFurniture.js'
import { createCargoPhoto, sizeCargoPhoto } from './cargoPhoto.js'
import { loadCargoGeneratedModel, sizeGeneratedCargo } from './cargoGeneratedModel.js'
import { cargoLoadingPose } from './cargoPreview.ts'
export function createVehicleModel(renderer) {
 const scene = new T.Group()
 function surface(kind){const c=document.createElement('canvas');c.width=c.height=256;const ctx=c.getContext('2d');ctx.fillStyle=kind==='wood'?'#baa07d':'#bdbdbd';ctx.fillRect(0,0,256,256);let seed=7241;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};if(kind==='fabric'){for(let y=0;y<256;y+=2)for(let x=0;x<256;x+=2){const g=Math.floor(125+rand()*105);ctx.fillStyle=`rgb(${g},${g},${g})`;ctx.fillRect(x,y,1,y%4?2:1)}}else{for(let i=0;i<900;i++){ctx.strokeStyle=kind==='wood'?`rgba(55,30,10,${rand()*.1})`:`rgba(35,40,45,${rand()*.12})`;ctx.beginPath();const x=rand()*256;ctx.moveTo(x,0);ctx.bezierCurveTo(x+rand()*12,80,x-rand()*12,175,x+rand()*9,256);ctx.stroke()}}const tex=new T.CanvasTexture(c);tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.repeat.set(kind==='fabric'?5:2,kind==='fabric'?5:2);tex.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),8);return tex}
 const weave=surface('fabric'),brush=surface('metal'),grain=surface('wood');grain.colorSpace=T.SRGBColorSpace
 const mat=(color,metalness=0,roughness=.6)=>new T.MeshStandardMaterial({color,metalness,roughness})
 const m={body:mat('#f3f1ec',.35,.32),steel:mat('#9da8b0',.8,.29),dark:mat('#273038',.45,.45),rubber:mat('#151b21',0,.9),teal:mat('#087f86',.35,.4),wine:mat('#770a2d',.3,.4),amber:mat('#f9c55c',.3),glass:mat('#25434f',.7,.19),floor:mat('#56636e',.7,.5),pad:mat('#d3dcdf',0,.95)}
 m.body=new T.MeshPhysicalMaterial({color:'#75828b',metalness:.78,roughness:.23,clearcoat:.65,clearcoatRoughness:.17});m.steel.bumpMap=brush;m.steel.bumpScale=.003;m.floor.bumpMap=brush;m.floor.bumpScale=.004;m.floor.color.set('#303c46');m.glass=new T.MeshPhysicalMaterial({color:'#0c1620',metalness:.25,roughness:.07,clearcoat:1});m.rubber.bumpMap=weave;m.rubber.bumpScale=.004
 function box(parent,w,h,d,x,y,z,material,r=0){const o=new T.Mesh(r?new RoundedBoxGeometry(w,h,d,2,r):new T.BoxGeometry(w,h,d),material);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o}
 function cyl(parent,r,len,x,y,z,material,axis='z'){const o=new T.Mesh(new T.CylinderGeometry(r,r,len,32),material);if(axis==='z')o.rotation.x=Math.PI/2;else if(axis==='x')o.rotation.z=Math.PI/2;o.position.set(x,y,z);o.castShadow=true;parent.add(o);return o}
 function textPlane(parent,lines,w,h,x,y,z,rotation=0){const c=document.createElement('canvas');c.width=1024;c.height=512;const ctx=c.getContext('2d');ctx.fillStyle='#f3f1ec';ctx.fillRect(0,0,1024,512);ctx.fillStyle='#790e32';ctx.font='bold 158px Arial';ctx.fillText(lines[0],55,205,914);ctx.fillStyle='#087c86';ctx.font='46px Arial';ctx.fillText(lines[1],58,308,908);ctx.font='28px Arial';ctx.fillText('CONCEPT VEHICLE / waste_go',58,401,908);const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;const o=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshStandardMaterial({map:texture,roughness:.5}));o.position.set(x,y,z);o.rotation.y=rotation;parent.add(o);return o}
 function sofa(parent,x,y,z,color){const g=new T.Group();g.position.set(x,y,z);parent.add(g);const fabric=new T.MeshPhysicalMaterial({color,roughness:.92,sheen:1,sheenColor:new T.Color('#afbbb9'),sheenRoughness:.9,bumpMap:weave,bumpScale:.018});const seam=mat(color,0,1);seam.color.multiplyScalar(.7);box(g,1.85,.23,.8,0,.24,0,fabric,.06);box(g,1.85,.65,.17,0,.6,-.34,fabric,.065);for(const a of [-.84,.84]){box(g,.17,.52,.88,a,.43,0,fabric,.05);for(const b of [-.3,.3])cyl(g,.032,.14,a,.07,b,m.dark,'y')}for(const a of [-.38,.38]){box(g,.71,.16,.56,a,.43,.05,fabric,.065);const cushion=box(g,.7,.43,.2,a,.7,-.21,fabric,.07);cushion.rotation.x=-.09;box(g,.63,.006,.005,a,.44,.333,seam,.002);for(const x of [-.18,.18]){const button=new T.Mesh(new T.SphereGeometry(.012,12,8),seam);button.scale.z=.3;button.position.set(a+x,.72,-.095);g.add(button)}}return g}
 const truck=new T.Group();scene.add(truck)
 box(truck,6.7,.36,2.52,-.1,.77,0,m.dark,.06);box(truck,4.7,.13,2.4,.82,1.07,0,m.floor)
 // Cabless envelope: front equipment enclosure is flush with the cargo roof.
 const frontPaint=new T.MeshPhysicalMaterial({color:'#b5bfc4',metalness:.62,roughness:.28,clearcoat:.55})
 box(truck,1.98,2.84,2.39,-2.48,2.52,0,frontPaint,.045)
 for(const z of [-1.205,1.205]){box(truck,1.95,.08,.055,-2.48,3.94,z,m.steel);box(truck,1.95,.08,.055,-2.48,1.13,z,m.steel);box(truck,.07,2.8,.055,-3.43,2.52,z,m.steel);for(let y=1.3;y<3.9;y+=.3)cyl(truck,.013,.016,-3.44,y,z*1.02,m.dark)}
 box(truck,.1,2.79,2.31,-3.5,2.52,0,frontPaint,.025)
 box(truck,.045,.26,1.23,-3.57,1.86,0,m.dark,.02)
 for(const z of [-.39,0,.39])cyl(truck,.044,.025,-3.6,1.86,z,m.glass,'x')
 box(truck,.07,.12,2.27,-3.54,3.94,0,m.steel,.012)
 const wheels=[];for(const x of [-2.35,2.03])for(const z of [-1.27,1.27]){const g=new T.Group();g.position.set(x,.56,z);truck.add(g);cyl(g,.55,.3,0,0,0,m.rubber);const torus=new T.Mesh(new T.TorusGeometry(.415,.135,12,48),m.rubber);torus.position.z=z>0?.06:-.06;g.add(torus);cyl(g,.32,.31,0,0,0,m.dark);cyl(g,.285,.33,0,0,0,m.steel);cyl(g,.105,.36,0,0,0,m.steel);for(let j=0;j<10;j++){const a=j*Math.PI/5;cyl(g,.036,.345,Math.cos(a)*.224,Math.sin(a)*.224,0,m.dark);cyl(g,.015,.365,Math.cos(a)*.147,Math.sin(a)*.147,0,m.steel)}wheels.push(g);box(truck,.04,.48,.45,x+.58,.47,z,m.rubber);for(let a=0;a<Math.PI*2;a+=Math.PI/24){const tread=box(g,.044,.022,.28,Math.cos(a)*.55,Math.sin(a)*.55,0,m.rubber);tread.rotation.z=a-Math.PI/2}}
 box(truck,4.58,2.78,.08,.83,2.52,-1.19,m.body);box(truck,.08,2.78,2.4,-1.47,2.52,0,m.body)
 for(const x of [-1.45,3.1])for(const z of [-1.19,1.19])box(truck,.11,2.84,.11,x,2.53,z,m.steel)
 for(const z of [-1.257,1.257])for(const x of [-1.45,3.1])for(let y=1.25;y<3.9;y+=.25)cyl(truck,.018,.018,x,y,z,m.dark)
 for(const z of [-1.2,1.2]){box(truck,2.7,.38,.09,.05,.79,z,m.body,.02);for(let x=-1.05;x<1.3;x+=.45)box(truck,.045,.2,.1,x,.79,z*1.04,m.dark);box(truck,.8,.025,.012,-.8,.83,z*1.06,m.wine)}
 for(const z of [-1.19,1.19]){box(truck,4.7,.12,.12,.83,3.92,z,m.steel);box(truck,4.7,.12,.12,.83,1.15,z,m.steel);for(let x=-1.1;x<3;x+=.55){box(truck,.028,2.65,.03,x,2.53,-1.135,m.steel);box(truck,.1,.04,.14,x,1.18,z,m.amber)}}
 const outer=new T.Group();truck.add(outer);box(outer,4.6,2.74,.065,.82,2.53,1.21,m.body);box(outer,4.68,.09,2.43,.82,3.95,0,m.body);textPlane(outer,['waste_go','DIRECT COLLECTION'],2.7,1.35,.7,2.5,1.25)
 textPlane(truck,['waste_go','LOW-SPEED CARGO'],1.55,.78,-2.48,2.89,1.207)
 const rear=new T.Group();truck.add(rear);box(rear,.09,2.68,2.29,3.13,2.54,0,m.body);for(let y=1.24;y<3.87;y+=.145)box(rear,.025,.009,2.25,3.184,y,0,m.dark);box(rear,.04,.08,.5,3.2,1.34,0,m.dark,.01)
 // Two deck leaves rotate toward the sidewalls only with an empty conceptual upper deck.
 const leaves=[];for(const sign of [-1,1]){const pivot=new T.Group();pivot.position.set(.75,2.48,sign*1.12);truck.add(pivot);box(pivot,4.35,.1,1.12,0,0,-sign*.56,m.steel);for(let x=-1.3;x<2;x+=.55)box(pivot,.045,.055,1.1,x,-.07,-sign*.56,m.dark);leaves.push({pivot,sign})}
 const timber=new T.MeshStandardMaterial({color:'#ac926f',map:grain,bumpMap:grain,bumpScale:.005,roughness:.53});const upperCargo=new T.Group();truck.add(upperCargo);sofa(upperCargo,-.15,2.55,-.12,'#a7a095');box(upperCargo,.78,1.05,.7,2.05,3.06,-.1,timber,.012);box(upperCargo,.02,.07,.13,2.452,3.12,.1,m.dark)
 const pads=new T.Group();truck.add(pads);for(const z of [-1.12,1.12])for(let x=-1.1;x<3;x+=.65)box(pads,.55,1,.07,x,1.75,z,m.pad,.035)
 const lift=new T.Group();truck.add(lift);const platform=new T.Group();lift.add(platform);box(platform,1.97,.12,2.36,.985,0,0,m.floor,.018);for(const z of [-1.15,1.15]){box(platform,1.95,.025,.08,.985,.075,z,m.amber);for(let x=.05;x<1.9;x+=.17){const stripe=box(platform,.065,.008,.09,x,.091,z,m.dark);stripe.rotation.y=-.4}}for(let z=-1;z<=1;z+=.2)box(platform,1.84,.007,.009,.98,.066,z,m.steel)
 for(const z of [-1.15,1.15]){box(truck,.15,2.84,.15,3.25,2.53,z,m.dark);box(truck,.038,2.7,.04,3.34,2.5,z,m.steel);box(truck,.075,.62,.075,3.35,2.92,z,m.amber);box(truck,.075,.42,.075,3.35,1.51,z,m.wine)}
 const cargo=new T.Group();truck.add(cargo);const movingSofa=sofa(cargo,0,0,0,'#456366');const cabinet=new T.Group();cargo.add(cabinet);box(cabinet,.95,1.83,.6,0,.97,0,timber,.012);box(cabinet,.008,1.7,.008,0,.97,.308,m.dark);for(const x of [-.065,.065])box(cabinet,.018,.17,.025,x,1.02,.33,m.steel,.005)
 const straps=new T.Group();cargo.add(straps);for(const x of [-.64,.64]){box(straps,.055,.9,.025,x,.47,.455,m.amber);box(straps,.055,.025,.91,x,.91,0,m.amber);box(straps,.055,.9,.025,x,.47,-.455,m.amber);box(straps,.11,.13,.045,x,.36,.485,m.steel,.01);box(straps,.16,.045,.12,x,.06,.5,m.dark,.01)}
 const sensorMat=new T.MeshStandardMaterial({color:'#16c9d1',emissive:'#04b8c7',emissiveIntensity:1});for(const x of [-1.3,3.13])for(const z of [-1.09,1.09]){box(truck,.23,.17,.23,x,3.99,z,m.dark,.025);const lens=new T.Mesh(new T.SphereGeometry(.05,16,16),sensorMat);lens.position.set(x+.12,3.99,z);truck.add(lens)}
 // Forward perception camera faces -X; rear verification camera faces +X.
 const frontCam=new T.Group();frontCam.position.set(-3.43,4.14,0);truck.add(frontCam)
 box(frontCam,.32,.24,.56,0,0,0,m.dark,.03);box(frontCam,.25,.04,.42,.04,-.15,0,m.steel,.01)
 for(const z of [-.16,.16]){cyl(frontCam,.078,.045,-.175,0,z,m.steel,'x');cyl(frontCam,.055,.052,-.198,0,z,m.glass,'x');cyl(frontCam,.023,.055,-.202,0,z,sensorMat,'x')}
 box(frontCam,.024,.016,.055,-.18,.075,0,sensorMat,.003)
 const doorCam=new T.Group();truck.add(doorCam);doorCam.position.set(3.33,3.89,0);box(doorCam,.18,.2,.38,0,0,0,m.dark,.025);for(const z of [-.11,.11])cyl(doorCam,.045,.025,.1,0,z,m.glass,'x');cyl(doorCam,.065,.027,.1,0,0,m.steel,'x');cyl(doorCam,.048,.03,.117,0,0,m.glass,'x');box(doorCam,.006,.014,.014,.142,.07,.13,sensorMat)
 box(truck,.11,.43,.26,3.34,2.05,1.19,m.dark,.015);box(truck,.016,.29,.2,3.405,2.08,1.19,m.glass,.005);for(let z=1.12;z<1.28;z+=.026)box(truck,.018,.06,.008,3.416,2.02,z,m.body)
 const curtain=new T.Group();truck.add(curtain);const beamMat=new T.MeshBasicMaterial({color:'#0db8be',transparent:true,opacity:.5,depthWrite:false});for(let y=1.25;y<3.88;y+=.17)box(curtain,.012,.008,2.15,3.36,y,0,beamMat)
 const person=new T.Group();scene.add(person);const pm=mat('#bc244a',0,.7);cyl(person,.16,.58,0,.96,0,pm,'y');const head=new T.Mesh(new T.SphereGeometry(.15,20,16),pm);head.position.y=1.45;person.add(head);for(const x of [-.1,.1])cyl(person,.06,.61,x,.35,0,pm,'y');for(const x of [-.25,.25])cyl(person,.055,.6,x,1,0,pm,'y')
 const ring=new T.Mesh(new T.RingGeometry(.38,.42,64),new T.MeshBasicMaterial({color:'#bf244b',side:T.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.02;person.add(ring)
 addIndustrialDetails({truck,scene,m,box,cyl,lift,platform})

 // Optional preflight overlay reuses the original vehicle, without its demonstration furniture.
 let inspection=null
 const inspectionGroup=new T.Group();truck.add(inspectionGroup);inspectionGroup.visible=false
 const slotViews=[]
 for(let i=0;i<4;i++){
  const material=new T.MeshBasicMaterial({color:'#45d2c3',transparent:true,opacity:.12,depthWrite:false})
  const volume=new T.Mesh(new T.BoxGeometry(1,1,1),material);inspectionGroup.add(volume)
  const edges=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(1,1,1)),new T.LineBasicMaterial({color:'#45d2c3',transparent:true,opacity:.8}));inspectionGroup.add(edges)
  const c=document.createElement('canvas');c.width=128;c.height=128
  const ctx=c.getContext('2d');ctx.fillStyle='#0b2636';ctx.fillRect(0,0,128,128);ctx.fillStyle='#d9fff5';ctx.textAlign='center';ctx.font='bold 86px Arial';ctx.fillText(String.fromCharCode(65+i),64,94)
  const label=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(c),depthTest:false}));label.scale.set(.28,.28,1);inspectionGroup.add(label)
  slotViews.push({volume,edges,label})
 }
 const measuredCargo=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(1,1,1)),new T.LineBasicMaterial({color:'#e4b85f',transparent:true,opacity:.6}));inspectionGroup.add(measuredCargo)
 let furniture=null,furnitureCategory='',furniturePhoto=null,furnitureModelUrl='',modelLoadVersion=0
 const inspectionStraps=new T.Group();inspectionGroup.add(inspectionStraps)
 box(inspectionStraps,.04,1,.018,0,.5,-.51,m.amber)
 box(inspectionStraps,.04,1,.018,0,.5,.51,m.amber)
 box(inspectionStraps,.04,.018,1.04,0,1,0,m.amber)
 // Visual bridge across the short tailboard/deck joint for the conceptual push-in stage.
 const inspectionBridge=box(inspectionGroup,.27,.035,2.1,3.19,1.16,0,m.floor)
 function inspectCargo(config){
  inspection=config;inspectionGroup.visible=!!config
  if(!config)return
  slotViews.forEach(({volume,edges,label},i)=>{
   const slot=config.slots[i];volume.visible=edges.visible=label.visible=!!slot;if(!slot)return
   const occupied=config.occupied.includes(slot.id),selected=config.selected===slot.id
   const color=occupied?'#ba6874':selected?'#6dffd2':'#45a3c3'
   volume.material.color.set(color);volume.material.opacity=occupied?.38:selected?.2:.06;edges.material.color.set(color)
   volume.position.set(slot.x,1.18+slot.height/200,slot.z);volume.scale.set(slot.length/100,slot.height/100,slot.width/100)
   edges.position.copy(volume.position);edges.scale.copy(volume.scale);label.position.set(slot.x,1.2,slot.z)
  })
  const slot=config.slots.find(s=>s.id===config.selected),d=config.dimensions
  if(config.model3dUrl!==furnitureModelUrl){
   furnitureModelUrl=config.model3dUrl||''
   const loadVersion=++modelLoadVersion
   if(config.model3dUrl){
    loadCargoGeneratedModel(config.model3dUrl).then(model=>{
     if(loadVersion!==modelLoadVersion){disposeObjects(model);return}
     if(furniture){inspectionGroup.remove(furniture);disposeObjects(furniture)}
     furniture=model;furnitureCategory='';furniturePhoto=null;inspectionGroup.add(furniture)
    }).catch(()=>{if(loadVersion===modelLoadVersion)config.onModelError?.()})
   }
  }
  if(!config.model3dUrl&&(config.photo!==furniturePhoto||(!config.photo&&config.category!==furnitureCategory))){
   if(furniture){inspectionGroup.remove(furniture);disposeObjects(furniture)}
   furniture=config.photo?createCargoPhoto(config.photo):config.category?createCargoFurniture(config.category):null;furnitureCategory=config.category;furniturePhoto=config.photo
   if(furniture)inspectionGroup.add(furniture)
  }
  measuredCargo.visible=!!d;inspectionStraps.visible=false
  if(furniture)furniture.visible=!!d
  if(d){
   const pose=cargoLoadingPose(slot?(config.progress||0):0,slot||{x:1.7,z:0})
   const width=config.rotated?d.length:d.width,length=config.rotated?d.width:d.length
   measuredCargo.scale.set(length/100,d.height/100,width/100);measuredCargo.position.set(pose.x,pose.y+d.height/200,pose.z)
   if(furniture){if(furniture.userData.generatedCargo)sizeGeneratedCargo(furniture,d,config.rotated);else if(config.photo)sizeCargoPhoto(furniture,d);else furniture.scale.set(d.length/100,d.height/100,d.width/100);if(!furniture.userData.generatedCargo)furniture.rotation.y=config.rotated?Math.PI/2:0;furniture.position.set(pose.x,pose.y,pose.z)}
   inspectionStraps.visible=!config.photo&&!!slot&&pose.secured;inspectionStraps.scale.set(length/100,d.height/100,width/100);inspectionStraps.position.set(pose.x,pose.y,pose.z)
  }
  inspectionBridge.visible=!!slot&&(config.progress||0)>=.55
 }

 let targetLayout=0,layoutAmount=0,lastTime=performance.now()
 function update(p,state){const now=performance.now(),dt=state.latched?0:Math.min((now-lastTime)/1000,.05);lastTime=now;targetLayout=state.layout==='full'?1:0;layoutAmount=T.MathUtils.damp(layoutAmount,targetLayout,7,dt);upperCargo.visible=targetLayout===0&&layoutAmount<.01;leaves.forEach(({pivot,sign})=>pivot.rotation.x=sign*layoutAmount*Math.PI/2);pads.visible=state.fleet==='reuse';m.wine.color.set(state.fleet==='reuse'?'#087c86':'#770a2d')
 outer.visible=!state.cutaway;rear.visible=p.closed>.01;rear.scale.y=Math.max(.01,p.closed);rear.position.y=3.88*(1-p.closed);lift.position.set(3.22,.18+p.lift*.91,0);platform.rotation.z=p.fold*Math.PI/2;cargo.position.set(4.21-p.inward*3.45,.26+p.lift*.91,0);movingSofa.visible=state.item==='sofa';cabinet.visible=state.item==='cabinet';straps.visible=p.secured&&state.item==='sofa';truck.position.x=0;wheels.forEach(w=>w.rotation.z=(state.distance ?? p.travel*1.3)/.56)
 curtain.visible=state.showSafety&&p.closed<.5;beamMat.color.set(state.latched?'#f13958':'#0db8be');beamMat.opacity=state.latched?.85:.4;person.visible=state.intrusion;person.position.set(truck.position.x+3.5,0,1.58)
 if(inspection){outer.visible=false;rear.visible=false;upperCargo.visible=false;leaves.forEach(({pivot})=>{pivot.visible=false});cargo.visible=false;pads.visible=false;curtain.visible=false;person.visible=false}
 else{leaves.forEach(({pivot})=>{pivot.visible=true});cargo.visible=true}
}
 return { root:scene, update, inspectCargo, dispose(){disposeObjects(scene)} }
}
