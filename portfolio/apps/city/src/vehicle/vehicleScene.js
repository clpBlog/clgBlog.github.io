import * as T from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js'
import { createVehicleModel } from './vehicleModel.js'
import { disposeObjects } from './resources.js'
import { cargoLoadingPose } from './cargoPreview.ts'

// Studio adapter; the same model is also rendered directly on the road map.
export function createVehicleScene(host) {
  const scene = new T.Scene()
  scene.background = new T.Color('#18232e')
  scene.fog = new T.Fog('#18232e', 24, 65)
  const camera = new T.PerspectiveCamera(30, 1, .1, 120)
  const renderer = new T.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = T.PCFSoftShadowMap
  renderer.toneMapping = T.ACESFilmicToneMapping
  renderer.toneMappingExposure = .95
  host.appendChild(renderer.domElement)
  const room = new RoomEnvironment(), pmrem = new T.PMREMGenerator(renderer)
  const environment = pmrem.fromScene(room, .035)
  scene.environment = environment.texture
  scene.environmentIntensity = .85
  room.dispose(); pmrem.dispose()
  const model = createVehicleModel(renderer)
  scene.add(model.root)
  const floor = new T.Mesh(new T.BoxGeometry(100, .1, 100), new T.MeshStandardMaterial({ color: '#202c38', metalness: .05, roughness: .8 }))
  floor.position.y = -.14; floor.receiveShadow = true; scene.add(floor)
  scene.add(new T.HemisphereLight(0xb4c8dc, 0x111922, .48))
  for (const [color, intensity, position] of [[0xfff8ef, 3.2, [-3,10,7]], [0xb9d9ff,2.8,[3,5,-5]], [0xe5f6ff,3.5,[-5,4,-3]]]) {
    const light = new T.DirectionalLight(color, intensity)
    light.position.set(...position)
    if (scene.children.filter(child => child.isDirectionalLight).length === 0) {
      light.castShadow = true; light.shadow.mapSize.set(2048,2048)
      Object.assign(light.shadow.camera, {left:-9,right:9,top:9,bottom:-9})
      light.shadow.normalBias = .015; light.shadow.bias = -.00005
    }
    scene.add(light)
  }
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true; controls.minDistance = 7; controls.maxDistance = 35; controls.maxPolarAngle = Math.PI/2-.04
  const composer = new EffectComposer(renderer)
  const ao = new SSAOPass(scene, camera, 1, 1, 12)
  ao.kernelRadius = .22; ao.minDistance = .002; ao.maxDistance = .14
  composer.addPass(new RenderPass(scene,camera)); ao.enabled = false; composer.addPass(ao)
  composer.addPass(new OutputPass()); composer.addPass(new SMAAPass())
  let viewName = 'hero'
  let inspection = null
  function cargoTarget() {
    if (!inspection?.dimensions) return new T.Vector3(4.21, 1, 0)
    const slot = inspection.slots.find(s => s.id === inspection.selected)
    const pose = cargoLoadingPose(slot ? inspection.progress || 0 : 0, slot || { x: 1.7, z: 0 })
    const d = inspection.dimensions
    const height = inspection.photo ? Math.min(d.height / 100, d.width / 100 * inspection.photo.height / inspection.photo.width) : d.height / 100
    return new T.Vector3(pose.x, pose.y + height / 2, pose.z)
  }
  function view(name = viewName) {
    viewName = name
    camera.fov=name==='sensor'?65:name==='cargo'?45:30;camera.updateProjectionMatrix()
    controls.minDistance=name==='sensor'?.5:name==='cargo'?1.2:7
    if(name==='cargo'){
      controls.target.copy(cargoTarget());camera.position.copy(controls.target).add(new T.Vector3(2.1,1.2,1.5));controls.update();return
    }
    if(name==='sensor'){
      camera.position.set(3.58,3.65,0);controls.target.set(.35,1.4,0);controls.update();return
    }
    const s = Math.max(1, 1.35 / camera.aspect)
    const v = name === 'top' ? [.8,13,.01] : name === 'front' ? [-10,5.7,6] : name === 'rear' ? [10.8,4.3,5.2] : name === 'side' ? [.8,3.5,16] : [10.5,5.6,13.2]
    camera.position.set(...v.map(n => n*s))
    controls.target.set(name === 'front' ? -2.5 : name === 'rear' ? 2.8 : .65, name === 'front' ? 3 : 1.95, 0)
    controls.update()
  }
  function resize() {
    const {width,height} = host.getBoundingClientRect()
    if (!width || !height) return
    camera.aspect = width/height; camera.updateProjectionMatrix()
    renderer.setSize(width,height); composer.setSize(width,height); view()
  }
  const observer = new ResizeObserver(resize); observer.observe(host); resize()
  return {
    view,
    inspectCargo(config) {
      inspection = config; model.inspectCargo(config)
      if(viewName==='cargo'){
        const target = cargoTarget();camera.position.add(target.clone().sub(controls.target));controls.target.copy(target)
      }
    },
    annotations() {
      const w=host.clientWidth,h=host.clientHeight
      return [
        {id:'front',label:'前顶部 · 行驶感知相机',xyz:[-3.43,4.14,0],dx:-135,dy:-45},
        {id:'sensor',label:'后门楣 · 预约验货相机',xyz:[3.45,3.89,0],dx:25,dy:-65},
        {id:'deck',label:'独立层板',xyz:[.6,2.48,1.12],dx:-145,dy:-15},
        {id:'safety',label:'安全光幕',xyz:[3.36,2.9,0],dx:42,dy:-20},
        {id:'lift',label:'升降尾板',xyz:[4.2,.18,1],dx:35,dy:15},
      ].map(a=>{const point=new T.Vector3(...a.xyz).project(camera);return {...a,x:(point.x+1)*w/2,y:(1-point.y)*h/2,visible:point.z<1&&Math.abs(point.x)<.85&&Math.abs(point.y)<.8}})
    },
    render(pose,state) { model.update(pose,state); controls.update(); composer.render() },
    dispose() {
      observer.disconnect(); controls.dispose()
      composer.passes.forEach(pass => pass.dispose?.()); composer.dispose()
      disposeObjects(scene); environment.dispose(); renderer.dispose(); renderer.domElement.remove()
    },
  }
}
