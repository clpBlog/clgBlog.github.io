import type { CustomLayerInterface } from 'maplibre-gl'
import type { VehiclePose, VehicleState } from './types'
export function createVehicleMapLayer(): CustomLayerInterface & {
  update(point: [number,number], bearing: number, pose: VehiclePose, state: VehicleState): void
}
