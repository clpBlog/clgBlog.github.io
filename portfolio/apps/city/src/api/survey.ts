import {STATIONS} from '../data/kowloon'
/** 港弃宝调查台 API（qinggangbao.com/survey） */

export type VisitStatus = 'not-started' | 'in-progress' | 'completed'

export type AnswerStatus = 'unasked' | 'yes' | 'no' | 'conditional'

export type SurveyStation = {
  id: string
  name: string
  address: string
  hours: string
  lat: number
  lng: number
  phone: string
}

export type SurveyItem = {
  id: string
  category: string
  name: string
  hint: string
  ask: string
  image: string
  custom?: boolean
}

export type SurveyAnswer = {
  status: AnswerStatus | string
  evidence?: string
  dismantle?: boolean
  appointment?: boolean
  packaging?: boolean
  notes?: string
  sizeNote?: string
  updatedAt?: string
}

export type StationSurvey = {
  meta: {
    visitStatus: VisitStatus | string
    visitDate: string
    method: string
    respondentRole: string
    actualHours: string
    phone: string
    generalNotes: string
  }
  answers: Record<string, SurveyAnswer>
  photos: unknown[]
}

export type SurveyCatalog = {
  stations: SurveyStation[]
  items: SurveyItem[]
  categories?: unknown
  defaultItemCount?: number
}

export type SurveyPayload = {
  version?: number
  selectedStationId?: string
  customItems?: unknown[]
  stations: Record<string, StationSurvey>
  updatedAt?: string
}

export type SurveyStats = {
  stations: number
  items: number
  answers: number
  photos: number
  complete: number
  progress: number
}

export type StationRow = SurveyStation & {
  visitStatus: VisitStatus
  visitDate: string
  method: string
  respondentRole: string
  generalNotes: string
  answered: number
  totalItems: number
  accepts: { id: string; name: string; status: string }[]
  surveyUrl: string
}

const SURVEY_SITE = 'https://qinggangbao.com/survey'
/** 开发经 Vite 代理；生产可设 VITE_SURVEY_API_BASE */
const API_BASE = (import.meta.env.VITE_SURVEY_API_BASE as string) || '/survey-api'

export const VISIT_STATUS_META: Record<
  VisitStatus,
  { label: string; tone: 'muted' | 'info' | 'success' }
> = {
  'not-started': { label: '未开始', tone: 'muted' },
  'in-progress': { label: '调查中', tone: 'info' },
  completed: { label: '已完成', tone: 'success' },
}

export const ANSWER_STATUS_META: Record<string, { label: string; tone: string }> = {
  yes: { label: '收', tone: 'success' },
  no: { label: '不收', tone: 'danger' },
  conditional: { label: '看情况', tone: 'warn' },
  unasked: { label: '未问', tone: 'muted' },
}

export const METHOD_LABELS: Record<string, string> = {
  visitAsk: '现场询问',
  phoneAsk: '电话询问',
  notice: '现场告示',
  observe: '实际观察',
  officialReply: '官方书面回复',
}

export const ROLE_LABELS: Record<string, string> = {
  staff: '站内职员',
  contractor: '清洁承办商',
  security: '保安',
  fehd: '食环署职员',
  other: '其他',
}

async function getJson<T>(path: string): Promise<T> {
  const stations = STATIONS.map((s,i)=>({id:s.id,name:'演示站点 '+(i+1),address:s.district+' · 示意位置',hours:s.openHours,lat:s.lat,lng:s.lng,phone:''}))
  const items = [{id:'paper',category:'演示类别',name:'纸类',hint:'合成示例',ask:'是否接收',image:''}]
  const data = path === '/catalog' ? {stations,items} : path === '/stats' ? {stations:stations.length,items:1,answers:0,photos:0,complete:0,progress:0} : {stations:{}}
  return data as T
}

export async function fetchSurveyCatalog() {
  return getJson<SurveyCatalog>('/catalog')
}

export async function fetchSurveyData() {
  return getJson<SurveyPayload>('/survey')
}

export async function fetchSurveyStats() {
  return getJson<SurveyStats>('/stats')
}

export function normalizeVisitStatus(raw: string | undefined): VisitStatus {
  if (raw === 'completed' || raw === 'in-progress') return raw
  return 'not-started'
}

export function buildStationRows(
  catalog: SurveyCatalog,
  survey: SurveyPayload,
): StationRow[] {
  const totalItems = catalog.items.length || catalog.defaultItemCount || 10
  const surveyMap = survey.stations || {}

  return catalog.stations.map((st) => {
    const rec = surveyMap[st.id]
    const answers = rec?.answers || {}
    const answered = Object.values(answers).filter(
      (a) => a && a.status && a.status !== 'unasked',
    ).length
    const accepts = catalog.items.map((item) => ({
      id: item.id,
      name: item.name,
      status: answers[item.id]?.status || 'unasked',
    }))

    return {
      ...st,
      visitStatus: normalizeVisitStatus(rec?.meta?.visitStatus),
      visitDate: rec?.meta?.visitDate || '',
      method: rec?.meta?.method || '',
      respondentRole: rec?.meta?.respondentRole || '',
      generalNotes: rec?.meta?.generalNotes || '',
      answered,
      totalItems,
      accepts,
      surveyUrl: `${SURVEY_SITE}/`,
    }
  })
}

export { SURVEY_SITE, API_BASE }
