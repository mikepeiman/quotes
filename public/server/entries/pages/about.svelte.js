import { c as create_ssr_component } from "../../chunks/index-e675dbce.js";
/* empty css                                                         */const css = {
  code: ".main.svelte-1lfi820{display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:'Montserrat', sans-serif;margin-top:5rem}h1.svelte-1lfi820{font-size:3rem;font-weight:900;background:-webkit-linear-gradient(0deg, rgba(72,0,36,1) 0%,rgba(9,121,121,1) 25%, rgba(56,121,255,1) 50%, rgba(121,9,121,1) 75%, rgba(2,0,76,1) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About MetaBrain</title>`, ""}`, ""}
<div class="${"main p-12 inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl svelte-1lfi820"}"><h1 class="${"svelte-1lfi820"}">About Me</h1>
    <h2 class="${"cyan-500 text-3xl"}">I&#39;m colorful</h2></div>
<div class="${"flex flex-col pt-10"}"><h2>There are links to click. If you want.</h2>
</div>`;
});
export { About as default };
