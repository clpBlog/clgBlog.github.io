<script setup lang="ts">
import { computed, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import CargoInspectionScene from '../components/CargoInspectionScene.vue'
import { cargoApiUrl, listCargoModels, type Model3DTask } from '../api/cargoRecognition'
import { CARGO_SLOTS, type ItemCategory, type Occupancy } from '../vehicle/bookingRules'
import type { CargoInspection } from '../vehicle/types'
import { planCargoPreview } from '../vehicle/cargoPreview'

defineOptions({ name: 'ModelPlayback' })

const route = useRoute()
const router = useRouter()
const token = ref('')
const items = ref<Model3DTask[]>([])
const selectedId = ref('')
const error = ref('')
const loading = ref(false)
const modelBroken = ref(false)
const photoSurface = shallowRef<HTMLCanvasElement>()
const occupied = reactive<Occupancy>({})

const readyItems = computed(() => items.value.filter((item) => item.status === 'ready' && (item.modelUrl || item.hasModel)))
const selected = computed(() => readyItems.value.find((item) => item.id === selectedId.value) || null)

function guessCategory(title?: string): ItemCategory {
  const text = title || ''
  if (/椅/.test(text)) return 'chair'
  if (/沙发/.test(text)) return 'sofa'
  if (/床/.test(text)) return 'bed'
  if (/桌|台/.test(text)) return 'table'
  if (/柜/.test(text)) return 'cabinet'
  if (/箱/.test(text)) return 'box'
  return 'other'
}

const cargoPreview = computed(() => {
  if (!selected.value) return null
  return planCargoPreview({
    category: guessCategory(selected.value.title),
    length: 0, width: 0, height: 0, weight: 0,
    confirmed: false, groundReady: true, needsDismantling: false, stableBase: true,
  }, occupied, true)
})

const modelUrl = computed(() => {
  if (modelBroken.value || !selected.value) return undefined
  if (selected.value.modelUrl) return cargoApiUrl(selected.value.modelUrl)
  if (selected.value.hasModel) return cargoApiUrl(`/models/${selected.value.id}/file`)
  return undefined
})

const inspection = computed<CargoInspection>(() => ({
  photo: photoSurface.value,
  model3dUrl: modelUrl.value,
  onModelError: () => { modelBroken.value = true },
  slots: CARGO_SLOTS,
  occupied: Object.keys(occupied),
  selected: cargoPreview.value?.fitting.slot?.id,
  category: cargoPreview.value?.category,
  rotated: cargoPreview.value?.fitting.rotated,
  dimensions: cargoPreview.value?.dimensions,
}))

function photoOf(item: Model3DTask) {
  return item.photoUrl ? cargoApiUrl(item.photoUrl) : ''
}

async function loadPhoto(item: Model3DTask | null) {
  photoSurface.value = undefined
  if (!item?.photoUrl) return
  try {
    const image = new Image()
    image.src = cargoApiUrl(item.photoUrl)
    await image.decode()
    const canvas = document.createElement('canvas')
    const scale = Math.min(1, 1024 / Math.max(image.naturalWidth, image.naturalHeight))
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale))
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale))
    canvas.getContext('2d')?.drawImage(image, 0, 0, canvas.width, canvas.height)
    photoSurface.value = canvas
  } catch { /* 照片只作备用卡片 */ }
}

async function loadList() {
  loading.value = true
  error.value = ''
  try {
    items.value = await listCargoModels(token.value)
    const queryId = typeof route.query.id === 'string' ? route.query.id : ''
    if (queryId && readyItems.value.some((item) => item.id === queryId)) selectedId.value = queryId
    else if (!readyItems.value.some((item) => item.id === selectedId.value)) selectedId.value = readyItems.value[0]?.id || ''
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : '无法读取三维模型列表。'
  } finally { loading.value = false }
}

function pick(id: string) {
  selectedId.value = id
  if (route.query.id !== id) router.replace({ path: '/recycle/models/play', query: { id } })
}

function toggleSlot(id: string) {
  if (occupied[id]) delete occupied[id]
  else occupied[id] = 20
}

