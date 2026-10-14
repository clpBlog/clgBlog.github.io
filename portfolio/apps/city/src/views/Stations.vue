<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
  ANSWER_STATUS_META,
  METHOD_LABELS,
  ROLE_LABELS,
  SURVEY_SITE,
  VISIT_STATUS_META,
  buildStationRows,
  fetchSurveyCatalog,
  fetchSurveyData,
  fetchSurveyStats,
  type StationRow,
  type SurveyStats,
  type VisitStatus,
} from '../api/survey'

defineOptions({ name: 'Stations' })

const loading = ref(false)
const error = ref('')
const keyword = ref('')
const statusFilter = ref<VisitStatus | 'all'>('all')
const rows = ref<StationRow[]>([])
const stats = ref<SurveyStats | null>(null)
const selected = ref<StationRow | null>(null)
const detailOpen = ref(false)
const updatedAt = ref('')

const filtered = computed(() => {
  const q = keyword.value.trim().toLowerCase()
  return rows.value.filter((r) => {
    if (statusFilter.value !== 'all' && r.visitStatus !== statusFilter.value) return false
    if (!q) return true
    return (
      r.name.toLowerCase().includes(q) ||
      r.address.toLowerCase().includes(q) ||
      r.id.includes(q) ||
      r.phone.includes(q)
    )
  })
})

const summary = computed(() => {
  const all = rows.value
  return {
    total: all.length,
    completed: all.filter((r) => r.visitStatus === 'completed').length,
    inProgress: all.filter((r) => r.visitStatus === 'in-progress').length,
    notStarted: all.filter((r) => r.visitStatus === 'not-started').length,
  }
})

async function load() {
  loading.value = true
  error.value = ''
  try {
    const [catalog, survey, st] = await Promise.all([
      fetchSurveyCatalog(),
      fetchSurveyData(),
      fetchSurveyStats(),
    ])
    rows.value = buildStationRows(catalog, survey)
    stats.value = st
    updatedAt.value = survey.updatedAt
      ? new Date(survey.updatedAt).toLocaleString('zh-HK')
      : new Date().toLocaleString('zh-HK')
  } catch (e) {
    error.value = e instanceof Error ? e.message : '加载调查台数据失败'
    rows.value = []
  } finally {
    loading.value = false
  }
}

function openDetail(row: StationRow) {
  selected.value = row
  detailOpen.value = true
}

function closeDetail() {
  detailOpen.value = false
}

function resetFilters() {
  keyword.value = ''
  statusFilter.value = 'all'
}

function mapsUrl(row: StationRow) {
  return `https://www.google.com/maps/dir/?api=1&destination=${row.lat},${row.lng}`
}

onMounted(load)
</script>

