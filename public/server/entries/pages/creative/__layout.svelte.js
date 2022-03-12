import { c as create_ssr_component, j as each, k as add_attribute, e as escape, b as subscribe, v as validate_component } from "../../../chunks/index-e675dbce.js";
import "../../../chunks/functions-9959eb37.js";
/* empty css                                                             */import { p as page } from "../../../chunks/stores-60451e84.js";
var SideNav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.sidebar{grid-area:sidebar;width:10rem}#sideNav.svelte-122dqnj.svelte-122dqnj{display:flex;flex-direction:column;justify-content:start;align-items:flex-start;font-family:"Montserrat", sans-serif}#sideNav.svelte-122dqnj a.svelte-122dqnj{margin:1em;text-decoration:none;font-weight:500}#sideNav.svelte-122dqnj nav.svelte-122dqnj{display:flex;flex-direction:column}#sideNav.svelte-122dqnj nav a.svelte-122dqnj{@apply rounded-lg p-4;}',
  map: null
};
let numSketches = 10;
const SideNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sketches = [];
  for (let i = 1; i < numSketches + 1; i++) {
    let url, name;
    i < 10 ? name = `Sketch 0${i}` : name = `Sketch ${i}`;
    i < 10 ? url = `/creative/sketch0${i}` : url = `/creative/sketch${i}`;
    let sketch = { name, url };
    sketches.push(sketch);
  }
  $$result.css.add(css$1);
  return `<div class="${"sidebar bg-gray-700 pt-5 svelte-122dqnj"}" id="${"sideNav"}"><nav class="${"svelte-122dqnj"}">${each(sketches, (sketch, i) => {
    return `<a${add_attribute("href", sketch.url, 0)} class="${"bg-indigo-600 hover:bg-indigo-500 svelte-122dqnj"}">${escape(sketch.name)}</a>`;
  })}</nav>
</div>`;
});
var HamburgerMenu_svelte_svelte_type_style_lang = "";
var Nav_svelte_svelte_type_style_lang = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '#creative-layout{grid-template-rows:auto 1fr;grid-template-columns:auto 1fr;grid-template-areas:"sidebar title" "sidebar main"}#sketchLayout{display:grid;grid-area:layout-main;grid-template-columns:10rem 1fr;grid-template-areas:"sidebar sketch";max-height:calc(100vh - 80px);max-width:100vw}.sketch{grid-area:sketch;display:grid;grid-template-areas:"canvas controls";grid-template-columns:1fr minmax(20rem, 25rem)}.sidebar.svelte-1mybd37{grid-area:sidebar}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  path = $page.url.pathname;
  {
    console.log(`\u{1F680} ~ file: __layout.svelte ~ line 10 ~ path`, path.split("/").length);
  }
  $$unsubscribe_page();
  return `${path.split("/").length > 2 ? `<div id="${"sketchLayout"}" class="${"w-full max-w-screen h-full"}">${validate_component(SideNav, "SideNav").$$render($$result, { class: "sidebar" }, {}, {
    default: () => {
      return `${slots.default ? slots.default({ class: "sidebar svelte-1mybd37" }) : ``}`;
    }
  })}
		${slots.default ? slots.default({ class: "sketch" }) : ``}</div>` : `<div id="${"creative-layout"}">${validate_component(SideNav, "SideNav").$$render($$result, { class: "sidebar" }, {}, {
    default: () => {
      return `${slots.default ? slots.default({ class: "sidebar svelte-1mybd37" }) : ``}`;
    }
  })}
		<div class="${"flex w-auto h-full"}">${slots.default ? slots.default({}) : ``}</div></div>`}`;
});
export { _layout as default };
