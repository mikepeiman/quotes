import { c as create_ssr_component, k as add_attribute, j as each, e as escape, b as subscribe, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { p as page } from "../../../chunks/stores-60451e84.js";
import "../../../chunks/functions-9959eb37.js";
var SingleInput_svelte_svelte_type_style_lang = "";
const css = {
  code: ".statement{line-height:1.25em;background:linear-gradient(black, black) padding-box, linear-gradient(120deg, var(--color-emerald-500) 10%, var(--color-amber-500) 25%, var(--color-rose-500) 50%, var(--color-fuchsia-500) 75%, var(--color-winterblues-400) 90%) border-box;border:3px solid transparent}.statement .author{color:var(--color-gray-300)}.fadeOut{opacity:0;transition:all 0.25s}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus{-webkit-text-fill-color:var(--color-winterblues-100);-webkit-box-shadow:0 0 0px 1000px #000 inset;transition:background-color 5000s ease-in-out 0.2s}",
  map: null
};
const SingleInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputText = "";
  $$result.css.add(css);
  {
    console.log(`\u{1F680} ~ file: index.svelte ~ line 28 ~ inputText`, inputText);
  }
  return `<div class="${"statement px-4 mx-4 flex items-center rounded-xl justify-center relative z-10"}"><div class="${"flex items-center justify-center relative w-auto"}"><input type="${"inputText"}" name="${"inputText"}" class="${"z-10 text-sm md:text-base xl:text-lg required inputText rounded-xl bg-transparent focus:shadow-none focus:ring-0 outline-none border-none rounded-none text-gray-100 w-auto"}" id="${"mce-inputText"}" placeholder="${"inputText address"}"${add_attribute("value", inputText, 0)}>
		<button type="${"submit"}" name="${"subscribe"}" value="${"Subscribe"}" id="${"mc-embedded-subscribe"}" class="${"button text-sm w-[9ch] md:text-base xl:text-lg h-6 w-auto ml-4 -mr-4 p-5 rounded-r-xl flex items-center justify-center text-center bg-gray-900 hover:bg-gray-800 text-winterblues-400"}">Add</button></div>
</div>`;
});
const Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todos } = $$props;
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  return `${$$result.head += `${$$result.title = `<title>Mike&#39;s Blog</title>`, ""}`, ""}
${todos ? `${each(todos, (todo) => {
    return `<main class="${"w-full mx-auto px-4 my-2"}"><div class="${"text-center shadow-2xl"}">
				<div class="${"bg-gray-900 m-0 p-2 rounded"}">${todo.body ? `<h1 class="${"title"}">${escape(todo.body)}</h1>` : ``}
					${todo.quoteBody ? `<h1 class="${"title"}">${escape(todo.quoteBody)}</h1>` : ``}
					${todo.author ? `<p>${escape(todo.author.name)}</p>` : ``}
					${todo.created ? `<p>${escape(todo.created)}</p>` : ``}
					${todo.id ? `<p>${escape(todo.id)}</p>` : ``}
					${todo.tags ? `<div class="${"flex justify-center mt-5 space-x-2"}">${each(todo.tags, (tag) => {
      return `<div class="${"badge badge-primary"}">${escape(tag.tag)}</div>`;
    })}
						</div>` : ``}
					<div class="${"justify-center card-actions"}"></div>
				</div></div>
		</main>`;
  })}` : ``}`;
});
const load = async ({ fetch }) => {
  const res1 = await fetch(`/todos.dgraph.json`);
  const res2 = await fetch(`/todos.supabase.json`);
  if (res1.ok || res2.ok) {
    const { dgraph_todos } = await res1.json();
    console.log(`\u{1F680} ~ file: index.svelte ~ line 16 ~ load ~ dgraph_todos`, dgraph_todos);
    const { supabase_todos } = await res2.json();
    console.log(`\u{1F680} ~ file: index.svelte ~ line 18 ~ load ~ supabase_todos`, supabase_todos);
    return { props: { dgraph_todos, supabase_todos } };
  }
};
const Todos_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log(`\u{1F680} ~ file: index.svelte ~ line 25 ~ page`, $page);
  let { todos, dgraph_todos, supabase_todos } = $$props;
  console.log(`\u{1F680} ~ file: index.svelte ~ line 29 ~ todos, dgraph_todos, supabase_todos`, todos, dgraph_todos, supabase_todos);
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  if ($$props.dgraph_todos === void 0 && $$bindings.dgraph_todos && dgraph_todos !== void 0)
    $$bindings.dgraph_todos(dgraph_todos);
  if ($$props.supabase_todos === void 0 && $$bindings.supabase_todos && supabase_todos !== void 0)
    $$bindings.supabase_todos(supabase_todos);
  $$unsubscribe_page();
  return `<div class="${"flex mt-10"}"><div class="${"flex flex-col"}"><h1 class="${"ml-4 text-4xl font-bold text-cyan-400"}">DGRAPH</h1>
		<span class="${"mb-5"}"></span>
		${validate_component(SingleInput, "SingleInput").$$render($$result, {}, {}, {})}
		<span class="${"mb-5"}"></span>
		${validate_component(Todos, "Todos").$$render($$result, { todos: dgraph_todos }, {}, {})}</div>
	<div class="${"flex flex-col"}"><h1 class="${"ml-4 text-4xl font-bold text-cyan-400"}">SUPABASE</h1>
		<span class="${"mb-5"}"></span>
		${validate_component(SingleInput, "SingleInput").$$render($$result, {}, {}, {})}
		<span class="${"mb-5"}"></span>
		${validate_component(Todos, "Todos").$$render($$result, { todos: supabase_todos }, {}, {})}</div>
</div>`;
});
export { Todos_1 as default, load };
