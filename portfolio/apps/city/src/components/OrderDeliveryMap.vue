<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, shallowRef } from 'vue'
import { LngLatBounds, Map as MapLibreMap, Marker, NavigationControl, setWorkerUrl, type GeoJSONSource } from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import { STATIONS, haversineMeters, type Station } from '../data/kowloon'
import VehicleScenePanel from './VehicleScenePanel.vue'
import { createVehicleMapLayer } from '../vehicle/vehicleMapLayer.js'
import { buildRouteMotion, type Point } from '../vehicle/routeMotion'
import { deliveryAnimation, PHASE_DURATION } from '../vehicle/deliveryAnimation'
import type { DeliveryPhase } from '../vehicle/types'
setWorkerUrl(workerUrl)
export type DeliveryOrder={id:string;remark:string;status:string;scheduleAt:string;district:string;address:string;pickupLng?:number;pickupLat?:number;contactName:string}
const props=defineProps<{order:DeliveryOrder}>()
const emit=defineEmits<{close:[]}>()
const mapHost=ref<HTMLElement|null>(null),map=shallowRef<MapLibreMap|null>(null)
const phase=ref<DeliveryPhase>('ready'),progress=ref(0),playing=ref(false),follow=ref(true)
const routeLoading=ref(true),mapReady=ref(false),sceneReady=ref(false),routeError=ref(''),sceneError=ref('')
const routeDistance=ref(0),travelled=ref(0)
let vehicleLayer:ReturnType<typeof createVehicleMapLayer>|null=null
let motion:ReturnType<typeof buildRouteMotion>|null=null
let coordinates:Point[]=[],markers:Marker[]=[]
let frame=0,lastFrame=0,disposed=false,routeController:AbortController|null=null
let resizeObserver:ResizeObserver|null=null
let buildingsVisible=true
function showBuildings(visible:boolean){
  markers.forEach(marker=>{marker.getElement().style.display=visible?'':'none'})
  if(buildingsVisible===visible||!map.value)return
  buildingsVisible=visible
  for(const layer of map.value.getStyle().layers??[])if(layer.type==='fill-extrusion')map.value.setLayoutProperty(layer.id,'visibility',visible?'visible':'none')
}
const canPlay=computed(()=>mapReady.value&&sceneReady.value&&!routeLoading.value&&!routeError.value&&!sceneError.value&&!!motion)
const operation=computed(()=>deliveryAnimation(phase.value,progress.value))
const stages:{phase:DeliveryPhase;label:string}[]=[{phase:'loading',label:'客户装货'},{phase:'driving',label:'沿路运输'},{phase:'unloading',label:'到站卸货'},{phase:'done',label:'模拟交接'}]
const phaseIndex=computed(()=>stages.findIndex(s=>s.phase===phase.value))
const hasCoordinate=computed(()=>Number.isFinite(props.order.pickupLng)&&Number.isFinite(props.order.pickupLat)&&Math.abs(props.order.pickupLng!)<=180&&Math.abs(props.order.pickupLat!)<=90)
const pickup=computed<Point>(()=>{
  if(hasCoordinate.value)return [props.order.pickupLng!,props.order.pickupLat!]
  const text=props.order.district+' '+props.order.address
  const locations:[RegExp,Point][]=[[/啟德|启德/,[114.2041,22.3098]],[/土瓜灣|土瓜湾/,[114.1882,22.3178]],[/馬頭圍|马头围/,[114.1873,22.3237]],[/何文田/,[114.1822,22.3123]],[/紅磡|红磡/,[114.1872,22.3074]],[/九龍城|九龙城/,[114.1902,22.3293]]]
  return locations.find(([pattern])=>pattern.test(text))?.[1]??[114.1915,22.3305]
})
const station=computed<Station>(()=>STATIONS.reduce((nearest,item)=>haversineMeters({lng:pickup.value[0],lat:pickup.value[1]},item)<haversineMeters({lng:pickup.value[0],lat:pickup.value[1]},nearest)?item:nearest))

