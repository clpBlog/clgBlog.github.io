// Dispose shared geometries/materials/textures once per model instance.
export function disposeObjects(root) {
  const geometries = new Set(), materials = new Set(), textures = new Set()
  root.traverse(object => {
    if (object.geometry) geometries.add(object.geometry)
    for (const material of object.material ? (Array.isArray(object.material) ? object.material : [object.material]) : []) {
      materials.add(material)
      for (const value of Object.values(material)) if (value?.isTexture) textures.add(value)
    }
    object.shadow?.dispose()
  })
  geometries.forEach(item => item.dispose())
  materials.forEach(item => item.dispose())
  textures.forEach(item => item.dispose())
}
