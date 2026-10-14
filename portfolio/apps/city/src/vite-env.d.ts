/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

declare module '*?worker&url' {
  const workerUrl: string
  export default workerUrl
}

declare module 'three'
declare module 'three/addons/loaders/GLTFLoader.js'
declare module 'three/addons/controls/OrbitControls.js'
