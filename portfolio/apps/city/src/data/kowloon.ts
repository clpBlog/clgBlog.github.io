/** 九龍城區回收站（真實經緯度示意位置） */

export type WasteType =
  | 'paper'
  | 'plastic'
  | 'metal'
  | 'glass'
  | 'ewaste'
  | 'textile'
  | 'general'

export const WASTE_LABELS: Record<WasteType, string> = {
  paper: '紙類',
  plastic: '塑膠',
  metal: '金屬',
  glass: '玻璃',
  ewaste: '電子廢料',
  textile: '紡織',
  general: '一般可回收',
}

export interface Station {
  id: string
  name: string
  nameEn: string
  /** 經度 */
  lng: number
  /** 緯度 */
  lat: number
  accepts: WasteType[]
  capacity: number
  openHours: string
  district: string
}

/** 地圖中心：九龍城 */
export const MAP_CENTER: [number, number] = [114.1915, 22.3305]

export const STATIONS: Station[] = [
  {
    id: 's1',
    name: '九龍城廣場回收點',
    nameEn: 'Kowloon City Plaza',
    lng: 114.1912,
    lat: 22.3308,
    accepts: ['paper', 'plastic', 'metal', 'general'],
    capacity: 72,
    openHours: '08:00–20:00',
    district: '九龍城',
  },
  {
    id: 's2',
    name: '土瓜灣道社區回收站',
    nameEn: 'To Kwa Wan Road',
    lng: 114.1888,
    lat: 22.3175,
    accepts: ['paper', 'plastic', 'glass', 'textile'],
    capacity: 45,
    openHours: '09:00–18:00',
    district: '土瓜灣',
  },
  {
    id: 's3',
    name: '馬頭圍邨回收亭',
    nameEn: 'Ma Tau Wai Estate',
    lng: 114.1868,
    lat: 22.3232,
    accepts: ['paper', 'plastic', 'metal', 'ewaste'],
    capacity: 88,
    openHours: '24 小時',
    district: '馬頭圍',
  },
  {
    id: 's4',
    name: '何文田站外圍回收點',
    nameEn: 'Ho Man Tin Station',
    lng: 114.1825,
    lat: 22.3098,
    accepts: ['paper', 'plastic', 'metal', 'glass', 'general'],
    capacity: 60,
    openHours: '07:00–22:00',
    district: '何文田',
  },
  {
    id: 's5',
    name: '啟德跑道公園回收站',
    nameEn: 'Kai Tak Runway Park',
    lng: 114.2045,
    lat: 22.3092,
    accepts: ['paper', 'plastic', 'textile', 'general'],
    capacity: 95,
    openHours: '06:00–23:00',
    district: '啟德',
  },
  {
    id: 's6',
    name: '宋皇臺站回收專站',
    nameEn: 'Sung Wong Toi Station',
    lng: 114.1938,
    lat: 22.3255,
    accepts: ['ewaste', 'metal', 'plastic'],
    capacity: 55,
    openHours: '10:00–19:00',
    district: '宋皇臺',
  },
  {
    id: 's7',
    name: '衙前圍道綠化回收點',
    nameEn: 'Nga Tsin Wai Road',
    lng: 114.1942,
    lat: 22.3342,
    accepts: ['paper', 'plastic', 'glass', 'textile', 'general'],
    capacity: 38,
    openHours: '08:00–18:00',
    district: '九龍城',
  },
]

export function haversineMeters(
  a: { lng: number; lat: number },
  b: { lng: number; lat: number },
): number {
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

// Public demo: retain geographic positions, replace business identities and measurements.
STATIONS.forEach((s,i)=>{s.name=`演示回收点 ${i+1}`;s.nameEn=`Demo station ${i+1}`;s.capacity=35+(i*13)%60;s.openHours="演示时段 09:00–18:00"})
