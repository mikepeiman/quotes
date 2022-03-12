import { c as create_ssr_component } from "../../chunks/index-e675dbce.js";
import "canvas-sketch-util/random.js";
/* empty css                                                                   */import "../../chunks/functions-9959eb37.js";
var metabrain_svelte_svelte_type_style_lang = "";
const css = {
  code: '#mce-responses{position:absolute;display:flex;height:auto;top:0;left:0;width:370px}#mc_embed_signup div.mce_inline_error{background-color:var(--color-rose-400) !important;width:250px;font-size:1.15rem;color:var(--color-winterblues-100) !important;font-weight:500 !important;top:-53px;position:absolute;left:-16px;text-align:left;border-radius:0;height:auto;transition:all 0.25s}#mc_embed_signup div#mce-success-response{background-color:var(--color-gray-900) !important;width:100%;padding:1rem;height:auto;font-size:1rem;color:var(--color-winterblues-100) !important;font-weight:500 !important;top:-53px;position:absolute;left:0;text-align:left;border-radius:0}#mc_embed_signup div#mce-success-response:before{content:"x";position:absolute;left:95%;top:0;width:100%;height:100%;border-radius:0}#mc_embed_signup input.mce_inline_error{border-color:var(--color-rose-400) !important}.statement{font-family:"Montserrat", sans-serif;font-weight:600;line-height:1.25em;background:linear-gradient(black, black) padding-box, linear-gradient(120deg, var(--color-emerald-500) 10%, var(--color-amber-500) 25%, var(--color-rose-500) 50%, var(--color-fuchsia-500) 75%, var(--color-winterblues-400) 90%) border-box;border-radius:0.25rem;border:2px solid transparent}.statement:focus{background-image:linear-gradient(black, black) padding-box, linear-gradient(120deg, var(--color-emerald-500) 10%, var(--color-amber-500) 25%, var(--color-rose-500) 50%, var(--color-fuchsia-500) 75%, var(--color-winterblues-400) 90%) border-box}#mc_embed_signup input:-internal-autofill-selected{background:rgba(0, 0, 0, 0) !important;color:var(--color-winterblues-100) !important}.fadeOut{opacity:0;transition:all 0.25s}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus{-webkit-text-fill-color:var(--color-winterblues-100);-webkit-box-shadow:0 0 0px 1000px #000 inset;transition:background-color 5000s ease-in-out 0.2s;caret-color:var(--color-winterblues-100)}',
  map: null
};
const Metabrain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  function fadeMceError() {
    let mceError = document.querySelectorAll(".mce_inline_error");
    console.log(`\u{1F680} ~ file: index.svelte ~ line 30 ~ fadeMceError ~ mceError`, mceError[1]);
    console.log(`\u{1F680} ~ file: index.svelte ~ line 33 ~ fadeMceError ~ email`, email);
    mceError[1].classList.add("fadeOut");
  }
  $$result.css.add(css);
  {
    email.length > 3 ? fadeMceError() : "";
  }
  {
    console.log(`\u{1F680} ~ file: index.svelte ~ line 28 ~ email`, email);
  }
  return `${``}`;
});
export { Metabrain as default };
