import { c as create_ssr_component, e as escape, j as each, k as add_attribute } from "../../../chunks/index-e675dbce.js";
async function load({ params }) {
  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  return { props: { pokeman } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<div class="${"pokeman flex flex-col items-center justify-center"}"><div class="${"flex flex-col"}"><h1 class="${"text-4xl text-center min-w-min my-8 uppercase bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-sky-500"}">${escape(pokeman.name)}</h1>
    <div class="${"flex flex-wrap flex-row justify-center"}">${each(pokeman.abilities, (ability) => {
    return `<span class="${"p-2 m-2 bg-gradient-to-bl from-lightBlue-700 to-purple-700 text-white"}">${escape(ability.ability.name)}</span>
            `;
  })}</div>
	<img${add_attribute("src", pokeman.sprites.other["official-artwork"].front_default, 0)}></div>


<div class="${"flex flex-wrap flex-row"}">${each(pokeman.moves, (move) => {
    return `<span class="${"p-2 m-2 bg-gradient-to-bl from-lightBlue-700 to-purple-700 text-white"}">${escape(move.move.name)}</span>`;
  })}</div>
<div class="${"flex"}"></div>
</div>`;
});
export { U5Bidu5D as default, load };
