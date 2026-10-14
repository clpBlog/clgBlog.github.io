<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { STATIONS } from '../data/kowloon'

defineOptions({ name: 'Home' })

const router = useRouter()

const avgCapacity = computed(() =>
  Math.round(STATIONS.reduce((s, x) => s + x.capacity, 0) / STATIONS.length),
)

const greeting = computed(() => {
  const h = new Date().getHours()
  if (h < 12) return '早上好'
  if (h < 18) return '下午好'
  return '晚上好'
})

const cards = computed(() => [
  {
    key: 'visits',
    label: '今日预约',
    value: '1,286',
    tip: '较昨日 +12%',
    tone: 'rose',
  },
  {
    key: 'weight',
    label: '回收总量',
    value: '42.6t',
    tip: '本周累计',
    tone: 'violet',
  },
  {
    key: 'stations',
    label: '在线站点',
    value: String(STATIONS.length),
    tip: `平均容量 ${avgCapacity.value}%`,
    tone: 'sky',
  },
  {
    key: 'points',
    label: '积分发放',
    value: '98,420',
    tip: '本月累计',
    tone: 'amber',
  },
])

const activities = [
  { user: '系统', text: '九龙城数字孪生模块已接入港弃宝后台', time: '2026-03-20 14:20' },
  { user: '运营', text: '更新了土瓜湾站容量阈值与可接收品类', time: '2026-03-20 11:05' },
  { user: '调度', text: '生成大件清运工单 #GQ-3921，待指派司机', time: '2026-03-19 18:42' },
  { user: '数据', text: '同步机电署升降机许可数据，覆盖九龙城区', time: '2026-03-19 09:16' },
  { user: '客服', text: '处理居民反馈：何文田站纸皮仓已满', time: '2026-03-18 16:30' },
]

const hourLabels = ['00', '04', '08', '12', '16', '20', '24']
const lineA = [12, 18, 28, 45, 62, 58, 40]
const lineB = [8, 14, 22, 38, 48, 52, 36]

function linePath(values: number[], w = 520, h = 180) {
  const max = Math.max(...values, 1)
  return values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w
      const y = h - (v / max) * (h - 24) - 8
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

const pathA = computed(() => linePath(lineA))
const pathB = computed(() => linePath(lineB))
</script>

<template>
  <div class="home-page">
    <section class="welcome card">
      <div class="welcome-body">
        <div class="welcome-avatar">弃</div>
        <div>
          <h2>港弃宝管理系统</h2>
          <h3>{{ greeting }}，管理员，今天又是绿色回收的一天！</h3>
          <p>九龙城区数字孪生已上线 · 站点容量实时监控 · 预约工单待处理 23 单</p>
        </div>
      </div>
      <button type="button" class="primary-btn" @click="router.push('/twin/kowloon')">
        进入九龙城3D回收站
      </button>
    </section>

    <section class="stat-grid">
      <article v-for="c in cards" :key="c.key" class="stat-card" :class="c.tone">
        <div class="stat-label">{{ c.label }}</div>
        <div class="stat-value">{{ c.value }}</div>
        <div class="stat-tip">{{ c.tip }}</div>
      </article>
    </section>

    <section class="chart-row">
      <article class="card chart-card">
        <header class="card-head">
          <h3>回收预约趋势</h3>
          <span class="muted">近 24 小时</span>
        </header>
        <svg class="line-chart" viewBox="0 0 520 210" role="img" aria-label="预约趋势图">
          <defs>
            <linearGradient id="fillA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(100,108,255,0.35)" />
              <stop offset="100%" stop-color="rgba(100,108,255,0)" />
            </linearGradient>
            <linearGradient id="fillB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(54,207,201,0.3)" />
              <stop offset="100%" stop-color="rgba(54,207,201,0)" />
            </linearGradient>
          </defs>
          <g class="grid" stroke="#eef0f6" stroke-width="1">
            <line x1="0" y1="45" x2="520" y2="45" />
            <line x1="0" y1="90" x2="520" y2="90" />
            <line x1="0" y1="135" x2="520" y2="135" />
            <line x1="0" y1="180" x2="520" y2="180" />
          </g>
          <path :d="`${pathA} L520,180 L0,180 Z`" fill="url(#fillA)" />
          <path :d="`${pathB} L520,180 L0,180 Z`" fill="url(#fillB)" />
          <path :d="pathA" fill="none" stroke="#646cff" stroke-width="2.5" />
          <path :d="pathB" fill="none" stroke="#36cfc9" stroke-width="2.5" />
          <g class="axis" fill="#9aa3b5" font-size="11">
            <text v-for="(lb, i) in hourLabels" :key="lb" :x="(i / (hourLabels.length - 1)) * 520" y="202" text-anchor="middle">
              {{ lb }}:00
            </text>
          </g>
        </svg>
        <div class="legend-row">
          <span><i class="swatch a" />预约量</span>
          <span><i class="swatch b" />完成量</span>
        </div>
      </article>

      <article class="card donut-card">
        <header class="card-head">
          <h3>品类占比</h3>
        </header>
        <div class="donut-wrap">
          <div class="donut" />
          <div class="donut-center">
            <strong>{{ STATIONS.length }}</strong>
            <span>站点</span>
          </div>
        </div>
        <ul class="donut-legend">
          <li><i style="background:#5470c6" />纸皮 / 纸类</li>
          <li><i style="background:#91cc75" />塑料</li>
          <li><i style="background:#fac858" />金属</li>
          <li><i style="background:#ee6666" />玻璃 / 大件</li>
        </ul>
      </article>
    </section>

    <section class="bottom-row">
      <article class="card feed-card">
        <header class="card-head">
          <h3>运营动态</h3>
        </header>
        <ul class="feed">
          <li v-for="(a, i) in activities" :key="i">
            <span class="feed-avatar">{{ a.user.slice(0, 1) }}</span>
            <div class="feed-body">
              <p><b>{{ a.user }}</b> {{ a.text }}</p>
              <time>{{ a.time }}</time>
            </div>
          </li>
        </ul>
      </article>

      <article class="card promo-card">
        <header class="card-head">
          <h3>数字孪生</h3>
        </header>
        <div class="promo-body">
          <p>在三维地图中查看九龙城回收站、楼宇升降机与最优路径规划。</p>
          <ul>
            <li>OpenStreetMap 实景建筑</li>
            <li>机电署升降机许可匹配</li>
            <li>OSRM 步行路线推荐</li>
          </ul>
          <button type="button" class="primary-btn ghost" @click="router.push('/twin/kowloon')">
            打开地图
          </button>
        </div>
      </article>
    </section>
  </div>
</template>