function drawRoute(){
  if(!map.value)return
  const data={type:'Feature' as const,properties:{},geometry:{type:'LineString' as const,coordinates}}
  const existing=map.value.getSource('delivery-route') as GeoJSONSource|undefined
  if(existing)existing.setData(data)
  else{
    map.value.addSource('delivery-route',{type:'geojson',data})
    map.value.addLayer({id:'delivery-route-line',type:'line',source:'delivery-route',paint:{'line-color':'#27c8e5','line-width':4,'line-opacity':.7}})
  }
  markers.forEach(marker=>marker.remove());markers=[]
  for(const [point,label,color] of [[coordinates[0],'客户装货点','#ffcf63'],[coordinates[coordinates.length-1],'接收点（示意）','#67e9ab']] as [Point,string,string][]){
    const el=document.createElement('div')
    el.textContent=label
    Object.assign(el.style,{color,background:'#0b2234',border:`1px solid ${color}`,padding:'5px 9px',borderRadius:'5px',fontSize:'11px',pointerEvents:'none'})
    el.style.display=follow.value?'none':''
    markers.push(new Marker({element:el,anchor:'bottom',offset:[0,-35]}).setLngLat(point).addTo(map.value))
  }
}
async function loadRoute(){
  if(!mapReady.value)return
  pause();routeLoading.value=true;routeError.value=''
  routeController?.abort();const controller=new AbortController();routeController=controller
  const timeout=window.setTimeout(()=>controller.abort(),15000)
  try{
    const to=station.value,from=pickup.value
    const response=await fetch(`https://router.project-osrm.org/route/v1/driving/${from[0]},${from[1]};${to.lng},${to.lat}?overview=full&geometries=geojson`,{signal:controller.signal})
    if(!response.ok)throw new Error('道路路线服务暂不可用')
    const data=await response.json() as {code:string;routes?:{distance:number;geometry:{coordinates:Point[]}}[]}
    const result=data.routes?.[0]
    if(data.code!=='Ok'||!result||result.geometry.coordinates.length<2)throw new Error('没有找到可行驶路线')
    if(disposed||controller!==routeController)return
    coordinates=result.geometry.coordinates
    motion=buildRouteMotion(coordinates);routeDistance.value=result.distance
    drawRoute();reset()
  }catch(error){if(!disposed&&controller===routeController)routeError.value=error instanceof Error&&error.name!=='AbortError'?error.message:'路线请求超时，请重试'}
  finally{clearTimeout(timeout);if(!disposed&&controller===routeController)routeLoading.value=false}
}
function position(){
  const amount=phase.value==='driving'?progress.value:phase.value==='unloading'||phase.value==='done'?1:0
  return motion?.at(amount)
}
function updateVehicle(){
  const current=position()
  if(!current)return
  travelled.value=current.distance
  vehicleLayer?.update(current.point,current.bearing,operation.value.pose,{layout:'double',fleet:'clearance',item:'sofa',cutaway:true,showSafety:true,latched:false,intrusion:false,distance:current.distance})
}
function followVehicle(animate=false){
  const current=position()
  if(!map.value||!current||!follow.value)return
  showBuildings(false)
  const narrow=mapHost.value!.clientWidth<800
  const options={center:current.point,zoom:phase.value==='driving'?20.1:20.8,pitch:58,bearing:current.bearing+45,padding:{top:90,bottom:narrow?320:55,left:20,right:narrow?20:450}}
  if(animate)map.value.easeTo({...options,duration:700})
  else map.value.jumpTo(options)
}
function setPhase(next:DeliveryPhase){phase.value=next;progress.value=next==='done'?1:0;updateVehicle();followVehicle(true)}
function tick(now:number){
  if(disposed||!playing.value)return
  const delta=Math.min((now-lastFrame)/1000,.1);lastFrame=now
  progress.value=Math.min(1,progress.value+delta*1000/PHASE_DURATION[phase.value])
  updateVehicle()
  if(phase.value==='driving')followVehicle()
  if(progress.value===1){
    const next=phase.value==='loading'?'driving':phase.value==='driving'?'unloading':'done'
    setPhase(next)
    if(next==='done'){playing.value=false;return}
  }
  frame=requestAnimationFrame(tick)
}
function start(){
  if(!canPlay.value||playing.value)return
  if(phase.value==='done')reset()
  if(phase.value==='ready')setPhase('loading')
  playing.value=true;lastFrame=performance.now();frame=requestAnimationFrame(tick)
}
function pause(){playing.value=false;cancelAnimationFrame(frame)}
function reset(){pause();setPhase('ready')}
function seek(next:DeliveryPhase){if(!canPlay.value)return;pause();setPhase(next)}
function overview(){
  if(!map.value||!coordinates.length)return
  follow.value=false
  showBuildings(true)
  const bounds=coordinates.reduce((bounds,point)=>bounds.extend(point),new LngLatBounds(coordinates[0],coordinates[0]))
  map.value.fitBounds(bounds,{padding:80,maxZoom:18,duration:700,pitch:40})
}
function resumeFollow(){follow.value=true;followVehicle(true)}
function onSceneReady(){sceneReady.value=true}
function onSceneError(message:string){sceneError.value=message;pause()}
function keydown(event:KeyboardEvent){if(event.key==='Escape')emit('close')}
onMounted(()=>{
  if(!mapHost.value)return
  window.addEventListener('keydown',keydown)
  try{
    map.value=new MapLibreMap({container:mapHost.value,style:'https://tiles.openfreemap.org/styles/liberty',center:pickup.value,zoom:17,pitch:58,bearing:45,maxZoom:22})
    map.value.addControl(new NavigationControl({visualizePitch:true}),'top-left')
    map.value.on('dragstart',()=>{follow.value=false})
    map.value.once('load',()=>{
      if(disposed||!map.value)return
      try{
        map.value.setProjection({type:'mercator'})
        for(const layer of map.value.getStyle().layers??[]){
          if(layer.type==='fill-extrusion')map.value.setPaintProperty(layer.id,'fill-extrusion-opacity',.18)
        }
        vehicleLayer=createVehicleMapLayer();map.value.addLayer(vehicleLayer)
        mapReady.value=true;void loadRoute()
      }catch(error){onSceneError(error instanceof Error?error.message:'道路三维车辆加载失败')}
    })
    resizeObserver=new ResizeObserver(()=>{map.value?.resize();if(follow.value)followVehicle()});resizeObserver.observe(mapHost.value)
  }catch(error){onSceneError(error instanceof Error?error.message:'地图初始化失败')}
})
onUnmounted(()=>{disposed=true;pause();routeController?.abort();resizeObserver?.disconnect();window.removeEventListener('keydown',keydown);markers.forEach(marker=>marker.remove());map.value?.remove();map.value=null})
</script>

