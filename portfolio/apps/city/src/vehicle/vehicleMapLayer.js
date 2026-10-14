import * as T from 'three'
import { MercatorCoordinate } from 'maplibre-gl'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { createVehicleModel } from './vehicleModel.js'
import { disposeObjects } from './resources.js'

// MapLibre v6 custom layer; original metre-scale model shares the road camera.
export function createVehicleMapLayer() {
  let renderer, scene, model, environment, camera, map
  let coordinate, heading = 0
  return {
    id:'delivery-three-vehicle', type:'custom', renderingMode:'3d',
    onAdd(owner, gl) {
      map=owner; camera=new T.Camera(); scene=new T.Scene()
      renderer=new T.WebGLRenderer({canvas:map.getCanvas(),context:gl,antialias:true})
      renderer.autoClear=false; renderer.toneMapping=T.ACESFilmicToneMapping; renderer.toneMappingExposure=1.1
      const room=new RoomEnvironment(), pmrem=new T.PMREMGenerator(renderer)
      environment=pmrem.fromScene(room,.035); scene.environment=environment.texture
      room.dispose(); pmrem.dispose()
      scene.add(new T.HemisphereLight(0xe1edff,0x35404c,2))
      const light=new T.DirectionalLight(0xffffff,3.2); light.position.set(-3,10,7); scene.add(light)
      model=createVehicleModel(renderer); scene.add(model.root); renderer.resetState()
    },
    render(_gl,args) {
      if (!coordinate || !model) return
      const mercator=MercatorCoordinate.fromLngLat(coordinate,.1), scale=mercator.meterInMercatorCoordinateUnits()
      const transform=new T.Matrix4().makeTranslation(mercator.x,mercator.y,mercator.z).scale(new T.Vector3(scale,-scale,scale))
        .multiply(new T.Matrix4().makeRotationX(Math.PI/2)).multiply(new T.Matrix4().makeRotationY(-heading*Math.PI/180-Math.PI/2))
      camera.projectionMatrix.fromArray(args.defaultProjectionData.mainMatrix).multiply(transform)
      camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert()
      renderer.resetState(); renderer.render(scene,camera); renderer.resetState()
    },
    onRemove() {
      if(scene) disposeObjects(scene)
      environment?.dispose(); renderer?.dispose(); map=null; model=null
    },
    update(point,bearing,pose,state) {
      coordinate=point; heading=bearing; model?.update(pose,state); map?.triggerRepaint()
    },
  }
}
