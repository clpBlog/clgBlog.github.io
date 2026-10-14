import test from 'node:test'
import assert from 'node:assert/strict'
import {pose,validateLoad,stages,verifyReservation,compareGoods,liftPermit} from '../src/wastego/src/simulation.js'
test('transit always requires secured cargo, a folded platform and closed doors',()=>{
 for(let i=0;i<stages.length;i++)for(let t=0;t<=1;t+=.01){const p=pose(i,t);if(p.travel>0&&i===4){assert.ok(p.driveAllowed);assert.equal(p.inward,1);assert.equal(p.fold,1)}}
})
test('stage boundaries remain continuous for moving mechanisms',()=>{
 for(let i=0;i<stages.length-1;i++)for(const key of ['lift','inward','fold','closed','travel'])assert.ok(Math.abs(pose(i,1)[key]-pose(i+1,0)[key])<1e-9,`${i}: ${key}`)
})
test('unloading only lowers platform after furniture has left the cabin',()=>{
 for(let t=0;t<=1;t+=.01){const p=pose(6,t);if(p.lift<1)assert.equal(p.inward,0)}
})
test('load checks reject tall and overweight inputs, accept tall cargo in full height mode',()=>{
 const cabinet={length:1,width:.6,height:1.9,mass:70}
 assert.equal(validateLoad(cabinet,'double').ok,false)
 assert.equal(validateLoad(cabinet,'full').ok,true)
 assert.equal(validateLoad({...cabinet,mass:301},'full').ok,false)
 assert.equal(validateLoad({...cabinet,mass:NaN},'full').ok,false)
 assert.equal(validateLoad({length:1.8,width:.8,height:1,mass:60},'double').ok,true)
 assert.equal(validateLoad({length:3,width:.8,height:1,mass:60},'double').ok,false)
})
test('scan rejects expired, invalid and wrong-vehicle reservations',()=>{
 assert.equal(verifyReservation('WG-C01-0921','clearance').ok,true)
 assert.equal(verifyReservation('WG-C01-0921','reuse').ok,false)
 assert.equal(verifyReservation('EXPIRED','clearance').ok,false)
 assert.equal(verifyReservation('bad','clearance').ok,false)
})
test('goods matching handles count, class, dimensional conflict and occlusion',()=>{
 const expected={type:'sofa',count:1,length:1.85,width:.88,height:.94}
 assert.equal(compareGoods(expected,{...expected}).status,'match')
 assert.equal(compareGoods(expected,{...expected,type:'cabinet'}).status,'mismatch')
 assert.equal(compareGoods(expected,{...expected,count:2}).status,'mismatch')
 assert.equal(compareGoods(expected,{...expected,height:1.2}).status,'mismatch')
 assert.equal(compareGoods(expected,{...expected,occluded:true}).status,'review')
})
test('no lift without all scan, door, match, snapshot, load and interlock conditions',()=>{
 const valid={scanned:true,doorOpen:true,match:'match',bound:true,loadOK:true,latched:false}
 assert.equal(liftPermit(valid),true)
 for(const key of ['scanned','doorOpen','bound','loadOK'])assert.equal(liftPermit({...valid,[key]:false}),false)
 for(const match of ['pending','review','mismatch'])assert.equal(liftPermit({...valid,match}),false)
 assert.equal(liftPermit({...valid,latched:true}),false)
})
