import * as T from 'three'

// A local photo card, not reconstructed geometry. One texture per uploaded image.
export function createCargoPhoto(image) {
  const root = new T.Group()
  const texture = new T.CanvasTexture(image)
  texture.colorSpace = T.SRGBColorSpace
  const faceMaterial = new T.MeshBasicMaterial({ map: texture, transparent: true, toneMapped: false })
  const backing = new T.Mesh(new T.BoxGeometry(1, 1, 1), new T.MeshStandardMaterial({ color: '#32434d', roughness: .7 }))
  backing.castShadow = true; backing.receiveShadow = true
  root.add(backing)
  const faces = [1, -1].map(sign => {
    const mesh = new T.Mesh(new T.PlaneGeometry(1, 1), faceMaterial)
    mesh.rotation.y = sign * Math.PI / 2
    root.add(mesh)
    return mesh
  })
  root.userData.photo = { aspect: image.width / image.height, backing, faces }
  return root
}

export function sizeCargoPhoto(root, dimensions) {
  const { aspect, backing, faces } = root.userData.photo
  const width = dimensions.width / 100, height = dimensions.height / 100
  const photoWidth = Math.min(width, height * aspect), photoHeight = photoWidth / aspect
  // Thickness is a display effect only. The gold envelope represents the declared space.
  const thickness = Math.min(.045, dimensions.length / 100)
  backing.scale.set(thickness, photoHeight, photoWidth)
  backing.position.y = photoHeight / 2
  faces.forEach((face, index) => {
    face.scale.set(photoWidth, photoHeight, 1)
    face.position.set((index === 0 ? 1 : -1) * (thickness / 2 + .0005), photoHeight / 2, 0)
  })
}
