function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequire4485;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire4485=a);var r,o,l=a("hGT0Q"),s=a("4EHgc"),d=a("c0AwW"),c=a("W2bOH"),p={};r=p,o=function(){var e=function(){function t(e){return a.appendChild(e.dom),e}function n(e){for(var t=0;t<a.children.length;t++)a.children[t].style.display=t===e?"block":"none";i=e}var i=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",(function(e){e.preventDefault(),n(++i%a.children.length)}),!1);var r=(performance||Date).now(),o=r,l=0,s=t(new e.Panel("FPS","#0ff","#002")),d=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:a,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){l++;var e=(performance||Date).now();if(d.update(e-r,200),e>o+1e3&&(s.update(1e3*l/(e-o),100),o=e,l=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){r=this.end()},domElement:a,setMode:n}};return e.Panel=function(e,t,n){var i=1/0,a=0,r=Math.round,o=r(window.devicePixelRatio||1),l=80*o,s=48*o,d=3*o,c=2*o,p=3*o,m=15*o,u=74*o,f=30*o,w=document.createElement("canvas");w.width=l,w.height=s,w.style.cssText="width:80px;height:48px";var h=w.getContext("2d");return h.font="bold "+9*o+"px Helvetica,Arial,sans-serif",h.textBaseline="top",h.fillStyle=n,h.fillRect(0,0,l,s),h.fillStyle=t,h.fillText(e,d,c),h.fillRect(p,m,u,f),h.fillStyle=n,h.globalAlpha=.9,h.fillRect(p,m,u,f),{dom:w,update:function(s,y){i=Math.min(i,s),a=Math.max(a,s),h.fillStyle=n,h.globalAlpha=1,h.fillRect(0,0,l,m),h.fillStyle=t,h.fillText(r(s)+" "+e+" ("+r(i)+"-"+r(a)+")",d,c),h.drawImage(w,p+o,m,u-o,f,p,m,u-o,f),h.fillRect(p+u-o,m,o,f),h.fillStyle=n,h.globalAlpha=.9,h.fillRect(p+u-o,m,o,r((1-s/y)*f))}}},e},"object"==typeof p?p=o():"function"==typeof define&&define.amd?define(o):r.Stats=o();var m=a("4Q0VG"),u=a("aBPXg");const f={useBVH:!0,helperDisplay:!1,helperDepth:10,wireframeDisplay:!1,displayModel:!0,animate:!0,animation:"SPIN",invert:!1};let w,h,y,g,M,S,x,v,b,D,P,W,B,O,F,L=!1,E=null,R=0;const C=new l.Vector3,T=new l.Line3,I=new l.Matrix4,H=new l.Plane;!function(){E=document.getElementById("output");const t=new l.Color(2503224).multiplyScalar(.1);w=new l.WebGLRenderer({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(window.innerWidth,window.innerHeight),w.setClearColor(t,1),w.shadowMap.enabled=!0,w.shadowMap.type=l.PCFSoftShadowMap,w.outputEncoding=l.sRGBEncoding,w.localClippingEnabled=!0,document.body.appendChild(w.domElement),y=new l.Scene,y.fog=new l.Fog(t,20,70);const n=new l.DirectionalLight(16777215,.8);n.position.set(1,1.5,2).multiplyScalar(50),y.add(n),y.add(new l.HemisphereLight(16777215,2241348,.5)),h=new l.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.01,50),h.position.set(.4,.4,.4),h.far=100,h.updateProjectionMatrix(),S=new c.OrbitControls(h,w.domElement),x=new l.Clock,O=[new l.Plane],B=new l.Mesh(new l.PlaneBufferGeometry,new l.MeshBasicMaterial({side:l.DoubleSide,stencilWrite:!0,stencilFunc:l.NotEqualStencilFunc,stencilFail:l.ZeroStencilOp,stencilZFail:l.ZeroStencilOp,stencilZPass:l.ZeroStencilOp})),B.scale.setScalar(1.5),B.material.color.set(8445674).convertLinearToSRGB(),B.renderOrder=2,y.add(B);const i=new l.BufferGeometry,a=new l.BufferAttribute(new Float32Array(3e5),3,!1);a.setUsage(l.DynamicDrawUsage),i.setAttribute("position",a),F=new l.LineSegments(i,new l.LineBasicMaterial),F.material.color.set(44225).convertSRGBToLinear(),F.frustumCulled=!1,F.renderOrder=3;const r=new s.GLTFLoader;r.setMeshoptDecoder(d.MeshoptDecoder),r.load("../models/internal_combustion_engine/model.gltf",(e=>{const t=e.scene.children[0],n=t.geometry;t.material=new l.MeshBasicMaterial,t.position.set(0,0,0),t.quaternion.identity();const i=t.clone();i.material=new l.MeshStandardMaterial({depthFunc:l.EqualDepth}),i.renderOrder=1,F.scale.copy(t.scale),F.position.set(0,0,0),F.quaternion.identity(),t.updateMatrixWorld(!0);const a=new Set,r=new Map;P=t,P.updateMatrixWorld(!0),P.traverse((e=>{if(e.isMesh){if(r.has(e.material))return void(e.material=r.get(e.material));a.add(e.material);const t=e.material.clone();t.color.set(16777215),t.roughness=1,t.metalness=0,t.side=l.FrontSide,t.stencilWrite=!0,t.stencilFail=l.IncrementWrapStencilOp,t.stencilZFail=l.IncrementWrapStencilOp,t.stencilZPass=l.IncrementWrapStencilOp,t.clippingPlanes=O,r.set(e.material,t),e.material=t}})),r.clear(),W=P.clone(),W.traverse((e=>{if(e.isMesh){if(r.has(e.material))return void(e.material=r.get(e.material));const t=e.material.clone();t.color.set(16777215),t.roughness=1,t.metalness=0,t.colorWrite=!1,t.depthWrite=!1,t.side=l.BackSide,t.stencilWrite=!0,t.stencilFail=l.DecrementWrapStencilOp,t.stencilZFail=l.DecrementWrapStencilOp,t.stencilZPass=l.DecrementWrapStencilOp,t.clippingPlanes=O,r.set(e.material,t),e.material=t}})),v=new u.MeshBVH(n,{maxLeafTris:3}),n.boundsTree=v,b=new l.Mesh(n,new l.MeshBasicMaterial({wireframe:!0,transparent:!0,opacity:.01,depthWrite:!1})),b.renderOrder=2,b.position.copy(t.position),b.rotation.copy(t.rotation),b.scale.copy(t.scale),D=new u.MeshBVHVisualizer(b,parseInt(f.helperDepth)),D.depth=parseInt(f.helperDepth),D.update();const o=new l.Group;o.add(P,W,i,b,D,F);const s=new l.Box3;s.setFromObject(P),s.getCenter(o.position).multiplyScalar(-1),o.updateMatrixWorld(!0),y.add(o)})),g=new m.GUI,g.add(f,"invert"),g.add(f,"animate"),g.add(f,"animation",["SPIN","OSCILLATE"]).onChange((()=>{R=0})),g.add(f,"displayModel"),g.add(f,"useBVH");const o=g.addFolder("helper");o.add(f,"wireframeDisplay"),o.add(f,"helperDisplay"),o.add(f,"helperDepth",1,20,1).onChange((e=>{D&&(D.depth=parseInt(e),D.update())})),o.open(),g.open(),M=new(e(p)),document.body.appendChild(M.domElement),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight),w.setPixelRatio(window.devicePixelRatio)}),!1)}(),function e(){D&&(D.visible=f.helperDisplay,b.visible=f.wireframeDisplay,P.visible=f.displayModel,W.visible=f.displayModel);F.material.color.set(f.displayModel?44225:5099745).convertSRGBToLinear();const t=Math.min(x.getDelta(),.03);f.animate&&(R+=t,"SPIN"===f.animation?(B.rotation.x=.25*R,B.rotation.y=.25*R,B.rotation.z=.25*R,B.position.set(0,0,0)):(B.position.set(.325*Math.sin(.25*R),0,0),B.rotation.set(0,Math.PI/2,0)),B.updateMatrixWorld());const n=O[0];if(n.normal.set(0,0,f.invert?1:-1),n.constant=0,n.applyMatrix4(B.matrixWorld),v&&(f.animate||!L)){L=!0,I.copy(b.matrixWorld).invert(),H.copy(n).applyMatrix4(I);let e=0;const t=F.geometry.attributes.position,i=window.performance.now();v.shapecast({intersectsBounds:e=>f.useBVH?H.intersectsBox(e):u.CONTAINED,intersectsTriangle:n=>{let i=0;T.start.copy(n.a),T.end.copy(n.b),H.intersectLine(T,C)&&(t.setXYZ(e,C.x,C.y,C.z),e++,i++),T.start.copy(n.b),T.end.copy(n.c),H.intersectLine(T,C)&&(t.setXYZ(e,C.x,C.y,C.z),i++,e++),T.start.copy(n.c),T.end.copy(n.a),H.intersectLine(T,C)&&(t.setXYZ(e,C.x,C.y,C.z),i++,e++),2!==i&&(e-=i)}}),F.geometry.setDrawRange(0,e),F.position.copy(n.normal).multiplyScalar(-1e-5),t.needsUpdate=!0;const a=window.performance.now()-i;E.innerText=`${parseFloat(a.toFixed(3))}ms`}M.update(),requestAnimationFrame(e),S.update(),w.render(y,h)}();
//# sourceMappingURL=clippedEdges.701a98b0.js.map