watch(selected, (item) => {
  modelBroken.value = false
  loadPhoto(item)
})
watch(() => route.query.id, (id) => {
  if (typeof id === 'string' && id && id !== selectedId.value) selectedId.value = id
})
onMounted(loadList)
</script>
<template>
  <main class="playback">
    <header class="page-heading">
      <div>
        <div class="eyebrow">waste_go <span>/ LOADING PLAYBACK</span></div>
        <h1>把合成三维模型放进装载动画</h1>
        <p>从模型库选一条记录，右侧用同一套尾板 → 升降 → 入仓演示。外形按示例外廓缩放，不用于尺寸或预约核验。</p>
      </div>
      <div class="heading-links">
        <RouterLink to="/recycle/models" class="back">返回模型列表 ↗</RouterLink>
        <RouterLink to="/recycle/cargo-preflight" class="back">去手动预检 ↗</RouterLink>
      </div>
    </header>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <div class="workspace">
      <aside class="picker card">
        <div class="section-title"><span class="step">01</span><h2>选择合成模型</h2></div>
        <button type="button" class="refresh" :disabled="loading" @click="loadList">{{ loading ? '刷新中…' : '刷新列表' }}</button>
        <p v-if="!loading && !readyItems.length" class="empty">还没有可播放的 GLB。请先在验货页生成三维预览。</p>
        <button
          v-for="item in readyItems"
          :key="item.id"
          type="button"
          class="choice"
          :class="{ active: item.id === selectedId }"
          @click="pick(item.id)"
        >
          <img v-if="photoOf(item)" :src="photoOf(item)" :alt="item.title || '物品照片'">
          <span v-else class="no-photo">无照片</span>
          <strong>{{ item.title || '未命名物品' }}</strong>
        </button>
      </aside>
      <div class="stage">
        <CargoInspectionScene
          :inspection="inspection"
          :dimension-source="selected ? '模型库回放 · 示例外廓' : '尚未选择模型'"
          :preview-note="selected
            ? `正在回放「${selected.title || '未命名物品'}」。金框为类别示意空间，不是实测尺寸。${modelBroken ? '三维文件无法加载，已改用照片卡片。' : ''}`
            : '左侧选择一个合成模型，即可播放装载演示。'"
        />
        <section class="card slots-card">
          <div class="section-title"><span class="step">02</span><h2>货位占用（演示）</h2></div>
          <div class="slot-grid">
            <button
              v-for="slot in CARGO_SLOTS"
              :key="slot.id"
              type="button"
              :class="{ occupied: occupied[slot.id], selected: inspection.selected === slot.id }"
              @click="toggleSlot(slot.id)"
            >
              <b>{{ slot.id }}</b>
              <span>{{ occupied[slot.id] ? '示例占用' : inspection.selected === slot.id ? '演示目标位' : '空闲' }}</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<style scoped>
.playback{max-width:1480px;margin:0 auto;padding:12px 8px 40px;color:#203747;font-family:Inter,"Microsoft YaHei",sans-serif}
.page-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:12px 2px 20px}
.heading-links{display:flex;gap:14px;flex-wrap:wrap}
.eyebrow{font-size:19px;font-weight:800;letter-spacing:-.7px;color:#176c62}
.eyebrow span{font-size:10px;letter-spacing:2px;color:#84938f;margin-left:10px}
h1{font-size:29px;letter-spacing:-1px;margin:12px 0 8px}
.page-heading p{font-size:13px;color:#7d8b96;margin:0;max-width:640px}
.back{color:#557771;text-decoration:none;font-size:12px}
.workspace{display:grid;grid-template-columns:minmax(240px,.7fr) minmax(0,1.4fr);gap:20px;align-items:start}
.card{padding:22px;background:#fff;border:1px solid #e2e8e8;border-radius:14px;box-shadow:0 5px 18px #234e4010}
.section-title{display:flex;align-items:center;gap:10px;margin-bottom:14px}
h2{font-size:16px;margin:0}
.step{font-size:11px;font-weight:700;letter-spacing:1px;color:#59917f;background:#edf6f1;padding:6px;border-radius:6px}
.refresh{margin-bottom:12px;font-family:inherit;cursor:pointer;background:#fff;color:#426259;border:1px solid #cbdcd5;padding:8px 12px;border-radius:8px;font-size:12px;font-weight:600}
.choice{width:100%;display:grid;grid-template-columns:64px 1fr;gap:10px;align-items:center;text-align:left;margin:0 0 8px;padding:8px;border:1px solid #d7e2dc;border-radius:10px;background:#f8fbf9;cursor:pointer;font-family:inherit}
.choice img,.no-photo{width:64px;height:48px;object-fit:contain;background:#edf3f0;border-radius:6px}
.no-photo{display:flex;align-items:center;justify-content:center;font-size:10px;color:#7a8f86}
.choice strong{font-size:13px;color:#203747}
.choice.active{border-color:#4baf8c;background:#d9f2e5}
.stage{display:flex;flex-direction:column;gap:16px}
.slot-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.slot-grid button{font-family:inherit;cursor:pointer;display:flex;align-items:center;gap:8px;border:1px solid #d6e2dc;background:#fff;border-radius:8px;padding:12px 10px}
.slot-grid .occupied{background:#faecee;border-color:#e5bac4}
.slot-grid .selected{background:#d9f2e5;border-color:#4baf8c}
.error,.empty{font-size:13px;padding:12px;border-radius:10px}
.error{background:#fff0ee;color:#a74333}
.empty{background:#f4f8f6;color:#5d746c}
@media(max-width:900px){.workspace{grid-template-columns:1fr}h1{font-size:23px}}
</style>
