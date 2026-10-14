import {createVehicleScene} from './wastego/src/vehicle.js';
import {pose,stages} from './wastego/src/simulation.js';

export function mount(host,panel){
  const viewer=createVehicleScene(host);
  let stage=1,progress=.5,playing=false,last=0,frame=0,disposed=false;
  const state={layout:'double',fleet:'clearance',cutaway:true,item:'sofa',showSafety:false,latched:false,intrusion:false};
  const controls=document.createElement('div');controls.className='demo-controls';panel.append(controls);
  const label=document.createElement('label');label.textContent='阶段预览 ';const select=document.createElement('select');select.setAttribute('aria-label','选择装载动画阶段');
  stages.forEach((s,i)=>{const o=new Option(s.name,String(i));select.add(o);});select.value=String(stage);label.append(select);controls.append(label);
  const status=document.createElement('p');status.className='scene-status';status.setAttribute('role','status');panel.append(status);
  function describe(){status.textContent=`${stages[stage].name}：${stages[stage].description} 本页为阶段预览，未连接车辆。`;}
  select.onchange=()=>{stage=Number(select.value);progress=.5;describe();};
  const play=document.createElement('button');play.type='button';play.textContent='播放当前阶段';controls.append(play);play.onclick=()=>{playing=!playing;if(playing&&progress>=1)progress=0;play.textContent=playing?'暂停动画':'播放当前阶段';};
  for(const [name,action] of [['侧视',()=>viewer.view('side')],['尾部特写',()=>viewer.view('rear')],['恢复全景',()=>viewer.view('hero')]]){const b=document.createElement('button');b.type='button';b.textContent=name;b.onclick=action;controls.append(b);}
  function draw(t){if(disposed)return;const dt=last?Math.min((t-last)/1000,.06):0;last=t;if(playing&&!document.hidden){progress=Math.min(1,progress+dt/stages[stage].duration);if(progress===1){playing=false;play.textContent='重播当前阶段';}}if(!document.hidden)viewer.render(pose(stage,progress),state);frame=requestAnimationFrame(draw);}
  describe();frame=requestAnimationFrame(draw);
  return ()=>{disposed=true;cancelAnimationFrame(frame);viewer.dispose();panel.replaceChildren();};
}
