import { haversineMeters, STATIONS, type Station, type WasteType } from './kowloon'

export interface LngLat {
  lng: number
  lat: number
}

export interface RouteResult {
  station: Station
  coordinates: [number, number][]
  distance: number
  duration: number
  score: number
  reasons: string[]
}

interface OsrmRoute {
  distance: number
  duration: number
  geometry: { coordinates: [number, number][] }
}

function scoreStation(
  station: Station,
  distance: number,
  wasteType: WasteType | null,
): { score: number; reasons: string[] } {
  const reasons: string[] = []
  let score = 100 - distance / 25
  reasons.push(`步行約 ${(distance / 1000).toFixed(2)} km`)

  if (wasteType) {
    if (station.accepts.includes(wasteType) || station.accepts.includes('general')) {
      score += 35
      reasons.push('接受所選回收類型')
    } else {
      score -= 80
      reasons.push('不接受所選類型')
    }
  }

  score += station.capacity * 0.25
  if (station.capacity >= 70) reasons.push('剩餘容量充足')
  else if (station.capacity < 40) {
    score -= 15
    reasons.push('剩餘容量偏低')
  }

  return { score, reasons }
}

async function fetchOsrmRoute(
  from: LngLat,
  to: LngLat,
): Promise<{ distance: number; duration: number; coordinates: [number, number][] } | null> {
  const url =
    `https://router.project-osrm.org/route/v1/foot/` +
    `${from.lng},${from.lat};${to.lng},${to.lat}` +
    `?overview=full&geometries=geojson`

  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const data = (await res.json()) as { code?: string; routes?: OsrmRoute[] }
    if (data.code !== 'Ok' || !data.routes?.[0]) return null
    const route = data.routes[0]
    return {
      distance: route.distance,
      duration: route.duration,
      coordinates: route.geometry.coordinates,
    }
  } catch {
    return null
  }
}

/** 直線回退路線（OSRM 不可用時） */
function straightFallback(from: LngLat, to: LngLat) {
  const distance = haversineMeters(from, to)
  return {
    distance,
    duration: distance / 1.3,
    coordinates: [
      [from.lng, from.lat] as [number, number],
      [to.lng, to.lat] as [number, number],
    ],
  }
}

export async function planBestRoute(
  origin: LngLat,
  wasteType: WasteType | null = null,
): Promise<RouteResult | null> {
  let candidates = STATIONS
  if (wasteType) {
    const filtered = STATIONS.filter(
      (s) => s.accepts.includes(wasteType) || s.accepts.includes('general'),
    )
    if (filtered.length) candidates = filtered
  }

  // 先按直線距離取前 4 個，減少 OSRM 請求
  const ranked = [...candidates]
    .map((s) => ({ station: s, d: haversineMeters(origin, s) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 4)

  const results = await Promise.all(
    ranked.map(async ({ station }) => {
      const routed =
        (await fetchOsrmRoute(origin, station)) ?? straightFallback(origin, station)
      const { score, reasons } = scoreStation(station, routed.distance, wasteType)
      return {
        station,
        coordinates: routed.coordinates,
        distance: routed.distance,
        duration: routed.duration,
        score,
        reasons,
      } satisfies RouteResult
    }),
  )

  results.sort((a, b) => b.score - a.score)
  return results[0] ?? null
}
