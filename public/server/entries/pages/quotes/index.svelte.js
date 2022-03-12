import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import ParseQuotes from "./parseQuotes.svelte.js";
import { q as quotesArray } from "../../../chunks/quotes-5c506588.js";
import "graphql-request";
import "../../../chunks/dgraph-client-b4a302b9.js";
import "./DisplayQuotes.svelte.js";
import "../../../chunks/Icon-79f8c708.js";
import "../../../chunks/functions-9959eb37.js";
/* empty css                                                                  */import "../../../chunks/index-5b1f353a.js";
const load = async ({ fetch }) => {
  const res = await fetch("/quotes.json");
  if (res.ok) {
    const { quotes } = await res.json();
    return { props: { quotes } };
  }
};
const Quotes_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fq = [];
  let { quotes } = $$props;
  quotesArray.subscribe((quotes2) => {
  });
  if ($$props.quotes === void 0 && $$bindings.quotes && quotes !== void 0)
    $$bindings.quotes(quotes);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"flex w-full h-full justify-start"}">${validate_component(ParseQuotes, "ParseQuotes").$$render($$result, { filteredQuotes: fq }, {
      filteredQuotes: ($$value) => {
        fq = $$value;
        $$settled = false;
      }
    }, {})}
	
	</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Quotes_1 as default, load };
