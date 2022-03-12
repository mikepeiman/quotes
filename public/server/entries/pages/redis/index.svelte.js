import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
var HeroForm_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-aibro5{color:black}",
  map: null
};
const HeroForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form action="${""}"><input type="${"text"}" name="${"name"}" class="${"svelte-aibro5"}">
	<input type="${"text"}" name="${"attribute"}" class="${"svelte-aibro5"}">
	<input type="${"text"}" name="${"hitpoints"}" class="${"svelte-aibro5"}">
    <button type="${"submit"}">SUBMIT</button>
</form>`;
});
let inputItem;
console.log(`input item: `, inputItem);
const Redis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>REDIS</h1>

${validate_component(HeroForm, "HeroForm").$$render($$result, {}, {}, {})}`;
});
export { Redis as default };
