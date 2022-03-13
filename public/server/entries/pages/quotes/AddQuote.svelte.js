import { c as create_ssr_component, k as add_attribute } from "../../../chunks/index-e675dbce.js";
import "../../../chunks/quotes-5c506588.js";
import { gql } from "graphql-request";
import "../../../chunks/dgraphClient-b4a302b9.js";
import "../../../chunks/index-5b1f353a.js";
const AddQuote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quotes, dgraph_quotes } = $$props;
  let quoteBody, authorName, authorTitle, context, tags, source;
  gql`mutation MyMutation {
  addQuote(input: {quoteBody: "", originalText: "", author: {}})
}`;
  if ($$props.quotes === void 0 && $$bindings.quotes && quotes !== void 0)
    $$bindings.quotes(quotes);
  if ($$props.dgraph_quotes === void 0 && $$bindings.dgraph_quotes && dgraph_quotes !== void 0)
    $$bindings.dgraph_quotes(dgraph_quotes);
  return `<div class="${"p-10 card bg-base-200 w-full"}"><div class="${"form-control flex"}"><label class="${"label w-full"}"><span>Quote</span></label>
		<input type="${"text"}" placeholder="${"Quote"}" class="${"input input-group max-w-xs"}"${add_attribute("value", quoteBody, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Author Name</span></label>
		<input type="${"text"}" placeholder="${"Author"}" class="${"input"}"${add_attribute("value", authorName, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Author Title</span></label>
		<input type="${"text"}" placeholder="${"Author"}" class="${"input"}"${add_attribute("value", authorTitle, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Context</span></label>
		<input type="${"text"}" placeholder="${"Context"}" class="${"input"}"${add_attribute("value", context, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Tags</span></label>
		<input type="${"text"}" placeholder="${"Tags"}" class="${"input"}"${add_attribute("value", tags, 0)}>
		<label class="${"label"}"><span class="${"label-text"}">Source</span></label>
		<input type="${"text"}" placeholder="${"Source"}" class="${"input"}"${add_attribute("value", source, 0)}>
		<button type="${"submit"}" class="${"p-3 rounded bg-green-800 hover:bg-green-700 mt-4"}">Add Quote</button>
		<button type="${"submit"}" class="${"p-3 rounded bg-blue-800 hover:bg-blue-700 mt-4"}">Get DGraph quotes</button></div></div>`;
});
export { AddQuote as default };
