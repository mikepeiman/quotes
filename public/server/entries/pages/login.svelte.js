import { c as create_ssr_component, k as add_attribute } from "../../chunks/index-e675dbce.js";
import { s as supabase } from "../../chunks/supabaseClient-ef6f751e.js";
import "@supabase/supabase-js";
console.log(`\u{1F680} ~ file: login.svelte ~ line 3 ~ supabase`, supabase);
let email = "";
let password = "";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex items-center"}"><label for="${"email"}"><input type="${"text"}" class="${"rounded p-3"}" name="${"email"}" placeholder="${"email"}"${add_attribute("value", email, 0)}></label>
    <label for="${"password"}"><input type="${"text"}" class="${"rounded p-3"}" name="${"password"}" placeholder="${"password"}"${add_attribute("value", password, 0)}></label>
    <button class="${"p-3 m-3 rounded bg-electricindigo-700 text-white"}">Login</button>
    <button class="${"p-3 m-3 rounded bg-electricindigo-700 text-white"}">Signup</button></div>`;
});
export { Login as default };
