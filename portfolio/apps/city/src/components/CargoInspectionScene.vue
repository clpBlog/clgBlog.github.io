<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { createVehicleScene } from '../vehicle/vehicleScene.js'
import type { CargoInspection } from '../vehicle/types'
import { cargoLoadingPose } from '../vehicle/cargoPreview'
const props = defineProps<{ inspection: CargoInspection; dimensionSource?: string; previewNote?: string }>()
const host = ref<HTMLElement | null>(null), error = ref('')
const view = ref<'hero' | 'rear' | 'top' | 'sensor' | 'cargo'>('hero')
const views = [{ id: 'hero', label: '全车剖视' }, { id: 'cargo', label: '物品跟随近景' }, { id: 'rear', label: '尾板对接' }, { id: 'top', label: '货位俯视' }, { id: 'sensor', label: '车尾验货视角' }] as const
const progress = ref(0), playing = ref(false)
const phase = ref('等待播放装载演示')
let scene: ReturnType<typeof createVehicleScene> | null = null, frame = 0, previousTime = 0, lastFrame = 0
function setView(value: typeof view.value) { view.value = value; scene?.view(value) }
function reset() { playing.value = false; progress.value = 0; phase.value = '等待播放装载演示' }
function play() { if (progress.value >= 1) progress.value = 0; playing.value = !playing.value }
function scrub(event: Event) { playing.value = false; progress.value = Number((event.target as HTMLInputElement).value) / 100 }
function render(now = performance.now()) {
  if (document.hidden || now-lastFrame<33) { frame=requestAnimationFrame(render); return }; lastFrame=now
  const delta = previousTime ? Math.min((now - previousTime) / 1000, .08) : 0; previousTime = now
  if (playing.value) { progress.value = Math.min(1, progress.value + delta / 12); if (progress.value >= 1) playing.value = false }
  const pose = cargoLoadingPose(progress.value, { x: 0, z: 0 })
  phase.value = !props.inspection.category && !props.inspection.photo ? '选择照片后展示物品' : progress.value === 0 && !playing.value ? '等待播放装载演示' : props.inspection.photo && progress.value >= .9 && progress.value < 1 ? '放置到位' : pose.stage
  scene?.inspectCargo({ ...props.inspection, progress: progress.value })
  scene?.render({ lift: pose.lift, inward: 0, fold: 0, closed: 0, secured: false, travel: 0, driveAllowed: false },
    { layout: 'full', fleet: 'clearance', item: 'sofa', cutaway: true, showSafety: false, latched: false, intrusion: false })
  frame = requestAnimationFrame(render)
}
watch(() => props.inspection, reset, { deep: true })
onMounted(() => {
  try { scene = createVehicleScene(host.value!); scene.inspectCargo(props.inspection); render() }
  catch (cause) { error.value = cause instanceof Error ? cause.message : '无法加载三维车辆'; scene?.dispose(); scene = null }
})
onUnmounted(() => { cancelAnimationFrame(frame); scene?.dispose() })
</script>
<template>
  <section class="cargo-scene" aria-label="原版车辆货位预览">
    <div class="scene-label"><span>waste_go / {{ inspection.model3dUrl ? '合成模型 · 三维预览' : inspection.photo ? '上传照片 · 2.5D 预览' : '家具模板预览' }}</span><span>三维模拟 · 非实时摄像头</span></div>
    <div ref="host" class="canvas-host"><p v-if="error" role="alert">{{ error }}。仍可在下方货位图检查分配结果。</p></div>
    <div v-if="view === 'sensor'" class="camera-hud" aria-hidden="true"><span>REAR CAMERA / SIMULATED</span><i></i><span>货位边界来自演示配置</span></div>
    <nav aria-label="车辆观察角度"><button v-for="v in views" :key="v.id" :aria-pressed="view === v.id" @click="setView(v.id)">{{ v.label }}</button></nav>
    <div class="load-controls">
      <div class="load-title"><strong>{{ phase }}</strong><span>{{ Math.round(progress * 100) }}%</span></div>
      <input aria-label="装载演示进度" type="range" min="0" max="100" step="1" :value="progress * 100" :disabled="!inspection.selected || !!error" @input="scrub">
      <div class="load-buttons"><button :disabled="!inspection.selected || !!error" @click="play">{{ playing ? '暂停装载' : progress >= 1 ? '重新播放装载' : '播放装载演示' }}</button><button :disabled="!inspection.category" @click="reset">重置</button><span>{{ dimensionSource }}</span></div>
      <p v-if="previewNote" class="preview-note">{{ previewNote }}</p>
    </div>
    <p class="scene-note">{{ inspection.model3dUrl ? '程序化合成外形（非 AI 生成结果）：按演示外廓缩放并沿装载路径移动，不用于尺寸、重量或预约核验。人工辅助上尾板 → 升降 → 入仓。' : inspection.photo ? '原图立体卡片：保留背景，正反面使用同一照片，厚度仅为显示效果；不是物品的真实三维形状。人工辅助上尾板 → 升降 → 入仓。' : '类别模板，非照片三维重建。人工辅助上尾板 → 升降 → 推入 → 示意固定；不代表车辆可自主搬运。' }}</p>
  </section>
</template>
<style scoped>
.load-controls{margin:4px 18px 14px;padding:14px;background:#10252e;border:1px solid #34505b;border-radius:10px}.load-title{display:flex;justify-content:space-between;font-size:12px;color:#bce5dc}.load-title span{font-variant-numeric:tabular-nums;color:#85b6ac}.load-controls input{width:100%;accent-color:#6ddfc0;margin:12px 0}.load-buttons{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.load-buttons span{font-size:10px;color:#c3b786;margin-left:auto}.load-controls button:disabled{opacity:.4;cursor:not-allowed}.preview-note{font-size:11px;line-height:1.7;color:#98b6bf;margin-bottom:0}
.cargo-scene{position:relative;background:#18232e;border-radius:16px;overflow:hidden;color:#c6e4ed}.scene-label{display:flex;justify-content:space-between;padding:16px 18px;font-size:11px;gap:12px;background:#10212f}.scene-label span:last-child{color:#93b0bd}.canvas-host{height:390px;position:relative}.canvas-host :deep(canvas){display:block}.canvas-host p{padding:24px}.cargo-scene nav{display:flex;flex-wrap:wrap;gap:8px;padding:12px 18px}.cargo-scene button{color:#b9d8e4;background:#203847;border:1px solid #48606d;border-radius:7px;padding:9px 12px;cursor:pointer}.cargo-scene button[aria-pressed=true]{color:#87f4d7;border-color:#87f4d7;background:#204941}.scene-note{font-size:11px;color:#a2bcc8;padding:0 18px 14px;margin:0}.camera-hud{pointer-events:none;position:absolute;inset:75px 24px 125px;display:flex;flex-direction:column;justify-content:space-between;font-size:10px;color:#83edc6;border:1px solid #83edc655;padding:12px}.camera-hud i{align-self:center;width:40px;height:40px;border:1px solid #83edc6;border-radius:50%}@media(max-width:700px){.canvas-host{height:290px}.scene-label{font-size:10px;padding:12px}.cargo-scene button{padding:8px;font-size:11px}}
</style>
