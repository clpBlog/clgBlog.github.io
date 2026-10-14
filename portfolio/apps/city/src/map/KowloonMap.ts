import {
  LngLatBounds,
  Map as MapLibreMap,
  Marker,
  NavigationControl,
  setWorkerUrl,
  type GeoJSONSource,
  type MapLayerMouseEvent,
} from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import {
  liftLocationsForMap,
  loadLiftDataset,
  queryBuildingLift,
  type BuildingLiftResult,
} from '../data/lifts'
import { MAP_CENTER, STATIONS, type Station } from '../data/kowloon'
import type { LngLat } from '../data/routing'
import { createStationBeaconEl } from './stationMarker'

// MapLibre v6 + Vite：必須手動指定 worker，否則瓦片無法載入
setWorkerUrl(workerUrl)

export interface MapCallbacks {
  onPick: (point: LngLat) => void
  onStationClick?: (station: Station) => void
  onBuildingClick?: (result: BuildingLiftResult, point: LngLat) => void
}

const STYLE_URL = 'https://tiles.openfreemap.org/styles/liberty'

/** 深色科技風調色 */
function applyTechTheme(map: MapLibreMap) {
  const setPaint = (id: string, prop: string, value: unknown) => {
    if (!map.getLayer(id)) return
    try {
      // MapLibre paint keys vary by layer type
      map.setPaintProperty(id, prop as never, value as never)
    } catch {
      /* layer may not support property */
    }
  }

  setPaint('background', 'background-color', '#061018')
  setPaint('water', 'fill-color', '#0a2a48')
  setPaint('waterway_river', 'line-color', '#1a6a9a')
  setPaint('waterway_other', 'line-color', '#1a6a9a')

  // 陸地 / 公園
  for (const id of [
    'park',
    'landcover_wood',
    'landcover_grass',
    'landuse_residential',
    'landuse_pitch',
    'landuse_cemetery',
    'landuse_hospital',
    'landuse_school',
  ]) {
    setPaint(id, 'fill-color', '#0d1c28')
    setPaint(id, 'fill-opacity', 0.85)
  }
  setPaint('park_outline', 'line-color', '#1a4a40')

  // 道路：橙黃電路感
  const roadFill = '#ff9a3c'
  const roadCasing = '#3a2818'
  const roadMinor = '#4a6a80'
  for (const id of [
    'road_motorway',
    'road_trunk_primary',
    'road_secondary_tertiary',
    'road_link',
    'road_motorway_link',
    'bridge_motorway',
    'bridge_trunk_primary',
    'bridge_secondary_tertiary',
    'bridge_link',
    'bridge_motorway_link',
  ]) {
    setPaint(id, 'line-color', roadFill)
  }
  for (const id of [
    'road_motorway_casing',
    'road_trunk_primary_casing',
    'road_secondary_tertiary_casing',
    'road_link_casing',
    'road_motorway_link_casing',
    'bridge_motorway_casing',
    'bridge_trunk_primary_casing',
    'bridge_secondary_tertiary_casing',
  ]) {
    setPaint(id, 'line-color', roadCasing)
  }
  for (const id of ['road_minor', 'road_service_track', 'bridge_street', 'bridge_service_track']) {
    setPaint(id, 'line-color', roadMinor)
  }
  for (const id of ['road_minor_casing', 'road_service_track_casing', 'bridge_street_casing']) {
    setPaint(id, 'line-color', '#152030')
  }

  // 建築 3D：青色科技感
  if (map.getLayer('building-3d')) {
    map.setPaintProperty('building-3d', 'fill-extrusion-color', [
      'interpolate',
      ['linear'],
      ['coalesce', ['get', 'render_height'], 10],
      0,
      '#1a3a55',
      20,
      '#2a6a8a',
      50,
      '#3ec8e8',
      100,
      '#7aecff',
    ])
    map.setPaintProperty('building-3d', 'fill-extrusion-opacity', 0.92)
    map.setPaintProperty('building-3d', 'fill-extrusion-vertical-gradient', true)
  }
  setPaint('building', 'fill-color', '#1a3048')
  setPaint('building', 'fill-outline-color', '#2a6080')

  // 標籤
  const labelLayers = [
    'label_city',
    'label_city_capital',
    'label_town',
    'label_village',
    'label_other',
    'highway-name-major',
    'highway-name-minor',
    'highway-name-path',
    'poi_r1',
    'poi_r7',
    'poi_r20',
    'poi_transit',
    'water_name_point_label',
    'water_name_line_label',
    'waterway_line_label',
  ]
  for (const id of labelLayers) {
    setPaint(id, 'text-color', '#8ec8e0')
    setPaint(id, 'text-halo-color', 'rgba(6,16,24,0.9)')
    setPaint(id, 'text-halo-width', 1.2)
  }

  setPaint('boundary_2', 'line-color', '#2a6a90')
  setPaint('aeroway_runway', 'line-color', '#2a4050')
  setPaint('aeroway_taxiway', 'line-color', '#2a4050')
  setPaint('aeroway_fill', 'fill-color', '#122030')
}

