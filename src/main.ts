import { buscarPokemon } from "./services/PokeApiService";
import { CatalogoPokemon } from "./controllers/TerminalController";
//import { salvarBox, carregarBox } from "./services/BoxService";

async function main() {
    
    // Exemplo de uso da função buscarPokemon
    let nomeOuId = "pikachu";
    const pokemon = await buscarPokemon(nomeOuId);
    console.log(pokemon); // Saída do Pokémon encontrado (objeto PokemonResumo)
    nomeOuId = "9999";
    const pokemonInexistente = await buscarPokemon(nomeOuId);
    console.log(pokemonInexistente); // Saída null, pois o Pokémon não existe

    // Exemplo de uso da classe CatalogoPokemon
    const catalogo = new CatalogoPokemon();

    // Exemplo de uso dos métodos da classe CatalogoPokemon
    // Adicionar Pokémon ao catálogo
    const pikachu = await buscarPokemon("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }

    const charmander = await buscarPokemon("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander); 
    }

    const bulbasaur = await buscarPokemon("bulbasaur");
    if (bulbasaur !== null) {
        catalogo.adicionar(bulbasaur);
    }

    // adicionar um Pokémon que já existe no catálogo
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }

    const zapdos = await buscarPokemon("zapdos");
    if (zapdos !== null) {
        catalogo.adicionar(zapdos);
    }

    // Listar Pokémon no catálogo
    catalogo.listar();

    // Remover um Pokémon do catálogo
    catalogo.remover(25); // Remover o Pikachu (ID 25)

    // Listar novamente para verificar a remoção
    catalogo.listar();

}

main();     