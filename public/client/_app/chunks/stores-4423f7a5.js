import{T as e}from"./vendor-0f79dfe6.js";const r=()=>{const s=e("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},n={subscribe(s){return r().page.subscribe(s)}};export{n as p};
