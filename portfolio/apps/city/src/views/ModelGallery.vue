<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { cargoApiUrl, listCargoModels, type Model3DTask } from '../api/cargoRecognition'

defineOptions({ name: 'ModelGallery' })

const token = ref('')
const items = ref<Model3DTask[]>([])
const error = ref('')
const loading = ref(false)
const keyword = ref('')
const statusFilter = ref<'all' | Model3DTask['status']>('all')
let timer = 0

const labels: Record<Model3DTask['status'], string> = {
  queued: '排队中', generating: '生成中', ready: '可预览', failed: '未完成',
}

const filtered = computed(() => {
  const q = keyword.value.trim().toLowerCase()
  return items.value.filter((item) => {
    if (statusFilter.value !== 'all' && item.status !== statusFilter.value) return false
    if (!q) return true
    return `${item.title || ''} ${item.id}`.toLowerCase().includes(q)
  })
})

const stats = computed(() => ({
  total: items.value.length,
  ready: items.value.filter((item) => item.status === 'ready').length,
  running: items.value.filter((item) => item.status === 'queued' || item.status === 'generating').length,
}))

async function load() {
  loading.value = true
  error.value = ''
  try {
    items.value = await listCargoModels(token.value)
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : '无法读取三维模型列表。'
  } finally { loading.value = false }
}

function photoOf(item: Model3DTask) {
  return item.photoUrl ? cargoApiUrl(item.photoUrl) : ''
}

function when(value?: string) {
  if (!value) return '时间未知'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '时间未知' : date.toLocaleString('zh-CN')
}

onMounted(() => {
  load()
  timer = window.setInterval(() => {
    if (items.value.some((item) => item.status === 'queued' || item.status === 'generating')) load()
  }, 8000)
})
onUnmounted(() => clearInterval(timer))
</script>
<template>
  <main class="gallery">
    <header class="page-heading">
      <div>
        <div class="eyebrow">waste_go <span>/ MODEL LIBRARY</span></div>
        <h1>合成三维模型库</h1>
        <p>本展示版使用程序化椅子和柜子，验证模型查看器与装载回放；不包含真实照片或云端生成记录。</p>
      </div>
        <RouterLink to="/recycle/models/play" class="back">装载动画回放 ↗</RouterLink>
        <RouterLink to="/recycle/cargo-preflight" class="back">去手动预检 ↗</RouterLink>
    </header>
    <div class="stats">
      <span>共 {{ stats.total }} 条</span>
      <span>可预览 {{ stats.ready }}</span>
      <span>进行中 {{ stats.running }}</span>
    </div>
    <div class="toolbar">
      <input v-model="keyword" type="search" placeholder="搜索名称或编号" aria-label="搜索三维记录">
      <select v-model="statusFilter" aria-label="按状态筛选">
        <option value="all">全部状态</option>
        <option value="ready">可预览</option>
        <option value="generating">生成中</option>
        <option value="queued">排队中</option>
        <option value="failed">未完成</option>
      </select>
      <button type="button" :disabled="loading" @click="load">{{ loading ? '刷新中…' : '刷新' }}</button>
    </div>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <p v-else-if="!loading && !filtered.length" class="empty">没有符合筛选条件的合成模型。</p>
    <div class="grid">
      <article v-for="item in filtered" :key="item.id" class="card">
        <RouterLink class="thumb" :to="`/recycle/models/${item.id}`">
          <img v-if="photoOf(item)" :src="photoOf(item)" :alt="item.title || '物品照片'">
          <span v-else>无照片</span>
        </RouterLink>
        <div class="meta">
          <strong>{{ item.title || '未命名物品' }}</strong>
          <span class="tag" :data-status="item.status">{{ labels[item.status] }}</span>
          <small>{{ when(item.createdAt || item.updatedAt) }}</small>
          <div class="links">
            <RouterLink :to="`/recycle/models/${item.id}`">旋转查看</RouterLink>
            <RouterLink v-if="item.status === 'ready'" :to="`/recycle/models/play?id=${item.id}`">装载动画</RouterLink>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>
<style scoped>
.gallery{max-width:1480px;margin:0 auto;padding:12px 8px 40px;color:#203747;font-family:Inter,"Microsoft YaHei",sans-serif}
.page-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:12px 2px 20px}
.eyebrow{font-size:19px;font-weight:800;letter-spacing:-.7px;color:#176c62}
.eyebrow span{font-size:10px;letter-spacing:2px;color:#84938f;margin-left:10px}
h1{font-size:29px;letter-spacing:-1px;margin:12px 0 8px}
.page-heading p{font-size:13px;color:#7d8b96;margin:0}
.back{color:#557771;text-decoration:none;font-size:12px}
.stats{display:flex;gap:18px;font-size:12px;color:#5d746c;margin-bottom:14px}
.toolbar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}
.toolbar input,.toolbar select{border:1px solid #d7e2dc;background:#fbfcfb;border-radius:8px;padding:10px 12px;font:inherit;font-size:12px;min-width:180px}
button{font-family:inherit;cursor:pointer;background:#fff;color:#426259;border:1px solid #cbdcd5;padding:10px 13px;border-radius:8px;font-size:12px;font-weight:600}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}
.card{display:flex;flex-direction:column;background:#fff;border:1px solid #e2e8e8;border-radius:14px;overflow:hidden;color:inherit;box-shadow:0 5px 18px #234e4010}
.thumb{height:168px;background:#edf3f0;display:flex;align-items:center;justify-content:center;color:#7a8f86;font-size:12px;text-decoration:none}
.thumb img{width:100%;height:100%;object-fit:contain;background:#f4f7f5}
.links{display:flex;gap:12px;font-size:12px}
.links a{color:#176c62}
.meta{padding:14px 16px 16px;display:grid;gap:8px}
.meta strong{font-size:14px}
.tag{justify-self:start;font-size:10px;padding:4px 8px;border-radius:5px;background:#eef4f2;color:#69857d}
.tag[data-status=ready]{background:#d9f2e5;color:#176848}
.tag[data-status=failed]{background:#faecee;color:#a46d78}
.tag[data-status=generating],.tag[data-status=queued]{background:#fff6dd;color:#8a6a20}
small{color:#849189;font-size:11px}
.error,.empty{font-size:13px;padding:16px;border-radius:10px}
.error{background:#fff0ee;color:#a74333}
.empty{background:#f4f8f6;color:#5d746c}
@media(max-width:700px){h1{font-size:23px}.page-heading{align-items:flex-start}}
</style>
