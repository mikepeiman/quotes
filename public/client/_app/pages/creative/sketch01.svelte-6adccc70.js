import{S as se,i as te,s as ue,w as v,x as h,y as C,q as c,o as g,B as S,a2 as P,a3 as W,a4 as j,k as E,l as x,m as F,g as w,n as ae,p as oe,d as I}from"../../chunks/vendor-0f79dfe6.js";import{C as fe}from"../../chunks/CanvasSketchEditor-89928560.js";import{S as z}from"../../chunks/Slider-58dcbe6f.js";import{C as ee}from"../../chunks/ColorInput-0ad08486.js";import{C as _e}from"../../chunks/Checkbox-import-0bfa8a73.js";/* empty css                                                        */import"../../chunks/stores-4423f7a5.js";/* empty css                                                            */function ne(i){let r,u,s;function n(a){i[10](a)}let p={label:"Line Width",min:"1",max:"100"};return i[1].lineWidth!==void 0&&(p.value=i[1].lineWidth),r=new z({props:p}),P.push(()=>W(r,"value",n)),{c(){v(r.$$.fragment)},l(a){h(r.$$.fragment,a)},m(a,f){C(r,a,f),s=!0},p(a,f){const b={};!u&&f&2&&(u=!0,b.value=a[1].lineWidth,j(()=>u=!1)),r.$set(b)},i(a){s||(c(r.$$.fragment,a),s=!0)},o(a){g(r.$$.fragment,a),s=!1},d(a){S(r,a)}}}function pe(i){let r,u,s,n,p,a,f,b,A,d,L,B,m,l,$,_,M,q,k,T;function R(e){i[4](e)}let y={label:"Background"};i[1].background!==void 0&&(y.value=i[1].background),r=new ee({props:y}),P.push(()=>W(r,"value",R));function D(e){i[5](e)}let N={label:"Foreground"};i[1].foreground!==void 0&&(N.value=i[1].foreground),n=new ee({props:N}),P.push(()=>W(n,"value",D));function O(e){i[6](e)}let V={label:"Arc Length",min:"0.05",max:"1",step:"0.05"};i[1].arclen!==void 0&&(V.value=i[1].arclen),f=new z({props:V}),P.push(()=>W(f,"value",O));function ie(e){i[7](e)}let G={label:"Radius",min:"0.05",max:"1",step:"0.05"};i[1].radius!==void 0&&(G.value=i[1].radius),d=new z({props:G}),P.push(()=>W(d,"value",ie));function le(e){i[8](e)}let H={label:"Angle",min:0,max:Math.PI*2+.1,step:"0.1"};i[1].angle!==void 0&&(H.value=i[1].angle),m=new z({props:H}),P.push(()=>W(m,"value",le));function re(e){i[9](e)}let J={label:"Outline"};i[1].outline!==void 0&&(J.checked=i[1].outline),_=new _e({props:J}),P.push(()=>W(_,"checked",re));let o=i[1].outline&&ne(i);return{c(){v(r.$$.fragment),s=E(),v(n.$$.fragment),a=E(),v(f.$$.fragment),A=E(),v(d.$$.fragment),B=E(),v(m.$$.fragment),$=E(),v(_.$$.fragment),q=E(),o&&o.c(),k=x()},l(e){h(r.$$.fragment,e),s=F(e),h(n.$$.fragment,e),a=F(e),h(f.$$.fragment,e),A=F(e),h(d.$$.fragment,e),B=F(e),h(m.$$.fragment,e),$=F(e),h(_.$$.fragment,e),q=F(e),o&&o.l(e),k=x()},m(e,t){C(r,e,t),w(e,s,t),C(n,e,t),w(e,a,t),C(f,e,t),w(e,A,t),C(d,e,t),w(e,B,t),C(m,e,t),w(e,$,t),C(_,e,t),w(e,q,t),o&&o.m(e,t),w(e,k,t),T=!0},p(e,t){const K={};!u&&t&2&&(u=!0,K.value=e[1].background,j(()=>u=!1)),r.$set(K);const Q={};!p&&t&2&&(p=!0,Q.value=e[1].foreground,j(()=>p=!1)),n.$set(Q);const U={};!b&&t&2&&(b=!0,U.value=e[1].arclen,j(()=>b=!1)),f.$set(U);const X={};!L&&t&2&&(L=!0,X.value=e[1].radius,j(()=>L=!1)),d.$set(X);const Y={};!l&&t&2&&(l=!0,Y.value=e[1].angle,j(()=>l=!1)),m.$set(Y);const Z={};!M&&t&2&&(M=!0,Z.checked=e[1].outline,j(()=>M=!1)),_.$set(Z),e[1].outline?o?(o.p(e,t),t&2&&c(o,1)):(o=ne(e),o.c(),c(o,1),o.m(k.parentNode,k)):o&&(ae(),g(o,1,1,()=>{o=null}),oe())},i(e){T||(c(r.$$.fragment,e),c(n.$$.fragment,e),c(f.$$.fragment,e),c(d.$$.fragment,e),c(m.$$.fragment,e),c(_.$$.fragment,e),c(o),T=!0)},o(e){g(r.$$.fragment,e),g(n.$$.fragment,e),g(f.$$.fragment,e),g(d.$$.fragment,e),g(m.$$.fragment,e),g(_.$$.fragment,e),g(o),T=!1},d(e){S(r,e),e&&I(s),S(n,e),e&&I(a),S(f,e),e&&I(A),S(d,e),e&&I(B),S(m,e),e&&I($),S(_,e),e&&I(q),o&&o.d(e),e&&I(k)}}}function de(i){let r,u;return r=new fe({props:{sketch:i[3],settings:i[2],data:i[1],hidePanel:i[0],$$slots:{default:[pe]},$$scope:{ctx:i}}}),{c(){v(r.$$.fragment)},l(s){h(r.$$.fragment,s)},m(s,n){C(r,s,n),u=!0},p(s,[n]){const p={};n&2&&(p.data=s[1]),n&1&&(p.hidePanel=s[0]),n&2050&&(p.$$scope={dirty:n,ctx:s}),r.$set(p)},i(s){u||(c(r.$$.fragment,s),u=!0)},o(s){g(r.$$.fragment,s),u=!1},d(s){S(r,s)}}}function me(i,r,u){let{hidePanel:s=!1}=r;const n={TITLE:"Sketch01",outline:!0,arclen:.5,angle:0,radius:.33,background:"#527A9B",foreground:"#F4B9A7",lineWidth:20},p={scaleToView:!0,scaleToFit:!0,resizeCanvas:!0,scaleContext:!0,dimensions:[1280,1280]},a=({})=>({context:l,width:$,height:_})=>{const{background:M,foreground:q,radius:k,arclen:T,angle:R,lineWidth:y,outline:D,stroke:N}=n;l.clearRect(0,0,$,_),l.fillStyle=M,l.fillRect(0,0,$,_);const O=Math.min($,_);l.beginPath(),l.arc($/2,_/2,O*k,R,Math.PI*2*T+R),l.fillStyle=q,l.strokeStyle=q,l.lineWidth=y,D?l.stroke():l.fill()};function f(l){i.$$.not_equal(n.background,l)&&(n.background=l,u(1,n))}function b(l){i.$$.not_equal(n.foreground,l)&&(n.foreground=l,u(1,n))}function A(l){i.$$.not_equal(n.arclen,l)&&(n.arclen=l,u(1,n))}function d(l){i.$$.not_equal(n.radius,l)&&(n.radius=l,u(1,n))}function L(l){i.$$.not_equal(n.angle,l)&&(n.angle=l,u(1,n))}function B(l){i.$$.not_equal(n.outline,l)&&(n.outline=l,u(1,n))}function m(l){i.$$.not_equal(n.lineWidth,l)&&(n.lineWidth=l,u(1,n))}return i.$$set=l=>{"hidePanel"in l&&u(0,s=l.hidePanel)},[s,n,p,a,f,b,A,d,L,B,m]}class Se extends se{constructor(r){super();te(this,r,me,de,ue,{hidePanel:0})}}export{Se as default};
