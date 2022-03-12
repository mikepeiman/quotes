import { c as create_ssr_component, b as subscribe } from "../../chunks/index-e675dbce.js";
import "canvas-sketch-util/random.js";
/* empty css                                                                   */import { p as page } from "../../chunks/stores-60451e84.js";
import "../../chunks/functions-9959eb37.js";
var MCMailingList_svelte_svelte_type_style_lang = "";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--color-1:var(--color-fuchsia-300);--color-2:var(--color-emerald-300);--color-3:var(--color-winterblues-400)}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $page.url.pathname;
  $$unsubscribe_page();
  return `${``}`;
});
export { Routes as default };