<template>
  <div class="delivery-overlay" role="dialog" aria-modal="true" aria-label="订单无人车运输演示">
    <div ref="mapHost" class="delivery-map"/>
    <header class="delivery-header"><button @click="emit('close')">← 返回订单</button><div><small>WASTEGO / 收运任务演示</small><h1>{{order.id}}</h1></div><span class="sim-badge">● 模拟运行</span></header>
    <aside class="task-card"><small>本次任务</small><h2>{{order.remark||'大件家具清运'}}</h2><p>{{order.address}}</p><p class="muted">{{hasCoordinate?'采用订单坐标，道路吸附停靠':'订单缺少坐标，采用所在区域示意起点'}}</p><hr><small>最近示意站点（按直线距离）</small><h3>{{station.name}}</h3><p class="muted">家具接收资格待核实 · 车辆演示使用双人沙发</p><b v-if="routeDistance">道路约 {{(routeDistance/1000).toFixed(2)}} km</b></aside>
    <div class="map-actions"><button :class="{active:follow}" @click="resumeFollow">跟随车辆</button><button :class="{active:!follow}" @click="overview">路线全览</button></div>
    <aside class="status-card"><small>当前作业</small><h2>{{operation.label}}</h2><p v-if="sceneError" role="alert">{{sceneError}}</p><p v-else-if="routeError" role="alert">{{routeError}} <button @click="loadRoute">重试路线</button></p><p v-else-if="!mapReady">正在加载道路地图…</p><p v-else-if="routeLoading">正在获取驾车路线…</p><p v-else-if="!sceneReady">正在加载原版车辆…</p><p v-else class="muted">{{playing?'播放中':phase==='done'?'演示已完成':'已暂停 · 点击播放'}} · {{Math.round(progress*100)}}%</p><div class="progress"><i :style="{width:progress*100+'%'}"/></div><div class="steps"><button v-for="(step,i) in stages" :key="step.phase" :disabled="!canPlay" :class="{active:phaseIndex===i,done:phaseIndex>i}" @click="seek(step.phase)"><span>{{i+1}}</span>{{step.label}}</button></div></aside>
    <div class="scene-container"><VehicleScenePanel :phase="phase" :progress="progress" :playing="playing" :distance="travelled" @ready="onSceneReady" @failed="onSceneError"/></div>
    <footer class="delivery-bottom"><div class="play-controls"><button class="primary" :disabled="!canPlay" @click="playing?pause():start()">{{playing?'暂停':phase==='done'?'重新播放':'播放'}}</button><button :disabled="!canPlay" @click="reset">重置</button><span>装货 → 运输 → 卸货</span></div><p>概念任务演示：车辆位置、运行状态与识别结果为模拟，不代表香港已有无人车运营。</p></footer>
  </div>
