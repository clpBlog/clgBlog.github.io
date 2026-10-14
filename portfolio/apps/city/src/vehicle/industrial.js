import * as T from 'three'

// Visual engineering details only; not dimensioned manufacturing geometry.
export function addIndustrialDetails({truck,scene,m,box,cyl,lift,platform}){
 const equipment=new T.Group();truck.add(equipment)
 const black=new T.MeshStandardMaterial({color:'#111923',metalness:.35,roughness:.46})
 const alloy=new T.MeshStandardMaterial({color:'#75838d',metalness:.9,roughness:.24})
 const led=new T.MeshStandardMaterial({color:'#deefff',emissive:'#badbff',emissiveIntensity:2.2})
 const cyan=new T.MeshStandardMaterial({color:'#7aafba',emissive:'#227b90',emissiveIntensity:.6})
 function rod(parent,a,b,r,material){const start=new T.Vector3(...a),end=new T.Vector3(...b);const delta=end.clone().sub(start);const mesh=new T.Mesh(new T.CylinderGeometry(r,r,delta.length(),16),material);mesh.position.copy(start.add(end).multiplyScalar(.5));mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());mesh.castShadow=true;parent.add(mesh);return mesh}
 // Actual arches and recessed rings give the wheels a mechanical context.
 for(const x of [-2.35,2.03])for(const sign of [-1,1]){
  const arch=new T.Shape();arch.absarc(0,0,.66,0,Math.PI,false);arch.lineTo(-.58,0);arch.absarc(0,0,.58,Math.PI,0,true);arch.closePath()
  const fender=new T.Mesh(new T.ExtrudeGeometry(arch,{depth:.36,bevelEnabled:true,bevelSize:.015,bevelThickness:.015,bevelSegments:2,steps:1}),black);fender.position.set(x,.56,sign===1?1.11:-1.47);equipment.add(fender)
  for(const r of [.33,.37]){const ring=new T.Mesh(new T.TorusGeometry(r,.012,8,48),alloy);ring.position.set(x,.56,sign*1.445);equipment.add(ring)}
 }
 // Ladder chassis, axle housings, suspension and battery enclosure.
 for(const z of [-.78,.78]){box(equipment,6.25,.19,.13,-.15,.52,z,black);for(let x=-2.9;x<3;x+=.65)box(equipment,.065,.16,1.63,x,.52,0,alloy)}
 for(const x of [-2.35,2.03]){cyl(equipment,.11,2.45,x,.48,0,black);for(const z of [-.74,.74]){for(let n=0;n<4;n++)box(equipment,.93-n*.12,.016,.11,x,.38+n*.022,z,alloy);rod(equipment,[x-.23,.48,z],[x+.12,.83,z],.045,black)}}
 box(equipment,1.72,.32,1.38,-.05,.36,0,black);for(let x=-.8;x<.8;x+=.09)box(equipment,.02,.34,1.4,x,.36,0,alloy)
 // Recessed cargo tracks and tie-down eyes remain visible in the cutaway view.
 for(const z of [-.96,.96]){
  box(equipment,4.15,.025,.1,.8,1.17,z,black)
  box(equipment,4.1,.012,.018,.8,1.19,z,alloy)
  for(const x of [-1.02,.25,1.52,2.79]){
   const eye=new T.Mesh(new T.TorusGeometry(.065,.013,8,20),alloy)
   eye.rotation.x=Math.PI/2
   eye.position.set(x,1.2,z)
   equipment.add(eye)
   box(equipment,.17,.018,.17,x,1.18,z,black,.015)
  }
 }
 // Stepped bumper, tow points and front lighting.
 box(equipment,.2,.2,2.35,-3.57,.93,0,black);box(equipment,.035,.05,1.15,-3.685,1.16,0,alloy)
 for(const z of [-.85,.85]){box(equipment,.055,.09,.42,-3.555,1.5,z,black);box(equipment,.062,.025,.36,-3.585,1.54,z,led);box(equipment,.06,.06,.24,-3.588,1.43,z,m.glass);cyl(equipment,.04,.045,-3.68,.92,z,alloy,'x')}
 // Service access, charge inlet and a visually distinct emergency-stop control.
 for(const z of [-1.225,1.225]){
  box(equipment,1.28,.5,.026,-2.47,2.18,z,black,.035)
  box(equipment,1.16,.39,.032,-2.47,2.18,z,alloy,.025)
  box(equipment,.12,.035,.04,-1.98,2.18,z*1.025,black,.01)
  box(equipment,.34,.34,.045,-2.52,1.63,z,black,.03)
  cyl(equipment,.105,.05,-2.52,1.63,z*1.035,alloy)
  cyl(equipment,.07,.052,-2.52,1.63,z*1.055,black)
 }
 const stop=new T.Mesh(new T.CylinderGeometry(.09,.09,.06,20),new T.MeshStandardMaterial({color:'#c92937',roughness:.35}))
 stop.rotation.x=Math.PI/2
 stop.position.set(-1.95,1.63,1.31)
 equipment.add(stop)
 for(const z of [-1.24,1.24]){
  box(equipment,2.05,.055,.018,.36,.82,z,m.amber)
  box(equipment,.2,.18,.06,3.26,1.05,z,black,.015)
  box(equipment,.15,.065,.07,3.3,1.09,z,m.wine)
  box(equipment,.15,.035,.07,3.3,1.01,z,m.amber)
 }
 // Rear portal: boxed mechanism housings, bearings and travelling carriages.
 for(const z of [-1.19,1.19]){
  box(equipment,.25,2.9,.19,3.2,2.55,z,black,.025)
  box(equipment,.04,2.63,.07,3.335,2.52,z,alloy)
  for(let y=1.25;y<3.88;y+=.24){cyl(equipment,.022,.028,3.36,y,z,alloy,'x');box(equipment,.022,.09,.015,3.355,y,z+.055,m.dark)}
  box(lift,.25,.34,.23,.015,.05,z,alloy,.02);cyl(lift,.075,.26,.06,.06,z,black)
  box(equipment,.04,.61,.025,3.352,3.12,z,cyan)
  rod(equipment,[3.2,1.22,z],[3.2,3.85,z],.024,alloy)
  // Coupled support links follow the platform instead of floating under it.
  rod(platform,[.08,-.08,z*.87],[1.58,-.2,z*.87],.035,black)
  for(const x of [.2,1.56])cyl(platform,.048,.09,x,-.13,z*.87,alloy)
 }
 // Tailboard tread and edge markings move with the platform.
 for(let x=.18;x<1.88;x+=.2)box(platform,.035,.01,2.03,x,.071,0,black)
 for(const z of [-1.12,1.12]){
  box(platform,1.75,.009,.065,.98,.08,z,m.amber)
  for(const x of [.2,1.75])box(platform,.09,.025,.11,x,.085,z,led,.012)
 }
 box(platform,.065,.018,2.13,1.93,.08,0,m.amber)
 box(equipment,.27,.26,2.63,3.18,3.98,0,black,.025)
 box(equipment,.035,.035,1.86,3.33,3.88,0,led)
 // Roof ribs remain visible in the cutaway, with narrow equipment light rails.
 for(let x=-1.15;x<3;x+=.65){box(equipment,.045,.08,2.31,x,3.9,0,alloy);for(const z of [-1.07,1.07])box(equipment,.28,.026,.025,x,3.84,z,led)}
 for(const z of [-1.12,1.12]){box(equipment,4.4,.055,.035,.78,2.32,z,alloy);for(let x=-1.25;x<3;x+=.14)box(equipment,.058,.021,.043,x,2.32,z,black)}
 // Small sensor pods and restrained roof scanner assembly.
 box(equipment,.58,.07,.58,-2.25,4.01,0,black,.025);cyl(equipment,.19,.15,-2.25,4.13,0,black,'y');cyl(equipment,.197,.045,-2.25,4.16,0,m.glass,'y');cyl(equipment,.18,.016,-2.25,4.22,0,alloy,'y')
 const floor=new T.Group();scene.add(floor)
 const floorMat=new T.MeshStandardMaterial({color:'#4d6875',metalness:.25,roughness:.65})
 for(const z of [-2.15,2.15]){box(floor,9,.002,.017,.4,-.081,z,floorMat);for(const x of [-4.1,4.9])box(floor,.02,.002,.48,x,-.079,z,floorMat)}
 const interior=new T.PointLight('#d6e8ff',9,7,2);interior.position.set(.6,3.6,.2);equipment.add(interior)
 return {dispose(){}}
}
