<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { KowloonMap } from '../map/KowloonMap'
import { STATIONS, WASTE_LABELS, type Station, type WasteType } from '../data/kowloon'
import { planBestRoute, type RouteResult } from '../data/routing'
import type { BuildingLiftResult } from '../data/lifts'

const mapHost = ref<HTMLElement | null>(null)
const map = shallowRef<KowloonMap | null>(null)

const selectedWaste = ref<WasteType | null>(null)
const route = ref<RouteResult | null>(null)
const loading = ref(false)
const pickedHint = ref('點擊樓宇查升降機；點擊地面規劃回收站路線')
const activeStationId = ref<string | null>(null)
const clock = ref('')
const dateStr = ref('')
/** 手機底部面板：none | stations | info | building */
const mobileSheet = ref<'none' | 'stations' | 'info' | 'building'>('none')
const buildingLift = ref<BuildingLiftResult | null>(null)

const wasteOptions: { value: WasteType | null; label: string }[] = [
  { value: null, label: '全部' },
  ...(Object.entries(WASTE_LABELS) as [WasteType, string][]).map(([value, label]) => ({
    value,
    label,
  })),
]

const avgCapacity = computed(() =>
  Math.round(STATIONS.reduce((s, x) => s + x.capacity, 0) / STATIONS.length),
)

const systemStatus = computed(() =>
  loading.value
    ? 'ROUTING…'
    : route.value
      ? `ROUTE · ${route.value.station.id.toUpperCase()}`
      : 'STANDBY',
)

function tick() {
  const now = new Date()
  clock.value = now.toLocaleTimeString('zh-HK', { hour12: false })
  dateStr.value = now.toLocaleDateString('zh-HK', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  })
}

function isMobile() {
  return window.matchMedia('(max-width: 960px)').matches
}

function toggleSheet(name: 'stations' | 'info' | 'building') {
  mobileSheet.value = mobileSheet.value === name ? 'none' : name
  window.setTimeout(() => map.value?.resize(), 280)
}

function closeSheet() {
  mobileSheet.value = 'none'
  window.setTimeout(() => map.value?.resize(), 280)
}

function closeBuildingPanel() {
  buildingLift.value = null
  map.value?.clearBuildingSelection()
  if (mobileSheet.value === 'building') closeSheet()
}

function handleBuildingClick(result: BuildingLiftResult) {
  buildingLift.value = result
  pickedHint.value =
    result.status === 'official_yes'
      ? `${result.buildingName} · 官方記錄有升降機（${result.liftCount} 台）`
      : `${result.buildingName} · ${result.title}`
  if (isMobile()) mobileSheet.value = 'building'
}

function statusClass(status: BuildingLiftResult['status']) {
  if (status === 'official_yes') return 'yes'
  if (status === 'verified_no') return 'no'
  return 'unknown'
}

function formatUpdatedAt(iso: string) {
  if (!iso) return '—'
  try {
    return new Date(iso).toLocaleDateString('zh-HK', {
      year: 'numeric',
      month: 'long',
    })
  } catch {
    return iso
  }
}

let clockTimer = 0
let pickToken = 0

async function handlePick(point: { lng: number; lat: number }) {
  const token = ++pickToken
  buildingLift.value = null
  map.value?.clearBuildingSelection()
  map.value?.setOrigin(point)
  loading.value = true
  pickedHint.value = '正在計算最優路徑…'
  if (isMobile()) mobileSheet.value = 'none'

  try {
    const result = await planBestRoute(point, selectedWaste.value)
    if (token !== pickToken) return

    route.value = result
    if (!result) {
      pickedHint.value = '附近找不到合適回收站，請調整類型或位置'
      map.value?.setRoute([], null)
      activeStationId.value = null
      return
    }

    pickedHint.value = `推薦前往「${result.station.name}」· ${(result.distance / 1000).toFixed(2)} km`
    activeStationId.value = result.station.id
    map.value?.setRoute(result.coordinates, result.station)
    if (isMobile()) mobileSheet.value = 'info'
  } finally {
    if (token === pickToken) loading.value = false
  }
}

function selectStation(station: Station) {
  activeStationId.value = station.id
  map.value?.focusStation(station)
  if (isMobile()) mobileSheet.value = 'none'
}

function clearRoute() {
  pickToken++
  route.value = null
  activeStationId.value = null
  loading.value = false
  pickedHint.value = '點擊樓宇查升降機；點擊地面規劃回收站路線'
  map.value?.clearRoute()
  if (isMobile()) mobileSheet.value = 'none'
}

