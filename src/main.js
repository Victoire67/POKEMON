async function getPokemon(url) {
  return (await fetch(url)).json()
}
getPokemon("https://pokeapi.co/api/v2/pokemon/ditto").then(x => {
  console.log(x)
})