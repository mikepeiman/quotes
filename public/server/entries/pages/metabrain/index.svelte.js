import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
const MBSearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<input type="${"text"}" placeholder="${"\u{1F9E0} search"}" class="${"w-[60ch] bg-gray-300"}">`;
});
const Metabrain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-electricindigo-500 bg-opacity-10 min-h-full min-w-full flex flex-col items-center justify-start"}">${validate_component(MBSearchBar, "MBSearchBar").$$render($$result, {}, {}, {})}
</div>`;
});
export { Metabrain as default };