function stationsGeoJSON() {
  return {
    type: 'FeatureCollection' as const,
    features: STATIONS.map((s) => ({
      type: 'Feature' as const,
      properties: {
        id: s.id,
        name: s.name,
        capacity: s.capacity,
        district: s.district,
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [s.lng, s.lat],
      },
    })),
  }
}

/** 站點發光光柱（fill-extrusion） */
function glowTowersGeoJSON() {
  const half = 0.00007
  return {
    type: 'FeatureCollection' as const,
    features: STATIONS.map((s) => ({
      type: 'Feature' as const,
      properties: {
        id: s.id,
        height: 55 + s.capacity * 0.35,
      },
      geometry: {
        type: 'Polygon' as const,
        coordinates: [
          [
            [s.lng - half, s.lat - half],
            [s.lng + half, s.lat - half],
            [s.lng + half, s.lat + half],
            [s.lng - half, s.lat + half],
            [s.lng - half, s.lat - half],
          ],
        ],
      },
    })),
  }
}

/** 站點外圍發光底座 */
function glowPadsGeoJSON() {
  const half = 0.00022
  return {
    type: 'FeatureCollection' as const,
    features: STATIONS.map((s) => ({
      type: 'Feature' as const,
      properties: { id: s.id },
      geometry: {
        type: 'Polygon' as const,
        coordinates: [
          [
            [s.lng - half, s.lat - half],
            [s.lng + half, s.lat - half],
            [s.lng + half, s.lat + half],
            [s.lng - half, s.lat + half],
            [s.lng - half, s.lat - half],
          ],
        ],
      },
    })),
  }
}

export class KowloonMap {
  readonly map: MapLibreMap
  private disposed = false
  private pulseTimer = 0
  private readonly markers = new Map<string, Marker>()

  constructor(
    container: HTMLElement,
    private readonly callbacks: MapCallbacks,
  ) {
    this.map = new MapLibreMap({
      container,
      style: STYLE_URL,
      center: MAP_CENTER,
      zoom: 15.2,
      pitch: 58,
      bearing: -28,
      maxPitch: 70,
      canvasContextAttributes: { antialias: true },
      attributionControl: { compact: true },
    })

    this.map.addControl(new NavigationControl({ visualizePitch: true }), 'bottom-right')

    this.map.on('load', () => {
      if (this.disposed) return
      this.map.resize()
      if (window.matchMedia('(max-width: 960px)').matches) {
        this.map.setPitch(45)
        this.map.setZoom(14.6)
      }
      applyTechTheme(this.map)
      this.addStationLayers()
      this.addRouteLayers()
      this.addBuildingHighlightLayer()
      this.addFloatingMarkers()
      this.map.on('click', this.onClick)
      this.map.getCanvas().style.cursor = ''
      this.map.on('mousemove', this.onMouseMove)
      this.startPulse()

      void loadLiftDataset()
        .then(() => {
          if (!this.disposed) this.addLiftHeatLayer()
        })
        .catch((err) => console.error('[lifts]', err))
    })

    window.addEventListener('resize', this.onWindowResize)
    window.addEventListener('orientationchange', this.onWindowResize)

    this.map.on('error', (e) => {
      console.error('[KowloonMap]', e.error ?? e)
    })
  }

  private onWindowResize = () => {
    window.setTimeout(() => {
      if (!this.disposed) this.map.resize()
    }, 120)
  }

