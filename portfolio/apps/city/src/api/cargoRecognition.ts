import {assessCargo, DEMO_RULES} from '../vehicle/bookingRules'
import type { CargoInput, CargoResult, CargoRules, Occupancy } from '../vehicle/bookingRules'
export interface Recognition {
  recognitionId: string; expiresInSeconds: number
  source: 'gemini'; name: string; category: CargoInput['category']; objectCount: number
  needsDismantling: 'yes' | 'no' | 'unknown'; observations: string[]; reviewReasons: string[]
}
export interface ServerCheck { mode: 'simulation'; ruleVersion: string; result: CargoResult; rules: CargoRules }
export interface Model3DTask {
  id: string; status: 'queued' | 'generating' | 'ready' | 'failed'
  title?: string; createdAt?: string; updatedAt?: string
  hasPhoto?: boolean; hasModel?: boolean
  modelUrl?: string; photoUrl?: string; message?: string; expiresInSeconds?: number
}
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export function cargoApiUrl(path = '') {
  if (!path) return base
  if (path.startsWith('https://')) return path
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
async function request(path: string, token: string, signal: AbortSignal, body?: unknown) {
  if (signal.aborted) throw new DOMException('已取消', 'AbortError')
  if (path === '/preflight') {
    const input = body as {item: CargoInput; occupied: Occupancy}
    return {mode: 'simulation', ruleVersion: 'public-demo', rules: DEMO_RULES, result: assessCargo(input.item, DEMO_RULES, input.occupied)}
  }
  if (path === '/models' && !body) return {items: demoModels}
  if (path.startsWith('/models/') && !body) {
    const item = demoModels.find(m => m.id === decodeURIComponent(path.split('/')[2]))
    if (item) return item
  }
  throw new Error('公开展示版未连接识别、生成或写入服务。请使用合成模型与手动预检。')
}
const demoModels: Model3DTask[] = ['chair','cabinet'].map((id,i) => ({
 id: '00000000-0000-4000-8000-00000000000'+(i+1), status:'ready', title: i ? '合成模型 · 柜子' : '合成模型 · 椅子',
 hasModel:true, hasPhoto:false, modelUrl:'/demo/'+id+'.gltf',
 message:'程序化合成样例，用于验证模型查看和装载回放；不是照片生成结果。'
}))

export class CargoGatewayError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.name = 'CargoGatewayError'
    this.status = status
  }
}
export function isModelStillGenerating(error: unknown) {
  return error instanceof CargoGatewayError && (error.status === 502 || error.status === 504)
}
export async function recognizeCargo(file: File, token: string, signal: AbortSignal): Promise<Recognition> {
  const image = await imageBase64(file)
  if (signal.aborted) throw new DOMException('已取消', 'AbortError')
  return request('/recognitions', token, signal, { image: { mimeType: file.type, base64: image } })
}
async function imageBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '')
    reader.onerror = () => reject(new Error('图片读取失败'))
    reader.readAsDataURL(file)
  })
}
export async function checkCargo(item: CargoInput, occupied: Occupancy, token: string, signal: AbortSignal, recognitionId?: string): Promise<ServerCheck> {
  return request('/preflight', token, signal, { item, occupied, recognitionId })
}
export async function createCargoModel(file: File, token: string, signal: AbortSignal, title?: string): Promise<Model3DTask> {
  const image = await imageBase64(file)
  if (signal.aborted) throw new DOMException('已取消', 'AbortError')
  return request('/models', token, signal, { image: { mimeType: file.type, base64: image }, ...(title ? { title } : {}) })
}
export function getCargoModel(id: string, token: string, signal: AbortSignal): Promise<Model3DTask> {
  return request(`/models/${encodeURIComponent(id)}`, token, signal)
}
export function updateCargoModelTitle(id: string, token: string, signal: AbortSignal, title: string): Promise<Model3DTask> {
  return request(`/models/${encodeURIComponent(id)}`, token, signal, { title })
}
export async function listCargoModels(token: string, signal?: AbortSignal): Promise<Model3DTask[]> {
  const data = await request('/models', token, signal || new AbortController().signal)
  return Array.isArray(data.items) ? data.items : []
}
