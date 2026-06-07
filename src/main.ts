import { buscarPokemon } from "./services/PokeApiService";
//import { CatalogoPokemon } from "./controllers/TerminalController";
//import { salvarBox, carregarBox } from "./services/BoxService";

async function main() {
    
    let nomeOuId = "pikachu";
    const pokemon = await buscarPokemon(nomeOuId);
    console.log(pokemon); // Saída do Pokémon encontrado (objeto PokemonResumo)
    nomeOuId = "9999";
    const pokemonInexistente = await buscarPokemon(nomeOuId);
    console.log(pokemonInexistente); // Saída null, pois o Pokémon não existe
}

main();     