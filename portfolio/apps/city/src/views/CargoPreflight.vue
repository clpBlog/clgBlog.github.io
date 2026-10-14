<script setup lang="ts">
import { computed, nextTick, onUnmounted, reactive, ref, shallowRef, watch } from 'vue'
import CargoInspectionScene from '../components/CargoInspectionScene.vue'
import { recognizeCargo, checkCargo, createCargoModel, getCargoModel, updateCargoModelTitle, cargoApiUrl, isModelStillGenerating, type Recognition, type ServerCheck, type Model3DTask } from '../api/cargoRecognition'
import { assessCargo, CARGO_SLOTS, CATEGORY_LABELS, DEMO_RULES, type CargoInput, type Occupancy, type CargoResult } from '../vehicle/bookingRules'
import type { CargoInspection } from '../vehicle/types'
import { planCargoPreview } from '../vehicle/cargoPreview'

const item = reactive<CargoInput>({ category: '', length: 0, width: 0, height: 0, weight: 0, confirmed: false, groundReady: false, needsDismantling: false, stableBase: false })
const occupied = reactive<Occupancy>({}), token = ref(''), file = ref<File | null>(null), preview = ref('')
const picker = ref<HTMLInputElement | null>(null), recognition = ref<Recognition | null>(null), serverCheck = ref<ServerCheck | null>(null)
const busy = ref<'recognize' | 'check' | ''>(''), error = ref(''), sample = ref(''), draft = ref(''), notice = ref('')
const measurementsOpen = ref(false)
const photoSurface = shallowRef<HTMLCanvasElement>()
const modelTask = ref<Model3DTask | null>(null), modelBusy = ref(false), modelNotice = ref(''), modelError = ref('')
let controller: AbortController | null = null, modelController: AbortController | null = null, requestVersion = 0, modelVersion = 0, fileVersion = 0, applyingSample = false
const statusText = { incomplete: '等待补齐资料', review: '需要人工核对', mover: '转师傅评估', full: '请更换车次', eligible: '通过演示预检' }
const localResult = computed<CargoResult>(() => {
  const result = assessCargo(item, DEMO_RULES, occupied), r = recognition.value
  if (!r || result.status === 'incomplete') return result
  if (r.needsDismantling === 'yes') return { status: 'mover', reasons: ['照片提示可能需要拆卸，请师傅核对后重新预检。'] }
  if (r.objectCount !== 1 || r.reviewReasons.length || r.category === 'other' || r.needsDismantling === 'unknown' || r.category !== item.category) {
    return { status: 'review', reasons: ['识别存在待核对事项，需人工确认。', ...r.reviewReasons] }
  }
  return result
})
const result = computed(() => serverCheck.value?.result || localResult.value)
const cargoPreview = computed(() => planCargoPreview({ ...item, category: photoSurface.value && recognition.value ? recognition.value.category : item.category }, occupied, !!photoSurface.value))
const previewNote = computed(() => {
  const p = cargoPreview.value
  if (!p) return '选择照片即可生成照片立体卡片，也可用下方示例体验装载。'
  if (!p.fitting.slot) return `此外廓暂不能演示入仓：${p.fitting.reasons[0]} 物品保留在车外。`
  if (photoSurface.value) return `${modelTask.value?.status === 'ready' ? 'AI 三维外形' : '使用你上传的照片'}${recognition.value ? `（${recognition.value.name}）` : '，尚未识别'}，预览移入 ${p.fitting.slot.id} 位。${p.measured ? '金框按填写外廓' : '金框为假设演示空间'} ${p.dimensions.length} × ${p.dimensions.width} × ${p.dimensions.height} cm；外形与照片比例不用于测量，动画不代表可预约。`
  return `${p.measured ? '按填写外廓' : '按类别模板'} ${p.dimensions.length} × ${p.dimensions.width} × ${p.dimensions.height} cm 预览至 ${p.fitting.slot.id} 位。未填重量时用模板载荷演示；播放不代表通过预约审核。`
})
const inspection = computed<CargoInspection>(() => ({
  photo: photoSurface.value,
  model3dUrl: modelTask.value?.status === 'ready' && modelTask.value.modelUrl ? cargoApiUrl(modelTask.value.modelUrl) : undefined,
  onModelError: () => {
    if (modelTask.value?.status === 'ready') modelTask.value = { ...modelTask.value, status: 'failed' }
    modelError.value = '三维模型无法在此浏览器加载，已继续使用照片 2.5D 预览。'
  },
  slots: CARGO_SLOTS, occupied: Object.keys(occupied), selected: cargoPreview.value?.fitting.slot?.id,
  category: cargoPreview.value?.category, rotated: cargoPreview.value?.fitting.rotated,
  dimensions: cargoPreview.value?.dimensions,
}))
const dimFields = [{ key: 'length', label: '外廓长', unit: 'cm' }, { key: 'width', label: '外廓宽', unit: 'cm' }, { key: 'height', label: '外廓高', unit: 'cm' }, { key: 'weight', label: '总重量', unit: 'kg' }] as const
function cancel() { requestVersion++; controller?.abort(); controller = null; busy.value = '' }
function stopModel() { modelVersion++; modelController?.abort(); modelController = null; modelBusy.value = false }
const pause = (milliseconds: number) => new Promise(resolve => window.setTimeout(resolve, milliseconds))
async function generateModel() {
  if (!file.value || modelBusy.value) return
  stopModel(); modelTask.value = null; modelError.value = ''; modelNotice.value = '正在提交混元生 3D…'
  const version = modelVersion, abort = new AbortController(); modelController = abort; modelBusy.value = true
  try {
    let task = await createCargoModel(file.value, token.value, abort.signal, recognition.value?.name)
    if (version !== modelVersion) return
    modelTask.value = task; modelNotice.value = '正在生成三维预览，通常 1～5 分钟，照片装载动画仍可使用。'
    const deadline = Date.now() + 480000
    while (task.status === 'queued' || task.status === 'generating') {
      if (Date.now() >= deadline) throw new Error('三维生成超过 8 分钟仍未完成，照片预览仍可继续使用。')
      await pause(2500)
      if (version !== modelVersion) return
      try {
        task = await getCargoModel(task.id, token.value, abort.signal)
      } catch (cause) {
        if (isModelStillGenerating(cause)) {
          modelNotice.value = '三维任务仍在生成，网关等待超时，正在继续查询…'
          continue
        }
        throw cause
      }
      if (version !== modelVersion) return
      modelTask.value = task
    }
    if (task.status === 'ready') modelNotice.value = '已加载 AI 三维预览，可播放同一条装载动画。'
    else modelError.value = task.message || '三维生成失败，继续使用照片 2.5D 预览。'
  } catch (cause) {
    if (version === modelVersion && !(cause instanceof DOMException && cause.name === 'AbortError')) modelError.value = cause instanceof Error ? cause.message : '三维生成失败，继续使用照片 2.5D 预览。'
  } finally { if (version === modelVersion) { modelBusy.value = false; modelController = null } }
}
function invalidate() { if (busy.value === 'check') cancel(); serverCheck.value = null; draft.value = '' }
watch([item, occupied, token], invalidate, { deep: true, flush: 'sync' })
watch(() => [item.category, item.length, item.width, item.height, item.weight], () => {
  if (!applyingSample) item.confirmed = false
}, { flush: 'sync' })
watch(token, () => { if (busy.value) cancel() }, { flush: 'sync' })
function clearPhoto() {
  fileVersion++; cancel(); stopModel(); if (preview.value) URL.revokeObjectURL(preview.value)
  preview.value = ''; photoSurface.value = undefined; file.value = null; recognition.value = null; error.value = ''; invalidate()
  modelTask.value = null; modelNotice.value = ''; modelError.value = ''
  if (picker.value) picker.value.value = ''
}
async function selectPhoto(event: Event) {
  const selected = (event.target as HTMLInputElement).files?.[0]
  if (!selected) return
  clearPhoto(); sample.value = ''; notice.value = ''; measurementsOpen.value = false
  Object.assign(item, { category: '', length: 0, width: 0, height: 0, weight: 0, groundReady: false, needsDismantling: false, stableBase: false, confirmed: false })
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(selected.type) || selected.size > 5 * 1024 * 1024 || !selected.size) { error.value = '请选择不超过 5 MB 的 JPG、PNG 或 WebP 图片。'; return }
  const version = fileVersion, url = URL.createObjectURL(selected), img = new Image()
  img.src = url
  try {
    await img.decode()
    if (version !== fileVersion) { URL.revokeObjectURL(url); return }
    if (img.naturalWidth * img.naturalHeight > 40000000) throw new Error('图片像素过大，请缩小到 4000 万像素以内。')
    const canvas = document.createElement('canvas'), scale = Math.min(1, 1024 / Math.max(img.naturalWidth, img.naturalHeight))
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale)); canvas.height = Math.max(1, Math.round(img.naturalHeight * scale))
    const context = canvas.getContext('2d')
    if (!context) throw new Error('照片预览无法生成')
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
    preview.value = url; file.value = selected; photoSurface.value = canvas
    notice.value = '本地照片卡片已生成，可播放装载；请手动确认物品类别与运输条件。'
  } catch (cause) { URL.revokeObjectURL(url); if (version === fileVersion) error.value = cause instanceof Error && cause.message.includes('像素') ? cause.message : '图片无法打开，请更换文件。' }
}
async function run(kind: 'recognize' | 'check') {
  if (kind === 'recognize' && !file.value) return
  cancel(); error.value = ''; notice.value = ''; draft.value = ''; serverCheck.value = null
  const version = requestVersion, abort = new AbortController(); controller = abort; busy.value = kind
  let timedOut = false
  const timeout = window.setTimeout(() => { timedOut = true; abort.abort() }, kind === 'recognize' ? 100000 : 15000)
  try {
    if (kind === 'recognize') {
      const response = await recognizeCargo(file.value!, token.value, abort.signal)
      if (version !== requestVersion) return
      recognition.value = response; item.category = response.category; item.needsDismantling = response.needsDismantling === 'yes'; item.confirmed = false
      if (modelTask.value?.id && response.name) {
        try {
          const named = await updateCargoModelTitle(modelTask.value.id, token.value, abort.signal, response.name)
          if (version === requestVersion) modelTask.value = { ...modelTask.value, ...named }
        } catch { /* 标题补写失败不影响识别结果 */ }
      }
    } else {
      const response = await checkCargo({ ...item }, { ...occupied }, token.value, abort.signal, recognition.value?.recognitionId)
      if (version !== requestVersion) return
      serverCheck.value = response
    }
  } catch (cause) {
    if (version === requestVersion) error.value = timedOut ? '请求超时，未产生结果。可以重试或继续本地手动预检。' : cause instanceof Error ? cause.message : '请求失败，请重试。'
  } finally { clearTimeout(timeout); if (version === requestVersion) { busy.value = ''; controller = null } }
}
async function loadSample(oversize: boolean) {
  measurementsOpen.value = true
  applyingSample = true
  try {
    clearPhoto(); Object.keys(occupied).forEach(k => delete occupied[k]); notice.value = ''
    Object.assign(item, {
      category: oversize ? 'sofa' : 'cabinet', length: oversize ? 210 : 80, width: oversize ? 95 : 50, height: 80, weight: oversize ? 65 : 20,
      groundReady: true, needsDismantling: false, stableBase: true, confirmed: true,
    })
    sample.value = oversize ? '超限沙发 · 合成测试数据' : '合格小柜 · 合成测试数据'
    await nextTick()
    item.confirmed = true
  } finally { applyingSample = false }
}
function toggleSlot(id: string) { if (occupied[id] !== undefined) delete occupied[id]; else occupied[id] = 20 }
function chairSample() {
  clearPhoto(); measurementsOpen.value = false
  Object.keys(occupied).forEach(k => delete occupied[k])
  Object.assign(item, { category: 'chair', length: 0, width: 0, height: 0, weight: 0, confirmed: false, groundReady: false, needsDismantling: false, stableBase: false })
  sample.value = '灰色扶手椅 · 类别模板体验'; notice.value = '已生成简化椅子，点击右侧“播放装载演示”。预约尺寸仍待确认。'
}
function assessmentDraft() {
  const valid = (n: number) => Number.isFinite(n) && n > 0 ? n : null
  draft.value = JSON.stringify({ project: 'waste_go', mode: 'simulation', type: '师傅评估草稿', createdAt: new Date().toISOString(),
    name: recognition.value?.name || CATEGORY_LABELS[item.category || 'other'], category: item.category || 'other',
    measurements: { length: valid(item.length), width: valid(item.width), height: valid(item.height), weight: valid(item.weight) },
    measurementsConfirmed: item.confirmed, needsDismantling: item.needsDismantling, groundReady: item.groundReady,
    recognition: recognition.value ? { name: recognition.value.name, observations: recognition.value.observations, reviewReasons: recognition.value.reviewReasons, needsDismantling: recognition.value.needsDismantling } : null,
    photoName: file.value?.name || null, pending: ['人工核对搬运通道、拆卸及固定条件', ...(!item.confirmed ? ['尺寸与重量待现场或规格表核实'] : [])],
    note: '未发送给师傅；照片仅在当前页面，导出记录不包含照片。null 代表待确认，不使用演示模板尺寸。',
  }, null, 2)
  notice.value = '评估草稿已生成，可在下方结果区域下载；未知尺寸标记为待确认。'
}
function manual() { clearPhoto(); item.confirmed = false; sample.value = ''; notice.value = '已切换手动预检，请重新核对尺寸、类别和交收条件。' }
function makeDraft() {
  const r = result.value
  draft.value = JSON.stringify({ project: 'waste_go', mode: 'simulation', createdAt: new Date().toISOString(),
    type: r.status === 'eligible' ? '模拟预约草稿' : '师傅评估草稿',
    validation: serverCheck.value ? `服务器规则 ${serverCheck.value.ruleVersion}` : '本地演示规则，未经过服务器核验',
    item: { ...item }, slot: r.slot?.id || null, rotated: r.rotated || false, occupied: { ...occupied }, reasons: r.reasons,
    note: '仅演示；未提交订单、锁定货位或通知师傅。尺寸由填写者提供，货位占用为示例。',
  }, null, 2)
}
function downloadDraft() {
  const url = URL.createObjectURL(new Blob([draft.value], { type: 'application/json' })), a = document.createElement('a')
  a.href = url; a.download = 'waste_go_preflight_draft.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
}
function refreshPage() { window.location.reload() }
onUnmounted(clearPhoto)
</script>

