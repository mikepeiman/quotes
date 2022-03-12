import { c as create_ssr_component, v as validate_component, e as escape, j as each } from "../../../chunks/index-e675dbce.js";
import { I as Icon } from "../../../chunks/Icon-79f8c708.js";
import "../../../chunks/functions-9959eb37.js";
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: '@charset "UTF-8";.center.svelte-eiaq6e>.svelte-eiaq6e{--gap:1rem;--mw:50rem;width:100%;max-width:var(--mw);margin-left:auto;margin-right:auto;padding-left:var(--gap);padding-right:var(--gap)}.center.svelte-eiaq6e>.exception-2.svelte-eiaq6e{max-width:min(100%, 50rem);padding-left:0;padding-right:0}#fire-gradient-1{--fire-1-offset-1:0%;--fire-1-stop-1:var(--color-yellow-300);--fire-1-offset-2:25%;--fire-1-stop-2:var(--color-amber-300);--fire-1-offset-3:60%;--fire-1-stop-3:var(--color-rose-300);--fire-1-offset-4:100%;--fire-1-stop-4:var(--color-yellow-100)}#fire-1{fill:url(#gradient-fire) #333}',
  map: null
};
const load = async ({ fetch, page: { params } }) => {
  const { slug } = params;
  const res = await fetch(`/blog/${slug}.json`);
  console.log(`\u{1F680} ~ file: [slug].svelte ~ line 5 ~ load ~ res`, res);
  if (res.ok) {
    const { post } = await res.json();
    console.log(`\u{1F680} ~ file: [slug].svelte ~ line 8 ~ load ~ post`, post);
    return { props: { post } };
  }
};
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  const { title, date, tags, article: { html }, coverImage } = post;
  const icons = {
    fire1: "wi:fire",
    fire2: "vaadin:fire",
    fire3: "mdi:fire",
    fire4: "fa:fire",
    fire5: "fa5:fire",
    fire6: "fa5:fire-alt",
    fire7: "el:fire",
    fire8: "eva:fire",
    arrowCircleDown1: "bi:arrow-down-circle-fill",
    arrowCircleDown2: "eva:arrow-circle-down-fill",
    arrowCircleLeft2: "eva:arrow-circle-left-fill",
    home: "bx:bxs-home"
  };
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Mike&#39;s Blog</title>`, ""}`, ""}

<div class="${"main center flex flex-col content-start items-center px-3 pb-3 md:px-10 md:pb-10 lg:px-20 lg:pb-20 xl:px-48 xlpb-48 svelte-eiaq6e"}"><div class="${"icon-nav exception-2 w-screen border-b-[1px] border-amber-400/[0.5] mt-4 md:mt-8 pl-8  svelte-eiaq6e"}">
		<a href="${"/blog"}" class="${"text-winterblues-700 rounded-xl self-start justify-self-start place-self-start"}"><div class="${"group relative cursor-pointer transition-all duration-400 bg-gradient-to-r hover:bg-gradient-to-r from-winterblues-400/[0] via-amber-400/[0] to-fuchsia-600/[0] hover:from-winterblues-400/[0] hover:via-rose-400/[.25] hover:to-fuchsia-600/[0.5] lg:py-4 my-8 rounded-lg hover:transition-colors"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: icons.home,
    class: "absolute top-0 lg:top-8 left-0 w-12 h-12 -ml-2 mb-2 transition:all duration-200 scale-0 group-hover:scale-0 group-hover:text-winterblues-300 group-hover:opacity-0"
  }, {}, {})}
				${validate_component(Icon, "Icon").$$render($$result, {
    icon: icons.arrowCircleLeft2,
    class: "absolute top-0 lg:top-4 xl:top-[22px] left-0 w-12 h-12 -ml-2 mb-2 transition:all duration-200 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 text-amber-500 group-hover:text-winterblues-300 translate-x-2 group-hover:translate-x-0"
  }, {}, {})}
				<h1 class="${"font-display flex items-center justify-center pl-2 pt-2 w-full font-bold text-winterblues-300 z-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-0 md:mb-1 lg:mb-2 xl:mb-3 -mt-1"}">${escape(title)}</h1></div></a>
		${tags ? `<div class="${"my-4 space-x-2 flex items-center justify-center"}">${each(tags, (tag) => {
    return `<span class="${"flex self-stretch rounded bg-winterblues-800/[0.5] text-winterblues-400/[0.75] text-xs px-1.5 py-0.5 md:text-sm md:px-2 md:py-1 xl:text-base xl:px-2.5 xl:py-1.5"}">${escape(tag)}</span>`;
  })}</div>` : ``}</div>
	<div class="${"post-title svelte-eiaq6e"}"><p class="${"text-gray-400 mb-2 font-mono text-base tracking-widest font-semibold"}">${escape(new Date(date).toDateString())}</p></div>
	

	<article class="${"blog-post text-winterblues-100 font-montserrat leading-loose md:leading-loose lg:leading-loose xl:leading-loose text-md md:text-lg lg:text-xl pb-12 mt-5 svelte-eiaq6e"}"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END -->
		
		
		<div class="${"text-8xl test pt-10 bg-gradient-to-br from-yellow-400 via-amber-700 to-rose-600 bg-clip-text flex items-center justify-center w-full"}">
			<svg style="${"width:0;height:0;position:absolute;"}" aria-hidden="${"true"}" focusable="${"false"}"><linearGradient id="${"my-cool-gradient"}" x2="${"1"}" y2="${"1"}"><stop offset="${"0%"}" stop-color="${"#447799"}"></stop><stop offset="${"50%"}" stop-color="${"#224488"}"></stop><stop offset="${"100%"}" stop-color="${"#112266"}"></stop></linearGradient></svg>

			<svg style="${"width:0;height:0;position:absolute;"}" aria-hidden="${"true"}" focusable="${"false"}"><linearGradient id="${"gradient-fire"}" x2="${"1"}" y2="${"1"}"><stop offset="${"0%"}" stop-color="${"var(--color-yellow-500)"}"></stop><stop offset="${"15%"}" stop-color="${"var(--color-warm2-700)"}"></stop><stop offset="${"50%"}" stop-color="${"var(--color-amber-400)"}"></stop><stop offset="${"35%"}" stop-color="${"var(--color-yellow-500)"}"></stop><stop offset="${"75%"}" stop-color="${"var(--color-rose-700)"}"></stop><stop offset="${"80%"}" stop-color="${"var(--color-yellow-500)"}"></stop><stop offset="${"100%"}" stop-color="${"var(--color-warm2-300)"}"></stop></linearGradient></svg>
			
			</div></article>
</div>`;
});
export { U5Bslugu5D as default, load };
