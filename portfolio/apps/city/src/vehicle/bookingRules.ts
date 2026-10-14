// Booking preflight only. All limits below are unvalidated demonstration settings.
export type ItemCategory = 'box' | 'chair' | 'table' | 'cabinet' | 'sofa' | 'bed' | 'other'
export const CATEGORY_LABELS: Record<ItemCategory, string> = {
  box: '箱形物品', chair: '椅子', table: '桌子', cabinet: '柜子', sofa: '沙发', bed: '床／床架', other: '其他／待确认',
}
export type Decision = 'incomplete' | 'review' | 'mover' | 'full' | 'eligible'
export interface CargoInput {
  category: ItemCategory | ''; length: number; width: number; height: number; weight: number
  confirmed: boolean; groundReady: boolean; needsDismantling: boolean; stableBase: boolean
}
export interface CargoRules {
  maxLength: number; maxWidth: number; maxHeight: number; maxWeight: number
  doorWidth: number; doorHeight: number; platformLength: number; platformWidth: number
  platformWeight: number; totalWeight: number; margin: number
}
export const DEMO_RULES: CargoRules = {
  maxLength: 120, maxWidth: 70, maxHeight: 90, maxWeight: 30,
  doorWidth: 210, doorHeight: 115, platformLength: 180, platformWidth: 210,
  platformWeight: 60, totalWeight: 100, margin: 5,
}
export interface CargoSlot {
  id: string; label: string; length: number; width: number; height: number; maxWeight: number
  x: number; z: number; blockedBy?: string
}
export const CARGO_SLOTS: CargoSlot[] = [
  { id: 'A', label: 'A · 左前货位', length: 180, width: 90, height: 110, maxWeight: 40, x: -.3, z: .55, blockedBy: 'C' },
  { id: 'B', label: 'B · 右前货位', length: 180, width: 90, height: 110, maxWeight: 40, x: -.3, z: -.55, blockedBy: 'D' },
  { id: 'C', label: 'C · 左后货位', length: 180, width: 90, height: 110, maxWeight: 40, x: 1.7, z: .55 },
  { id: 'D', label: 'D · 右后货位', length: 180, width: 90, height: 110, maxWeight: 40, x: 1.7, z: -.55 },
]
export type Occupancy = Partial<Record<string, number>>
export interface CargoResult { status: Decision; reasons: string[]; slot?: CargoSlot; rotated?: boolean }
export function assessCargo(item: CargoInput, rules: CargoRules, occupied: Occupancy = {}): CargoResult {
  const result = (status: Decision, ...reasons: string[]): CargoResult => ({ status, reasons })
  if (Object.values(rules).some(v => !Number.isFinite(v) || v <= 0)) return result('review', '演示规则有无效数值，请先检查参数。')
  if (![item.length, item.width, item.height, item.weight].every(v => Number.isFinite(v) && v > 0)) {
    return result('incomplete', '请补齐实测或可靠来源的长、宽、高与重量。照片不用于推算这些数值。')
  }
  if (!item.category || !item.confirmed) return result('incomplete', '请确认物品类别，以及包含包装／承托板的外廓尺寸和重量。')
  if (Object.entries(occupied).some(([id, weight]) => !CARGO_SLOTS.some(s => s.id === id) || !Number.isFinite(weight) || weight! <= 0)) {
    return result('review', '货位占用数据不完整，需要人工核对。')
  }
  const reasons: string[] = []
  if (!item.groundReady) reasons.push('尚不能自行送达地面交收点，需要搬运人员评估搬下楼与通道。')
  if (item.needsDismantling) reasons.push('物品需要拆卸，请先由师傅评估，再按拆后尺寸重新预检。')
  if (item.weight > rules.maxWeight) reasons.push(`单件 ${item.weight} kg，超过演示预约上限 ${rules.maxWeight} kg。`)
  if (item.weight > rules.platformWeight) reasons.push(`超过尾板演示承重 ${rules.platformWeight} kg。`)
  const orientations = [
    { length: item.length, width: item.width, rotated: false },
    { length: item.width, width: item.length, rotated: true },
  ]
  const withinService = orientations.filter(o => o.length <= rules.maxLength && o.width <= rules.maxWidth && item.height <= rules.maxHeight)
  if (!withinService.length) reasons.push(`尺寸超出演示上限 ${rules.maxLength} × ${rules.maxWidth} × ${rules.maxHeight} cm（允许水平转向，不允许倾倒）。`)
  const fitPath = withinService.filter(o => o.length + 2 * rules.margin <= rules.platformLength && o.width + 2 * rules.margin <= Math.min(rules.doorWidth, rules.platformWidth) && item.height + rules.margin <= rules.doorHeight)
  if (withinService.length && !fitPath.length) reasons.push('物品与预留间隙无法通过演示车门或放入尾板。')
  if (reasons.length) return { status: 'mover', reasons }
  if (!item.stableBase || item.category === 'other') return result('review', '承托／固定条件或物品类别尚未确认，暂不开放无人车预约。')
  const fitting = CARGO_SLOTS.flatMap(slot => fitPath
    .filter(o => o.length + 2 * rules.margin <= slot.length && o.width + 2 * rules.margin <= slot.width && item.height + rules.margin <= slot.height && item.weight <= slot.maxWeight)
    .map(o => ({ slot, rotated: o.rotated })))
  if (!fitting.length) return result('mover', '没有尺寸和载荷均适用的演示货位，请师傅评估其他承运方式。')
  const total = Object.values(occupied).reduce<number>((sum, value) => sum + (value ?? 0), 0)
  if (total + item.weight > rules.totalWeight) return result('full', `本车次剩余演示载荷 ${Math.max(0, rules.totalWeight - total)} kg 不足，请换车次。`)
  const available = fitting.find(({ slot }) => occupied[slot.id] === undefined && (!slot.blockedBy || occupied[slot.blockedBy] === undefined))
  if (!available) return result('full', '适配货位已占用，或从车尾进入的直线通道被占用，请换车次。')
  return { status: 'eligible', ...available, reasons: [
    `建议 ${available.slot.label}，${available.rotated ? '先在车外水平转向 90°，' : ''}从车尾沿本列进入。`,
    '通过当前演示规则。实车需重新核对固定、偏载、尾板与现场通道；本页面仅生成模拟预约。',
  ] }
}
