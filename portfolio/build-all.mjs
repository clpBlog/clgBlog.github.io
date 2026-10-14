import {build as viteBuild} from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import esbuild from 'esbuild';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require=createRequire(import.meta.url),root=path.dirname(fileURLToPath(import.meta.url));
const vendor=path.resolve(root,'../node_modules/three-wastego');
await import('./build.cjs');
await esbuild.build({entryPoints:[path.join(root,'room.js')],bundle:true,format:'esm',minify:true,target:'es2022',outfile:path.join(root,'dist/room.js'),plugins:[{name:'room-three',setup(b){b.onResolve({filter:/^three(?:\/.*)?$/},a=>({path:a.path==='three'?path.join(vendor,'build/three.module.js'):path.join(vendor,a.path.replace('three/addons/','examples/jsm/'))}));b.onResolve({filter:/desktop\.js$/},()=>({path:'../desktop.js',external:true}));}}]});
for(const name of ['vehicle','city']){
const modules=path.resolve(root,'../node_modules');
const aliases=[
 {find:'vue/dist/vue.esm-browser.prod.js',replacement:require.resolve('vue/dist/vue.esm-browser.prod.js')},
 {find:/^vue$/,replacement:require.resolve('vue/dist/vue.runtime.esm-bundler.js')},
 {find:/^vue-router$/,replacement:path.join(modules,'vue-router/dist/vue-router.mjs')},
 {find:/^three$/,replacement:path.join(vendor,'build/three.module.js')},
 {find:/^three\/addons\//,replacement:path.join(vendor,'examples/jsm/')},
 {find:/^maplibre-gl$/,replacement:path.join(modules,'maplibre-gl/dist/maplibre-gl.mjs')},
 {find:/^maplibre-gl\//,replacement:path.join(modules,'maplibre-gl/')}
];
await viteBuild({root:path.join(root,'apps',name),configFile:false,base:'./',plugins:name==='city'?[vuePlugin()]:[],worker:{format:'es'},resolve:{alias:aliases},build:{outDir:path.resolve(root,'../projects',name),emptyOutDir:true,target:'es2022',chunkSizeWarningLimit:2400},define:{__VUE_OPTIONS_API__:true,__VUE_PROD_DEVTOOLS__:false,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__:false}})
}