  private addStationLayers() {
    this.map.addSource('stations', {
      type: 'geojson',
      data: stationsGeoJSON(),
    })
    this.map.addSource('glow-towers', {
      type: 'geojson',
      data: glowTowersGeoJSON(),
    })
    this.map.addSource('glow-pads', {
      type: 'geojson',
      data: glowPadsGeoJSON(),
    })

    // 地面發光底座
    this.map.addLayer({
      id: 'glow-pads',
      type: 'fill',
      source: 'glow-pads',
      paint: {
        'fill-color': '#2ee6ff',
        'fill-opacity': 0.18,
      },
    })

    // 立體發光光柱（像發光建築）
    this.map.addLayer({
      id: 'glow-towers',
      type: 'fill-extrusion',
      source: 'glow-towers',
      paint: {
        'fill-extrusion-color': '#2ee6ff',
        'fill-extrusion-height': ['get', 'height'],
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.55,
        'fill-extrusion-vertical-gradient': true,
      },
    })

    // 脈衝雷達圈
    this.map.addLayer({
      id: 'stations-pulse',
      type: 'circle',
      source: 'stations',
      paint: {
        'circle-radius': 22,
        'circle-color': '#2ee6ff',
        'circle-opacity': 0.12,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#2ee6ff',
        'circle-stroke-opacity': 0.7,
        'circle-pitch-alignment': 'map',
      },
    })

    this.map.addLayer({
      id: 'stations-core',
      type: 'circle',
      source: 'stations',
      paint: {
        'circle-radius': 5,
        'circle-color': '#ffffff',
        'circle-stroke-width': 3,
        'circle-stroke-color': '#2ee6ff',
        'circle-pitch-alignment': 'map',
      },
    })
  }

  private addFloatingMarkers() {
    for (const station of STATIONS) {
      const el = createStationBeaconEl(station)
      el.addEventListener('click', (ev) => {
        ev.stopPropagation()
        this.setActiveStation(station.id)
        this.callbacks.onStationClick?.(station)
      })

      const marker = new Marker({ element: el, anchor: 'bottom', offset: [0, 0] })
        .setLngLat([station.lng, station.lat])
        .addTo(this.map)

      this.markers.set(station.id, marker)
    }
  }

  setActiveStation(id: string | null) {
    for (const [sid, marker] of this.markers) {
      marker.getElement().classList.toggle('is-active', sid === id)
    }

    // 光柱顏色：選中偏琥珀，其餘青色
    if (this.map.getLayer('glow-towers')) {
      this.map.setPaintProperty(
        'glow-towers',
        'fill-extrusion-color',
        id
          ? [
              'case',
              ['==', ['get', 'id'], id],
              '#ffb020',
              '#2ee6ff',
            ]
          : '#2ee6ff',
      )
      this.map.setPaintProperty(
        'glow-towers',
        'fill-extrusion-opacity',
        id
          ? ['case', ['==', ['get', 'id'], id], 0.85, 0.4]
          : 0.55,
      )
    }
  }