watch(selectedWaste, async () => {
  if (!route.value?.coordinates?.[0]) return
  const [lng, lat] = route.value.coordinates[0]
  await handlePick({ lng, lat })
})

onMounted(() => {
  tick()
  clockTimer = window.setInterval(tick, 1000)
  if (!mapHost.value) return
  map.value = new KowloonMap(mapHost.value, {
    onPick: handlePick,
    onStationClick: selectStation,
    onBuildingClick: handleBuildingClick,
  })
  // 嵌在后台内容区时，等布局完成后再矫正画布尺寸
  window.setTimeout(() => map.value?.resize(), 120)
  window.setTimeout(() => map.value?.resize(), 400)
})

onUnmounted(() => {
  window.clearInterval(clockTimer)
  map.value?.dispose()
})
</script>

<template>
  <div class="app-shell" :class="{ 'sheet-open': mobileSheet !== 'none' }">
    <div ref="mapHost" class="viewport" />
    <div class="scanlines" aria-hidden="true" />
    <div class="vignette" aria-hidden="true" />

    <header class="top-bar">
      <div class="top-side desktop-only">
        <div class="kpi">
          <span class="kpi-label">NODES</span>
          <strong>{{ STATIONS.length }}</strong>
        </div>
        <div class="kpi">
          <span class="kpi-label">AVG CAP</span>
          <strong>{{ avgCapacity }}%</strong>
        </div>
      </div>

      <div class="title-block">
        <div class="title-frame">
          <h1>智能九龍城 · 回收站數字孿生</h1>
          <p class="desktop-only">KOWLOON CITY RECYCLE DIGITAL TWIN</p>
          <p class="mobile-only status-line">{{ systemStatus }} · {{ clock }}</p>
        </div>
      </div>

      <div class="top-side right desktop-only">
        <div class="kpi">
          <span class="kpi-label">STATUS</span>
          <strong class="status">{{ systemStatus }}</strong>
        </div>
        <div class="kpi time">
          <span class="kpi-label">{{ dateStr }}</span>
          <strong>{{ clock }}</strong>
        </div>
      </div>
    </header>

    <p class="hint-bar">{{ loading ? '路徑計算中…' : pickedHint }}</p>

    <!-- 桌面左側面板 -->
    <aside class="panel panel-left hud desktop-only">
      <div class="corner tl" /><div class="corner tr" />
      <div class="corner bl" /><div class="corner br" />

      <section>
        <h2><span class="mod">01</span> 回收類型篩選</h2>
        <p class="section-desc">優先匹配可接收該類型的站點</p>
        <div class="chips">
          <button
            v-for="opt in wasteOptions"
            :key="'d-' + String(opt.value)"
            type="button"
            class="chip"
            :class="{ active: selectedWaste === opt.value }"
            @click="selectedWaste = opt.value"
          >
            {{ opt.label }}
          </button>
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2><span class="mod">02</span> 回收站節點</h2>
          <span class="count">{{ STATIONS.length }} ONLINE</span>
        </div>
        <ul class="station-list">
          <li
            v-for="s in STATIONS"
            :key="'d-' + s.id"
            :class="{ active: activeStationId === s.id }"
            @click="selectStation(s)"
          >
            <div class="station-top">
              <span>{{ s.district }}</span>
              <span class="cap">{{ s.capacity }}%</span>
            </div>
            <div class="station-name">{{ s.name }}</div>
            <div class="tags">
              <span v-for="t in s.accepts" :key="t" class="tag">{{ WASTE_LABELS[t] }}</span>
            </div>
            <div class="cap-bar"><i :style="{ width: s.capacity + '%' }" /></div>
          </li>
        </ul>
      </section>
    </aside>

    <!-- 桌面右側面板：樓宇優先，否則路線/說明 -->
    <aside class="panel panel-right hud desktop-only">
      <div class="corner tl" /><div class="corner tr" />
      <div class="corner bl" /><div class="corner br" />

      <template v-if="buildingLift">
        <button type="button" class="panel-close" @click="closeBuildingPanel">×</button>
        <div class="route-label">BUILDING ACCESS</div>
        <h2 class="route-title">{{ buildingLift.buildingName }}</h2>
        <p v-if="buildingLift.addressZh" class="en">{{ buildingLift.addressZh }}</p>
        <p v-else-if="buildingLift.addressEn" class="en">{{ buildingLift.addressEn }}</p>

        <div class="lift-status" :class="statusClass(buildingLift.status)">
          <strong>{{ buildingLift.title }}</strong>
          <span v-if="buildingLift.status === 'official_yes'">
            找到 {{ buildingLift.liftCount }} 台登記升降機
          </span>
        </div>

        <ul class="reasons">
          <li v-for="(n, i) in buildingLift.notes" :key="i">{{ n }}</li>
        </ul>

        <dl class="lift-meta">
          <div>
            <dt>證據來源</dt>
            <dd>{{ buildingLift.evidenceType === 'EMSD' ? '機電工程署' : '尚無官方匹配' }}</dd>
          </div>
          <div>
            <dt>置信度</dt>
            <dd>{{ buildingLift.confidence }}</dd>
          </div>
          <div>
            <dt>資料更新</dt>
            <dd>{{ formatUpdatedAt(buildingLift.sourceUpdatedAt) }}</dd>
          </div>
        </dl>

        <p class="furniture-note">
          大件傢俬搬運條件：<b>尚待確認</b>（門寬、轎廂深度、管理處預約規定）
        </p>
      </template>

      <template v-else-if="route">
        <div class="route-label">OPTIMAL ROUTE</div>
        <h2 class="route-title">{{ route.station.name }}</h2>
        <p class="en">{{ route.station.nameEn }} · {{ route.station.district }}</p>

        <dl class="stats">
          <div>
            <dt>距離</dt>
            <dd>{{ (route.distance / 1000).toFixed(2) }}<small>km</small></dd>
          </div>
          <div>
            <dt>預估步行</dt>
            <dd>{{ Math.max(1, Math.round(route.duration / 60)) }}<small>min</small></dd>
          </div>
          <div>
            <dt>評分</dt>
            <dd>{{ route.score.toFixed(0) }}</dd>
          </div>
        </dl>

        <ul class="reasons">
          <li v-for="(r, i) in route.reasons" :key="i">{{ r }}</li>
        </ul>

        <div class="accepts">
          <span v-for="t in route.station.accepts" :key="t">{{ WASTE_LABELS[t] }}</span>
        </div>

        <button type="button" class="btn-clear" @click="clearRoute">清除路線</button>
      </template>

      <template v-else>
        <div class="route-label">SYSTEM BRIEF</div>
        <h2 class="route-title">實景三維地圖</h2>
        <p class="en">OpenStreetMap · OSRM · PUBLIC DEMO</p>
        <ul class="brief">
          <li>本展示版未附原始樓宇資料</li>
          <li>點擊地面查看回收站路線示例</li>
          <li>站點容量為合成演示數值</li>
          <li>未匹配 ≠ 一定沒有電梯</li>
        </ul>
        <div class="gauge">
          <div class="gauge-ring">
            <strong>{{ avgCapacity }}%</strong>
            <span>平均容量</span>
          </div>
          <div class="gauge-meta">
            <div><span>在線站點</span><b>{{ STATIONS.length }}</b></div>
            <div><span>覆蓋區域</span><b>九龍城區</b></div>
          </div>
        </div>
      </template>
    </aside>

    <!-- 手機遮罩 -->
    <button
      v-if="mobileSheet !== 'none'"
      type="button"
      class="sheet-backdrop mobile-only"
      aria-label="關閉面板"
      @click="closeSheet"
    />

    <!-- 手機底部抽屜：站點 -->
    <aside class="mobile-sheet mobile-only" :class="{ open: mobileSheet === 'stations' }">
      <div class="sheet-handle" @click="closeSheet" />
      <div class="sheet-body">
        <h2>回收類型</h2>
        <div class="chips">
          <button
            v-for="opt in wasteOptions"
            :key="'m-' + String(opt.value)"
            type="button"
            class="chip"
            :class="{ active: selectedWaste === opt.value }"
            @click="selectedWaste = opt.value"
          >
            {{ opt.label }}
          </button>
        </div>
        <div class="section-head">
          <h2>回收站</h2>
          <span class="count">{{ STATIONS.length }}</span>
        </div>
        <ul class="station-list">
          <li
            v-for="s in STATIONS"
            :key="'m-' + s.id"
            :class="{ active: activeStationId === s.id }"
            @click="selectStation(s)"
          >
            <div class="station-top">
              <span>{{ s.district }}</span>
              <span class="cap">{{ s.capacity }}%</span>
            </div>
            <div class="station-name">{{ s.name }}</div>
            <div class="tags">
              <span v-for="t in s.accepts" :key="t" class="tag">{{ WASTE_LABELS[t] }}</span>
            </div>
            <div class="cap-bar"><i :style="{ width: s.capacity + '%' }" /></div>
          </li>
        </ul>
      </div>
    </aside>

    <!-- 手機底部抽屜：路線 / 說明 -->
    <aside class="mobile-sheet mobile-only" :class="{ open: mobileSheet === 'info' }">
      <div class="sheet-handle" @click="closeSheet" />
      <div class="sheet-body">
        <template v-if="route">
          <div class="route-label">推薦路線</div>
          <h2 class="route-title">{{ route.station.name }}</h2>
          <p class="en">{{ route.station.district }}</p>
          <dl class="stats">
            <div>
              <dt>距離</dt>
              <dd>{{ (route.distance / 1000).toFixed(2) }}<small>km</small></dd>
            </div>
            <div>
              <dt>步行</dt>
              <dd>{{ Math.max(1, Math.round(route.duration / 60)) }}<small>min</small></dd>
            </div>
            <div>
              <dt>評分</dt>
              <dd>{{ route.score.toFixed(0) }}</dd>
            </div>
          </dl>
          <ul class="reasons">
            <li v-for="(r, i) in route.reasons" :key="i">{{ r }}</li>
          </ul>
          <button type="button" class="btn-clear" @click="clearRoute">清除路線</button>
        </template>
        <template v-else>
          <div class="route-label">使用說明</div>
          <h2 class="route-title">點擊地圖選點</h2>
          <ul class="brief">
            <li>單指拖曳移動地圖</li>
            <li>雙指縮放 / 旋轉俯仰</li>
            <li>點擊地面規劃到最近回收站</li>
            <li>可先篩選回收類型再導航</li>
          </ul>
          <div class="gauge compact">
            <div class="gauge-ring">
              <strong>{{ avgCapacity }}%</strong>
              <span>平均容量</span>
            </div>
            <div class="gauge-meta">
              <div><span>站點</span><b>{{ STATIONS.length }}</b></div>
              <div><span>區域</span><b>九龍城</b></div>
            </div>
          </div>
        </template>
      </div>
    </aside>

    <!-- 手機底部抽屜：樓宇升降機 -->
    <aside class="mobile-sheet mobile-only" :class="{ open: mobileSheet === 'building' }">
      <div class="sheet-handle" @click="closeSheet" />
      <div v-if="buildingLift" class="sheet-body">
        <div class="route-label">樓宇升降機</div>
        <h2 class="route-title">{{ buildingLift.buildingName }}</h2>
        <p v-if="buildingLift.addressZh" class="en">{{ buildingLift.addressZh }}</p>
        <div class="lift-status" :class="statusClass(buildingLift.status)">
          <strong>{{ buildingLift.title }}</strong>
          <span v-if="buildingLift.status === 'official_yes'">
            {{ buildingLift.liftCount }} 台登記升降機
          </span>
        </div>
        <ul class="reasons">
          <li v-for="(n, i) in buildingLift.notes" :key="i">{{ n }}</li>
        </ul>
        <button type="button" class="btn-clear" @click="closeBuildingPanel">關閉</button>
      </div>
    </aside>

    <!-- 手機底部導航 -->
    <nav class="mobile-dock mobile-only">
      <button
        type="button"
        :class="{ active: mobileSheet === 'stations' }"
        @click="toggleSheet('stations')"
      >
        <span class="dock-ico">▣</span>
        站點
      </button>
      <button
        type="button"
        :class="{ active: mobileSheet === 'building' && !!buildingLift }"
        @click="buildingLift ? toggleSheet('building') : toggleSheet('info')"
      >
        <span class="dock-ico">◈</span>
        {{ buildingLift ? '樓宇' : route ? '路線' : '說明' }}
      </button>
    </nav>

    <footer class="legend desktop-only">
      <span><i class="dot cyan" />回收站</span>
      <span><i class="dot green" />有升降機記錄</span>
      <span><i class="dot magenta" />起點</span>
      <span><i class="line" />導航路線</span>
      <span class="tip">點樓宇查電梯 · 點地面規劃路線</span>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  width: 100%;
  height: 100%;
}

