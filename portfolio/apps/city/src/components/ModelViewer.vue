<script setup lang="ts">
// @ts-nocheck
import { onMounted, onUnmounted, ref, watch } from 'vue'
import * as T from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const props = defineProps<{ url: string }>()
const host = ref<HTMLElement | null>(null)
const error = ref('')
const loader = new GLTFLoader()
let renderer: T.WebGLRenderer | null = null
let scene: T.Scene | null = null
let camera: T.PerspectiveCamera | null = null
let controls: OrbitControls | null = null
let model: T.Object3D | null = null
let ground: T.Mesh | null = null
let grid: T.GridHelper | null = null
let frame = 0

function fit(object: T.Object3D) {
  if (!camera || !controls) return
  const box = new T.Box3().setFromObject(object)
  const size = box.getSize(new T.Vector3())
  const center = box.getCenter(new T.Vector3())
  object.position.sub(center)
  if (ground) ground.position.y = -size.y / 2 - 0.02
  if (grid) grid.position.y = -size.y / 2 - 0.015
  const max = Math.max(size.x, size.y, size.z, 0.2)
  camera.position.set(max * 1.6, max * 1.15, max * 1.85)
  camera.near = max / 80
  camera.far = max * 24
  camera.updateProjectionMatrix()
  controls.target.set(0, 0, 0)
  controls.update()
}

function load() {
  if (!scene || !props.url) return
  error.value = ''
  if (model) { scene.remove(model); model = null }
  loader.load(props.url, (gltf: { scene: T.Object3D }) => {
    model = gltf.scene
    model.traverse((node: T.Object3D) => {
      const mesh = node as T.Mesh
      if (mesh.isMesh) { mesh.castShadow = true; mesh.receiveShadow = true }
    })
    scene?.add(model)
    fit(model)
  }, undefined, () => { error.value = '三维文件无法在此浏览器加载。' })
}

function resize() {
  if (!host.value || !renderer || !camera) return
  const width = host.value.clientWidth, height = Math.max(host.value.clientHeight, 1)
  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

onMounted(() => {
  if (!host.value) return
  scene = new T.Scene()
  scene.background = new T.Color('#18232e')
  camera = new T.PerspectiveCamera(35, 1, 0.1, 100)
  renderer = new T.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
  host.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  scene.add(new T.HemisphereLight('#d7f3ea', '#24343c', 1.15))
  const key = new T.DirectionalLight('#fff8e8', 1.15)
  key.position.set(4, 8, 6)
  scene.add(key)
  ground = new T.Mesh(new T.CircleGeometry(10, 48), new T.MeshStandardMaterial({ color: '#24343c', roughness: 0.92 }))
  ground.rotation.x = -Math.PI / 2
  scene.add(ground)
  grid = new T.GridHelper(10, 20, '#3d5a62', '#2b444c'); scene.add(grid)
  const loop = () => {
    frame = requestAnimationFrame(loop)
    controls?.update()
    if (renderer && scene && camera) renderer.render(scene, camera)
  }
  loop()
  resize()
  window.addEventListener('resize', resize)
  load()
})
watch(() => props.url, load)
onUnmounted(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', resize)
  controls?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>
<template>
  <div class="viewer">
    <div ref="host" class="canvas" />
    <p v-if="error" class="fail" role="alert">{{ error }}</p>
  </div>
</template>
<style scoped>
.viewer{position:relative;height:100%;min-height:360px;background:#18232e;border-radius:14px;overflow:hidden}
.canvas{height:100%;min-height:360px}
.canvas :deep(canvas){display:block;width:100%;height:100%}
.fail{position:absolute;left:16px;right:16px;bottom:16px;margin:0;background:#3a1f22;color:#f3c4bc;padding:10px 12px;border-radius:8px;font-size:12px}
</style>