  private addBuildingHighlightLayer() {
    this.map.addSource('building-highlight', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    })
    this.map.addLayer({
      id: 'building-highlight',
      type: 'fill-extrusion',
      source: 'building-highlight',
      paint: {
        'fill-extrusion-color': '#ffe566',
        'fill-extrusion-height': ['coalesce', ['get', 'height'], 24],
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.75,
        'fill-extrusion-vertical-gradient': true,
      },
    })
  }

  private addLiftHeatLayer() {
    const locs = liftLocationsForMap()
    if (!locs.length || this.map.getSource('lift-buildings')) return

    this.map.addSource('lift-buildings', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: locs.map((l) => ({
          type: 'Feature' as const,
          properties: {
            id: l.id,
            name: l.nameHint,
            liftCount: l.liftCount,
          },
          geometry: {
            type: 'Point' as const,
            coordinates: [l.lng, l.lat],
          },
        })),
      },
    })

    this.map.addLayer({
      id: 'lift-buildings-glow',
      type: 'circle',
      source: 'lift-buildings',
      minzoom: 14,
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 14, 3, 17, 8],
        'circle-color': '#5dffa8',
        'circle-opacity': 0.35,
        'circle-blur': 0.4,
        'circle-pitch-alignment': 'map',
      },
    })

    this.map.addLayer({
      id: 'lift-buildings-core',
      type: 'circle',
      source: 'lift-buildings',
      minzoom: 14.5,
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 14.5, 1.5, 17, 3.5],
        'circle-color': '#9dffc8',
        'circle-stroke-width': 1,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.85,
        'circle-pitch-alignment': 'map',
      },
    })
  }

  setBuildingHighlight(
    feature: { type: 'Feature'; properties?: Record<string, unknown> | null; geometry: object } | null,
    height = 24,
  ) {
    const src = this.map.getSource('building-highlight') as GeoJSONSource | undefined
    if (!src) return
    if (!feature || !feature.geometry) {
      src.setData({ type: 'FeatureCollection', features: [] })
      return
    }
    src.setData({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: { height },
          geometry: feature.geometry as never,
        },
      ],
    })
  }

  clearBuildingSelection() {
    this.setBuildingHighlight(null)
  }

  private addRouteLayers() {
    this.map.addSource('route', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    })
    this.map.addSource('origin', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    })
    this.map.addSource('destination', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    })

    // 外層霓虹光暈（洋紅，避開道路橙色）
    this.map.addLayer({
      id: 'route-halo',
      type: 'line',
      source: 'route',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': '#ff2bd6',
        'line-width': 18,
        'line-opacity': 0.22,
        'line-blur': 4,
      },
    })

    this.map.addLayer({
      id: 'route-glow',
      type: 'line',
      source: 'route',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': '#c44bff',
        'line-width': 10,
        'line-opacity': 0.45,
        'line-blur': 1.5,
      },
    })

    // 主路徑：青→洋紅漸層感用高對比實線
    this.map.addLayer({
      id: 'route-line',
      type: 'line',
      source: 'route',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': '#ff4af0',
        'line-width': 5,
        'line-opacity': 0.95,
      },
    })

    // 流動虛線核心（動畫）
    this.map.addLayer({
      id: 'route-dash',
      type: 'line',
      source: 'route',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': '#ffffff',
        'line-width': 2.2,
        'line-opacity': 0.95,
        'line-dasharray': [0.5, 2.2],
      },
    })

    this.map.addLayer({
      id: 'origin-pulse',
      type: 'circle',
      source: 'origin',
      paint: {
        'circle-radius': 20,
        'circle-color': '#ff2bd6',
        'circle-opacity': 0.2,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ff4af0',
        'circle-stroke-opacity': 0.8,
      },
    })

    this.map.addLayer({
      id: 'origin-point',
      type: 'circle',
      source: 'origin',
      paint: {
        'circle-radius': 10,
        'circle-color': '#ff4af0',
        'circle-stroke-width': 3,
        'circle-stroke-color': '#ffffff',
      },
    })

    this.map.addLayer({
      id: 'dest-ring',
      type: 'circle',
      source: 'destination',
      paint: {
        'circle-radius': 26,
        'circle-color': 'transparent',
        'circle-stroke-width': 3,
        'circle-stroke-color': '#7afcff',
        'circle-stroke-opacity': 0.95,
      },
    })

    this.map.addLayer({
      id: 'dest-core',
      type: 'circle',
      source: 'destination',
      paint: {
        'circle-radius': 8,
        'circle-color': '#7afcff',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      },
    })
  }

  private startPulse() {
    let t = 0
    this.pulseTimer = window.setInterval(() => {
      if (this.disposed) return
      t += 0.1

      if (this.map.getLayer('stations-pulse')) {
        const r = 14 + Math.sin(t) * 8
        const o = 0.35 + Math.sin(t) * 0.25
        this.map.setPaintProperty('stations-pulse', 'circle-radius', r)
        this.map.setPaintProperty('stations-pulse', 'circle-stroke-opacity', o)
      }

      // 路線流動虛線
      if (this.map.getLayer('route-dash')) {
        const offset = (t * 0.35) % 3
        this.map.setPaintProperty('route-dash', 'line-dasharray', [
          0.4 + Math.sin(t) * 0.15,
          1.8 + offset * 0.15,
        ])
      }

      // 路徑光暈呼吸
      if (this.map.getLayer('route-halo')) {
        this.map.setPaintProperty(
          'route-halo',
          'line-opacity',
          0.16 + Math.sin(t * 1.2) * 0.1,
        )
        this.map.setPaintProperty(
          'route-glow',
          'line-width',
          9 + Math.sin(t * 1.5) * 2,
        )
      }

      if (this.map.getLayer('origin-pulse')) {
        this.map.setPaintProperty(
          'origin-pulse',
          'circle-radius',
          16 + Math.sin(t * 2) * 8,
        )
        this.map.setPaintProperty(
          'origin-pulse',
          'circle-opacity',
          0.12 + Math.sin(t * 2) * 0.1,
        )
      }

      if (this.map.getLayer('dest-ring')) {
        this.map.setPaintProperty(
          'dest-ring',
          'circle-radius',
          22 + Math.sin(t * 2.2) * 8,
        )
        this.map.setPaintProperty(
          'dest-ring',
          'circle-stroke-opacity',
          0.55 + Math.sin(t * 2.2) * 0.35,
        )
      }
    }, 50)
  }

  private onMouseMove = (e: MapLayerMouseEvent) => {
    const buildings = this.map.queryRenderedFeatures(e.point, {
      layers: ['building-3d'].filter((id) => !!this.map.getLayer(id)),
    })
    this.map.getCanvas().style.cursor = buildings.length ? 'pointer' : ''
  }

  private onClick = (e: MapLayerMouseEvent) => {
    // 優先點擊建築 → 升降機查詢
    const buildingLayers = ['building-3d', 'building'].filter((id) => !!this.map.getLayer(id))
    const buildings = buildingLayers.length
      ? this.map.queryRenderedFeatures(e.point, { layers: buildingLayers })
      : []

    if (buildings.length) {
      const feat = buildings[0]
      const props = feat.properties ?? {}
      const osmName =
        (props.name as string) ||
        (props['name:zh'] as string) ||
        (props['name:en'] as string) ||
        (props.name_zh as string) ||
        null
      const height = Number(props.render_height ?? props.height ?? 24) || 24

      const result = queryBuildingLift({
        lat: e.lngLat.lat,
        lng: e.lngLat.lng,
        osmName,
      })

      // 高亮：若瓦片有 geometry 則用它，否則用點附近小方塊
      if (feat.geometry && feat.geometry.type !== 'Point') {
        this.setBuildingHighlight(feat as never, height)
      } else {
        const half = 0.00008
        const { lng, lat } = e.lngLat
        this.setBuildingHighlight(
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [lng - half, lat - half],
                  [lng + half, lat - half],
                  [lng + half, lat + half],
                  [lng - half, lat + half],
                  [lng - half, lat - half],
                ],
              ],
            },
          },
          height,
        )
      }

      this.callbacks.onBuildingClick?.(result, { lng: e.lngLat.lng, lat: e.lngLat.lat })
      return
    }

    this.callbacks.onPick({ lng: e.lngLat.lng, lat: e.lngLat.lat })
  }

  setOrigin(point: LngLat) {
    const src = this.map.getSource('origin') as GeoJSONSource | undefined
    src?.setData({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: { type: 'Point', coordinates: [point.lng, point.lat] },
        },
      ],
    })
  }

  setRoute(coordinates: [number, number][], station: Station | null) {
    const routeSrc = this.map.getSource('route') as GeoJSONSource | undefined
    const destSrc = this.map.getSource('destination') as GeoJSONSource | undefined

    if (!coordinates.length) {
      routeSrc?.setData({ type: 'FeatureCollection', features: [] })
      destSrc?.setData({ type: 'FeatureCollection', features: [] })
      return
    }

    routeSrc?.setData({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: { type: 'LineString', coordinates },
        },
      ],
    })

    if (station) {
      destSrc?.setData({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: { type: 'Point', coordinates: [station.lng, station.lat] },
          },
        ],
      })
      this.setActiveStation(station.id)

      const bounds = coordinates.reduce(
        (b, c) => b.extend(c as [number, number]),
        new LngLatBounds(coordinates[0], coordinates[0]),
      )
      this.map.fitBounds(bounds, {
        padding: this.routePadding(),
        pitch: window.matchMedia('(max-width: 960px)').matches ? 48 : 55,
        duration: 1200,
        maxZoom: 16.5,
      })
    }
  }

  focusStation(station: Station) {
    this.setActiveStation(station.id)
    const mobile = window.matchMedia('(max-width: 960px)').matches
    this.map.flyTo({
      center: [station.lng, station.lat],
      zoom: mobile ? 16.2 : 16.8,
      pitch: mobile ? 48 : 62,
      duration: 1200,
    })
  }

  /** 依螢幕尺寸給路線視窗留白 */
  private routePadding() {
    const mobile = window.matchMedia('(max-width: 960px)').matches
    if (mobile) {
      return { top: 88, bottom: 220, left: 28, right: 28 }
    }
    return { top: 120, bottom: 100, left: 360, right: 360 }
  }

  resize() {
    this.map.resize()
  }

  clearRoute() {
    this.setRoute([], null)
    this.setActiveStation(null)
    const originSrc = this.map.getSource('origin') as GeoJSONSource | undefined
    originSrc?.setData({ type: 'FeatureCollection', features: [] })
  }

  dispose() {
    this.disposed = true
    window.clearInterval(this.pulseTimer)
    window.removeEventListener('resize', this.onWindowResize)
    window.removeEventListener('orientationchange', this.onWindowResize)
    this.map.off('click', this.onClick)
    this.map.off('mousemove', this.onMouseMove)
    for (const marker of this.markers.values()) marker.remove()
    this.markers.clear()
    this.map.remove()
  }
}