<template>
  <main class="preflight">
    <header class="page-heading"><div><div class="eyebrow">waste_go <span>/ CARGO CHECK</span></div><h1>先验货，再安排出发。</h1><p>手动预检 → 看装载方式 → 生成模拟草稿</p></div><div class="heading-links"><RouterLink to="/recycle/models/play" class="back">装载动画回放 ↗</RouterLink><RouterLink to="/recycle/models" class="back">合成三维模型库 ↗</RouterLink><RouterLink to="/recycle/clearance" class="back">返回清运订单 ↗</RouterLink></div></header>
    <div class="concept"><span class="dot"></span>公开演示：使用本地规则与合成样例；未连接识别或生成服务，车辆、货位占用和预约均为模拟。</div>
    <div class="workspace">
      <div class="inputs">
        <section class="card">
          <div class="section-title"><span class="step">01</span><h2>看看要运什么</h2><span class="tag">单件物品</span></div>
          <label class="upload" :class="{ filled: preview }"><input ref="picker" type="file" accept="image/jpeg,image/png,image/webp" aria-label="选择物品照片" @change="selectPhoto"><img v-if="preview" :src="preview" alt="待验货物品预览"><template v-else><span class="upload-icon">＋</span><strong>选择一张物品照片</strong><small>JPG / PNG / WebP · 最大 5 MB</small></template><span v-if="preview" class="replace">点击更换照片</span></label>
          <p v-if="photoSurface" class="hint">右侧已按当前照片生成 2.5D 卡片，上传新照片即替换；无需先填写尺寸。</p><p class="hint">本展示版仅在浏览器中预览所选照片，不上传、不保存；可直接使用下方合成样例。</p>
          <div class="actions"><button class="primary" disabled @click="run('recognize')">{{ busy === 'recognize' ? '正在识别物品…' : '识别服务未连接' }}</button><button disabled @click="generateModel">{{ modelBusy ? '正在生成三维预览…' : '生成服务未连接' }}</button><button v-if="busy || modelBusy" @click="cancel(); stopModel(); notice = '已取消等待，未采用本次结果。'">取消等待</button><button v-if="modelBusy" @click="refreshPage">刷新页面</button><button v-else-if="file && !busy" @click="manual">改为手动预检</button></div>
          <p v-if="modelNotice" class="hint" role="status">{{ modelNotice }}</p><p v-if="modelError" class="error" role="alert">{{ modelError }}</p><p v-if="file" class="hint">照片卡片仅用于画面预览，不代表真实三维形状，也不用于尺寸、重量或预约核验。</p>
          <div v-if="recognition" class="recognition"><div><span class="tag">Gemini 返回</span><strong>{{ recognition.name }}</strong></div><p>候选类别：{{ CATEGORY_LABELS[recognition.category || 'other'] }} · 待运主体：{{ recognition.objectCount || '无法确认' }}</p><ul><li v-for="text in recognition.observations" :key="text">{{ text }}</li><li v-for="text in recognition.reviewReasons" :key="text">待核对：{{ text }}</li></ul><p class="hint">识别不测量尺寸或重量；未知拆卸条件、多个主体或疑点将转人工核对。</p></div>
          <div v-if="error" role="alert" class="error">{{ error }}</div><p v-if="notice" role="status" class="hint">{{ notice }}</p>
          <div class="samples"><span>快速体验</span><button data-testid="sample-chair" @click="chairSample">椅子装载体验</button><button data-testid="sample-cabinet" @click="loadSample(false)">合格小柜</button><button data-testid="sample-sofa" @click="loadSample(true)">超限沙发</button></div><p v-if="sample" class="sample-note" data-testid="sample-note">{{ sample }}，未调用图片识别。</p>
        </section>
        <section class="card">
          <div class="section-title"><span class="step">02</span><h2>选择下一步</h2></div><p class="hint">先看三维装载方式，无需先量尺寸。想预约无人车，再核对参数；不清楚尺寸或需要搬运，可直接生成师傅评估草稿。</p>
          <p v-if="recognition && item.category !== recognition.category" class="error" role="status">手选类别与照片识别不一致，预约将转人工核对。右侧继续使用原照片，演示外廓参考识别类别。</p><fieldset :disabled="busy === 'recognize'"><label class="field">确认物品类别<select v-model="item.category"><option value="" disabled>请选择</option><option v-for="(label, key) in CATEGORY_LABELS" :key="key" :value="key">{{ label }}</option></select></label>
            <div class="next-actions"><button class="primary" @click="measurementsOpen = !measurementsOpen" :aria-expanded="measurementsOpen">{{ measurementsOpen ? '收起尺寸确认' : '我要预约无人车 · 确认尺寸' }}</button><button @click="assessmentDraft">尺寸不清楚／需要师傅</button></div><div v-if="measurementsOpen" class="measurements-panel"><div class="dimensions"><label v-for="field in dimFields" :key="field.key">{{ field.label }} <span>{{ field.unit }}</span><input v-model.number="item[field.key]" type="number" min="0.1" step="0.1" :aria-label="`${field.label}（${field.unit}）`" @input="item.confirmed = false"></label></div>
            <p class="hint">填写包含包装、承托板的外廓尺寸及总重量；照片无法可靠推算这些数值。</p>
            <label class="check"><input v-model="item.groundReady" type="checkbox"><span>可自行送到地面交收点，且有人协助放上尾板</span></label>
            <label class="check"><input v-model="item.needsDismantling" type="checkbox"><span>需要师傅拆卸</span></label>
            <label class="check"><input v-model="item.stableBase" type="checkbox"><span>已确认物品可稳定承托，并有合适包装与固定条件</span></label>
            <label class="check confirm"><input v-model="item.confirmed" type="checkbox"><span>已核对类别、实测尺寸与重量（示例体验可按给定数据确认）</span></label>
            </div>
          </fieldset>
        </section>
      </div>
      <div class="visuals">
        <CargoInspectionScene :inspection="inspection" :dimension-source="modelTask?.status === 'ready' ? 'AI 外形 · 尺寸仍需核实' : cargoPreview?.measured ? '填写外廓 · 仍需核实' : photoSurface ? '照片卡片 · 非真实尺寸' : '模板尺寸 · 仅作演示'" :preview-note="previewNote" />
        <section class="card slots-card"><div class="section-title"><span class="step">03</span><h2>车内货位预览</h2><span class="tag">下层 · 4 个示例位</span></div><div class="slots-layout"><div class="slot-map"><span class="direction">车头 ↑</span><div class="slot-grid"><button v-for="slot in CARGO_SLOTS" :key="slot.id" :data-testid="`slot-${slot.id}`" :class="{ occupied: occupied[slot.id], selected: inspection.selected === slot.id }" :aria-pressed="!!occupied[slot.id]" @click="toggleSlot(slot.id)"><b>{{ slot.id }}</b><span>{{ occupied[slot.id] ? '示例占用 · 20 kg' : inspection.selected === slot.id ? '演示目标位' : '空闲' }}</span></button></div><span class="direction">车尾 / 升降尾板</span></div><div class="slot-explain"><strong>按入口与装载通道筛选</strong><p>先检查车门、尾板，再找容得下的空货位。后排被占用时，不分配同列前排。</p><p class="hint">点击货位可切换示例占用。有照片时显示原图立体卡片，无照片时显示类别模板；填写尺寸后更新金框外廓。演示目标位与正式预检结论分开显示。</p></div></div></section>
        <section class="decision card" :class="result.status" data-testid="decision" :data-status="result.status" :data-slot="result.slot?.id || ''" aria-live="polite"><div class="section-title"><span class="step">04</span><h2>{{ result.status === 'incomplete' && !measurementsOpen ? '先看装载，再确认预约' : statusText[result.status] }}</h2><span class="tag">{{ serverCheck ? '演示规则已核验' : '本地预览' }}</span></div><p v-if="result.status === 'incomplete' && !measurementsOpen" class="hint">动画可以先体验。无人车预约需要尺寸与重量，师傅评估可暂不填写。</p><ul v-else><li v-for="reason in result.reasons" :key="reason">{{ reason }}</li></ul><div class="actions"><button :disabled="!!busy || result.status === 'incomplete'" @click="run('check')">{{ busy === 'check' ? '正在核验…' : '按演示规则核验' }}</button><button v-if="result.status === 'eligible'" class="primary" :disabled="!!busy" @click="makeDraft">生成模拟预约草稿</button><button v-if="result.status === 'mover' || result.status === 'review'" class="primary" :disabled="!!busy" @click="assessmentDraft">生成师傅评估草稿</button></div><p class="hint">草稿只保存在当前页面，不提交订单、不锁定货位、不发送通知。</p><div v-if="draft" class="draft"><strong>草稿已生成</strong><button @click="downloadDraft">下载 JSON 记录</button><pre>{{ draft }}</pre></div></section>
        <details class="card rules"><summary>查看演示规则与能力边界</summary><p>当前单件上限：<b>120 × 70 × 90 cm / 30 kg</b>；仅允许水平转向，不允许倾倒。</p><p>尾板：180 × 210 cm / 60 kg；入口：210 × 115 cm；每个货位：180 × 90 × 110 cm / 40 kg；整车示例载荷：100 kg；水平每侧余量：5 cm，高度余量：5 cm。</p><p>以上均为软件测试假设，实际车型尚未确认。通过预检不代表可自动搬下楼、自主装货、获准上路或回收站愿意接收。仍需核对搬运、固定、偏载、现场通道及接收条件。</p></details>
      </div>
    </div>
  </main>
