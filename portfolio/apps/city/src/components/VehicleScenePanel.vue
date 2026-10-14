<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { createVehicleScene } from '../vehicle/vehicleScene.js'
import type { DeliveryPhase } from '../vehicle/types'
import { deliveryAnimation } from '../vehicle/deliveryAnimation'
const props=defineProps<{phase:DeliveryPhase;progress:number;playing:boolean;distance:number}>()
const emit=defineEmits<{ready:[];failed:[message:string]}>()
const host=ref<HTMLElement|null>(null),error=ref(''),cutaway=ref(true),expanded=ref(false)
const annotations=ref<ReturnType<ReturnType<typeof createVehicleScene>['annotations']>>([])
const operation=computed(()=>deliveryAnimation(props.phase,props.progress))
let scene:ReturnType<typeof createVehicleScene>|null=null,frame=0
function render(){
  if(!scene)return
  scene.render(operation.value.pose,{layout:'double',fleet:'clearance',item:'sofa',cutaway:cutaway.value,showSafety:true,latched:false,intrusion:false,distance:props.distance})
  if(expanded.value)annotations.value=scene.annotations()
  frame=requestAnimationFrame(render)
}
onMounted(()=>{
  try{scene=createVehicleScene(host.value!);render();emit('ready')}
  catch(cause){error.value=cause instanceof Error?cause.message:'三维车辆初始化失败';scene?.dispose();scene=null;emit('failed',error.value)}
})
onUnmounted(()=>{cancelAnimationFrame(frame);scene?.dispose();scene=null})
</script>
<template>
  <section class="vehicle-panel" :class="{expanded}" aria-label="三维车辆作业近景">
    <header><div><small>waste_go / 概念车辆模型</small><strong>{{operation.label}}<span v-if="!playing"> · 已暂停</span></strong></div><button @click="expanded=!expanded">{{expanded?'缩小近景':'放大近景'}}</button></header>
    <div ref="host" class="vehicle-stage"><p v-if="error" class="scene-error">三维车辆加载失败：{{error}}</p><svg v-if="expanded" class="annotations" aria-hidden="true"><g v-for="a in annotations.filter(a=>a.visible)" :key="a.id"><line :x1="a.x" :y1="a.y" :x2="a.x+a.dx" :y2="a.y+a.dy"/><circle :cx="a.x" :cy="a.y" r="4"/><rect :x="a.x+a.dx-8" :y="a.y+a.dy-20" :width="a.label.length*12+16" height="26" rx="3"/><text :x="a.x+a.dx" :y="a.y+a.dy-3">{{a.label}}</text></g></svg></div>
    <footer><button @click="scene?.view('hero')">全车</button><button @click="scene?.view('side')">侧面</button><button @click="scene?.view('rear')">尾板</button><button @click="scene?.view('front')">相机</button><button :aria-pressed="cutaway" @click="cutaway=!cutaway">{{cutaway?'关闭剖视':'打开剖视'}}</button><span>拖动旋转 · 滚轮缩放</span></footer>
  </section>
</template>
<style scoped>
.vehicle-panel{width:100%;height:100%;display:flex;flex-direction:column;background:#18232e;color:#dbeef5;border:1px solid #476475;border-radius:12px;overflow:hidden;box-shadow:0 20px 60px #0005}
.vehicle-panel header,.vehicle-panel footer{display:flex;align-items:center;gap:8px;padding:10px 14px;background:#0b1d29;flex-shrink:0}
.vehicle-panel header{justify-content:space-between}.vehicle-panel header div{display:grid;gap:5px}.vehicle-panel small{font-size:10px;letter-spacing:.13em;color:#7ea8ba}.vehicle-panel strong{font-size:14px}.vehicle-panel strong span{font-size:11px;color:#e8c183}
.vehicle-panel button{padding:6px 10px;border:1px solid #456472;border-radius:6px;background:#183443;color:#cfedfa;font-size:11px;cursor:pointer}.vehicle-panel button:hover{background:#275063}.vehicle-panel button[aria-pressed=true]{border-color:#75dcf3}
.vehicle-stage{flex:1;position:relative;min-height:0}.vehicle-stage :deep(canvas){display:block;width:100%;height:100%}.vehicle-panel footer span{margin-left:auto;font-size:10px;color:#85a6b5}.scene-error{padding:20px;color:#ffc8a2}
.vehicle-panel.expanded{position:fixed;inset:90px 8vw 104px;width:auto;height:auto;z-index:20}
.annotations{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.annotations line,.annotations circle{stroke:#78b5c4;fill:#247084}.annotations rect{fill:#142a39;stroke:#446577}.annotations text{fill:#d3ebf4;font-size:12px}
@media(max-width:800px){.vehicle-panel header,.vehicle-panel footer{padding:7px 10px}.vehicle-panel footer span{display:none}.vehicle-panel.expanded{inset:72px 8px 120px}.vehicle-panel strong{font-size:12px}}
</style>
