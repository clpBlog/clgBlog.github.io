// All dimensions/capacities below are configurable DEMO assumptions, not engineering ratings.
export const DEMO = Object.freeze({length:4.5,width:2.25,height:2.7,lowerHeight:1.22,upperHeight:1.25,payload:800,tailLift:300,tailLength:1.97,tailWidth:2.36,clearance:.08})
export const stages = [
 {name:'扫码与货品核验',en:'SCAN & VERIFY',duration:3,description:'模拟扫码核对预约并开门，门楣摄像头比对现场货品；一致、尺寸合格且安全联锁解除后才允许升降。'},
 {name:'尾板升起',en:'LIFT',duration:4,description:'车辆驻车，作业区隔离，尾板由地面位升至货舱地板高度。'},
 {name:'移载入舱',en:'TRANSFER',duration:4,description:'家具沿概念移载轨迹进入下层。实际驱动、接触和夹持机构尚未设计。'},
 {name:'固定与收板',en:'SECURE',duration:3,description:'先示意固定货物，再竖起空尾板、关闭货舱。真实锁止反馈需传感器验证。'},
 {name:'直达运输',en:'TRANSIT',duration:5,description:'仅在模拟固定、门闭与收板条件满足后播放行驶；不包含道路自动驾驶。'},
 {name:'到站展开',en:'ARRIVAL',duration:3,description:'示意到站驻车、开门和展开尾板；接收站准入与实际人员安排需另行确认。'},
 {name:'卸载交接',en:'HANDOVER',duration:5,description:'解除示意固定、移出家具，再降低尾板；交接记录和接收证明尚未对接。'}
]
export const clamp = x => Math.max(0,Math.min(1,x))
export function verifyReservation(code,fleet){
 const expected=fleet==='reuse'?'WG-R01-0921':'WG-C01-0921'
 if(code.trim()==='EXPIRED')return {ok:false,message:'示例预约已过期，请重新预约。'}
 if(code.trim()!==expected)return {ok:false,message:'预约码无效或车辆不匹配，舱门保持锁定。'}
 return {ok:true,message:'示例预约有效 · 当前车辆匹配 · 允许开门'}
}
export function compareGoods(expected,observed){
 if(observed.occluded)return {status:'review',message:'货品遮挡，无法确认一致；升降保持禁止，需重新采集或人工复核。'}
 if(expected.type!==observed.type||expected.count!==observed.count)return {status:'mismatch',message:'类别或件数与预约不一致，禁止升降。'}
 for(const k of ['length','width','height'])if(!Number.isFinite(observed[k])||Math.abs(expected[k]-observed[k])>.08)return {status:'mismatch',message:'外包尺寸超出示例容差 ±0.08 m，禁止升降。'}
 return {status:'match',message:'示例类别、件数与尺寸一致；这不是实测识别结果。'}
}
export function liftPermit({scanned,doorOpen,match,bound,loadOK,latched}){return scanned&&doorOpen&&match==='match'&&bound&&loadOK&&!latched}
const ease=x=>{x=clamp(x);return x*x*(3-2*x)}
export function pose(index,t){
 t=clamp(t);let lift=0,inward=0,fold=0,closed=0,secured=false,travel=0
 if(index===1) lift=ease(t)
 if(index===2){lift=1;inward=ease(t)}
 if(index===3){lift=1;inward=1;secured=t>=.2;fold=ease((t-.2)/.55);closed=ease((t-.72)/.28)}
 if(index===4){lift=1;inward=1;fold=1;closed=1;secured=true;travel=ease(t)}
 if(index===5){lift=1;inward=1;secured=true;travel=1;closed=1-ease(t/.3);fold=1-ease((t-.3)/.7)}
 if(index===6){travel=1;inward=1-ease(t/.55);lift=1-ease((t-.55)/.45)}
 return {lift,inward,fold,closed,secured,travel,driveAllowed:secured&&fold===1&&closed===1}
}
export function validateLoad(input,layout){
 const {length,width,height,mass}=input
 const reasons=[]
 if(![length,width,height,mass].every(n=>Number.isFinite(n)&&n>0))return {ok:false,reasons:['请输入大于零的有效尺寸与重量。'],volume:null,clearance:null}
 const availableHeight=layout==='double'?DEMO.lowerHeight:DEMO.height
 // Only the demonstrated upright orientation is checked. No packing or structural solver.
 if(length+DEMO.clearance>DEMO.length||width+DEMO.clearance>DEMO.width)reasons.push('长或宽超出示例货舱净尺寸（含 80 mm 预留）。')
 if(length+DEMO.clearance>DEMO.tailLength||width+DEMO.clearance>DEMO.tailWidth)reasons.push('当前朝向超出示例尾板面积（1.97 × 2.36 m，含预留）；未验证旋转或外悬装载。')
 if(height+DEMO.clearance>availableHeight)reasons.push(layout==='double'?'家具高于示例下层净高，请改用通高区。':'家具高于示例通高净高。')
 if(mass>DEMO.tailLift)reasons.push('单件重量超过示例尾板限值 300 kg。')
 const existingMass=layout==='double'?110:0
 if(mass+existingMass>DEMO.payload)reasons.push('含示例上层家具的总重量超过示例载荷 800 kg。')
 return {ok:reasons.length===0,reasons,volume:length*width*height,clearance:availableHeight-height,existingMass}
}
