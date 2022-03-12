import { c as create_ssr_component, e as escape, v as validate_component, j as each } from "../../../chunks/index-e675dbce.js";
import { I as Icon } from "../../../chunks/Icon-79f8c708.js";
import "../../../chunks/functions-9959eb37.js";
const DisplayQuotes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote, i } = $$props;
  let icons = {
    edit: "akar-icons:edit",
    question: "akar-icons:question",
    upload: "ant-design:cloud-upload-outlined",
    upsert: "clarity:upload-outline-badged"
  };
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.i === void 0 && $$bindings.i && i !== void 0)
    $$bindings.i(i);
  return `<div class="${"card quote p-3 m-12 shadow-lg border border-2 border-gray-800 rounded-sm bg-gradient-to-br from-transparent via-gray-900 rounded-xl"}"><div class="${"flex justify-between"}"><div class="${"count badge bg-gray-700"}">${escape(i + 1)}</div>
		<div class="${"flex"}"><div class="${"edit-quote hover:cursor-pointer"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: icons.question,
    class: "w-8 h-8 ml-2 -mt-1"
  }, {}, {})}</div>
			<div class="${"edit-quote hover:cursor-pointer"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: icons.edit,
    class: "w-8 h-8 ml-2 -mt-1"
  }, {}, {})}</div>
			<div class="${"edit-quote hover:cursor-pointer"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: icons.upload,
    class: "w-8 h-8 ml-2 -mt-1"
  }, {}, {})}</div>
			<div class="${"edit-quote hover:cursor-pointer"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: icons.upsert,
    class: "w-8 h-8 ml-2 -mt-1"
  }, {}, {})}</div></div></div>
	<label class="${"input-group input-group-xs rounded-none"}"><span class="${"bg-slate-900 rounded-none"}">Original</span>
		<span class="${"rounded-none badge badge-warning input-xs bg-slate-900 text-sky-500 input-xs"}">${escape(quote.originalText)}</span></label>
	<h1 class="${"quote-body p-8 text-2xl"}"><span class="${"quote-mark text-sky-300"}">\u201C</span><!-- HTML_TAG_START -->${quote.quoteBody}<!-- HTML_TAG_END --><span class="${"quote-mark text-sky-300"}">\u201D</span>
		<span class="${"quote-author text-sky-300"}">~ ${escape(quote.author.name ? quote.author.name : quote.author)}</span></h1>
	<div class="${"flex flex-col justify-items-start place-items-start"}">
		<label class="${"input-group input-group-xs"}"><span class="${"bg-slate-900"}">Author</span>
			<span class="${"badge badge-success bg-slate-900 text-sky-300 input-xs"}">${escape(quote.author.name ? quote.author.name : quote.author)}</span></label>
		${quote.author.title ? `<label class="${"input-group input-group-xs"}"><span class="${"bg-slate-900"}">Title</span>
				<span class="${"badge badge-success bg-slate-900 text-sky-400 input-xs"}">${escape(quote.author.title)}</span></label>` : ``}
		
		${quote.date ? `<label class="${"input-group input-group-xs rounded-none"}"><span class="${"bg-slate-900 rounded-none"}">Date</span>
				<span class="${"rounded-none badge badge-info bg-slate-900 text-gray-400 input-xs"}">${escape(quote.date)}</span></label>` : ``}
		${quote.source ? `<label class="${"input-group input-group-xs rounded-none"}"><span class="${"bg-slate-900 rounded-none"}">Source</span>
				<span class="${"rounded-none badge badge-warning input-xs bg-slate-900 text-sky-500 input-xs"}">${escape(quote.source)}</span></label>` : ``}
		${quote.tags?.length ? `<label class="${"input-group input-group-xs rounded-none"}"><span class="${"bg-slate-900 rounded-none"}">Tags</span>
				${each(quote.tags, (tag) => {
    return `<span class="${"rounded-none badge badge-warning input-xs bg-slate-600 mx-1 text-sky-500 input-xs"}">${escape(tag)}</span>`;
  })}</label>` : ``}
		${quote.context ? `<label class="${"input-group input-group-xs rounded-none"}"><span class="${"bg-slate-900 rounded-none"}">Context</span>
				<span class="${"rounded-none badge badge-warning input-xs bg-slate-900 text-sky-500 input-xs"}">${escape(quote.context)}</span></label>` : ``}
		</div></div>`;
});
export { DisplayQuotes as default };
