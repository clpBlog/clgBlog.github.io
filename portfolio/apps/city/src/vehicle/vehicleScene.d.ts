import type { VehiclePose, VehicleState, CargoInspection } from './types'
export function createVehicleScene(host: HTMLElement): {
  render(pose: VehiclePose, state: VehicleState): void
  view(name?: 'hero' | 'rear' | 'front' | 'side' | 'top' | 'sensor' | 'cargo'): void
  inspectCargo(config: CargoInspection | null): void
  annotations(): {id:string;label:string;x:number;y:number;dx:number;dy:number;visible:boolean}[]
  dispose(): void
}