.viewport {
  position: absolute;
  inset: 0;
}

.scanlines {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 3;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 20, 40, 0.06) 2px,
    rgba(0, 20, 40, 0.06) 4px
  );
  opacity: 0.5;
}

.vignette {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 2;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(4, 12, 20, 0.65) 100%);
}

.mobile-only {
  display: none !important;
}

.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: stretch;
  gap: 0.75rem;
  padding: 0.75rem 1rem 0;
  padding-top: max(0.75rem, env(safe-area-inset-top));
  pointer-events: none;
}

.top-side {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

.top-side.right {
  justify-content: flex-end;
}

.kpi {
  min-width: 100px;
  padding: 0.45rem 0.7rem;
  background: var(--bg-panel);
  border: 1px solid var(--bg-panel-border);
  backdrop-filter: blur(12px);
}

.kpi-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  color: var(--text-muted);
}

.kpi strong {
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--accent);
  text-shadow: 0 0 12px rgba(46, 230, 255, 0.35);
}

.kpi strong.status {
  font-size: 0.85rem;
}

.kpi.time strong {
  font-variant-numeric: tabular-nums;
}

.title-block {
  display: flex;
  justify-content: center;
}

.title-frame {
  position: relative;
  padding: 0.55rem 2.5rem 0.65rem;
  background: linear-gradient(180deg, rgba(10, 36, 56, 0.95), rgba(8, 24, 40, 0.75));
  border: 1px solid rgba(46, 200, 232, 0.55);
  clip-path: polygon(18px 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 18px 100%, 0 50%);
  text-align: center;
  box-shadow: 0 0 30px rgba(46, 230, 255, 0.15);
}

