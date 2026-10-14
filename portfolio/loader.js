const host=document.querySelector('#scene');
const panel=document.querySelector('#scene-controls');
const tabs=[...document.querySelectorAll('[data-demo]')];
let cleanup=null,serial=0;
async function load(name){
  const current=++serial;cleanup?.();cleanup=null;host.replaceChildren();panel.replaceChildren();
  tabs.forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.demo===name));b.disabled=true;});
  document.querySelector('#scene-title').textContent=name==='pharmacy'?'ShelfPilot / 药房空间工作台':'WasteGo / 运输舱概念演示';
  document.querySelector('#scene-caption').textContent=name==='pharmacy'?'实际项目渲染模块 + 合成包装数据。演示旋转、视角切换与搜索定位；不展示真实门店照片。':'实际项目模型与阶段姿态代码。演示装载动作；不表示物理仿真、自动驾驶或硬件控制。';
  host.textContent='正在载入交互模型…';
  try{const module=await import(`./dist/${name}.js`);if(current!==serial)return;host.replaceChildren();cleanup=module.mount(host,panel);}
  catch(error){host.replaceChildren();const p=document.createElement('p');p.className='fallback';p.textContent='当前浏览器未能载入三维视图。项目说明仍可阅读；请使用支持 WebGL 的浏览器，并通过本地 HTTP 服务打开。';host.append(p);console.error('Portfolio scene unavailable',error);}
  finally{if(current===serial)tabs.forEach(b=>b.disabled=false);}
}
tabs.forEach(b=>b.addEventListener('click',()=>load(b.dataset.demo)));
window.addEventListener('pagehide',()=>cleanup?.());
load('pharmacy');
