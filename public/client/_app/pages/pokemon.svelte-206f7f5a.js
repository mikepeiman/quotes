import{S as D,i as S,s as V,e as y,t as E,k as I,c as w,a as $,h as j,d as v,m as q,b as m,M as B,g as x,F as h,j as H,Y as O,aj as M,ak as N,w as U,x as Y,y as Z,q as C,o as z,B as J,$ as K,N as T,O as Q,p as R,Z as W,n as X}from"../chunks/vendor-0f79dfe6.js";function ee(i){let a,o,t,r=i[0].id+"",u,c,d=i[0].name+"",p,P,f,b,_,s,k;return{c(){a=y("a"),o=y("div"),t=y("h2"),u=E(r),c=E(". "),p=E(d),P=I(),f=y("img"),this.h()},l(e){a=w(e,"A",{href:!0});var l=$(a);o=w(l,"DIV",{class:!0});var n=$(o);t=w(n,"H2",{class:!0});var g=$(t);u=j(g,r),c=j(g,". "),p=j(g,d),g.forEach(v),P=q(n),f=w(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(v),l.forEach(v),this.h()},h(){m(t,"class","uppercase text-1xl"),B(f.src,b=i[0].image)||m(f,"src",b),m(f,"alt",""),m(f,"class","w-30 h-30"),m(o,"class","pokemon hover:drop-shadow-lg svelte-4j24xz"),m(a,"href",_=`/pokemon/${i[0].id}`)},m(e,l){x(e,a,l),h(a,o),h(o,t),h(t,u),h(t,c),h(t,p),h(o,P),h(o,f),k=!0},p(e,[l]){(!k||l&1)&&r!==(r=e[0].id+"")&&H(u,r),(!k||l&1)&&d!==(d=e[0].name+"")&&H(p,d),(!k||l&1&&!B(f.src,b=e[0].image))&&m(f,"src",b),(!k||l&1&&_!==(_=`/pokemon/${e[0].id}`))&&m(a,"href",_)},i(e){k||(O(()=>{s||(s=M(a,N,{},!0)),s.run(1)}),k=!0)},o(e){s||(s=M(a,N,{},!1)),s.run(0),k=!1},d(e){e&&v(a),e&&s&&s.end()}}}function te(i,a,o){let{poke:t}=a;return i.$$set=r=>{"poke"in r&&o(0,t=r.poke)},[t]}class ae extends D{constructor(a){super();S(this,a,te,ee,V,{poke:0})}}function F(i,a,o){const t=i.slice();return t[4]=a[o],t}function G(i){let a,o;return a=new ae({props:{poke:i[4]}}),{c(){U(a.$$.fragment)},l(t){Y(a.$$.fragment,t)},m(t,r){Z(a,t,r),o=!0},p(t,r){const u={};r&2&&(u.poke=t[4]),a.$set(u)},i(t){o||(C(a.$$.fragment,t),o=!0)},o(t){z(a.$$.fragment,t),o=!1},d(t){J(a,t)}}}function oe(i){let a,o,t,r,u,c,d,p,P,f,b,_=i[1],s=[];for(let e=0;e<_.length;e+=1)s[e]=G(F(i,_,e));const k=e=>z(s[e],1,1,()=>{s[e]=null});return{c(){a=I(),o=y("div"),t=y("h1"),r=E("Pokedex Listing"),u=I(),c=y("input"),d=I(),p=y("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){K('[data-svelte="svelte-1hb7zqs"]',document.head).forEach(v),a=q(e),o=w(e,"DIV",{class:!0});var n=$(o);t=w(n,"H1",{class:!0});var g=$(t);r=j(g,"Pokedex Listing"),g.forEach(v),u=q(n),c=w(n,"INPUT",{type:!0,placeholder:!0,class:!0}),d=q(n),p=w(n,"DIV",{class:!0});var A=$(p);for(let L=0;L<s.length;L+=1)s[L].l(A);A.forEach(v),n.forEach(v),this.h()},h(){document.title="Pokemon are cool",m(t,"class","svelte-3z7ye9"),m(c,"type","text"),m(c,"placeholder","Search Pokemon"),m(c,"class","w-5/6 rounded-md text-lg p-4 border-2 border-grey-200"),m(p,"class","grid gap-2 md:grid-cols-8 grid-cols-4"),m(o,"class","main")},m(e,l){x(e,a,l),x(e,o,l),h(o,t),h(t,r),h(o,u),h(o,c),T(c,i[0]),h(o,d),h(o,p);for(let n=0;n<s.length;n+=1)s[n].m(p,null);P=!0,f||(b=Q(c,"input",i[3]),f=!0)},p(e,[l]){if(l&1&&c.value!==e[0]&&T(c,e[0]),l&2){_=e[1];let n;for(n=0;n<_.length;n+=1){const g=F(e,_,n);s[n]?(s[n].p(g,l),C(s[n],1)):(s[n]=G(g),s[n].c(),C(s[n],1),s[n].m(p,null))}for(X(),n=_.length;n<s.length;n+=1)k(n);R()}},i(e){if(!P){for(let l=0;l<_.length;l+=1)C(s[l]);P=!0}},o(e){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)z(s[l]);P=!1},d(e){e&&v(a),e&&v(o),W(s,e),f=!1,b()}}}async function le({params:i}){return console.log("running fetchPokemon API call"),{props:{pokemon:(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=898/")).json()).results.map((u,c)=>({name:u.name,id:c+1,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c+1}.png`}))}}}function se(i,a,o){let{pokemon:t}=a,r="",u=[];function c(){r=this.value,o(0,r)}return i.$$set=d=>{"pokemon"in d&&o(2,t=d.pokemon)},i.$$.update=()=>{i.$$.dirty&5&&(r?o(1,u=t.filter(d=>d.name.toLowerCase().includes(r.toLowerCase()))):o(1,u=[...t]))},[r,u,t,c]}class re extends D{constructor(a){super();S(this,a,se,oe,V,{pokemon:2})}}export{re as default,le as load};