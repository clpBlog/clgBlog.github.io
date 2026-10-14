/** 机电工程署升降机许可证 — 九龙城子集查询 */

export type LiftStatus = 'official_yes' | 'unknown' | 'verified_no'

export interface LiftUnit {
  no: string
  issue: string
  expiry: string
}

export interface LiftLocation {
  id: string
  nameHint: string
  addressEn: string
  addressZh: string
  lat: number
  lng: number
  liftCount: number
  latestExpiry?: string
  lifts: LiftUnit[]
}

export interface LiftDataset {
  source: string
  sourceUrl: string
  generatedAt: string
  locations: LiftLocation[]
}

export interface BuildingLiftResult {
  status: LiftStatus
  title: string
  buildingName: string
  addressZh?: string
  addressEn?: string
  liftCount: number
  distanceM: number | null
  confidence: 'high' | 'medium' | 'low'
  evidenceType: 'EMSD' | 'none'
  sourceUpdatedAt: string
  matched?: LiftLocation
  notes: string[]
}

const MATCH_RADIUS_M = 30

function haversineM(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371000
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

/** 简易网格空间索引 */
class GridIndex {
  private readonly cell = 0.0003 // ~33m
  private readonly buckets = new Map<string, LiftLocation[]>()

  constructor(locations: LiftLocation[]) {
    for (const loc of locations) {
      const key = this.key(loc.lat, loc.lng)
      const list = this.buckets.get(key)
      if (list) list.push(loc)
      else this.buckets.set(key, [loc])
    }
  }

  private key(lat: number, lng: number): string {
    return `${Math.floor(lat / this.cell)}:${Math.floor(lng / this.cell)}`
  }

  nearby(lat: number, lng: number, radiusM: number): { loc: LiftLocation; dist: number }[] {
    const i0 = Math.floor(lat / this.cell)
    const j0 = Math.floor(lng / this.cell)
    const out: { loc: LiftLocation; dist: number }[] = []
    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        const list = this.buckets.get(`${i0 + di}:${j0 + dj}`)
        if (!list) continue
        for (const loc of list) {
          const dist = haversineM({ lat, lng }, loc)
          if (dist <= radiusM) out.push({ loc, dist })
        }
      }
    }
    out.sort((a, b) => a.dist - b.dist)
    return out
  }
}

let dataset: LiftDataset | null = null
let index: GridIndex | null = null
let loadPromise: Promise<void> | null = null

export function loadLiftDataset(): Promise<void> {
  if (dataset && index) return Promise.resolve()
  if (loadPromise) return loadPromise

  const url = new URL('data/kowloon-lifts.json', new URL(import.meta.env.BASE_URL, window.location.href)).toString()
  loadPromise = fetch(url)
    .then((r) => {
      if (!r.ok) throw new Error(`lift data HTTP ${r.status}`)
      return r.json() as Promise<LiftDataset>
    })
    .then((data) => {
      dataset = data
      index = new GridIndex(data.locations)
    })
    .catch((err) => {
      loadPromise = null
      throw err
    })

  return loadPromise
}

export function getLiftDatasetMeta() {
  if (!dataset) return null
  return {
    source: dataset.source,
    sourceUrl: dataset.sourceUrl,
    generatedAt: dataset.generatedAt,
    buildings: dataset.locations.length,
    lifts: dataset.locations.reduce((s, x) => s + x.liftCount, 0),
  }
}

export function queryBuildingLift(opts: {
  lat: number
  lng: number
  osmName?: string | null
}): BuildingLiftResult {
  const osmName = (opts.osmName || '').trim()
  const fallbackName = osmName || '未知名稱樓宇'

  if (!index || !dataset) {
    return {
      status: 'unknown',
      title: '升降機資料載入中或失敗',
      buildingName: fallbackName,
      liftCount: 0,
      distanceM: null,
      confidence: 'low',
      evidenceType: 'none',
      sourceUpdatedAt: '',
      notes: ['請稍後再試，或檢查網絡連線。'],
    }
  }

  const hits = index.nearby(opts.lat, opts.lng, MATCH_RADIUS_M)
  if (!hits.length) {
    return {
      status: 'unknown',
      title: '暫未匹配到官方升降機記錄',
      buildingName: fallbackName,
      liftCount: 0,
      distanceM: null,
      confidence: 'low',
      evidenceType: 'none',
      sourceUpdatedAt: dataset.generatedAt,
      notes: [
        '這不代表樓宇一定沒有升降機。',
        '可能是地址寫法不同、坐標偏移或尚未納入當期公開表。',
        '請向管理處確認，或提交現場資料供團隊核實。',
      ],
    }
  }

  const best = hits[0]
  const displayName =
    osmName ||
    best.loc.nameHint ||
    best.loc.addressZh.split(/\s+/).slice(-1)[0] ||
    fallbackName

  const confidence: BuildingLiftResult['confidence'] =
    best.dist <= 12 ? 'high' : best.dist <= 22 ? 'medium' : 'low'

  const expiryDates = best.loc.lifts.map((l) => l.expiry).filter(Boolean).sort()
  const latestExpiry = best.loc.latestExpiry || expiryDates[expiryDates.length - 1]

  return {
    status: 'official_yes',
    title: '官方記錄顯示有升降機',
    buildingName: displayName,
    addressZh: best.loc.addressZh,
    addressEn: best.loc.addressEn,
    liftCount: best.loc.liftCount,
    distanceM: Math.round(best.dist),
    confidence,
    evidenceType: 'EMSD',
    sourceUpdatedAt: dataset.generatedAt,
    matched: best.loc,
    notes: [
      `找到 ${best.loc.liftCount} 台登記升降機`,
      `匹配距離約 ${Math.round(best.dist)} 米`,
      latestExpiry ? `許可證有效期示例：至 ${latestExpiry}` : '許可證日期見明細',
      '來源：香港機電工程署升降機使用許可證資料',
      '能否搬運大型傢俬：尚待確認（門寬 / 轎廂深度 / 管理處規定）',
    ],
  }
}

/** 全部升降機樓宇點（地圖標記層） */
export function liftLocationsForMap(): LiftLocation[] {
  return dataset?.locations ?? []
}
