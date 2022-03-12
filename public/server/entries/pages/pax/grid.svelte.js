import { c as create_ssr_component } from "../../../chunks/index-e675dbce.js";
import { extendHex, defineGrid } from "honeycomb-grid";
const hex = extendHex({ size: 50 });
const Grid = defineGrid(hex);
Grid.rectangle({ width: 12, height: 12 }).forEach((hex2) => {
  console.log(`\u{1F680} ~ file: grid.svelte ~ line 14 ~ Grid.rectangle ~ hex`, hex2);
});
const Grid_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
export { Grid_1 as default };
