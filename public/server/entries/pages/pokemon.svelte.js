import { c as create_ssr_component, k as add_attribute, e as escape, j as each, v as validate_component } from "../../chunks/index-e675dbce.js";
var PokemonCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pokemon.svelte-4j24xz{margin:0.5rem;padding:0.5rem;background:rgba(0, 0, 0, 0.1)}",
  map: null
};
const PokemonCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poke } = $$props;
  if ($$props.poke === void 0 && $$bindings.poke && poke !== void 0)
    $$bindings.poke(poke);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", `/pokemon/${poke.id}`, 0)}><div class="${"pokemon hover:drop-shadow-lg svelte-4j24xz"}"><h2 class="${"uppercase text-1xl"}">${escape(poke.id)}. ${escape(poke.name)}</h2>
		<img${add_attribute("src", poke.image, 0)} alt="${""}" class="${"w-30 h-30"}"></div>
</a>`;
});
var pokemon_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-3z7ye9{font-size:3rem;font-weight:800;background:-webkit-linear-gradient(0deg, #480024 0%, #097979 25%, #79799b 50%, #790979 75%, #02004c 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}",
  map: null
};
async function load({ params }) {
  console.log(`running fetchPokemon API call`);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=898/";
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon = data.results.map((data2, index) => {
    return {
      name: data2.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  });
  return { props: { pokemon: loadedPokemon } };
}
const Pokemon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokemon } = $$props;
  let searchTerm = "";
  let filteredPokemon = [];
  if ($$props.pokemon === void 0 && $$bindings.pokemon && pokemon !== void 0)
    $$bindings.pokemon(pokemon);
  $$result.css.add(css);
  {
    {
      {
        filteredPokemon = [...pokemon];
      }
    }
  }
  return `${$$result.head += `${$$result.title = `<title>Pokemon are cool</title>`, ""}`, ""}
<div class="${"main"}"><h1 class="${"svelte-3z7ye9"}">Pokedex Listing</h1>
	<input type="${"text"}" placeholder="${"Search Pokemon"}" class="${"w-5/6 rounded-md text-lg p-4 border-2 border-grey-200"}"${add_attribute("value", searchTerm, 0)}>
	
	<div class="${"grid gap-2 md:grid-cols-8 grid-cols-4"}">${each(filteredPokemon, (poke) => {
    return `${validate_component(PokemonCard, "PokemonCard").$$render($$result, { poke }, {}, {})}`;
  })}</div>
</div>`;
});
export { Pokemon as default, load };