</template>

<style scoped>
.delivery-overlay{position:fixed;inset:0;z-index:100;background:#0a1720;color:#e2eff5;font-family:var(--admin-font,system-ui,sans-serif)}.delivery-map{position:absolute;inset:0}
.delivery-header{position:absolute;inset:0 0 auto;display:flex;align-items:center;gap:20px;padding:16px 24px;background:linear-gradient(180deg,#081a29f5,#081a29bb);z-index:3}.delivery-header h1{font-size:18px;margin:4px 0 0}.delivery-header small{color:#7ccede;letter-spacing:.12em;font-size:10px}.sim-badge{margin-left:auto;color:#78ebbb;font-size:12px}
.delivery-overlay button{background:#163445;color:#dbf5fc;border:1px solid #406477;border-radius:7px;padding:8px 12px;cursor:pointer;font-size:12px}.delivery-overlay button:hover{background:#275163}.delivery-overlay button:disabled{opacity:.4;cursor:not-allowed}
.task-card,.status-card{position:absolute;background:#0b2030ed;border:1px solid #436677;border-radius:12px;padding:18px;box-shadow:0 12px 40px #0002}.task-card{left:24px;top:110px;width:245px}.task-card small,.status-card small{font-size:11px;color:#85cadc}.task-card h2,.status-card h2{font-size:17px;margin:9px 0}.task-card h3{font-size:14px;margin:8px 0}.task-card p{font-size:12px;line-height:1.6;margin:8px 0}.task-card hr{border:0;border-top:1px solid #34515e;margin:16px 0}.task-card b{color:#87e4eb;font-size:12px}.muted{color:#a4bfcc;font-size:12px;line-height:1.5}
.status-card{top:110px;right:24px;width:396px}.status-card p{font-size:12px}.progress{height:4px;background:#354d5d;border-radius:3px;overflow:hidden}.progress i{display:block;height:100%;background:#66e5ca}.steps{display:flex;gap:5px;margin-top:15px}.steps button{flex:1;font-size:10px;padding:7px 2px}.steps span{display:block;margin-bottom:4px;color:#8babbb}.steps .active{border-color:#67ddf3;color:#8df8ec}.steps .done{color:#76cfb9}
.scene-container{position:absolute;right:24px;bottom:94px;width:396px;height:clamp(250px,42vh,410px);z-index:4}.map-actions{position:absolute;top:82px;left:50%;transform:translateX(-50%);display:flex;gap:8px}.map-actions .active{border-color:#70d4eb;background:#244e61}
.delivery-bottom{position:absolute;bottom:0;left:0;right:0;background:#081a29ed;border-top:1px solid #325063;padding:12px 24px;z-index:5}.play-controls{display:flex;align-items:center;gap:10px}.play-controls span{font-size:12px;color:#96b1c2}.play-controls .primary{background:#75e3ee;color:#0a2834;min-width:100px;font-weight:700}.delivery-bottom p{font-size:10px;color:#aac2cf;margin:8px 0 0}.delivery-overlay :deep(.maplibregl-ctrl-top-left){top:auto;bottom:110px}
@media(max-width:1100px) and (min-width:801px){.task-card{width:180px;padding:12px}.scene-container,.status-card{width:350px}}
@media(max-height:760px) and (min-width:801px){.status-card{top:90px;padding:12px}.scene-container{height:calc(100vh - 360px);min-height:220px}}
@media(max-width:800px){.delivery-header{padding:12px;gap:8px}.delivery-header h1{font-size:12px}.delivery-header small,.sim-badge,.task-card{display:none}.map-actions{top:65px;left:12px;transform:none}.status-card{top:105px;right:12px;width:155px;padding:9px}.status-card h2{font-size:13px}.status-card .steps{display:none}.status-card p{font-size:10px}.scene-container{right:12px;left:12px;bottom:111px;width:auto;height:235px}.delivery-bottom{padding:10px 12px}.delivery-bottom p{font-size:9px;line-height:1.4}.delivery-overlay :deep(.maplibregl-ctrl-top-left){bottom:365px}}
</style>