.title-frame h1 {
  font-family: var(--font-display);
  font-size: clamp(0.95rem, 2vw, 1.35rem);
  letter-spacing: 0.08em;
  font-weight: 700;
}

.title-frame p {
  margin-top: 0.15rem;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  color: var(--text-muted);
}

.status-line {
  letter-spacing: 0.08em !important;
  color: var(--accent) !important;
}

.hint-bar {
  position: absolute;
  top: 4.6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  max-width: min(520px, 70vw);
  padding: 0.35rem 0.9rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-muted);
  background: rgba(6, 16, 24, 0.55);
  border: 1px solid rgba(46, 200, 232, 0.2);
  backdrop-filter: blur(8px);
  pointer-events: none;
}

.panel {
  position: absolute;
  z-index: 5;
  width: min(300px, calc(100vw - 2rem));
  background: var(--bg-panel);
  border: 1px solid var(--bg-panel-border);
  backdrop-filter: blur(16px);
  padding: 0.95rem 1rem;
  box-shadow: 0 0 40px rgba(46, 230, 255, 0.08);
  pointer-events: auto;
}

.hud {
  border-radius: 2px;
}

.corner {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid var(--accent);
  pointer-events: none;
}
.corner.tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.corner.tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
.corner.bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
.corner.br { bottom: -1px; right: -1px; border-left: none; border-top: none; }

