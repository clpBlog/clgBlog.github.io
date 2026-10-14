import { assessCargo, DEMO_RULES, type CargoInput, type Occupancy, type ItemCategory } from './bookingRules'

// Illustrative templates only. Never copy these values into booking measurements.
export const CARGO_TEMPLATES: Record<ItemCategory, { length: number; width: number; height: number; weight: number }> = {
  chair: { length: 60, width: 60, height: 85, weight: 8 },
  cabinet: { length: 80, width: 50, height: 80, weight: 20 },
  table: { length: 100, width: 60, height: 75, weight: 15 },
  box: { length: 50, width: 40, height: 45, weight: 10 },
  sofa: { length: 210, width: 95, height: 85, weight: 65 },
  bed: { length: 200, width: 150, height: 60, weight: 55 },
  other: { length: 70, width: 60, height: 75, weight: 10 },
}
export function planCargoPreview(item: CargoInput, occupied: Occupancy, photo = false) {
  if (!item.category && !photo) return null
  const category = item.category || 'other'
  const template = CARGO_TEMPLATES[category]
  const measured = [item.length, item.width, item.height].every(n => Number.isFinite(n) && n > 0)
  const dimensions = measured ? { length: item.length, width: item.width, height: item.height } : { length: template.length, width: template.width, height: template.height }
  // Preview is a hypothetical loading path, not an approval. Use fixed illustrative load if weight is missing.
  // A photo of an unknown category can illustrate movement as a generic envelope.
  // This result is ONLY for animation; the actual item still requires category review.
  const fitting = assessCargo({ ...dimensions, category: photo && category === 'other' ? 'box' : category, weight: item.weight > 0 ? item.weight : template.weight,
    confirmed: true, groundReady: true, stableBase: true, needsDismantling: false }, DEMO_RULES, occupied)
  return { dimensions, measured, category, fitting }
}
export function cargoLoadingPose(progress: number, slot: { x: number; z: number }) {
  const t = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0))
  const smooth = (x: number) => { const v = Math.max(0, Math.min(1, x)); return v * v * (3 - 2 * v) }
  const board = smooth(t / .25), lift = smooth((t - .25) / .3), inward = smooth((t - .55) / .35)
  return { x: t < .55 ? 6.2 - 1.99 * board : 4.21 + (slot.x - 4.21) * inward,
    y: t < .25 ? .03 + .23 * board : .26 + .92 * lift, z: slot.z, lift,
    secured: t >= .9, stage: t >= 1 ? '完成演示' : t >= .9 ? '示意固定' : t >= .55 ? '推入货位' : t >= .25 ? '尾板升起' : '人工辅助上尾板',
  }
}
