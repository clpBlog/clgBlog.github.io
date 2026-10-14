<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ModelViewer from '../components/ModelViewer.vue'
import { cargoApiUrl, getCargoModel, isModelStillGenerating, type Model3DTask } from '../api/cargoRecognition'

defineOptions({ name: 'ModelDetail' })

const route = useRoute()
const token = ref('')
const item = ref<Model3DTask | null>(null)
const error = ref('')
const loading = ref(false)
let timer = 0

const labels: Record<Model3DTask['status'], string> = {
  queued: '排队中', generating: '生成中', ready: '可预览', failed: '未完成',
}

const id = computed(() => String(route.params.id || ''))
const modelUrl = computed(() => item.value?.modelUrl ? cargoApiUrl(item.value.modelUrl) : '')
const photoUrl = computed(() => item.value?.photoUrl ? cargoApiUrl(item.value.photoUrl) : '')
const waiting = computed(() => item.value?.status === 'queued' || item.value?.status === 'generating')

function when(value?: string) {
  if (!value) return '时间未知'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '时间未知' : date.toLocaleString('zh-CN')
}

async function load() {
  if (!/^[0-9a-f-]{36}$/i.test(id.value)) {
    error.value = '记录编号无效。'
    item.value = null
    return
  }
  loading.value = true
  error.value = ''
  try {
    item.value = await getCargoModel(id.value, token.value, new AbortController().signal)
  } catch (cause) {
    if (isModelStillGenerating(cause)) {
      error.value = item.value ? '' : '三维任务仍在生成，请稍后硬刷新详情页。'
      return
    }
    error.value = cause instanceof Error ? cause.message : '无法读取这条三维记录。'
    if (!item.value) item.value = null
  } finally { loading.value = false }
}

onMounted(load)
watch(id, load)
watch(waiting, (active) => {
  clearInterval(timer)
  if (active) timer = window.setInterval(load, 5000)
})
onUnmounted(() => clearInterval(timer))
</script>
<template>
  <main class="detail">
    <header class="page-heading">
      <div>
        <div class="eyebrow">waste_go <span>/ MODEL DETAIL</span></div>
        <h1>{{ item?.title || '三维模型详情' }}</h1>
        <p>拖动旋转查看外形。该预览不用于尺寸、重量或预约核验。</p>
      </div>
      <div class="heading-links">
        <RouterLink to="/recycle/models" class="back">返回模型列表 ↗</RouterLink>
        <RouterLink v-if="item?.status === 'ready'" :to="`/recycle/models/play?id=${item.id}`" class="back">装载动画回放 ↗</RouterLink>
        <RouterLink to="/recycle/cargo-preflight" class="back">继续拍照验货 ↗</RouterLink>
      </div>
    </header>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <p v-else-if="loading && !item" class="empty">正在读取记录…</p>
    <div v-else-if="item" class="layout">
      <section class="stage">
        <ModelViewer v-if="modelUrl" :url="modelUrl" />
        <div v-else class="placeholder">
          <img v-if="photoUrl" :src="photoUrl" :alt="item.title || '物品照片'">
          <p>{{ waiting ? '混元仍在生成，通常 1～5 分钟。照片可先看。' : (item.message || '还没有可旋转的三维文件。') }}</p>
        </div>
      </section>
      <aside class="card">
        <div class="row"><span>状态</span><b :data-status="item.status">{{ labels[item.status] }}</b></div>
        <div class="row"><span>样例时间</span><b>{{ when(item.createdAt) }}</b></div>
        <div class="row"><span>最近更新</span><b>{{ when(item.updatedAt) }}</b></div>
        <div class="row"><span>记录编号</span><code>{{ item.id }}</code></div>
        <p class="hint">本页模型为程序化合成 glTF 文件，随作品集静态提供；不代表已验证云端 AI 生成。</p>
        <img v-if="photoUrl && modelUrl" class="side-photo" :src="photoUrl" :alt="item.title || '物品照片'">
      </aside>
    </div>
  </main>
</template>
<style scoped>
.detail{max-width:1480px;margin:0 auto;padding:12px 8px 40px;color:#203747;font-family:Inter,"Microsoft YaHei",sans-serif}
.page-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:12px 2px 20px}
.heading-links{display:flex;gap:14px;flex-wrap:wrap}
.eyebrow{font-size:19px;font-weight:800;letter-spacing:-.7px;color:#176c62}
.eyebrow span{font-size:10px;letter-spacing:2px;color:#84938f;margin-left:10px}
h1{font-size:29px;letter-spacing:-1px;margin:12px 0 8px}
.page-heading p{font-size:13px;color:#7d8b96;margin:0}
.back{color:#557771;text-decoration:none;font-size:12px}
.layout{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(260px,.7fr);gap:18px;align-items:start}
.stage{min-height:420px}
.placeholder{min-height:420px;background:#18232e;border-radius:14px;color:#c6e4ed;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;text-align:center}
.placeholder img{max-height:240px;max-width:100%;object-fit:contain;border-radius:8px}
.card{padding:22px;background:#fff;border:1px solid #e2e8e8;border-radius:14px;box-shadow:0 5px 18px #234e4010}
.row{display:flex;justify-content:space-between;gap:12px;font-size:13px;padding:10px 0;border-bottom:1px solid #edf0ef}
.row span{color:#7d8b96}
.row b[data-status=ready]{color:#176848}
.row b[data-status=failed]{color:#a46d78}
code{font-size:11px;word-break:break-all}
.hint{font-size:11px;line-height:1.8;color:#7c8b92}
.side-photo{width:100%;border-radius:10px;background:#f4f7f5;object-fit:contain;max-height:220px}
.error,.empty{font-size:13px;padding:16px;border-radius:10px}
.error{background:#fff0ee;color:#a74333}
.empty{background:#f4f8f6;color:#5d746c}
@media(max-width:900px){.layout{grid-template-columns:1fr}h1{font-size:23px}}
</style>