.panel-left {
  top: 6.4rem;
  left: 1rem;
  max-height: calc(100vh - 9rem);
  overflow: auto;
}

.panel-right {
  top: 6.4rem;
  right: 1rem;
  width: min(280px, calc(100vw - 2rem));
}

.panel-building {
  top: 6.4rem;
  right: 1rem;
  width: min(320px, calc(100vw - 2rem));
  max-height: calc(100vh - 9rem);
  overflow: auto;
}

.panel-close {
  position: absolute;
  top: 0.45rem;
  right: 0.55rem;
  width: 28px;
  height: 28px;
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1;
}

.lift-status {
  margin: 0.75rem 0;
  padding: 0.7rem 0.75rem;
  border: 1px solid rgba(46, 230, 255, 0.25);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.lift-status strong {
  font-size: 0.92rem;
}

.lift-status.yes {
  border-color: rgba(93, 255, 168, 0.55);
  background: rgba(93, 255, 168, 0.1);
  color: #9dffc8;
}

.lift-status.unknown {
  border-color: rgba(255, 176, 32, 0.5);
  background: rgba(255, 176, 32, 0.1);
  color: #ffd27a;
}

.lift-status.no {
  border-color: rgba(255, 90, 90, 0.5);
  background: rgba(255, 90, 90, 0.08);
  color: #ff9a9a;
}

.lift-meta {
  display: grid;
  gap: 0.45rem;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
}

.lift-meta div {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(46, 230, 255, 0.12);
  padding-bottom: 0.3rem;
}

.lift-meta dt {
  color: var(--text-muted);
}

.lift-meta dd {
  font-family: var(--font-mono);
  color: var(--text);
  text-align: right;
}

.furniture-note {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.45;
}

.furniture-note b {
  color: #ffd27a;
}

.panel h2,
.sheet-body h2 {
  font-family: var(--font-display);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
}

.mod {
  color: var(--accent);
  margin-right: 0.3rem;
  font-family: var(--font-mono);
}

.section-desc {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin: 0.3rem 0 0.7rem;
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 1.1rem 0 0.55rem;
}

.count {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--accent);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.chip {
  padding: 0.28rem 0.5rem;
  font-size: 0.72rem;
  border: 1px solid rgba(46, 230, 255, 0.25);
  color: var(--text-muted);
  font-family: var(--font-mono);
  min-height: 32px;
}

.chip:hover,
.chip.active {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
  box-shadow: 0 0 10px rgba(46, 230, 255, 0.2);
}

.station-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.station-list li {
  padding: 0.55rem 0.6rem;
  border: 1px solid rgba(46, 230, 255, 0.12);
  background: rgba(6, 16, 24, 0.35);
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s;
  -webkit-tap-highlight-color: transparent;
}

.station-list li:hover,
.station-list li.active {
  border-color: rgba(46, 230, 255, 0.55);
  box-shadow: 0 0 14px rgba(46, 230, 255, 0.12);
}

.station-top {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.station-name {
  margin-top: 0.2rem;
  font-size: 0.85rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.22rem;
  margin-top: 0.35rem;
}

.tag {
  font-size: 0.6rem;
  padding: 0.08rem 0.28rem;
  border: 1px solid rgba(46, 230, 255, 0.2);
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.cap-bar {
  margin-top: 0.4rem;
  height: 3px;
  background: rgba(46, 230, 255, 0.12);
}
.cap-bar i {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--accent-2), var(--accent));
}

.route-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  color: var(--accent);
}

