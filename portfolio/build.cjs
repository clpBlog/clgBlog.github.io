const path=require('node:path');
const esbuild=require('esbuild');
const root=__dirname;
(async()=>{
 for(const [name,dependency,file] of [['pharmacy','three-shelfpilot','pharmacy-demo.js'],['vehicle','three-wastego','vehicle-demo.js']]){
  const vendor=path.resolve(root,'../node_modules',dependency);
  await esbuild.build({entryPoints:[path.join(root,'src',file)],bundle:true,format:'esm',minify:true,target:'es2022',outfile:path.join(root,'dist',name+'.js'),plugins:[{name:'three-local',setup(build){build.onResolve({filter:/^three(?:\/.*)?$/},args=>({path:args.path==='three'?path.join(vendor,'build/three.module.js'):path.join(vendor,args.path.replace('three/addons/','examples/jsm/').replace('three/',''))}));}}],define:{'process.env.NEXT_PUBLIC_BASE_PATH':'""','process.env.SHELFPILOT_BASE_PATH':'""'},logLevel:'info'});
 }
})().catch(error=>{console.error(error);process.exitCode=1;});
