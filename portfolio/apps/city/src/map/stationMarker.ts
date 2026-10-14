import type { Station } from '../data/kowloon'

/** 建立高科技懸浮光標 DOM */
export function createStationBeaconEl(station: Station): HTMLElement {
  const root = document.createElement('div')
  root.className = 'station-beacon'
  root.dataset.id = station.id
  root.title = station.name

  root.innerHTML = `
    <div class="beacon-float">
      <div class="beacon-label">
        <span class="beacon-tag">NODE</span>
        <span class="beacon-name">${station.name}</span>
        <span class="beacon-cap">${station.capacity}%</span>
      </div>
      <div class="beacon-diamond"></div>
      <div class="beacon-beam"></div>
    </div>
    <div class="beacon-ground">
      <i class="ring r1"></i>
      <i class="ring r2"></i>
      <i class="ring r3"></i>
      <i class="core"></i>
    </div>
  `

  return root
}
