import { buscarPokemon } from "./services/PokeApiService";
import { CatalogoPokemon } from "./controllers/TerminalController";
import { formatarMensagemOk, formatarMensagemAviso } from "./utils/textFormatters";

async function main() {
    console.log("\n.........................");
    console.log(" POKEMON TYPESCRIPT LITE");
    console.log("'''''''''''''''''''''''''");
    
    // Exemplo de uso da função buscarPokemon
    console.log(" ## Buscando Pokémon por nome ou ID ##");
    console.log("'''''''''''''''''''''''''''''''''''''''\n");

    let nomeOuId = "pikachu";
    const pokemon = await buscarPokemon(nomeOuId);
    console.log(pokemon); // Saída do Pokémon encontrado (objeto PokemonResumo)
    nomeOuId = "pokemon-inexistente";
    const pokemonInexistente = await buscarPokemon(nomeOuId);
    console.log(pokemonInexistente); // Saída null, pois o Pokémon não existe

    console.log(" \nCATÁLOGO DE POKÉMON");
    console.log("''''''''''''''''''''''");

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

    if (pokemonInexistente !== null) {
        catalogo.adicionar(pokemonInexistente);
    }

    // Listar Pokémon no catálogo
    catalogo.listar();

    // Remover um Pokémon do catálogo
    catalogo.remover(25); // Remover o Pikachu (ID 25)

    // Remover um Pokémon que não existe no catálogo
    catalogo.remover(999); // ID inexistente

    // Listar novamente para verificar a remoção
    catalogo.listar();

    // buscar um Pokémon por ID
    const pokemonBuscado = catalogo.buscarPorId(4); // Buscar o Charmander (ID 4)
    console.log("Buscando Pokémon por ID...");
    if (pokemonBuscado) {
        console.log(formatarMensagemOk(`Pokémon encontrado: ${pokemonBuscado.nome}`));
    } else {
        console.log(formatarMensagemAviso("Nenhum Pokémon encontrado com esse ID."));
    }

    // Verificar se todos os Pokémon têm nome
    const todosTemNome = catalogo.todosTêmNome();
    console.log("\nVerificando se todos os Pokémon têm nome...");
    console.log(todosTemNome ? formatarMensagemOk("Todos os Pokémon têm nome.") : formatarMensagemAviso("Nem todos os Pokémon têm nome."));

    // Calcular o peso total dos Pokémon no catálogo
    const pesoTotal = catalogo.calcularPesoTotal();
    console.log("\nCalculando o peso total dos Pokémon no catálogo...");
    console.log(formatarMensagemOk(`Peso total dos Pokémon: ${pesoTotal} kg`));

    // Obter todos os Pokémon do catálogo
    const todosPokemons = catalogo.obterTodos();
    console.log("\nObtendo todos os Pokémon do catálogo...");
    console.log(todosPokemons);

    // Exibir estatísticas do catálogo
    catalogo.exibirEstatisticas();

    console.log("*execução finalizada.");
}

main();     