<template>
  <div class="stations-page">
    <section class="source-bar card">
      <div class="source-left">
        <strong>调查台实时数据</strong>
        <span class="muted">来源 {{ SURVEY_SITE }}</span>
        <span v-if="updatedAt" class="muted">更新于 {{ updatedAt }}</span>
      </div>
      <div class="source-actions">
        <a class="btn ghost" :href="SURVEY_SITE" target="_blank" rel="noopener">打开调查台</a>
        <button type="button" class="btn primary" :disabled="loading" @click="load">
          {{ loading ? '同步中…' : '重新同步' }}
        </button>
      </div>
    </section>

    <section class="orders-stats">
      <article class="mini-stat">
        <span>全部站点</span>
        <strong>{{ summary.total }}</strong>
      </article>
      <article class="mini-stat success">
        <span>已完成</span>
        <strong>{{ summary.completed }}</strong>
      </article>
      <article class="mini-stat primary">
        <span>调查中</span>
        <strong>{{ summary.inProgress }}</strong>
      </article>
      <article class="mini-stat">
        <span>未开始</span>
        <strong>{{ summary.notStarted }}</strong>
      </article>
    </section>

    <section v-if="error" class="card error-banner">
      <p>{{ error }}</p>
      <p class="muted">请确认开发代理已启动，或检查调查台是否可访问。</p>
    </section>

    <section class="card orders-panel">
      <header class="orders-toolbar">
        <div class="filters">
          <label class="field">
            <span>站名 / 地址 / 编号</span>
            <input v-model="keyword" type="search" placeholder="搜索必嘉街 / 244…" />
          </label>
          <label class="field">
            <span>调查状态</span>
            <select v-model="statusFilter">
              <option value="all">全部状态</option>
              <option v-for="(meta, key) in VISIT_STATUS_META" :key="key" :value="key">
                {{ meta.label }}
              </option>
            </select>
          </label>
        </div>
        <div class="toolbar-actions">
          <button type="button" class="btn ghost" @click="resetFilters">重置</button>
          <span class="result-count">
            共 {{ filtered.length }} 站
            <template v-if="stats"> · 答卷 {{ stats.answers }} 条</template>
          </span>
        </div>
      </header>

      <div v-if="loading && !rows.length" class="empty">正在从调查台拉取数据…</div>

      <div v-else class="table-wrap">
        <table class="orders-table">
          <thead>
            <tr>
              <th>食环署编号</th>
              <th>站名</th>
              <th>地址</th>
              <th>开放时间</th>
              <th>调查状态</th>
              <th>进度</th>
              <th>联系电话</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!filtered.length">
              <td colspan="8" class="empty">暂无匹配站点</td>
            </tr>
            <tr v-for="row in filtered" :key="row.id">
              <td class="mono">{{ row.id }}</td>
              <td>
                <button type="button" class="link-id" @click="openDetail(row)">
                  {{ row.name }}
                </button>
              </td>
              <td class="addr-cell">{{ row.address }}</td>
              <td class="time">{{ row.hours }}</td>
              <td>
                <span class="status-tag" :class="VISIT_STATUS_META[row.visitStatus].tone">
                  {{ VISIT_STATUS_META[row.visitStatus].label }}
                </span>
              </td>
              <td>
                <div class="progress-cell">
                  <div class="progress-track">
                    <i :style="{ width: (row.answered / row.totalItems) * 100 + '%' }" />
                  </div>
                  <span>{{ row.answered }}/{{ row.totalItems }}</span>
                </div>
              </td>
              <td class="mono">{{ row.phone || '—' }}</td>
              <td>
                <div class="row-actions">
                  <button type="button" class="btn tiny" @click="openDetail(row)">详情</button>
                  <a
                    class="btn tiny ghost"
                    :href="mapsUrl(row)"
                    target="_blank"
                    rel="noopener"
                  >导航</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 窄屏卡片 -->
    <section class="mobile-order-list station-cards">
      <article
        v-for="row in filtered"
        :key="'m-' + row.id"
        class="mobile-order-card"
        @click="openDetail(row)"
      >
        <div class="m-top">
          <span class="m-id">{{ row.name }}</span>
          <span class="status-tag" :class="VISIT_STATUS_META[row.visitStatus].tone">
            {{ VISIT_STATUS_META[row.visitStatus].label }}
          </span>
        </div>
        <p class="m-remark">{{ row.address }}</p>
        <div class="m-bottom">
          <span class="mono">#{{ row.id }} · {{ row.answered }}/{{ row.totalItems }}</span>
          <time>{{ row.hours }}</time>
        </div>
      </article>
    </section>

    <div v-if="detailOpen && selected" class="drawer-mask" @click.self="closeDetail">
      <aside class="drawer card station-drawer">
        <header class="drawer-head">
          <div>
            <h3>{{ selected.name }}</h3>
            <p class="drawer-id">食环署站点 {{ selected.id }}</p>
          </div>
          <button type="button" class="icon-close" @click="closeDetail">×</button>
        </header>

        <div class="drawer-body">
          <div class="detail-row">
            <span>调查状态</span>
            <span class="status-tag" :class="VISIT_STATUS_META[selected.visitStatus].tone">
              {{ VISIT_STATUS_META[selected.visitStatus].label }}
            </span>
          </div>
          <div class="detail-row">
            <span>进度</span>
            <b>{{ selected.answered }} / {{ selected.totalItems }} 项</b>
          </div>
          <div class="detail-row">
            <span>地址</span>
            <b>{{ selected.address }}</b>
          </div>
          <div class="detail-row">
            <span>开放时间</span>
            <b>{{ selected.hours }}</b>
          </div>
          <div class="detail-row">
            <span>电话</span>
            <b>{{ selected.phone || '—' }}</b>
          </div>
          <div class="detail-row">
            <span>坐标</span>
            <b class="mono">{{ selected.lat.toFixed(5) }}, {{ selected.lng.toFixed(5) }}</b>
          </div>
          <div class="detail-row">
            <span>调查日期</span>
            <b>{{ selected.visitDate || '—' }}</b>
          </div>
          <div class="detail-row">
            <span>调查方式</span>
            <b>{{ METHOD_LABELS[selected.method] || selected.method || '—' }}</b>
          </div>
          <div class="detail-row">
            <span>受访者</span>
            <b>{{ ROLE_LABELS[selected.respondentRole] || selected.respondentRole || '—' }}</b>
          </div>
          <div class="detail-row">
            <span>备注</span>
            <b>{{ selected.generalNotes || '—' }}</b>
          </div>

          <h4 class="accept-title">大件收纳调查结果</h4>
          <ul class="accept-list">
            <li v-for="a in selected.accepts" :key="a.id">
              <span>{{ a.name }}</span>
              <span
                class="status-tag tiny"
                :class="ANSWER_STATUS_META[a.status]?.tone || 'muted'"
              >
                {{ ANSWER_STATUS_META[a.status]?.label || a.status }}
              </span>
            </li>
          </ul>
        </div>

        <footer class="drawer-foot">
          <a class="btn primary" :href="SURVEY_SITE" target="_blank" rel="noopener">
            在调查台打开
          </a>
          <a class="btn ghost" :href="mapsUrl(selected)" target="_blank" rel="noopener">导航</a>
          <button type="button" class="btn ghost" @click="closeDetail">关闭</button>
        </footer>
      </aside>
    </div>
  </div>
</template>
