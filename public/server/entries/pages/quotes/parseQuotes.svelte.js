import { c as create_ssr_component, b as subscribe, k as add_attribute, j as each, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { q as quotesArray, a as addedQuotes } from "../../../chunks/quotes-5c506588.js";
import DisplayQuotes from "./DisplayQuotes.svelte.js";
import "graphql-request";
import "../../../chunks/dgraph-client-b4a302b9.js";
/* empty css                                                                  */import "../../../chunks/index-5b1f353a.js";
import "../../../chunks/Icon-79f8c708.js";
import "../../../chunks/functions-9959eb37.js";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Allura&family=Bad+Script&family=Coda:wght@400;800&family=Dancing+Script&family=Forum&family=Gideon+Roman&family=Great+Vibes&family=Karla:ital,wght@0,200;0,300;1,200;1,300&family=Lemonada:wght@300;400;500&family=Lobster&family=Merriweather:ital,wght@0,300;1,300&family=Monoton&family=Montserrat:ital,wght@0,100;0,300;0,500;0,800;1,100;1,300;1,500;1,800&family=Outfit:wght@200;500&family=Overlock:ital,wght@0,400;0,700;1,400;1,700&family=Staatliches&display=swap");.quotes-wrapper.svelte-ad6nk5{background:#122334}input#fileInput.svelte-ad6nk5{position:relative;padding:2.9rem 0 0 0;height:0px;overflow:hidden;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:url("https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-256.png") center center no-repeat;border-radius:0.5rem;background-size:3rem;cursor:pointer}.quotes.svelte-ad6nk5{font-family:"Merriweather", serif;font-weight:300}',
  map: null
};
const ParseQuotes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $quotesArray, $$unsubscribe_quotesArray;
  let $addedQuotes, $$unsubscribe_addedQuotes;
  $$unsubscribe_quotesArray = subscribe(quotesArray, (value) => $quotesArray = value);
  $$unsubscribe_addedQuotes = subscribe(addedQuotes, (value) => $addedQuotes = value);
  let quotes = [];
  let searchTerm = "";
  let { filteredQuotes = [] } = $$props;
  if ($$props.filteredQuotes === void 0 && $$bindings.filteredQuotes && filteredQuotes !== void 0)
    $$bindings.filteredQuotes(filteredQuotes);
  $$result.css.add(css);
  {
    {
      filteredQuotes = [...$addedQuotes, ...$quotesArray];
      {
        filteredQuotes = [...$addedQuotes, ...$quotesArray];
      }
    }
  }
  $$unsubscribe_quotesArray();
  $$unsubscribe_addedQuotes();
  return `


<div class="${"quotes-wrapper flex flex-col w-full bg-black svelte-ad6nk5"}"><div class="${"file-and-search-wrapper flex items-start justify-center mt-12"}"><div class="${"fileinput-wrapper ml-12"}"><input class="${"input input-primary w-48 p-0 border-2 border-indigo-600 svelte-ad6nk5"}" id="${"fileInput"}" type="${"file"}"></div>
		<div class="${"flex w-full items-center justify-start m-0 ml-8"}"><input type="${"text"}" id="${"filterTextBar"}" placeholder="${"Search quotes"}" class="${"w-5/6 input input-primary rounded-md text-lg p-4 border-2 border-indigo-600 active:border-sky-300"}"${add_attribute("value", searchTerm, 0)}></div></div>
	<div class="${"flex w-full"}">${`<button class="${"p-4 rounded bg-indigo-600 m-3"}">Add New Quote</button>`}
		<button class="${"p-4 rounded bg-indigo-600 m-3"}">Re-parse quotes file</button>
		<button class="${"p-4 rounded bg-indigo-600 m-3"}">Get dgraph quotes</button></div>

	<div class="${"quotes svelte-ad6nk5"}">${quotes.length ? `${each(filteredQuotes, (quote, i) => {
    return `${validate_component(DisplayQuotes, "DisplayQuotes").$$render($$result, { quote, i }, {}, {})}`;
  })}` : `loading...`}</div>
</div>`;
});
export { ParseQuotes as default };
