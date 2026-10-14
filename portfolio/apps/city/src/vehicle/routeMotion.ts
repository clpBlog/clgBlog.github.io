import { haversineMeters } from '../data/kowloon'
export type Point = [number,number]
export function buildRouteMotion(points: Point[]) {
  if(points.length<2) throw new Error('道路路线至少需要两个坐标')
  const distances=[0]
  for(let i=1;i<points.length;i++) distances.push(distances[i-1]+haversineMeters({lng:points[i-1][0],lat:points[i-1][1]},{lng:points[i][0],lat:points[i][1]}))
  const total=distances[distances.length-1]
  if(total<.01) throw new Error('起终点过近，无法生成道路动画')
  return {total,at(progress:number) {
    const distance=Math.max(0,Math.min(1,progress))*total
    let index=1
    while(index<points.length-1 && distances[index]<=distance) index++
    const start=points[index-1],end=points[index],length=distances[index]-distances[index-1]
    const t=length>0?(distance-distances[index-1])/length:1
    const point:Point=[start[0]+(end[0]-start[0])*t,start[1]+(end[1]-start[1])*t]
    const bearing=Math.atan2((end[0]-start[0])*Math.cos(start[1]*Math.PI/180),end[1]-start[1])*180/Math.PI
    return {point,bearing,distance}
  }}
}
