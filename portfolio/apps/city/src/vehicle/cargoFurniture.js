import * as T from 'three'

// Category templates, not reconstructed photo geometry. Unit envelope: x/z ±.5, y 0..1.
export function createCargoFurniture(category) {
  const group = new T.Group()
  const fabric = new T.MeshStandardMaterial({ color: '#a7b9bd', roughness: .88 })
  const steel = new T.MeshStandardMaterial({ color: '#c6d4d8', metalness: .8, roughness: .3 })
  const dark = new T.MeshStandardMaterial({ color: '#34434b', roughness: .7 })
  const wood = new T.MeshStandardMaterial({ color: '#b49a76', roughness: .7 })
  function box(w,h,d,x,y,z,material) {
    const mesh = new T.Mesh(new T.BoxGeometry(w,h,d), material)
    mesh.position.set(x,y,z); mesh.castShadow = true; mesh.receiveShadow = true; group.add(mesh)
  }
  function tube(a,b,r=.018) {
    const start = new T.Vector3(...a), end = new T.Vector3(...b), direction = end.clone().sub(start)
    const mesh = new T.Mesh(new T.CylinderGeometry(r,r,direction.length(),10),steel)
    mesh.position.copy(start.add(end).multiplyScalar(.5)); mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),direction.normalize())
    mesh.castShadow = true; group.add(mesh)
  }
  if (category === 'chair') {
    // Gray upholstered visitor chair with armrests and sled frame, inspired by the reference.
    box(.79,.105,.86,.02,.49,0,fabric)
    box(.11,.44,.85,-.37,.78,0,fabric)
    for (const z of [-.465,.465]) {
      tube([-.4,.02,z],[.43,.02,z]); tube([.43,.02,z],[.41,.68,z]); tube([-.4,.02,z],[-.4,.91,z])
      tube([-.4,.69,z],[.41,.69,z]); box(.68,.045,.07,.02,.71,z,dark)
      box(.14,.026,.06,.3,.013,z,dark); box(.14,.026,.06,-.3,.013,z,dark)
    }
    tube([-.4,.03,-.46],[-.4,.03,.46]); tube([.25,.42,-.46],[.25,.42,.46])
  } else if (category === 'table') {
    box(1,.09,1,0,.955,0,wood)
    for (const x of [-.43,.43]) for (const z of [-.43,.43]) box(.07,.91,.07,x,.455,z,steel)
  } else if (category === 'cabinet') {
    box(.96,.94,.96,0,.53,0,wood)
    for (const z of [-.24,.24]) { box(.025,.82,.44,.492,.54,z,wood); box(.035,.11,.025,.515,.6,z/4,steel) }
    for (const x of [-.4,.4]) for (const z of [-.4,.4]) box(.07,.06,.07,x,.03,z,dark)
  } else if (category === 'sofa') {
    box(.95,.33,.96,0,.26,0,fabric); box(.17,.72,1,-.4,.64,0,fabric)
    for(const z of [-.445,.445]) box(1,.57,.11,0,.38,z,fabric)
    for(const z of [-.21,.21]) box(.69,.13,.39,.08,.49,z,fabric)
    for(const x of [-.4,.4]) for(const z of [-.4,.4]) box(.07,.1,.07,x,.05,z,dark)
  } else if (category === 'bed') {
    box(1,.3,1,0,.23,0,wood); box(.95,.24,.95,0,.5,0,fabric); box(.07,.8,1,-.465,.6,0,wood)
  } else {
    box(1,1,1,0,.5,0,wood); box(1,.01,.08,0,1.005,0,dark)
  }
  // Normalize actual geometry bounds so user-entered envelope is respected exactly.
  const bounds = new T.Box3().setFromObject(group), size = bounds.getSize(new T.Vector3()), center = bounds.getCenter(new T.Vector3())
  group.children.forEach(child => { child.position.x -= center.x; child.position.y -= bounds.min.y; child.position.z -= center.z })
  group.scale.set(1/size.x,1/size.y,1/size.z)
  const wrapper = new T.Group(); wrapper.add(group); return wrapper
}