.route-title {
  margin-top: 0.35rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  letter-spacing: 0.04em;
  line-height: 1.3;
}

.en {
  margin-top: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-muted);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
  margin: 0.9rem 0;
  padding: 0.7rem 0;
  border-top: 1px solid rgba(46, 230, 255, 0.2);
  border-bottom: 1px solid rgba(46, 230, 255, 0.2);
}

.stats dt {
  font-size: 0.62rem;
  color: var(--text-muted);
}

.stats dd {
  margin-top: 0.15rem;
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--accent);
}

.stats small {
  font-size: 0.55rem;
  margin-left: 0.15rem;
  color: var(--text-muted);
}

.reasons {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.75rem;
}

.reasons li {
  font-size: 0.75rem;
  color: var(--text-muted);
  padding-left: 0.8rem;
  position: relative;
}

.reasons li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.accepts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.85rem;
}

.accepts span {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 0.15rem 0.35rem;
  border: 1px solid rgba(46, 230, 255, 0.3);
}

.btn-clear {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(46, 230, 255, 0.4);
  font-family: var(--font-mono);
  letter-spacing: 0.1em;
  color: var(--accent);
  background: rgba(46, 230, 255, 0.06);
  min-height: 44px;
}

.btn-clear:hover {
  background: rgba(46, 230, 255, 0.14);
}

.brief {
  margin: 0.85rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.brief li {
  font-size: 0.78rem;
  color: var(--text-muted);
  padding-left: 0.8rem;
  position: relative;
  line-height: 1.4;
}

.brief li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.45em;
  width: 5px;
  height: 5px;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

.gauge {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: 0.5rem;
}

.gauge-ring {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 3px solid rgba(46, 230, 255, 0.25);
  border-top-color: var(--accent);
  border-right-color: var(--accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(46, 230, 255, 0.2);
  flex-shrink: 0;
}

.gauge-ring strong {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--accent);
}

.gauge-ring span {
  font-size: 0.58rem;
  color: var(--text-muted);
}

.gauge-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.gauge-meta div {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-muted);
  border-bottom: 1px solid rgba(46, 230, 255, 0.15);
  padding-bottom: 0.3rem;
}

.gauge-meta b {
  color: var(--text);
  font-family: var(--font-mono);
}

