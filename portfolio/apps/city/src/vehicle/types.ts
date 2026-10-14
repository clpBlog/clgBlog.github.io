export type DeliveryPhase = 'ready' | 'loading' | 'driving' | 'unloading' | 'done'
export interface VehiclePose {
  lift: number; inward: number; fold: number; closed: number
  secured: boolean; travel: number; driveAllowed: boolean
}
export interface VehicleState {
  layout: 'double' | 'full'; fleet: 'clearance' | 'reuse'; item: 'sofa' | 'cabinet'
  cutaway: boolean; showSafety: boolean; latched: boolean; intrusion: boolean; distance?: number
}
export interface CargoInspection {
  photo?: HTMLCanvasElement
  model3dUrl?: string
  onModelError?: () => void
  category?: import('./bookingRules').ItemCategory
  progress?: number
  rotated?: boolean
  slots: { id: string; x: number; z: number; length: number; width: number; height: number }[]
  occupied: string[]
  selected?: string
  dimensions?: { length: number; width: number; height: number }
}
