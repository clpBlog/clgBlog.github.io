import { pose, stages } from './simulation.js'
import type { DeliveryPhase, VehiclePose } from './types'

export const PHASE_DURATION: Record<DeliveryPhase, number> = {ready:0, loading:14000, driving:24000, unloading:8000, done:0}

// Use the original seven mechanical stages with one clock owned by the order.
export function deliveryAnimation(phase: DeliveryPhase, progress: number): {pose: VehiclePose; label: string} {
  const t = Math.max(0, Math.min(1, progress))
  let stage = 0, local = 0
  if (phase === 'loading') {
    const seconds = t * 14
    if (seconds < 3) { stage = 0; local = seconds/3 }
    else if (seconds < 7) { stage = 1; local = (seconds-3)/4 }
    else if (seconds < 11) { stage = 2; local = (seconds-7)/4 }
    else { stage = 3; local = (seconds-11)/3 }
  } else if (phase === 'driving') { stage = 4; local = t }
  else if (phase === 'unloading') {
    const seconds = t*8
    stage = seconds < 3 ? 5 : 6; local = seconds < 3 ? seconds/3 : (seconds-3)/5
  } else if (phase === 'done') { stage = 6; local = 1 }
  const result = pose(stage, local)
  // Original scan stage receives its opening amount from the UI; supply it here.
  if (stage === 0) result.closed = 1 - (local*local*(3-2*local))
  return {pose:result, label: phase === 'ready' ? '准备装货' : phase === 'done' ? '模拟卸载交接完成' : stages[stage].name}
}