</template>

<style scoped>
.next-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.measurements-panel{margin-top:12px;padding-top:2px}.samples{flex-wrap:wrap}
.preflight{max-width:1480px;margin:0 auto;padding:12px 8px 40px;color:#203747;font-family:Inter,"Microsoft YaHei",sans-serif}.page-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:12px 2px 24px}.heading-links{display:flex;gap:14px;flex-wrap:wrap;align-items:center}.eyebrow{font-size:19px;font-weight:800;letter-spacing:-.7px;color:#176c62}.eyebrow span{font-size:10px;letter-spacing:2px;color:#84938f;margin-left:10px}h1{font-size:29px;letter-spacing:-1px;margin:12px 0 8px}.page-heading p{font-size:13px;color:#7d8b96;margin:0}.back{color:#557771;text-decoration:none;font-size:12px}.concept{background:#e9f2ee;border:1px solid #d2e5dc;border-radius:9px;padding:12px 16px;font-size:12px;line-height:1.6;margin-bottom:20px;color:#496a5e}.dot{display:inline-block;width:6px;height:6px;background:#398b71;border-radius:50%;margin-right:8px}.workspace{display:grid;grid-template-columns:minmax(320px,.8fr) minmax(0,1.25fr);gap:20px;align-items:start}.inputs,.visuals{display:flex;flex-direction:column;gap:18px}.card{padding:22px;background:#fff;border:1px solid #e2e8e8;border-radius:14px;box-shadow:0 5px 18px #234e4010}.section-title{display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap}h2{font-size:16px;margin:0;letter-spacing:-.2px}.step{font-size:11px;font-weight:700;letter-spacing:1px;color:#59917f;background:#edf6f1;padding:6px;border-radius:6px}.tag{font-size:10px;color:#69857d;background:#eef4f2;padding:5px 8px;border-radius:5px;margin-left:auto}.upload{height:178px;border:1px dashed #a7c8be;border-radius:10px;background:#f8fbf9;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:9px;position:relative;overflow:hidden;cursor:pointer}.upload:focus-within{outline:2px solid #197d69;outline-offset:3px}.upload input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}.upload-icon{font-size:28px;color:#74a393}.upload strong{font-size:13px}.upload small{font-size:10px;color:#879990}.upload img{width:100%;height:100%;object-fit:contain;background:#f2f5f3}.replace{position:absolute;bottom:8px;right:8px;background:#183b32d9;color:white;font-size:11px;padding:6px 10px;border-radius:6px;pointer-events:none}.hint{font-size:11px;line-height:1.8;color:#7c8b92;margin:10px 0}.connection{font-size:12px;background:#f6f8f7;padding:10px 12px;border-radius:8px;margin:14px 0}.connection label{display:block;margin-top:12px}.connection input{margin-top:7px}.actions{display:flex;gap:8px;flex-wrap:wrap}button{font-family:inherit;cursor:pointer;background:white;color:#426259;border:1px solid #cbdcd5;padding:10px 13px;border-radius:8px;font-size:12px;font-weight:600;transition:background .15s}button:hover{background:#edf5f0}button:disabled{cursor:not-allowed;opacity:.45}.primary{color:#fff;background:#1a7866;border-color:#1a7866}.primary:hover{background:#176757}.recognition{margin-top:14px;border-left:3px solid #4b9b83;background:#f2f8f4;padding:12px;font-size:12px}.recognition .tag{margin-right:10px}.recognition li{margin:5px 0}.error{font-size:12px;background:#fff0ee;color:#a74333;padding:12px;border-radius:8px;margin-top:12px;line-height:1.7}.samples{display:flex;align-items:center;gap:7px;border-top:1px solid #edf0ef;margin-top:18px;padding-top:14px}.samples span{font-size:11px;color:#83958b;margin-right:auto}.samples button{font-size:11px;padding:6px 9px;border:0;background:#eef4f1}.sample-note{font-size:11px;color:#967939;margin:10px 0 0}fieldset{border:0;margin:0;padding:0;min-width:0}.field{display:block;font-size:12px}.field select{margin-top:8px}input:not([type=checkbox]):not([type=file]),select{width:100%;box-sizing:border-box;border:1px solid #d7e2dc;background:#fbfcfb;border-radius:7px;padding:10px;color:#234234;font:inherit;font-size:12px}input:focus,select:focus{outline:2px solid #70bba4;outline-offset:1px}.dimensions{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}.dimensions label{font-size:12px}.dimensions label span{float:right;color:#9aaba2;font-size:11px}.dimensions input{margin-top:7px}.check{display:flex;align-items:flex-start;gap:8px;font-size:12px;line-height:1.65;margin:14px 0}.check input{accent-color:#258571;margin:3px 0 0}.confirm{border-top:1px solid #e8edea;padding-top:16px;margin-bottom:0}.slots-layout{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center}.slot-map{max-width:300px}.direction{display:block;text-align:center;font-size:10px;letter-spacing:1px;color:#7a8f86;margin:6px}.slot-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;background:#f1f5f3;border:1px solid #dae5df;padding:9px;border-radius:10px}.slot-grid button{display:flex;align-items:center;gap:7px;border-color:#d6e2dc;font-size:10px;padding:15px 8px}.slot-grid b{font-size:16px;color:#658878}.slot-grid .occupied{background:#faecee;color:#a46d78;border-color:#e5bac4}.slot-grid .selected{background:#d9f2e5;border-color:#4baf8c;color:#176848}.slot-explain strong{font-size:13px}.slot-explain p{font-size:12px;line-height:1.8;color:#849189}.decision ul{padding-left:18px;font-size:13px;line-height:1.9}.decision.eligible{border-color:#9ecfba;background:#f9fdfb}.decision.mover,.decision.review{border-color:#e2cf9f;background:#fffdf7}.draft{margin-top:15px;font-size:12px;border-top:1px solid #dbe6de;padding-top:14px}.draft button{float:right;padding:5px 9px}.draft pre{white-space:pre-wrap;overflow-wrap:anywhere;font-size:11px;line-height:1.7;max-height:210px;overflow:auto;padding:12px;background:#edf3ef;margin-top:18px}.rules{font-size:12px;color:#7b8c83;line-height:1.9;box-shadow:none}.rules summary,.connection summary{cursor:pointer;color:#547869}.rules p:last-child{margin-bottom:0}@media(min-width:1500px){.card{padding:26px}}@media(max-width:1000px){.workspace{grid-template-columns:1fr}.inputs{display:grid;grid-template-columns:1fr 1fr;align-items:start}}@media(max-width:700px){.inputs{display:flex}.preflight{padding:0 0 24px}.page-heading{align-items:flex-start}.page-heading h1{font-size:23px}.back{font-size:10px;white-space:nowrap}.eyebrow span{display:none}.card{padding:18px}.slots-layout{grid-template-columns:1fr}.slot-map{max-width:none}.slot-explain{display:none}.workspace{gap:16px}.tag{font-size:9px}.concept{font-size:11px}}
</style>
