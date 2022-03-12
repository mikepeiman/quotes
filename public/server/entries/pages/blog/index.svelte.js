import { c as create_ssr_component, j as each, k as add_attribute, e as escape, v as validate_component } from "../../../chunks/index-e675dbce.js";
import { I as Icon } from "../../../chunks/Icon-79f8c708.js";
import "../../../chunks/functions-9959eb37.js";
var Posts_svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";.post-card.svelte-8c0tcv h1.svelte-8c0tcv{font-size:1.75rem;color:var(--color-winterblues-300);line-height:2rem;padding-top:0.5rem;font-weight:700;font-family:"Vollkorn", "Josefin", "Open Sans", sans-serif;margin:0}.center > *{--gap:1rem;--mw:50rem;width:100%;max-width:var(--mw);margin-left:auto;margin-right:auto;padding-left:var(--gap);padding-right:var(--gap)}.center > .exception-1{max-width:none}.center > .exception-2{max-width:min(100%, 50rem);padding-left:0;padding-right:0}.post-tags.svelte-8c0tcv.svelte-8c0tcv{grid-area:tags}.post-tags.svelte-8c0tcv div.svelte-8c0tcv{margin-left:0px;margin-right:4px}',
  map: null
};
const Posts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `

${$$result.head += `${$$result.title = `<title>Mike&#39;s Blog</title>`, ""}`, ""}

<div class="${"flex flex-col items-center"}">${each(posts, ({ title, slug, excerpt, coverImage, date, tags }) => {
    return `<a${add_attribute("href", `/blog/${slug}`, 0)} class="${"p-1 m-6 w-full bg-gray-900 my-6 hover:bg-sky-800/[0.25] hover:scale-[1.025] transition rounded"}"><div class="${"p-1 shadow-2xl"}">
				<div class="${"post-card p-6 shadow-xl svelte-8c0tcv"}"><div class="${"font-mono"}">${escape(date)}</div>
					<h1 class="${"title text-winterblues-300 svelte-8c0tcv"}">${escape(title)}</h1>
					<p>${escape(excerpt)}</p>
					<div class="${"flex justify-start mt-5 space-x-2"}">${tags ? `<div class="${"post-tags mt-5 space-x-2 flex flex-wrap svelte-8c0tcv"}">${each(tags, (tag) => {
      return `<div class="${"px-2 py-1 m-0 my-1 rounded bg-sky-900/[0.5] text-sky-400/[0.5] svelte-8c0tcv"}">${escape(tag)}</div>`;
    })}
						</div>` : ``}</div>
				</div></div>
		</a>`;
  })}
</div>`;
});
const load = async ({ fetch }) => {
  const res = await fetch("/blog.json");
  if (res.ok) {
    const { posts } = await res.json();
    console.log(`\u{1F680} ~ file: index.svelte ~ line 7 ~ load ~ posts`, posts);
    return { props: { posts } };
  }
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  console.log(`\u{1F680} ~ file: POSTS index.svelte ~ line 15 ~ posts`, posts);
  posts.forEach((post) => {
    console.log(`\u{1F680} ~ file: index.svelte ~ line 20 ~ post`, post);
  });
  const icons = {
    fire1: "wi:fire",
    fire2: "vaadin:fire",
    fire3: "mdi:fire",
    fire4: "fa:fire",
    fire5: "fa5:fire",
    fire6: "fa5:fire-alt",
    fire7: "el:fire",
    fire8: "eva:fire",
    arrowCircle1: "bi:arrow-down-circle-fill",
    arrowCircle2: "eva:arrow-circle-down-fill",
    arrowCircleLeft2: "eva:arrow-circle-left-fill",
    home: "bx:bxs-home-heart"
  };
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `
<div class="${"center"}"><div class="${"icon-nav w-full border-b-[1px] border-amber-400/[0.5] "}">
		<a href="${"/"}" class="${"text-winterblues-700 rounded-xl self-start justify-self-start place-self-start"}"><div class="${"group relative cursor-pointer transition-all duration-400 bg-gradient-to-r hover:bg-gradient-to-r from-winterblues-400/[0] via-amber-400/[0] to-fuchsia-600/[0] hover:from-winterblues-400/[0] hover:via-rose-400/[.25] hover:to-fuchsia-600/[0.5] h-12 px-8 my-8 rounded-lg hover:transition-colors"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: icons.home,
    class: "absolute top-0 left-0 w-12 h-12 -ml-2 mb-2 transition:all duration-200 group-hover:scale-0 group-hover:text-winterblues-300 group-hover:opacity-0"
  }, {}, {})}
				${validate_component(Icon, "Icon").$$render($$result, {
    icon: icons.arrowCircleLeft2,
    class: "absolute top-0 left-0 w-12 h-12 -ml-2 mb-2 transition:all duration-200 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 text-amber-500 group-hover:text-winterblues-300 translate-x-8 group-hover:translate-x-0"
  }, {}, {})}
				<h1 class="${"w-full flex items-center justify-center h-12 text-3xl font-newsreader font-bold text-winterblues-700 group-hover:opacity-0 group-hover:h-0"}">Articles</h1>
				<h1 class="${"w-full flex items-center justify-center h-12 text-3xl font-newsreader font-bold text-winterblues-400 opacity-0 h-0 group-hover:opacity-100 group-hover:h-12 "}">Home</h1></div></a></div>
	
	<div class="${"posts flex items-center w-full justify-center"}">${validate_component(Posts, "Posts").$$render($$result, { posts }, {}, {})}</div></div>`;
});
export { Blog as default, load };
