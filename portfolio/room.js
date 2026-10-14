import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {openDesktop} from './desktop.js';
const host=document.querySelector('#room'),hint=document.querySelector('#loading-hint');
try{init()}catch(error){hint.textContent='三维场景暂不可用，仍可打开作品文件夹。';document.querySelector('#room-fallback').hidden=false;console.error(error)}
function init(){
const scene=new THREE.Scene();scene.background=new THREE.Color('#e9e3d8');
const camera=new THREE.PerspectiveCamera(34,innerWidth/innerHeight,.1,80);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;host.append(renderer.domElement);
renderer.domElement.setAttribute('aria-label','三维书房：点击电脑屏幕打开作品集，也可使用进入工作台按钮');
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enablePan=false;controls.enableZoom=false;controls.minAzimuthAngle=.15;controls.maxAzimuthAngle=.95;controls.minPolarAngle=.85;controls.maxPolarAngle=1.28;
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.72,...extra});
const cream=mat('#dfd7c8'),oak=mat('#ba8758'),wood=mat('#d3a36f'),dark=mat('#41443f'),blue=mat('#879bad'),white=mat('#eeeae0');
const room=new THREE.Group();scene.add(room);
function box(w,h,d,x,y,z,m,r=.025,parent=room){const o=new THREE.Mesh(r?new RoundedBoxGeometry(w,h,d,2,r):new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o}
function cylinder(rt,rb,h,x,y,z,m,parent=room){const o=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,32),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o}
function sphere(rx,ry,rz,x,y,z,m,parent=room){const o=new THREE.Mesh(new THREE.SphereGeometry(1,20,12),m);o.scale.set(rx,ry,rz);o.position.set(x,y,z);o.castShadow=true;parent.add(o);return o}
function line(a,b,r,m,parent=room){const d=new THREE.Vector3().subVectors(new THREE.Vector3(...b),new THREE.Vector3(...a));const c=cylinder(r,r,d.length(),...(a.map((v,i)=>(v+b[i])/2)),m,parent);c.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return c}
function texture(draw,w=1024,h=640){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}
function plane(w,h,x,y,z,t,parent=room){const m=new THREE.MeshBasicMaterial({map:t});const o=new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);o.position.set(x,y,z);parent.add(o);return o}
// Open dollhouse room with actual desk-scale details.
box(7.4,.2,5.5,0,-.12,0,mat('#c8b99e'));
for(let i=0;i<18;i++)box(.4,.025,5.36,-3.45+i*.405,.002,0,mat(i%3===0?'#d9c6aa':i%3===1?'#ddceb7':'#d5c0a1'),.004);
box(7.4,3.9,.15,0,1.85,-2.7,cream);box(.15,3.9,5.5,-3.7,1.85,0,mat('#d7d0c1'));
box(7.2,.13,.08,0,.1,-2.57,white);box(.08,.13,5.2,-3.57,.1,0,white);
// Window: original illustrated city skyline, framed into the side wall.
const sky=texture((ctx,w,h)=>{const g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,'#aec6d1');g.addColorStop(1,'#e6e8dc');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);ctx.fillStyle='#fff1cc';ctx.beginPath();ctx.arc(750,100,65,0,7);ctx.fill();for(let layer=0;layer<2;layer++)for(let i=0;i<19;i++){const bh=70+((i*53+layer*91)%230);const x=i*63-20;ctx.fillStyle=layer?'#abb9b6':'#c1ccca';ctx.fillRect(x,h-bh,49,bh);ctx.fillStyle='#dce1d6';for(let yy=h-bh+18;yy<h;yy+=25)for(let xx=x+8;xx<x+44;xx+=14)ctx.fillRect(xx,yy,5,9)}},900,700);
const windowPlane=plane(2.25,1.9,-3.604,2.35,-.7,sky);windowPlane.rotation.y=Math.PI/2;
for(const z of [-1.85,.45])box(.16,2.05,.08,-3.5,2.35,z,white);
for(const y of [1.35,3.35])box(.16,.09,2.4,-3.5,y,-.7,white);
box(.12,1.96,.055,-3.46,2.35,-.7,white);box(.36,.1,2.55,-3.46,1.32,-.7,wood);
// Desk, drawers and computer.
box(4.45,.15,1.4,-.1,1.34,-1.55,wood,.045);
for(const x of [-2.13,1.91])for(const z of [-2.08,-1.02])box(.12,1.28,.12,x,.64,z,oak);
box(.75,1.12,1.17,-1.6,.6,-1.56,wood);for(const y of [.25,.6,.95]){box(.7,.3,.025,-1.6,y,-.955,oak,.01);box(.22,.035,.055,-1.6,y,-.91,dark,.015)}
box(1.92,1.23,.105,.15,2.16,-1.88,dark,.055);box(.12,.36,.12,.15,1.54,-1.88,dark);box(.65,.045,.34,.15,1.43,-1.8,dark);
const screenTex=texture((ctx,w,h)=>{ctx.fillStyle='#c9dce7';ctx.fillRect(0,0,w,h);const g=ctx.createLinearGradient(0,h,w,0);g.addColorStop(0,'#acc5d6');g.addColorStop(1,'#e9e5da');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);ctx.strokeStyle='#ffffff50';ctx.lineWidth=100;ctx.beginPath();ctx.arc(780,530,290,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#ffffff80';ctx.fillRect(0,0,w,35);ctx.fillStyle='#506479';ctx.font='bold 15px sans-serif';ctx.fillText('CLP / WORKSPACE',26,24);['作品集','关于我','博客','联系'].forEach((t,i)=>{const x=54+i*155;ctx.fillStyle=['#6e8ea8','#b9916b','#889b82','#ba9290'][i];ctx.beginPath();ctx.roundRect(x,85,65,60,12);ctx.fill();ctx.fillStyle='#f5f5f1';ctx.font='bold 30px sans-serif';ctx.fillText(['▧','◉','▤','@'][i],x+20,125);ctx.fillStyle='#465a6b';ctx.font='18px Microsoft YaHei';ctx.fillText(t,x+2,175)});ctx.fillStyle='#425a6b';ctx.font='bold 51px Microsoft YaHei';ctx.fillText('陈烈鹏的工作台',64,350);ctx.font='21px sans-serif';ctx.fillStyle='#6a8090';ctx.fillText('WEB DEVELOPMENT / 3D INTERACTION',67,391);ctx.fillStyle='#ffffffa0';ctx.fillRect(0,h-43,w,43);ctx.fillStyle='#516c83';ctx.font='18px Microsoft YaHei';ctx.fillText('点击屏幕，打开作品集  ↗',66,h-16);});
const screen=plane(1.77,1.09,.15,2.16,-1.818,screenTex);screen.userData.action='projects';
const keyboard=box(.97,.035,.35,.1,1.446,-1.19,mat('#d9dbd6'),.02);keyboard.rotation.y=-.035;
for(let r=0;r<4;r++)for(let c=0;c<13;c++)box(.054,.008,.05,-.335+c*.066,1.468,-1.31+r*.071,white,.003);
box(.27,.009,.05,.05,1.478,-1.03,white,.003);box(.37,.012,.4,.88,1.43,-1.17,mat('#aeb8b6'),.025);sphere(.075,.033,.11,.89,1.47,-1.16,white);
box(.5,.88,.8,1.46,.55,-1.55,mat('#d4d4c9'),.05);box(.4,.72,.02,1.46,.55,-1.135,dark,.03);for(let y of [.38,.7]){const fan=cylinder(.13,.13,.02,1.46,y,-1.11,blue);fan.rotation.x=Math.PI/2;}
// Lamp, notebooks, cup and a small model vehicle.
cylinder(.18,.2,.04,-1.58,1.45,-1.95,dark);line([-1.58,1.47,-1.95],[-1.58,2.05,-1.95],.025,dark);line([-1.58,2.05,-1.95],[-1.22,2.29,-1.93],.024,dark);cylinder(.11,.21,.19,-1.2,2.22,-1.93,mat('#d6ad6e'));
const lampLight=new THREE.PointLight('#ffdb9b',1.8,2.2);lampLight.position.set(-1.2,2.05,-1.9);scene.add(lampLight);
box(.36,.03,.46,-.88,1.45,-1.14,blue,.015).rotation.y=.22;line([-.78,1.48,-1.3],[-.73,1.48,-1.02],.008,dark);
cylinder(.075,.065,.16,1.39,1.5,-1.13,mat('#d5b8a0'));const handle=new THREE.Mesh(new THREE.TorusGeometry(.055,.015,8,20),mat('#d5b8a0'));handle.position.set(1.48,1.52,-1.13);room.add(handle);cylinder(.058,.058,.005,1.39,1.583,-1.13,mat('#564439'));
// Wall shelves with books and project model.
for(const y of [2.76,3.38])box(1.9,.08,.36,2.12,y,-2.42,wood,.025);
const bookColors=['#526e85','#b4b4a0','#b77c61','#c7a663','#7d9391'];
for(let i=0;i<7;i++){const h=.29+(i%3)*.08;box(.1,h,.21,1.35+i*.13,3.44+h/2,-2.42,mat(bookColors[i%5]),.008)}
box(.48,.19,.23,2.37,2.95,-2.38,white,.02);box(.17,.15,.23,2.66,2.93,-2.38,blue,.02);for(const x of [2.19,2.58])for(const z of [-2.51,-2.25]){const wheel=cylinder(.055,.055,.035,x,2.84,z,dark);wheel.rotation.x=Math.PI/2;}
const posterTex=texture((ctx,w,h)=>{ctx.fillStyle='#ebe5da';ctx.fillRect(0,0,w,h);ctx.fillStyle='#708da1';ctx.fillRect(45,80,260,250);ctx.fillStyle='#dec596';ctx.beginPath();ctx.arc(245,140,80,0,7);ctx.fill();ctx.fillStyle='#e2d3bd';ctx.beginPath();ctx.moveTo(40,330);ctx.lineTo(160,180);ctx.lineTo(305,330);ctx.fill();ctx.fillStyle='#615d53';ctx.font='22px sans-serif';ctx.fillText('MAKE / BUILD / EXPLORE',35,390)},350,450);
box(.79,1.02,.045,-2.6,2.68,-2.59,oak,.01);plane(.7,.92,-2.6,2.68,-2.562,posterTex);
// Chair and woven rug.
box(2.3,.015,1.95,.3,.032,.3,mat('#b0b9b4'),.07);for(let i=0;i<24;i++)box(2.2,.003,.008,.3,.043,-.61+i*.077,mat('#c8cec4'),0);
const chair=new THREE.Group();chair.position.set(.3,0,.2);chair.rotation.y=-.22;room.add(chair);
cylinder(.055,.07,.56,0,.35,0,dark,chair);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;line([0,.13,0],[Math.cos(a)*.42,.09,Math.sin(a)*.42],.025,dark,chair);sphere(.06,.06,.045,Math.cos(a)*.42,.075,Math.sin(a)*.42,dark,chair)}
box(.79,.13,.72,0,.67,0,blue,.07,chair);box(.76,.83,.12,0,1.13,.33,blue,.07,chair);for(const x of [-.47,.47]){line([x,.7,.22],[x,1.02,.22],.025,dark,chair);box(.09,.07,.48,x,1.04,.04,dark,.03,chair)}
// Plant with individually arranged leaves.
cylinder(.31,.23,.51,2.85,.3,-.72,mat('#b59475'));cylinder(.27,.27,.015,2.85,.565,-.72,mat('#6e6251'));
for(let i=0;i<12;i++){const a=i*2.4,high=.9+(i%4)*.26;const end=[2.85+Math.cos(a)*.4,high,-.72+Math.sin(a)*.4];line([2.85,.55,-.72],end,.009,mat('#64785b'));const leaf=sphere(.13,.3,.035,...end,mat(i%2?'#7a8d68':'#95a07c'));leaf.rotation.set(.3,a,.4*Math.sin(a))}
// Personal details: a note pin board and cables.
box(.68,.46,.04,1.34,2.2,-2.585,mat('#c3aa83'),.01);for(let i=0;i<3;i++)box(.16,.18,.015,1.1+i*.21,2.2+(i%2)*.04,-2.555,mat(['#ece0aa','#d1dce0','#ddd0b5'][i]),.002);
const cable=new THREE.CatmullRomCurve3([new THREE.Vector3(.2,1.41,-2),new THREE.Vector3(.2,1,-2.2),new THREE.Vector3(.8,.22,-2.2),new THREE.Vector3(1.5,.35,-1.8)]);room.add(new THREE.Mesh(new THREE.TubeGeometry(cable,20,.012,6,false),dark));
const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),mat('#e9e3d8'));floor.rotation.x=-Math.PI/2;floor.position.y=-.24;floor.receiveShadow=true;scene.add(floor);
scene.add(new THREE.HemisphereLight('#fff8e9','#a6a392',2.4));const sun=new THREE.DirectionalLight('#fff1d5',3.7);sun.position.set(-3,8,5);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-8;sun.shadow.camera.right=8;sun.shadow.camera.top=8;sun.shadow.camera.bottom=-8;sun.shadow.normalBias=.025;sun.shadow.bias=-.0002;sun.shadow.radius=4;scene.add(sun);
const fill=new THREE.DirectionalLight('#d8e9fa',1);fill.position.set(6,4,-2);scene.add(fill);
function resize(){const mobile=innerWidth<640;camera.aspect=innerWidth/innerHeight;camera.position.set(mobile?10:9,mobile?8.5:7.5,mobile?14:12);controls.target.set(mobile?0:-.6,mobile?-.4:1,0);camera.fov=mobile?43:34;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);controls.update();renderOnce()}
let asleep=document.querySelector('#desktop').open,last=0,raf=0;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function renderOnce(){renderer.render(scene,camera)}
function loop(t){raf=requestAnimationFrame(loop);if(asleep||document.hidden||t-last<33)return;last=t;controls.update();renderOnce()}
resize();window.addEventListener('resize',resize);window.addEventListener('workspace-visibility',e=>{asleep=e.detail});if(!reduce)raf=requestAnimationFrame(loop);else controls.addEventListener('change',renderOnce);
const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();let down;
function hit(e){const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,camera);return ray.intersectObject(screen).length>0}
renderer.domElement.addEventListener('pointerdown',e=>{down=[e.clientX,e.clientY]});renderer.domElement.addEventListener('pointermove',e=>{renderer.domElement.style.cursor=hit(e)?'pointer':'grab'});renderer.domElement.addEventListener('pointerup',e=>{if(down&&Math.hypot(e.clientX-down[0],e.clientY-down[1])<6&&hit(e))openDesktop();down=null});
hint.textContent='点击电脑屏幕，或从下方打开作品';
window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);controls.dispose();renderer.dispose()},{once:true});
}
