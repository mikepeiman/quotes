import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import ParseQuotes from "./parseQuotes.svelte.js";
import "../../../chunks/quotes-5c506588.js";
import "../../../chunks/index-5b1f353a.js";
import "../../../chunks/dgraph-client-b4a302b9.js";
import "graphql-request";
import "./DisplayQuotes.svelte.js";
import "../../../chunks/Icon-79f8c708.js";
import "../../../chunks/functions-9959eb37.js";
/* empty css                                                                  */const load = async ({ fetch }) => {
  const res = await fetch("/todos.json");
  if (res.ok) {
    const { file } = await res.json();
    return { props: { file } };
  }
};
const Upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { file } = $$props;
  if ($$props.file === void 0 && $$bindings.file && file !== void 0)
    $$bindings.file(file);
  return `${validate_component(ParseQuotes, "ParseQuotes").$$render($$result, {}, {}, {})}
<div class="${"todos"}"></div>`;
});
export { Upload as default, load };
