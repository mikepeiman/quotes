import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-e675dbce.js";
import Sketch02 from "./sketch02.svelte.js";
import Sketch03 from "./sketch03.svelte.js";
import Sketch04 from "./sketch04.svelte.js";
import Sketch01 from "./sketch01.svelte.js";
import Sketch05 from "./sketch05.svelte.js";
import Sketch06 from "./sketch06.svelte.js";
import Sketch07 from "./sketch07.svelte.js";
import Sketch08 from "./sketch08.svelte.js";
import Sketch09 from "./sketch09.svelte.js";
import "../../../chunks/CanvasSketchEditor-c9dcdbb0.js";
import "canvas-sketch";
/* empty css                                                             */import "../../../chunks/stores-60451e84.js";
import "../../../chunks/Slider-62275319.js";
import "../../../chunks/ColorInput-9254f400.js";
import "canvas-sketch-util/color.js";
/* empty css                                                                 */import "../../../chunks/OptionSelect-2d180e6a.js";
/* empty css                                                                   *//* empty css                                                                */import "../../../chunks/Checkbox-import-681d2216.js";
import "../../../chunks/index-3186a33b.js";
import "../../../chunks/index-5b1f353a.js";
import "canvas-sketch-util/random.js";
import "canvas-sketch-util/math.js";
import "../../../chunks/Checkbox-4267efc8.js";
/* empty css                                                               */import "../../../chunks/CanvasManager-fac1f7b4.js";
import "../../../chunks/supabaseClient-ef6f751e.js";
import "@supabase/supabase-js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-wk9h2l.svelte-wk9h2l{grid-area:main;display:grid;max-width:100%;grid-template-columns:repeat(auto-fit, minmax(16rem, 1fr))}.main.svelte-wk9h2l a.svelte-wk9h2l{align-self:flex-start}h1.svelte-wk9h2l.svelte-wk9h2l{font-size:3rem;font-weight:800}",
  map: null
};
const Creative = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>MetaBrain: Your Life OS</title>`, ""}`, ""}

<div class="${"title flex flex-col items-center p-6"}"><h1 class="${"svelte-wk9h2l"}">Creative coding</h1>
	<p>Sketches and animations</p></div>


<div class="${"main justify-items-center svelte-wk9h2l"}"><a href="${"/creative/sketch01"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch01, "Sketch01").$$render($$result, { hidePanel: "true" }, {}, {})}</a>
	<a href="${"/creative/sketch02"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch02, "Sketch02").$$render($$result, { hidePanel: "true" }, {}, {})}</a>
	<a href="${"/creative/sketch03"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch03, "Sketch03").$$render($$result, { hidePanel: "true" }, {}, {})}</a>
	<a href="${"/creative/sketch04"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch04, "Sketch04").$$render($$result, { hidePanel: "true" }, {}, {})}</a>
	<a href="${"/creative/sketch05"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch05, "Sketch05").$$render($$result, { hidePanel: "true" }, {}, {})}</a>
	<a href="${"/creative/sketch06"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch06, "Sketch06").$$render($$result, { hidePanel: "true" }, {}, {})}</a>
	<a href="${"/creative/sketch07"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch07, "Sketch07").$$render($$result, { hidePanel: "true" }, {}, {})}</a>
	<a href="${"/creative/sketch08"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch08, "Sketch08").$$render($$result, { hidePanel: "true" }, {}, {})}</a>
	<a href="${"/creative/sketch09"}" class="${"svelte-wk9h2l"}">${validate_component(Sketch09, "Sketch09").$$render($$result, { hidePanel: "true" }, {}, {})}</a></div>
`;
});
export { Creative as default };
