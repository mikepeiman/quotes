import{S as g,i as v,s as y,w as S,x as $,y as C,q as P,o as b,B as j}from"../../chunks/vendor-0f79dfe6.js";import{C as T}from"../../chunks/CanvasSketchEditor-89928560.js";/* empty css                                                        *//* empty css                                                            *//* empty css                                                          */import"../../chunks/stores-4423f7a5.js";function B(n){let s,a;return s=new T({props:{sketch:n[3],settings:n[2],data:n[1],hidePanel:n[0]}}),{c(){S(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,r){C(s,e,r),a=!0},p(e,[r]){const i={};r&1&&(i.hidePanel=e[0]),s.$set(i)},i(e){a||(P(s.$$.fragment,e),a=!0)},o(e){b(s.$$.fragment,e),a=!1},d(e){j(s,e)}}}function E(n,s,a){let{hidePanel:e=!0}=s;const r={TITLE:"Sketch01",outline:!0,arclen:.5,angle:0,radius:.33,background:"#527A9B",foreground:"#F4B9A7",lineWidth:20},i={scaleToView:!0,scaleToFit:!0,resizeCanvas:!0,scaleContext:!0,dimensions:[1280,1280]},d=({})=>({context:t,width:l,height:o})=>{const{background:f,foreground:c,radius:m,arclen:_,angle:u,lineWidth:h,outline:k,stroke:I}=r;t.clearRect(0,0,l,o),t.fillStyle=f,t.fillRect(0,0,l,o);const p=Math.min(l,o);t.beginPath(),t.arc(l/2,o/2,p*m,u,Math.PI*2*_+u),t.fillStyle=c,t.strokeStyle=c,t.lineWidth=h,k?t.stroke():t.fill()};return n.$$set=t=>{"hidePanel"in t&&a(0,e=t.hidePanel)},[e,r,i,d]}class w extends g{constructor(s){super();v(this,s,E,B,y,{hidePanel:0})}}export{w as default};