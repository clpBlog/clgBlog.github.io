import * as T from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const loader = new GLTFLoader()

// Generated geometry is visual only. It is fitted to the declared demo envelope,
// never used as a source for measurements or booking decisions.
export function loadCargoGeneratedModel(url) {
  return new Promise((resolve, reject) => {
    loader.load(url, gltf => {
      const root = new T.Group()
      const content = gltf.scene
      content.traverse(node => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true } })
      const box = new T.Box3().setFromObject(content), size = box.getSize(new T.Vector3())
      if (!Number.isFinite(size.x) || !Number.isFinite(size.y) || !Number.isFinite(size.z) || Math.min(size.x, size.y, size.z) <= 0) {
        reject(new Error('Generated model has no usable dimensions'))
        return
      }
      content.position.sub(box.getCenter(new T.Vector3()))
      content.position.y += size.y / 2
      root.add(content)
      root.userData.generatedCargo = true
      resolve(root)
    }, undefined, () => reject(new Error('Unable to load generated model')))
  })
}

export function sizeGeneratedCargo(root, dimensions, rotated) {
  root.scale.setScalar(1)
  root.rotation.y = rotated ? Math.PI / 2 : 0
  const size = new T.Box3().setFromObject(root).getSize(new T.Vector3())
  const target = {
    x: (rotated ? dimensions.width : dimensions.length) / 100,
    y: dimensions.height / 100,
    z: (rotated ? dimensions.length : dimensions.width) / 100,
  }
  const scale = Math.min(target.x / size.x, target.y / size.y, target.z / size.z)
  root.scale.setScalar(Number.isFinite(scale) && scale > 0 ? scale : 1)
}
