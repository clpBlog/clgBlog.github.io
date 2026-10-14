import{S as vt,B as ce,M as Y,a as Dt,P as xt,b as L,c as je,O as Pt,d as zt,F as lt,e as de,U as he,V as we,W as Ue,H as Ge,N as xe,C as Et,f as ct,D as Lt,g as Nt,h as Ot,i as Qe,j as Rt,A as dt,Z as ht,k as Wt,l as Ft,m as _e,n as Bt,o as X,p as jt,R as Ut,q as Gt,r as ot,s as wt,t as Ht,u as Xt,v as kt,L as It,w as Vt,x as Yt,y as bt,z as qt,E as Zt,G as Kt,T as ft,I as Qt,J as j,K as Jt,Q as _t,X as at,Y as Je,_ as rt,$ as Ze,a0 as it,a1 as Mt,a2 as $t,a3 as Xe,a4 as et,a5 as es,a6 as ts,a7 as ut,a8 as pt,a9 as mt,aa as ss,ab as os,ac as as,ad as is,ae as rs,af as ns,ag as ls,ah as cs,ai as ds,aj as hs}from"./GLTFLoader-8XC6sjmw.js";import{e as fs,D as us}from"./cargoRecognition-DhGDe4NH.js";import{d as ps,w as ms,o as gs,a as vs,c as Re,e as V,t as le,b as tt,F as xs,h as ws,r as Ae,p as We}from"./index-MrChvZhZ.js";import{_ as bs}from"./_plugin-vue_export-helper-DlAUqK2U.js";class Ms extends vt{constructor(){super();const e=new ce;e.deleteAttribute("uv");const s=new Y({side:Dt}),o=new Y,i=new xt(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const l=new L(e,s);l.position.set(-.757,13.219,.717),l.scale.set(31.713,28.305,28.591),this.add(l);const n=new L(e,o);n.position.set(-10.906,2.009,1.846),n.rotation.set(0,-.195,0),n.scale.set(2.328,7.905,4.651),this.add(n);const t=new L(e,o);t.position.set(-5.607,-.754,-.758),t.rotation.set(0,.994,0),t.scale.set(1.97,1.534,3.955),this.add(t);const a=new L(e,o);a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),this.add(a);const h=new L(e,o);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const v=new L(e,o);v.position.set(2.291,-.756,-2.621),v.rotation.set(0,-.286,0),v.scale.set(1.546,1.552,1.496),this.add(v);const D=new L(e,o);D.position.set(-2.193,-.369,-5.547),D.rotation.set(0,.516,0),D.scale.set(3.875,3.487,2.986),this.add(D);const c=new L(e,Se(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const b=new L(e,Se(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);const x=new L(e,Se(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);const C=new L(e,Se(43));C.position.set(-.462,8.89,14.52),C.scale.set(4.38,5.441,.088),this.add(C);const T=new L(e,Se(20));T.position.set(3.235,11.486,-12.541),T.scale.set(2.5,2,.1),this.add(T);const d=new L(e,Se(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(s=>{s.isMesh&&(e.add(s.geometry),e.add(s.material))});for(const s of e)s.dispose()}}function Se(p){const e=new je;return e.color.setScalar(p),e}const Ke={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class be{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const As=new Pt(-1,1,1,-1,0,1);class Ss extends zt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const Ts=new Ss;class $e{constructor(e){this._mesh=new L(Ts,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,As)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ys extends be{constructor(e,s){super(),this.textureID=s!==void 0?s:"tDiffuse",e instanceof de?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=he.clone(e.uniforms),this.material=new de({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $e(this.material)}render(e,s,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gt extends be{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,o){const i=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let n,t;this.inverse?(n=0,t=1):(n=1,t=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),l.buffers.stencil.setFunc(i.ALWAYS,n,4294967295),l.buffers.stencil.setClear(t),l.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(i.EQUAL,1,4294967295),l.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),l.buffers.stencil.setLocked(!0)}}class Cs extends be{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ds{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const o=e.getSize(new we);this._width=o.width,this._height=o.height,s=new Ue(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ge}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ys(Ke),this.copyPass.material.blending=xe,this.clock=new Et}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let o=!1;for(let i=0,l=this.passes.length;i<l;i++){const n=this.passes[i];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),n.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),n.needsSwap){if(o){const t=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}gt!==void 0&&(n instanceof gt?o=!0:n instanceof Cs&&(o=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const o=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(o,i),this.renderTarget2.setSize(o,i);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(o,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ps{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let s=0;s<256;s++)this.p[s]=Math.floor(e.random()*256);this.perm=[];for(let s=0;s<512;s++)this.perm[s]=this.p[s&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,s,o){return e[0]*s+e[1]*o}dot3(e,s,o,i){return e[0]*s+e[1]*o+e[2]*i}dot4(e,s,o,i,l){return e[0]*s+e[1]*o+e[2]*i+e[3]*l}noise(e,s){let o,i,l;const n=.5*(Math.sqrt(3)-1),t=(e+s)*n,a=Math.floor(e+t),h=Math.floor(s+t),v=(3-Math.sqrt(3))/6,D=(a+h)*v,c=a-D,b=h-D,x=e-c,C=s-b;let T,d;x>C?(T=1,d=0):(T=0,d=1);const f=x-T+v,m=C-d+v,M=x-1+2*v,y=C-1+2*v,N=a&255,U=h&255,q=this.perm[N+this.perm[U]]%12,z=this.perm[N+T+this.perm[U+d]]%12,O=this.perm[N+1+this.perm[U+1]]%12;let G=.5-x*x-C*C;G<0?o=0:(G*=G,o=G*G*this.dot(this.grad3[q],x,C));let R=.5-f*f-m*m;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[z],f,m));let I=.5-M*M-y*y;return I<0?l=0:(I*=I,l=I*I*this.dot(this.grad3[O],M,y)),70*(o+i+l)}noise3d(e,s,o){let i,l,n,t;const h=(e+s+o)*.3333333333333333,v=Math.floor(e+h),D=Math.floor(s+h),c=Math.floor(o+h),b=1/6,x=(v+D+c)*b,C=v-x,T=D-x,d=c-x,f=e-C,m=s-T,M=o-d;let y,N,U,q,z,O;f>=m?m>=M?(y=1,N=0,U=0,q=1,z=1,O=0):f>=M?(y=1,N=0,U=0,q=1,z=0,O=1):(y=0,N=0,U=1,q=1,z=0,O=1):m<M?(y=0,N=0,U=1,q=0,z=1,O=1):f<M?(y=0,N=1,U=0,q=0,z=1,O=1):(y=0,N=1,U=0,q=1,z=1,O=0);const G=f-y+b,R=m-N+b,I=M-U+b,te=f-q+2*b,re=m-z+2*b,K=M-O+2*b,se=f-1+3*b,fe=m-1+3*b,k=M-1+3*b,oe=v&255,H=D&255,ae=c&255,ne=this.perm[oe+this.perm[H+this.perm[ae]]]%12,B=this.perm[oe+y+this.perm[H+N+this.perm[ae+U]]]%12,ue=this.perm[oe+q+this.perm[H+z+this.perm[ae+O]]]%12,pe=this.perm[oe+1+this.perm[H+1+this.perm[ae+1]]]%12;let $=.6-f*f-m*m-M*M;$<0?i=0:($*=$,i=$*$*this.dot3(this.grad3[ne],f,m,M));let Q=.6-G*G-R*R-I*I;Q<0?l=0:(Q*=Q,l=Q*Q*this.dot3(this.grad3[B],G,R,I));let Z=.6-te*te-re*re-K*K;Z<0?n=0:(Z*=Z,n=Z*Z*this.dot3(this.grad3[ue],te,re,K));let ie=.6-se*se-fe*fe-k*k;return ie<0?t=0:(ie*=ie,t=ie*ie*this.dot3(this.grad3[pe],se,fe,k)),32*(i+l+n+t)}noise4d(e,s,o,i){const l=this.grad4,n=this.simplex,t=this.perm,a=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20;let v,D,c,b,x;const C=(e+s+o+i)*a,T=Math.floor(e+C),d=Math.floor(s+C),f=Math.floor(o+C),m=Math.floor(i+C),M=(T+d+f+m)*h,y=T-M,N=d-M,U=f-M,q=m-M,z=e-y,O=s-N,G=o-U,R=i-q,I=z>O?32:0,te=z>G?16:0,re=O>G?8:0,K=z>R?4:0,se=O>R?2:0,fe=G>R?1:0,k=I+te+re+K+se+fe,oe=n[k][0]>=3?1:0,H=n[k][1]>=3?1:0,ae=n[k][2]>=3?1:0,ne=n[k][3]>=3?1:0,B=n[k][0]>=2?1:0,ue=n[k][1]>=2?1:0,pe=n[k][2]>=2?1:0,$=n[k][3]>=2?1:0,Q=n[k][0]>=1?1:0,Z=n[k][1]>=1?1:0,ie=n[k][2]>=1?1:0,He=n[k][3]>=1?1:0,ve=z-oe+h,me=O-H+h,Me=G-ae+h,Te=R-ne+h,r=z-B+2*h,u=O-ue+2*h,g=G-pe+2*h,S=R-$+2*h,w=z-Q+3*h,A=O-Z+3*h,W=G-ie+3*h,P=R-He+3*h,E=z-1+4*h,F=O-1+4*h,ee=G-1+4*h,J=R-1+4*h,ye=T&255,Ce=d&255,De=f&255,Pe=m&255,At=t[ye+t[Ce+t[De+t[Pe]]]]%32,St=t[ye+oe+t[Ce+H+t[De+ae+t[Pe+ne]]]]%32,Tt=t[ye+B+t[Ce+ue+t[De+pe+t[Pe+$]]]]%32,yt=t[ye+Q+t[Ce+Z+t[De+ie+t[Pe+He]]]]%32,Ct=t[ye+1+t[Ce+1+t[De+1+t[Pe+1]]]]%32;let ze=.6-z*z-O*O-G*G-R*R;ze<0?v=0:(ze*=ze,v=ze*ze*this.dot4(l[At],z,O,G,R));let Ee=.6-ve*ve-me*me-Me*Me-Te*Te;Ee<0?D=0:(Ee*=Ee,D=Ee*Ee*this.dot4(l[St],ve,me,Me,Te));let Le=.6-r*r-u*u-g*g-S*S;Le<0?c=0:(Le*=Le,c=Le*Le*this.dot4(l[Tt],r,u,g,S));let Ne=.6-w*w-A*A-W*W-P*P;Ne<0?b=0:(Ne*=Ne,b=Ne*Ne*this.dot4(l[yt],w,A,W,P));let Oe=.6-E*E-F*F-ee*ee-J*J;return Oe<0?x=0:(Oe*=Oe,x=Oe*Oe*this.dot4(l[Ct],E,F,ee,J)),27*(v+D+c+b+x)}}const ke={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new we},cameraProjectionMatrix:{value:new ct},cameraInverseProjectionMatrix:{value:new ct},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Ie={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ve={uniforms:{tDiffuse:{value:null},resolution:{value:new we}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class ge extends be{constructor(e,s,o,i,l=32){super(),this.width=o!==void 0?o:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=s,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(l),this.generateRandomKernelRotations();const n=new Lt;n.format=Nt,n.type=Ot,this.normalRenderTarget=new Ue(this.width,this.height,{minFilter:Qe,magFilter:Qe,type:Ge,depthTexture:n}),this.ssaoRenderTarget=new Ue(this.width,this.height,{type:Ge}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new de({defines:Object.assign({},ke.defines),uniforms:he.clone(ke.uniforms),vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,blending:xe}),this.ssaoMaterial.defines.KERNEL_SIZE=l,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Rt,this.normalMaterial.blending=xe,this.blurMaterial=new de({defines:Object.assign({},Ve.defines),uniforms:he.clone(Ve.uniforms),vertexShader:Ve.vertexShader,fragmentShader:Ve.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new de({defines:Object.assign({},Ie.defines),uniforms:he.clone(Ie.uniforms),vertexShader:Ie.vertexShader,fragmentShader:Ie.fragmentShader,blending:xe}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new de({uniforms:he.clone(Ke.uniforms),vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ft,blendDst:ht,blendEquation:dt,blendSrcAlpha:Wt,blendDstAlpha:ht,blendEquationAlpha:dt}),this.fsQuad=new $e(null),this.originalClearColor=new _e}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,s,o){switch(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case ge.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=xe,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:o);break;case ge.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=xe,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:o);break;case ge.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:o);break;case ge.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=xe,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:o);break;case ge.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Bt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:o);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,s,o,i,l){e.getClearColor(this.originalClearColor);const n=e.getClearAlpha(),t=e.autoClear;e.setRenderTarget(o),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(l||0),e.clear()),this.fsQuad.material=s,this.fsQuad.render(e),e.autoClear=t,e.setClearColor(this.originalClearColor),e.setClearAlpha(n)}renderOverride(e,s,o,i,l){e.getClearColor(this.originalClearColor);const n=e.getClearAlpha(),t=e.autoClear;e.setRenderTarget(o),e.autoClear=!1,i=s.clearColor||i,l=s.clearAlpha||l,i!=null&&(e.setClearColor(i),e.setClearAlpha(l||0),e.clear()),this.scene.overrideMaterial=s,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=t,e.setClearColor(this.originalClearColor),e.setClearAlpha(n)}setSize(e,s){this.width=e,this.height=s,this.ssaoRenderTarget.setSize(e,s),this.normalRenderTarget.setSize(e,s),this.blurRenderTarget.setSize(e,s),this.ssaoMaterial.uniforms.resolution.value.set(e,s),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,s)}generateSampleKernel(e){const s=this.kernel;for(let o=0;o<e;o++){const i=new X;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let l=o/e;l=wt.lerp(.1,1,l*l),i.multiplyScalar(l),s.push(i)}}generateRandomKernelRotations(){const o=new Ps,i=4*4,l=new Float32Array(i);for(let n=0;n<i;n++){const t=Math.random()*2-1,a=Math.random()*2-1,h=0;l[n]=o.noise3d(t,a,h)}this.noiseTexture=new jt(l,4,4,Ut,Gt),this.noiseTexture.wrapS=ot,this.noiseTexture.wrapT=ot,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,s=this._visibilityCache;e.traverse(function(o){s.set(o,o.visible),(o.isPoints||o.isLine)&&(o.visible=!1)})}restoreVisibility(){const e=this.scene,s=this._visibilityCache;e.traverse(function(o){const i=s.get(o);o.visible=i}),s.clear()}}ge.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const zs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Es extends be{constructor(){super();const e=zs;this.uniforms=he.clone(e.uniforms),this.material=new Ht({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new $e(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,s,o){this.uniforms.tDiffuse.value=o.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===It?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bt?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zt?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Kt&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ls extends be{constructor(e,s,o=null,i=null,l=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=o,this.clearColor=i,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,s,o){const i=e.autoClear;e.autoClear=!1;let l,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),e.autoClear=i}}const Ye={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new we(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},qe={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new we(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},st={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new we(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class Ns extends be{constructor(e,s){super(),this.edgesRT=new Ue(e,s,{depthBuffer:!1,type:Ge}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Ue(e,s,{depthBuffer:!1,type:Ge}),this.weightsRT.texture.name="SMAAPass.weights";const o=this,i=new Image;i.src=this.getAreaTexture(),i.onload=function(){o.areaTexture.needsUpdate=!0},this.areaTexture=new ft,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=i,this.areaTexture.minFilter=Qt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const l=new Image;l.src=this.getSearchTexture(),l.onload=function(){o.searchTexture.needsUpdate=!0},this.searchTexture=new ft,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=l,this.searchTexture.magFilter=Qe,this.searchTexture.minFilter=Qe,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=he.clone(Ye.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/s),this.materialEdges=new de({defines:Object.assign({},Ye.defines),uniforms:this.uniformsEdges,vertexShader:Ye.vertexShader,fragmentShader:Ye.fragmentShader}),this.uniformsWeights=he.clone(qe.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/s),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new de({defines:Object.assign({},qe.defines),uniforms:this.uniformsWeights,vertexShader:qe.vertexShader,fragmentShader:qe.fragmentShader}),this.uniformsBlend=he.clone(st.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/s),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new de({uniforms:this.uniformsBlend,vertexShader:st.vertexShader,fragmentShader:st.fragmentShader}),this.fsQuad=new $e(null)}render(e,s,o){this.uniformsEdges.tDiffuse.value=o.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=o.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,s){this.edgesRT.setSize(e,s),this.weightsRT.setSize(e,s),this.materialEdges.uniforms.resolution.value.set(1/e,1/s),this.materialWeights.uniforms.resolution.value.set(1/e,1/s),this.materialBlend.uniforms.resolution.value.set(1/e,1/s)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const Fe=new X;function _(p,e,s,o,i,l){const n=2*Math.PI*i/4,t=Math.max(l-2*i,0),a=Math.PI/4;Fe.copy(e),Fe[o]=0,Fe.normalize();const h=.5*n/(n+t),v=1-Fe.angleTo(p)/a;return Math.sign(Fe[s])===1?v*h:t/(n+t)+h+h*(1-v)}class Os extends ce{constructor(e=1,s=1,o=1,i=2,l=.1){if(i=i*2+1,l=Math.min(e/2,s/2,o/2,l),super(1,1,1,i,i,i),i===1)return;const n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;const t=new X,a=new X,h=new X(e,s,o).divideScalar(2).subScalar(l),v=this.attributes.position.array,D=this.attributes.normal.array,c=this.attributes.uv.array,b=v.length/6,x=new X,C=.5/i;for(let T=0,d=0;T<v.length;T+=3,d+=2)switch(t.fromArray(v,T),a.copy(t),a.x-=Math.sign(a.x)*C,a.y-=Math.sign(a.y)*C,a.z-=Math.sign(a.z)*C,a.normalize(),v[T+0]=h.x*Math.sign(t.x)+a.x*l,v[T+1]=h.y*Math.sign(t.y)+a.y*l,v[T+2]=h.z*Math.sign(t.z)+a.z*l,D[T+0]=a.x,D[T+1]=a.y,D[T+2]=a.z,Math.floor(T/b)){case 0:x.set(1,0,0),c[d+0]=_(x,a,"z","y",l,o),c[d+1]=1-_(x,a,"y","z",l,s);break;case 1:x.set(-1,0,0),c[d+0]=1-_(x,a,"z","y",l,o),c[d+1]=1-_(x,a,"y","z",l,s);break;case 2:x.set(0,1,0),c[d+0]=1-_(x,a,"x","z",l,e),c[d+1]=_(x,a,"z","x",l,o);break;case 3:x.set(0,-1,0),c[d+0]=1-_(x,a,"x","z",l,e),c[d+1]=1-_(x,a,"z","x",l,o);break;case 4:x.set(0,0,1),c[d+0]=1-_(x,a,"x","y",l,e),c[d+1]=1-_(x,a,"y","x",l,s);break;case 5:x.set(0,0,-1),c[d+0]=_(x,a,"x","y",l,e),c[d+1]=1-_(x,a,"y","x",l,s);break}}}function Rs({truck:p,scene:e,m:s,box:o,cyl:i,lift:l,platform:n}){const t=new j;p.add(t);const a=new Y({color:"#111923",metalness:.35,roughness:.46}),h=new Y({color:"#75838d",metalness:.9,roughness:.24}),v=new Y({color:"#deefff",emissive:"#badbff",emissiveIntensity:2.2}),D=new Y({color:"#7aafba",emissive:"#227b90",emissiveIntensity:.6});function c(d,f,m,M,y){const N=new X(...f),U=new X(...m),q=U.clone().sub(N),z=new L(new Je(M,M,q.length(),16),y);return z.position.copy(N.add(U).multiplyScalar(.5)),z.quaternion.setFromUnitVectors(new X(0,1,0),q.normalize()),z.castShadow=!0,d.add(z),z}for(const d of[-2.35,2.03])for(const f of[-1,1]){const m=new Jt;m.absarc(0,0,.66,0,Math.PI,!1),m.lineTo(-.58,0),m.absarc(0,0,.58,Math.PI,0,!0),m.closePath();const M=new L(new _t(m,{depth:.36,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:2,steps:1}),a);M.position.set(d,.56,f===1?1.11:-1.47),t.add(M);for(const y of[.33,.37]){const N=new L(new at(y,.012,8,48),h);N.position.set(d,.56,f*1.445),t.add(N)}}for(const d of[-.78,.78]){o(t,6.25,.19,.13,-.15,.52,d,a);for(let f=-2.9;f<3;f+=.65)o(t,.065,.16,1.63,f,.52,0,h)}for(const d of[-2.35,2.03]){i(t,.11,2.45,d,.48,0,a);for(const f of[-.74,.74]){for(let m=0;m<4;m++)o(t,.93-m*.12,.016,.11,d,.38+m*.022,f,h);c(t,[d-.23,.48,f],[d+.12,.83,f],.045,a)}}o(t,1.72,.32,1.38,-.05,.36,0,a);for(let d=-.8;d<.8;d+=.09)o(t,.02,.34,1.4,d,.36,0,h);for(const d of[-.96,.96]){o(t,4.15,.025,.1,.8,1.17,d,a),o(t,4.1,.012,.018,.8,1.19,d,h);for(const f of[-1.02,.25,1.52,2.79]){const m=new L(new at(.065,.013,8,20),h);m.rotation.x=Math.PI/2,m.position.set(f,1.2,d),t.add(m),o(t,.17,.018,.17,f,1.18,d,a,.015)}}o(t,.2,.2,2.35,-3.57,.93,0,a),o(t,.035,.05,1.15,-3.685,1.16,0,h);for(const d of[-.85,.85])o(t,.055,.09,.42,-3.555,1.5,d,a),o(t,.062,.025,.36,-3.585,1.54,d,v),o(t,.06,.06,.24,-3.588,1.43,d,s.glass),i(t,.04,.045,-3.68,.92,d,h,"x");for(const d of[-1.225,1.225])o(t,1.28,.5,.026,-2.47,2.18,d,a,.035),o(t,1.16,.39,.032,-2.47,2.18,d,h,.025),o(t,.12,.035,.04,-1.98,2.18,d*1.025,a,.01),o(t,.34,.34,.045,-2.52,1.63,d,a,.03),i(t,.105,.05,-2.52,1.63,d*1.035,h),i(t,.07,.052,-2.52,1.63,d*1.055,a);const b=new L(new Je(.09,.09,.06,20),new Y({color:"#c92937",roughness:.35}));b.rotation.x=Math.PI/2,b.position.set(-1.95,1.63,1.31),t.add(b);for(const d of[-1.24,1.24])o(t,2.05,.055,.018,.36,.82,d,s.amber),o(t,.2,.18,.06,3.26,1.05,d,a,.015),o(t,.15,.065,.07,3.3,1.09,d,s.wine),o(t,.15,.035,.07,3.3,1.01,d,s.amber);for(const d of[-1.19,1.19]){o(t,.25,2.9,.19,3.2,2.55,d,a,.025),o(t,.04,2.63,.07,3.335,2.52,d,h);for(let f=1.25;f<3.88;f+=.24)i(t,.022,.028,3.36,f,d,h,"x"),o(t,.022,.09,.015,3.355,f,d+.055,s.dark);o(l,.25,.34,.23,.015,.05,d,h,.02),i(l,.075,.26,.06,.06,d,a),o(t,.04,.61,.025,3.352,3.12,d,D),c(t,[3.2,1.22,d],[3.2,3.85,d],.024,h),c(n,[.08,-.08,d*.87],[1.58,-.2,d*.87],.035,a);for(const f of[.2,1.56])i(n,.048,.09,f,-.13,d*.87,h)}for(let d=.18;d<1.88;d+=.2)o(n,.035,.01,2.03,d,.071,0,a);for(const d of[-1.12,1.12]){o(n,1.75,.009,.065,.98,.08,d,s.amber);for(const f of[.2,1.75])o(n,.09,.025,.11,f,.085,d,v,.012)}o(n,.065,.018,2.13,1.93,.08,0,s.amber),o(t,.27,.26,2.63,3.18,3.98,0,a,.025),o(t,.035,.035,1.86,3.33,3.88,0,v);for(let d=-1.15;d<3;d+=.65){o(t,.045,.08,2.31,d,3.9,0,h);for(const f of[-1.07,1.07])o(t,.28,.026,.025,d,3.84,f,v)}for(const d of[-1.12,1.12]){o(t,4.4,.055,.035,.78,2.32,d,h);for(let f=-1.25;f<3;f+=.14)o(t,.058,.021,.043,f,2.32,d,a)}o(t,.58,.07,.58,-2.25,4.01,0,a,.025),i(t,.19,.15,-2.25,4.13,0,a,"y"),i(t,.197,.045,-2.25,4.16,0,s.glass,"y"),i(t,.18,.016,-2.25,4.22,0,h,"y");const x=new j;e.add(x);const C=new Y({color:"#4d6875",metalness:.25,roughness:.65});for(const d of[-2.15,2.15]){o(x,9,.002,.017,.4,-.081,d,C);for(const f of[-4.1,4.9])o(x,.02,.002,.48,f,-.079,d,C)}const T=new xt("#d6e8ff",9,7,2);return T.position.set(.6,3.6,.2),t.add(T),{dispose(){}}}function Be(p){const e=new Set,s=new Set,o=new Set;p.traverse(i=>{i.geometry&&e.add(i.geometry);for(const l of i.material?Array.isArray(i.material)?i.material:[i.material]:[]){s.add(l);for(const n of Object.values(l))n?.isTexture&&o.add(n)}i.shadow?.dispose()}),e.forEach(i=>i.dispose()),s.forEach(i=>i.dispose()),o.forEach(i=>i.dispose())}function Ws(p){const e=new j,s=new Y({color:"#a7b9bd",roughness:.88}),o=new Y({color:"#c6d4d8",metalness:.8,roughness:.3}),i=new Y({color:"#34434b",roughness:.7}),l=new Y({color:"#b49a76",roughness:.7});function n(c,b,x,C,T,d,f){const m=new L(new ce(c,b,x),f);m.position.set(C,T,d),m.castShadow=!0,m.receiveShadow=!0,e.add(m)}function t(c,b,x=.018){const C=new X(...c),T=new X(...b),d=T.clone().sub(C),f=new L(new Je(x,x,d.length(),10),o);f.position.copy(C.add(T).multiplyScalar(.5)),f.quaternion.setFromUnitVectors(new X(0,1,0),d.normalize()),f.castShadow=!0,e.add(f)}if(p==="chair"){n(.79,.105,.86,.02,.49,0,s),n(.11,.44,.85,-.37,.78,0,s);for(const c of[-.465,.465])t([-.4,.02,c],[.43,.02,c]),t([.43,.02,c],[.41,.68,c]),t([-.4,.02,c],[-.4,.91,c]),t([-.4,.69,c],[.41,.69,c]),n(.68,.045,.07,.02,.71,c,i),n(.14,.026,.06,.3,.013,c,i),n(.14,.026,.06,-.3,.013,c,i);t([-.4,.03,-.46],[-.4,.03,.46]),t([.25,.42,-.46],[.25,.42,.46])}else if(p==="table"){n(1,.09,1,0,.955,0,l);for(const c of[-.43,.43])for(const b of[-.43,.43])n(.07,.91,.07,c,.455,b,o)}else if(p==="cabinet"){n(.96,.94,.96,0,.53,0,l);for(const c of[-.24,.24])n(.025,.82,.44,.492,.54,c,l),n(.035,.11,.025,.515,.6,c/4,o);for(const c of[-.4,.4])for(const b of[-.4,.4])n(.07,.06,.07,c,.03,b,i)}else if(p==="sofa"){n(.95,.33,.96,0,.26,0,s),n(.17,.72,1,-.4,.64,0,s);for(const c of[-.445,.445])n(1,.57,.11,0,.38,c,s);for(const c of[-.21,.21])n(.69,.13,.39,.08,.49,c,s);for(const c of[-.4,.4])for(const b of[-.4,.4])n(.07,.1,.07,c,.05,b,i)}else p==="bed"?(n(1,.3,1,0,.23,0,l),n(.95,.24,.95,0,.5,0,s),n(.07,.8,1,-.465,.6,0,l)):(n(1,1,1,0,.5,0,l),n(1,.01,.08,0,1.005,0,i));const a=new rt().setFromObject(e),h=a.getSize(new X),v=a.getCenter(new X);e.children.forEach(c=>{c.position.x-=v.x,c.position.y-=a.min.y,c.position.z-=v.z}),e.scale.set(1/h.x,1/h.y,1/h.z);const D=new j;return D.add(e),D}function Fs(p){const e=new j,s=new Ze(p);s.colorSpace=it;const o=new je({map:s,transparent:!0,toneMapped:!1}),i=new L(new ce(1,1,1),new Y({color:"#32434d",roughness:.7}));i.castShadow=!0,i.receiveShadow=!0,e.add(i);const l=[1,-1].map(n=>{const t=new L(new Mt(1,1),o);return t.rotation.y=n*Math.PI/2,e.add(t),t});return e.userData.photo={aspect:p.width/p.height,backing:i,faces:l},e}function Bs(p,e){const{aspect:s,backing:o,faces:i}=p.userData.photo,l=e.width/100,n=e.height/100,t=Math.min(l,n*s),a=t/s,h=Math.min(.045,e.length/100);o.scale.set(h,a,t),o.position.y=a/2,i.forEach((v,D)=>{v.scale.set(t,a,1),v.position.set((D===0?1:-1)*(h/2+5e-4),a/2,0)})}const js=new $t;function Us(p){return new Promise((e,s)=>{js.load(p,o=>{const i=new j,l=o.scene;l.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)});const n=new rt().setFromObject(l),t=n.getSize(new X);if(!Number.isFinite(t.x)||!Number.isFinite(t.y)||!Number.isFinite(t.z)||Math.min(t.x,t.y,t.z)<=0){s(new Error("Generated model has no usable dimensions"));return}l.position.sub(n.getCenter(new X)),l.position.y+=t.y/2,i.add(l),i.userData.generatedCargo=!0,e(i)},void 0,()=>s(new Error("Unable to load generated model")))})}function Gs(p,e,s){p.scale.setScalar(1),p.rotation.y=s?Math.PI/2:0;const o=new rt().setFromObject(p).getSize(new X),i={x:(s?e.width:e.length)/100,y:e.height/100,z:(s?e.length:e.width)/100},l=Math.min(i.x/o.x,i.y/o.y,i.z/o.z);p.scale.setScalar(Number.isFinite(l)&&l>0?l:1)}const Hs={chair:{length:60,width:60,height:85,weight:8},cabinet:{length:80,width:50,height:80,weight:20},table:{length:100,width:60,height:75,weight:15},box:{length:50,width:40,height:45,weight:10},sofa:{length:210,width:95,height:85,weight:65},bed:{length:200,width:150,height:60,weight:55},other:{length:70,width:60,height:75,weight:10}};function co(p,e,s=!1){if(!p.category&&!s)return null;const o=p.category||"other",i=Hs[o],l=[p.length,p.width,p.height].every(a=>Number.isFinite(a)&&a>0),n=l?{length:p.length,width:p.width,height:p.height}:{length:i.length,width:i.width,height:i.height},t=fs({...n,category:s&&o==="other"?"box":o,weight:p.weight>0?p.weight:i.weight,confirmed:!0,groundReady:!0,stableBase:!0,needsDismantling:!1},us,e);return{dimensions:n,measured:l,category:o,fitting:t}}function nt(p,e){const s=Math.max(0,Math.min(1,Number.isFinite(p)?p:0)),o=t=>{const a=Math.max(0,Math.min(1,t));return a*a*(3-2*a)},i=o(s/.25),l=o((s-.25)/.3),n=o((s-.55)/.35);return{x:s<.55?6.2-1.99*i:4.21+(e.x-4.21)*n,y:s<.25?.03+.23*i:.26+.92*l,z:e.z,lift:l,secured:s>=.9,stage:s>=1?"完成演示":s>=.9?"示意固定":s>=.55?"推入货位":s>=.25?"尾板升起":"人工辅助上尾板"}}function Xs(p){const e=new j;function s(r){const u=document.createElement("canvas");u.width=u.height=256;const g=u.getContext("2d");g.fillStyle=r==="wood"?"#baa07d":"#bdbdbd",g.fillRect(0,0,256,256);let S=7241;const w=()=>(S=S*1664525+1013904223>>>0,S/4294967296);if(r==="fabric")for(let W=0;W<256;W+=2)for(let P=0;P<256;P+=2){const E=Math.floor(125+w()*105);g.fillStyle=`rgb(${E},${E},${E})`,g.fillRect(P,W,1,W%4?2:1)}else for(let W=0;W<900;W++){g.strokeStyle=r==="wood"?`rgba(55,30,10,${w()*.1})`:`rgba(35,40,45,${w()*.12})`,g.beginPath();const P=w()*256;g.moveTo(P,0),g.bezierCurveTo(P+w()*12,80,P-w()*12,175,P+w()*9,256),g.stroke()}const A=new Ze(u);return A.wrapS=A.wrapT=ot,A.repeat.set(r==="fabric"?5:2,r==="fabric"?5:2),A.anisotropy=Math.min(p.capabilities.getMaxAnisotropy(),8),A}const o=s("fabric"),i=s("metal"),l=s("wood");l.colorSpace=it;const n=(r,u=0,g=.6)=>new Y({color:r,metalness:u,roughness:g}),t={body:n("#f3f1ec",.35,.32),steel:n("#9da8b0",.8,.29),dark:n("#273038",.45,.45),rubber:n("#151b21",0,.9),teal:n("#087f86",.35,.4),wine:n("#770a2d",.3,.4),amber:n("#f9c55c",.3),glass:n("#25434f",.7,.19),floor:n("#56636e",.7,.5),pad:n("#d3dcdf",0,.95)};t.body=new Xe({color:"#75828b",metalness:.78,roughness:.23,clearcoat:.65,clearcoatRoughness:.17}),t.steel.bumpMap=i,t.steel.bumpScale=.003,t.floor.bumpMap=i,t.floor.bumpScale=.004,t.floor.color.set("#303c46"),t.glass=new Xe({color:"#0c1620",metalness:.25,roughness:.07,clearcoat:1}),t.rubber.bumpMap=o,t.rubber.bumpScale=.004;function a(r,u,g,S,w,A,W,P,E=0){const F=new L(E?new Os(u,g,S,2,E):new ce(u,g,S),P);return F.position.set(w,A,W),F.castShadow=!0,F.receiveShadow=!0,r.add(F),F}function h(r,u,g,S,w,A,W,P="z"){const E=new L(new Je(u,u,g,32),W);return P==="z"?E.rotation.x=Math.PI/2:P==="x"&&(E.rotation.z=Math.PI/2),E.position.set(S,w,A),E.castShadow=!0,r.add(E),E}function v(r,u,g,S,w,A,W,P=0){const E=document.createElement("canvas");E.width=1024,E.height=512;const F=E.getContext("2d");F.fillStyle="#f3f1ec",F.fillRect(0,0,1024,512),F.fillStyle="#790e32",F.font="bold 158px Arial",F.fillText(u[0],55,205,914),F.fillStyle="#087c86",F.font="46px Arial",F.fillText(u[1],58,308,908),F.font="28px Arial",F.fillText("CONCEPT VEHICLE / waste_go",58,401,908);const ee=new Ze(E);ee.colorSpace=it;const J=new L(new Mt(g,S),new Y({map:ee,roughness:.5}));return J.position.set(w,A,W),J.rotation.y=P,r.add(J),J}function D(r,u,g,S,w){const A=new j;A.position.set(u,g,S),r.add(A);const W=new Xe({color:w,roughness:.92,sheen:1,sheenColor:new _e("#afbbb9"),sheenRoughness:.9,bumpMap:o,bumpScale:.018}),P=n(w,0,1);P.color.multiplyScalar(.7),a(A,1.85,.23,.8,0,.24,0,W,.06),a(A,1.85,.65,.17,0,.6,-.34,W,.065);for(const E of[-.84,.84]){a(A,.17,.52,.88,E,.43,0,W,.05);for(const F of[-.3,.3])h(A,.032,.14,E,.07,F,t.dark,"y")}for(const E of[-.38,.38]){a(A,.71,.16,.56,E,.43,.05,W,.065);const F=a(A,.7,.43,.2,E,.7,-.21,W,.07);F.rotation.x=-.09,a(A,.63,.006,.005,E,.44,.333,P,.002);for(const ee of[-.18,.18]){const J=new L(new et(.012,12,8),P);J.scale.z=.3,J.position.set(E+ee,.72,-.095),A.add(J)}}return A}const c=new j;e.add(c),a(c,6.7,.36,2.52,-.1,.77,0,t.dark,.06),a(c,4.7,.13,2.4,.82,1.07,0,t.floor);const b=new Xe({color:"#b5bfc4",metalness:.62,roughness:.28,clearcoat:.55});a(c,1.98,2.84,2.39,-2.48,2.52,0,b,.045);for(const r of[-1.205,1.205]){a(c,1.95,.08,.055,-2.48,3.94,r,t.steel),a(c,1.95,.08,.055,-2.48,1.13,r,t.steel),a(c,.07,2.8,.055,-3.43,2.52,r,t.steel);for(let u=1.3;u<3.9;u+=.3)h(c,.013,.016,-3.44,u,r*1.02,t.dark)}a(c,.1,2.79,2.31,-3.5,2.52,0,b,.025),a(c,.045,.26,1.23,-3.57,1.86,0,t.dark,.02);for(const r of[-.39,0,.39])h(c,.044,.025,-3.6,1.86,r,t.glass,"x");a(c,.07,.12,2.27,-3.54,3.94,0,t.steel,.012);const x=[];for(const r of[-2.35,2.03])for(const u of[-1.27,1.27]){const g=new j;g.position.set(r,.56,u),c.add(g),h(g,.55,.3,0,0,0,t.rubber);const S=new L(new at(.415,.135,12,48),t.rubber);S.position.z=u>0?.06:-.06,g.add(S),h(g,.32,.31,0,0,0,t.dark),h(g,.285,.33,0,0,0,t.steel),h(g,.105,.36,0,0,0,t.steel);for(let w=0;w<10;w++){const A=w*Math.PI/5;h(g,.036,.345,Math.cos(A)*.224,Math.sin(A)*.224,0,t.dark),h(g,.015,.365,Math.cos(A)*.147,Math.sin(A)*.147,0,t.steel)}x.push(g),a(c,.04,.48,.45,r+.58,.47,u,t.rubber);for(let w=0;w<Math.PI*2;w+=Math.PI/24){const A=a(g,.044,.022,.28,Math.cos(w)*.55,Math.sin(w)*.55,0,t.rubber);A.rotation.z=w-Math.PI/2}}a(c,4.58,2.78,.08,.83,2.52,-1.19,t.body),a(c,.08,2.78,2.4,-1.47,2.52,0,t.body);for(const r of[-1.45,3.1])for(const u of[-1.19,1.19])a(c,.11,2.84,.11,r,2.53,u,t.steel);for(const r of[-1.257,1.257])for(const u of[-1.45,3.1])for(let g=1.25;g<3.9;g+=.25)h(c,.018,.018,u,g,r,t.dark);for(const r of[-1.2,1.2]){a(c,2.7,.38,.09,.05,.79,r,t.body,.02);for(let u=-1.05;u<1.3;u+=.45)a(c,.045,.2,.1,u,.79,r*1.04,t.dark);a(c,.8,.025,.012,-.8,.83,r*1.06,t.wine)}for(const r of[-1.19,1.19]){a(c,4.7,.12,.12,.83,3.92,r,t.steel),a(c,4.7,.12,.12,.83,1.15,r,t.steel);for(let u=-1.1;u<3;u+=.55)a(c,.028,2.65,.03,u,2.53,-1.135,t.steel),a(c,.1,.04,.14,u,1.18,r,t.amber)}const C=new j;c.add(C),a(C,4.6,2.74,.065,.82,2.53,1.21,t.body),a(C,4.68,.09,2.43,.82,3.95,0,t.body),v(C,["waste_go","DIRECT COLLECTION"],2.7,1.35,.7,2.5,1.25),v(c,["waste_go","LOW-SPEED CARGO"],1.55,.78,-2.48,2.89,1.207);const T=new j;c.add(T),a(T,.09,2.68,2.29,3.13,2.54,0,t.body);for(let r=1.24;r<3.87;r+=.145)a(T,.025,.009,2.25,3.184,r,0,t.dark);a(T,.04,.08,.5,3.2,1.34,0,t.dark,.01);const d=[];for(const r of[-1,1]){const u=new j;u.position.set(.75,2.48,r*1.12),c.add(u),a(u,4.35,.1,1.12,0,0,-r*.56,t.steel);for(let g=-1.3;g<2;g+=.55)a(u,.045,.055,1.1,g,-.07,-r*.56,t.dark);d.push({pivot:u,sign:r})}const f=new Y({color:"#ac926f",map:l,bumpMap:l,bumpScale:.005,roughness:.53}),m=new j;c.add(m),D(m,-.15,2.55,-.12,"#a7a095"),a(m,.78,1.05,.7,2.05,3.06,-.1,f,.012),a(m,.02,.07,.13,2.452,3.12,.1,t.dark);const M=new j;c.add(M);for(const r of[-1.12,1.12])for(let u=-1.1;u<3;u+=.65)a(M,.55,1,.07,u,1.75,r,t.pad,.035);const y=new j;c.add(y);const N=new j;y.add(N),a(N,1.97,.12,2.36,.985,0,0,t.floor,.018);for(const r of[-1.15,1.15]){a(N,1.95,.025,.08,.985,.075,r,t.amber);for(let u=.05;u<1.9;u+=.17){const g=a(N,.065,.008,.09,u,.091,r,t.dark);g.rotation.y=-.4}}for(let r=-1;r<=1;r+=.2)a(N,1.84,.007,.009,.98,.066,r,t.steel);for(const r of[-1.15,1.15])a(c,.15,2.84,.15,3.25,2.53,r,t.dark),a(c,.038,2.7,.04,3.34,2.5,r,t.steel),a(c,.075,.62,.075,3.35,2.92,r,t.amber),a(c,.075,.42,.075,3.35,1.51,r,t.wine);const U=new j;c.add(U);const q=D(U,0,0,0,"#456366"),z=new j;U.add(z),a(z,.95,1.83,.6,0,.97,0,f,.012),a(z,.008,1.7,.008,0,.97,.308,t.dark);for(const r of[-.065,.065])a(z,.018,.17,.025,r,1.02,.33,t.steel,.005);const O=new j;U.add(O);for(const r of[-.64,.64])a(O,.055,.9,.025,r,.47,.455,t.amber),a(O,.055,.025,.91,r,.91,0,t.amber),a(O,.055,.9,.025,r,.47,-.455,t.amber),a(O,.11,.13,.045,r,.36,.485,t.steel,.01),a(O,.16,.045,.12,r,.06,.5,t.dark,.01);const G=new Y({color:"#16c9d1",emissive:"#04b8c7",emissiveIntensity:1});for(const r of[-1.3,3.13])for(const u of[-1.09,1.09]){a(c,.23,.17,.23,r,3.99,u,t.dark,.025);const g=new L(new et(.05,16,16),G);g.position.set(r+.12,3.99,u),c.add(g)}const R=new j;R.position.set(-3.43,4.14,0),c.add(R),a(R,.32,.24,.56,0,0,0,t.dark,.03),a(R,.25,.04,.42,.04,-.15,0,t.steel,.01);for(const r of[-.16,.16])h(R,.078,.045,-.175,0,r,t.steel,"x"),h(R,.055,.052,-.198,0,r,t.glass,"x"),h(R,.023,.055,-.202,0,r,G,"x");a(R,.024,.016,.055,-.18,.075,0,G,.003);const I=new j;c.add(I),I.position.set(3.33,3.89,0),a(I,.18,.2,.38,0,0,0,t.dark,.025);for(const r of[-.11,.11])h(I,.045,.025,.1,0,r,t.glass,"x");h(I,.065,.027,.1,0,0,t.steel,"x"),h(I,.048,.03,.117,0,0,t.glass,"x"),a(I,.006,.014,.014,.142,.07,.13,G),a(c,.11,.43,.26,3.34,2.05,1.19,t.dark,.015),a(c,.016,.29,.2,3.405,2.08,1.19,t.glass,.005);for(let r=1.12;r<1.28;r+=.026)a(c,.018,.06,.008,3.416,2.02,r,t.body);const te=new j;c.add(te);const re=new je({color:"#0db8be",transparent:!0,opacity:.5,depthWrite:!1});for(let r=1.25;r<3.88;r+=.17)a(te,.012,.008,2.15,3.36,r,0,re);const K=new j;e.add(K);const se=n("#bc244a",0,.7);h(K,.16,.58,0,.96,0,se,"y");const fe=new L(new et(.15,20,16),se);fe.position.y=1.45,K.add(fe);for(const r of[-.1,.1])h(K,.06,.61,r,.35,0,se,"y");for(const r of[-.25,.25])h(K,.055,.6,r,1,0,se,"y");const k=new L(new es(.38,.42,64),new je({color:"#bf244b",side:ts}));k.rotation.x=-Math.PI/2,k.position.y=.02,K.add(k),Rs({truck:c,scene:e,m:t,box:a,cyl:h,lift:y,platform:N});let oe=null;const H=new j;c.add(H),H.visible=!1;const ae=[];for(let r=0;r<4;r++){const u=new je({color:"#45d2c3",transparent:!0,opacity:.12,depthWrite:!1}),g=new L(new ce(1,1,1),u);H.add(g);const S=new ut(new pt(new ce(1,1,1)),new mt({color:"#45d2c3",transparent:!0,opacity:.8}));H.add(S);const w=document.createElement("canvas");w.width=128,w.height=128;const A=w.getContext("2d");A.fillStyle="#0b2636",A.fillRect(0,0,128,128),A.fillStyle="#d9fff5",A.textAlign="center",A.font="bold 86px Arial",A.fillText(String.fromCharCode(65+r),64,94);const W=new ss(new os({map:new Ze(w),depthTest:!1}));W.scale.set(.28,.28,1),H.add(W),ae.push({volume:g,edges:S,label:W})}const ne=new ut(new pt(new ce(1,1,1)),new mt({color:"#e4b85f",transparent:!0,opacity:.6}));H.add(ne);let B=null,ue="",pe=null,$="",Q=0;const Z=new j;H.add(Z),a(Z,.04,1,.018,0,.5,-.51,t.amber),a(Z,.04,1,.018,0,.5,.51,t.amber),a(Z,.04,.018,1.04,0,1,0,t.amber);const ie=a(H,.27,.035,2.1,3.19,1.16,0,t.floor);function He(r){if(oe=r,H.visible=!!r,!r)return;ae.forEach(({volume:S,edges:w,label:A},W)=>{const P=r.slots[W];if(S.visible=w.visible=A.visible=!!P,!P)return;const E=r.occupied.includes(P.id),F=r.selected===P.id,ee=E?"#ba6874":F?"#6dffd2":"#45a3c3";S.material.color.set(ee),S.material.opacity=E?.38:F?.2:.06,w.material.color.set(ee),S.position.set(P.x,1.18+P.height/200,P.z),S.scale.set(P.length/100,P.height/100,P.width/100),w.position.copy(S.position),w.scale.copy(S.scale),A.position.set(P.x,1.2,P.z)});const u=r.slots.find(S=>S.id===r.selected),g=r.dimensions;if(r.model3dUrl!==$){$=r.model3dUrl||"";const S=++Q;r.model3dUrl&&Us(r.model3dUrl).then(w=>{if(S!==Q){Be(w);return}B&&(H.remove(B),Be(B)),B=w,ue="",pe=null,H.add(B)}).catch(()=>{S===Q&&r.onModelError?.()})}if(!r.model3dUrl&&(r.photo!==pe||!r.photo&&r.category!==ue)&&(B&&(H.remove(B),Be(B)),B=r.photo?Fs(r.photo):r.category?Ws(r.category):null,ue=r.category,pe=r.photo,B&&H.add(B)),ne.visible=!!g,Z.visible=!1,B&&(B.visible=!!g),g){const S=nt(u&&r.progress||0,u||{x:1.7,z:0}),w=r.rotated?g.length:g.width,A=r.rotated?g.width:g.length;ne.scale.set(A/100,g.height/100,w/100),ne.position.set(S.x,S.y+g.height/200,S.z),B&&(B.userData.generatedCargo?Gs(B,g,r.rotated):r.photo?Bs(B,g):B.scale.set(g.length/100,g.height/100,g.width/100),B.userData.generatedCargo||(B.rotation.y=r.rotated?Math.PI/2:0),B.position.set(S.x,S.y,S.z)),Z.visible=!r.photo&&!!u&&S.secured,Z.scale.set(A/100,g.height/100,w/100),Z.position.set(S.x,S.y,S.z)}ie.visible=!!u&&(r.progress||0)>=.55}let ve=0,me=0,Me=performance.now();function Te(r,u){const g=performance.now(),S=u.latched?0:Math.min((g-Me)/1e3,.05);Me=g,ve=u.layout==="full"?1:0,me=wt.damp(me,ve,7,S),m.visible=ve===0&&me<.01,d.forEach(({pivot:w,sign:A})=>w.rotation.x=A*me*Math.PI/2),M.visible=u.fleet==="reuse",t.wine.color.set(u.fleet==="reuse"?"#087c86":"#770a2d"),C.visible=!u.cutaway,T.visible=r.closed>.01,T.scale.y=Math.max(.01,r.closed),T.position.y=3.88*(1-r.closed),y.position.set(3.22,.18+r.lift*.91,0),N.rotation.z=r.fold*Math.PI/2,U.position.set(4.21-r.inward*3.45,.26+r.lift*.91,0),q.visible=u.item==="sofa",z.visible=u.item==="cabinet",O.visible=r.secured&&u.item==="sofa",c.position.x=0,x.forEach(w=>w.rotation.z=(u.distance??r.travel*1.3)/.56),te.visible=u.showSafety&&r.closed<.5,re.color.set(u.latched?"#f13958":"#0db8be"),re.opacity=u.latched?.85:.4,K.visible=u.intrusion,K.position.set(c.position.x+3.5,0,1.58),oe?(C.visible=!1,T.visible=!1,m.visible=!1,d.forEach(({pivot:w})=>{w.visible=!1}),U.visible=!1,M.visible=!1,te.visible=!1,K.visible=!1):(d.forEach(({pivot:w})=>{w.visible=!0}),U.visible=!0)}return{root:e,update:Te,inspectCargo:He,dispose(){Be(e)}}}function ks(p){const e=new vt;e.background=new _e("#18232e"),e.fog=new as("#18232e",24,65);const s=new is(30,1,.1,120),o=new rs({antialias:!0});o.setPixelRatio(Math.min(devicePixelRatio,1.25)),o.shadowMap.enabled=!0,o.shadowMap.type=ns,o.toneMapping=bt,o.toneMappingExposure=.95,p.appendChild(o.domElement);const i=new Ms,l=new ls(o),n=l.fromScene(i,.035);e.environment=n.texture,e.environmentIntensity=.85,i.dispose(),l.dispose();const t=Xs(o);e.add(t.root);const a=new L(new ce(100,.1,100),new Y({color:"#202c38",metalness:.05,roughness:.8}));a.position.y=-.14,a.receiveShadow=!0,e.add(a),e.add(new cs(11847900,1120546,.48));for(const[f,m,M]of[[16775407,3.2,[-3,10,7]],[12179967,2.8,[3,5,-5]],[15070975,3.5,[-5,4,-3]]]){const y=new ds(f,m);y.position.set(...M),e.children.filter(N=>N.isDirectionalLight).length===0&&(y.castShadow=!0,y.shadow.mapSize.set(2048,2048),Object.assign(y.shadow.camera,{left:-9,right:9,top:9,bottom:-9}),y.shadow.normalBias=.015,y.shadow.bias=-5e-5),e.add(y)}const h=new hs(s,o.domElement);h.enableDamping=!0,h.minDistance=7,h.maxDistance=35,h.maxPolarAngle=Math.PI/2-.04;const v=new Ds(o),D=new ge(e,s,1,1,12);D.kernelRadius=.22,D.minDistance=.002,D.maxDistance=.14,v.addPass(new Ls(e,s)),D.enabled=!1,v.addPass(D),v.addPass(new Es),v.addPass(new Ns);let c="hero",b=null;function x(){if(!b?.dimensions)return new X(4.21,1,0);const f=b.slots.find(N=>N.id===b.selected),m=nt(f&&b.progress||0,f||{x:1.7,z:0}),M=b.dimensions,y=b.photo?Math.min(M.height/100,M.width/100*b.photo.height/b.photo.width):M.height/100;return new X(m.x,m.y+y/2,m.z)}function C(f=c){if(c=f,s.fov=f==="sensor"?65:f==="cargo"?45:30,s.updateProjectionMatrix(),h.minDistance=f==="sensor"?.5:f==="cargo"?1.2:7,f==="cargo"){h.target.copy(x()),s.position.copy(h.target).add(new X(2.1,1.2,1.5)),h.update();return}if(f==="sensor"){s.position.set(3.58,3.65,0),h.target.set(.35,1.4,0),h.update();return}const m=Math.max(1,1.35/s.aspect),M=f==="top"?[.8,13,.01]:f==="front"?[-10,5.7,6]:f==="rear"?[10.8,4.3,5.2]:f==="side"?[.8,3.5,16]:[10.5,5.6,13.2];s.position.set(...M.map(y=>y*m)),h.target.set(f==="front"?-2.5:f==="rear"?2.8:.65,f==="front"?3:1.95,0),h.update()}function T(){const{width:f,height:m}=p.getBoundingClientRect();!f||!m||(s.aspect=f/m,s.updateProjectionMatrix(),o.setSize(f,m),v.setSize(f,m),C())}const d=new ResizeObserver(T);return d.observe(p),T(),{view:C,inspectCargo(f){if(b=f,t.inspectCargo(f),c==="cargo"){const m=x();s.position.add(m.clone().sub(h.target)),h.target.copy(m)}},annotations(){const f=p.clientWidth,m=p.clientHeight;return[{id:"front",label:"前顶部 · 行驶感知相机",xyz:[-3.43,4.14,0],dx:-135,dy:-45},{id:"sensor",label:"后门楣 · 预约验货相机",xyz:[3.45,3.89,0],dx:25,dy:-65},{id:"deck",label:"独立层板",xyz:[.6,2.48,1.12],dx:-145,dy:-15},{id:"safety",label:"安全光幕",xyz:[3.36,2.9,0],dx:42,dy:-20},{id:"lift",label:"升降尾板",xyz:[4.2,.18,1],dx:35,dy:15}].map(M=>{const y=new X(...M.xyz).project(s);return{...M,x:(y.x+1)*f/2,y:(1-y.y)*m/2,visible:y.z<1&&Math.abs(y.x)<.85&&Math.abs(y.y)<.8}})},render(f,m){t.update(f,m),h.update(),v.render()},dispose(){d.disconnect(),h.dispose(),v.passes.forEach(f=>f.dispose?.()),v.dispose(),Be(e),n.dispose(),o.dispose(),o.domElement.remove()}}}const Is={class:"cargo-scene","aria-label":"原版车辆货位预览"},Vs={class:"scene-label"},Ys={key:0,role:"alert"},qs={key:0,class:"camera-hud","aria-hidden":"true"},Zs={"aria-label":"车辆观察角度"},Ks=["aria-pressed","onClick"],Qs={class:"load-controls"},Js={class:"load-title"},_s=["value","disabled"],$s={class:"load-buttons"},eo=["disabled"],to=["disabled"],so={key:0,class:"preview-note"},oo={class:"scene-note"},ao=ps({__name:"CargoInspectionScene",props:{inspection:{},dimensionSource:{},previewNote:{}},setup(p){const e=p,s=Ae(null),o=Ae(""),i=Ae("hero"),l=[{id:"hero",label:"全车剖视"},{id:"cargo",label:"物品跟随近景"},{id:"rear",label:"尾板对接"},{id:"top",label:"货位俯视"},{id:"sensor",label:"车尾验货视角"}],n=Ae(0),t=Ae(!1),a=Ae("等待播放装载演示");let h=null,v=0,D=0,c=0;function b(f){i.value=f,h?.view(f)}function x(){t.value=!1,n.value=0,a.value="等待播放装载演示"}function C(){n.value>=1&&(n.value=0),t.value=!t.value}function T(f){t.value=!1,n.value=Number(f.target.value)/100}function d(f=performance.now()){if(document.hidden||f-c<33){v=requestAnimationFrame(d);return}c=f;const m=D?Math.min((f-D)/1e3,.08):0;D=f,t.value&&(n.value=Math.min(1,n.value+m/12),n.value>=1&&(t.value=!1));const M=nt(n.value,{x:0,z:0});a.value=!e.inspection.category&&!e.inspection.photo?"选择照片后展示物品":n.value===0&&!t.value?"等待播放装载演示":e.inspection.photo&&n.value>=.9&&n.value<1?"放置到位":M.stage,h?.inspectCargo({...e.inspection,progress:n.value}),h?.render({lift:M.lift,inward:0,fold:0,closed:0,secured:!1,travel:0,driveAllowed:!1},{layout:"full",fleet:"clearance",item:"sofa",cutaway:!0,showSafety:!1,latched:!1,intrusion:!1}),v=requestAnimationFrame(d)}return ms(()=>e.inspection,x,{deep:!0}),gs(()=>{try{h=ks(s.value),h.inspectCargo(e.inspection),d()}catch(f){o.value=f instanceof Error?f.message:"无法加载三维车辆",h?.dispose(),h=null}}),vs(()=>{cancelAnimationFrame(v),h?.dispose()}),(f,m)=>(We(),Re("section",Is,[V("div",Vs,[V("span",null,"waste_go / "+le(p.inspection.model3dUrl?"合成模型 · 三维预览":p.inspection.photo?"上传照片 · 2.5D 预览":"家具模板预览"),1),m[0]||(m[0]=V("span",null,"三维模拟 · 非实时摄像头",-1))]),V("div",{ref_key:"host",ref:s,class:"canvas-host"},[o.value?(We(),Re("p",Ys,le(o.value)+"。仍可在下方货位图检查分配结果。",1)):tt("v-if",!0)],512),i.value==="sensor"?(We(),Re("div",qs,[...m[1]||(m[1]=[V("span",null,"REAR CAMERA / SIMULATED",-1),V("i",null,null,-1),V("span",null,"货位边界来自演示配置",-1)])])):tt("v-if",!0),V("nav",Zs,[(We(),Re(xs,null,ws(l,M=>V("button",{key:M.id,"aria-pressed":i.value===M.id,onClick:y=>b(M.id)},le(M.label),9,Ks)),64))]),V("div",Qs,[V("div",Js,[V("strong",null,le(a.value),1),V("span",null,le(Math.round(n.value*100))+"%",1)]),V("input",{"aria-label":"装载演示进度",type:"range",min:"0",max:"100",step:"1",value:n.value*100,disabled:!p.inspection.selected||!!o.value,onInput:T},null,40,_s),V("div",$s,[V("button",{disabled:!p.inspection.selected||!!o.value,onClick:C},le(t.value?"暂停装载":n.value>=1?"重新播放装载":"播放装载演示"),9,eo),V("button",{disabled:!p.inspection.category,onClick:x},"重置",8,to),V("span",null,le(p.dimensionSource),1)]),p.previewNote?(We(),Re("p",so,le(p.previewNote),1)):tt("v-if",!0)]),V("p",oo,le(p.inspection.model3dUrl?"程序化合成外形（非 AI 生成结果）：按演示外廓缩放并沿装载路径移动，不用于尺寸、重量或预约核验。人工辅助上尾板 → 升降 → 入仓。":p.inspection.photo?"原图立体卡片：保留背景，正反面使用同一照片，厚度仅为显示效果；不是物品的真实三维形状。人工辅助上尾板 → 升降 → 入仓。":"类别模板，非照片三维重建。人工辅助上尾板 → 升降 → 推入 → 示意固定；不代表车辆可自主搬运。"),1)]))}}),ho=bs(ao,[["__scopeId","data-v-b7da4404"]]);export{ho as C,co as p};
