async function get({ params }) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=898/";
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.results.map((data2, index) => {
    return {
      name: data2.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  });
  return {
    status: 200,
    body: pokemon
  };
}
export { get };
