import {createStoreScene} from './shelfpilot/app/three/store-scene.ts';
import {createPharmacyLayout} from './shelfpilot/lib/pharmacy-layout.mjs';

export function mount(host, panel) {
  const canvas=document.createElement('canvas'); canvas.setAttribute('aria-label','药房三维演示，可拖动旋转；下方按钮可选择包装和切换视角'); host.append(canvas);
  const status=document.createElement('p');status.className='scene-status';status.setAttribute('role','status');panel.append(status);
  let view;
  const choose=id=>{view.select(id,true);status.textContent=`已定位：${items.find(x=>x.id===id)?.name||id} · 合成包装，非真实库存`;};
  try {view=createStoreScene(canvas,choose,msg=>{status.textContent=msg;});}catch(error){canvas.remove();throw error;}
  const shelves=[['a','左侧演示柜','left',1],['b','后方演示柜','back',1],['c','右侧演示柜','right',1]].map(([id,name,zone,order])=>({id,name,asset_id:id,image_url:'',origin:[0,0,0],width:2.1,height:2.3,depth:.45,boards:[.08,.65,1.22,1.79],reviewed:true,location:{zone,order}}));
  const items=[];
  shelves.forEach((s,si)=>{for(let level=0;level<3;level++)for(let col=0;col<4;col++){
    const id=`${s.id}-${level}-${col}`,name=`演示包装 ${String.fromCharCode(65+si)}${level+1}${col+1}`;
    items.push({id,name,observation_id:id,shelf_id:s.id,position_status:'estimated',position_3d:[-.72+col*.48,.31+level*.57,.24],dimensions:{width:.28,height:.4,depth:.16},spec:{id,name,kind:'box',dimensions:{width:.28,height:.4,depth:.16,unit:'display'},bodyColor:['#b5d9c3','#d2c9aa','#b5cbd8'][si]}});
  }});
  const data=createPharmacyLayout({status:'ready',geometry_kind:'reviewed_shelf_layout',approximate:true,metric_scale_known:false,scene:{shelves,points:[],cameras:[]},placements:items});
  data.scene.pharmacy.name='合成演示药房';view.setData(data,x=>x);view.setGlassVisible(false);view.setQuality('smooth');
  const controls=document.createElement('div');controls.className='demo-controls';panel.prepend(controls);
  function button(label,fn){const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',fn);controls.append(b);return b;}
  button('立体视角',()=>view.view('isometric'));button('俯视布局',()=>view.view('top'));button('正面视角',()=>view.view('front'));
  button('定位包装 A11',()=>choose('a-0-0'));button('恢复全景',()=>{view.select(null);view.fit();status.textContent='已恢复全景 · 拖动旋转，滚轮缩放';});
  const label=document.createElement('label');label.textContent='查找演示包装 ';const input=document.createElement('input');input.type='search';input.placeholder='如 A11 / B';input.setAttribute('aria-label','查找演示包装');label.append(input);controls.append(label);
  const results=document.createElement('div');results.className='search-results';panel.append(results);
  input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();const matches=q?items.filter(x=>x.name.toLowerCase().includes(q)):[];results.replaceChildren();view.highlight(matches.map(x=>x.id));status.textContent=q?`找到 ${matches.length} 个合成包装`:'合成数据 · 未连接门店、库存或识别接口';matches.slice(0,8).forEach(item=>{const b=document.createElement('button');b.type='button';b.textContent=item.name;b.onclick=()=>choose(item.id);results.append(b);});});
  status.textContent='复用项目渲染与布局模块 · 合成数据 · 拖动旋转，滚轮缩放';
  return ()=>{view.dispose();canvas.remove();panel.replaceChildren();};
}