.legend {
  position: absolute;
  z-index: 5;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: var(--bg-panel);
  border: 1px solid var(--bg-panel-border);
  backdrop-filter: blur(12px);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-muted);
}

.legend span {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dot.cyan {
  background: #2ee6ff;
  box-shadow: 0 0 10px #2ee6ff;
}
.dot.green {
  background: #5dffa8;
  box-shadow: 0 0 10px #5dffa8;
}
.dot.magenta {
  background: #ff4af0;
  box-shadow: 0 0 10px #ff4af0;
}
.line {
  width: 16px;
  height: 3px;
  background: linear-gradient(90deg, #ff4af0, #c44bff, #7afcff);
  box-shadow: 0 0 10px #ff4af0;
}
.tip {
  padding-left: 0.5rem;
  border-left: 1px solid rgba(46, 230, 255, 0.25);
}

/* —— 手機布局 —— */
.sheet-backdrop {
  position: absolute;
  inset: 0;
  z-index: 6;
  background: rgba(2, 10, 18, 0.45);
  border: none;
}

.mobile-sheet {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 7;
  max-height: min(68vh, 560px);
  background: rgba(8, 22, 38, 0.94);
  border-top: 1px solid rgba(46, 200, 232, 0.45);
  border-radius: 16px 16px 0 0;
  backdrop-filter: blur(18px);
  transform: translateY(110%);
  transition: transform 0.28s ease;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.45);
}

.mobile-sheet.open {
  transform: translateY(0);
}

.sheet-handle {
  width: 42px;
  height: 4px;
  border-radius: 4px;
  background: rgba(46, 230, 255, 0.45);
  margin: 0.65rem auto 0.35rem;
}

.sheet-body {
  padding: 0.4rem 1rem 1rem;
  overflow: auto;
  max-height: calc(min(68vh, 560px) - 28px);
  -webkit-overflow-scrolling: touch;
}

.mobile-dock {
  position: absolute;
  z-index: 8;
  left: 50%;
  bottom: max(0.75rem, env(safe-area-inset-bottom));
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
  padding: 0.35rem;
  background: rgba(8, 22, 38, 0.92);
  border: 1px solid rgba(46, 200, 232, 0.4);
  border-radius: 999px;
  backdrop-filter: blur(14px);
  box-shadow: 0 0 24px rgba(46, 230, 255, 0.15);
}

.mobile-dock button {
  min-width: 96px;
  min-height: 44px;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
}

.mobile-dock button.active {
  color: #061018;
  background: linear-gradient(90deg, #2ee6ff, #7afcff);
  box-shadow: 0 0 16px rgba(46, 230, 255, 0.45);
}

.dock-ico {
  font-size: 0.9rem;
  line-height: 1;
}

@media (max-width: 960px) {
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: flex !important;
  }

  .mobile-sheet.mobile-only {
    display: block !important;
  }

  .sheet-backdrop.mobile-only {
    display: block !important;
  }

  .top-bar {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: max(0.45rem, env(safe-area-inset-top)) 0.6rem 0;
  }

  .title-frame {
    padding: 0.4rem 1.4rem 0.45rem;
    clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%);
    max-width: calc(100vw - 1.2rem);
  }

  .title-frame h1 {
    font-size: 0.82rem;
    letter-spacing: 0.04em;
  }

  .hint-bar {
    top: auto;
    bottom: calc(4.2rem + env(safe-area-inset-bottom));
    max-width: calc(100vw - 1.5rem);
    font-size: 0.72rem;
    padding: 0.35rem 0.7rem;
    line-height: 1.35;
  }

  .app-shell.sheet-open .hint-bar {
    opacity: 0;
    pointer-events: none;
  }

  .gauge.compact .gauge-ring {
    width: 72px;
    height: 72px;
  }

  /* MapLibre 控件上移，避開底部 dock */
  :deep(.maplibregl-ctrl-bottom-right) {
    bottom: calc(4.6rem + env(safe-area-inset-bottom)) !important;
    right: 0.5rem !important;
  }

  :deep(.maplibregl-ctrl-attrib) {
    margin-bottom: calc(3.6rem + env(safe-area-inset-bottom)) !important;
    font-size: 9px !important;
  }
}

@media (max-width: 400px) {
  .title-frame h1 {
    font-size: 0.74rem;
  }
  .mobile-dock button {
    min-width: 84px;
    font-size: 0.72rem;
  }
}
</style>
