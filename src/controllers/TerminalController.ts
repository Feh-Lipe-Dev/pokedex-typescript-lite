import { PokemonResumo } from "../models/Pokemon";
import {
  formatarLinhaPokemon,
  formatarMensagemOk,
  formatarMensagemErro,
  formatarMensagemAviso,
} from "../utils/textFormatters";

// classe para gerenciar um catálogo de Pokémon, permitindo adicionar, listar, remover e buscar Pokémon
export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      console.log(formatarMensagemAviso(`${pokemon.nome} já está no catálogo.`));
      return;
    }

    this.pokemons.push(pokemon);
    console.log(formatarMensagemOk(`${pokemon.nome} adicionado ao catálogo.`));
  }

  listar(): void {
    if (this.pokemons.length === 0) {
      console.log(formatarMensagemAviso("[AVISO] Catálogo vazio."));
      return;
    }

    console.log("\nCatálogo atual:");
    this.pokemons.forEach((pokemon) => {
      console.log(formatarLinhaPokemon(pokemon));
    });
    console.log("");
  }

  remover(id: number): void {
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log(formatarMensagemAviso("Nenhum Pokémon encontrado com esse ID."));
      return;
    }

    const nomeRemovido = this.pokemons.find((pokemon) => pokemon.id === id)?.nome || "Pokémon";
    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log(formatarMensagemOk(`${nomeRemovido} removido do catálogo.`));
  }

  buscarPorId(id: number): PokemonResumo | undefined {
    return this.pokemons.find((pokemon) => pokemon.id === id);
  }

  todosTêmNome(): boolean {
    return this.pokemons.every((pokemon) => pokemon.nome.trim().length > 0);
  }

  calcularPesoTotal(): number {
    return this.pokemons.reduce((acumulador, pokemon) => acumulador + pokemon.peso, 0);
  }

  obterTodos(): PokemonResumo[] {
    return this.pokemons;
  }

  exibirEstatisticas(): void {
    if (this.pokemons.length === 0) {
      console.log(formatarMensagemAviso("Sem Pokémon no catálogo para calcular estatísticas."));
      return;
    }

    const pesoTotal = this.calcularPesoTotal();
    const mediaPeso = pesoTotal / this.pokemons.length;
    const todosTêmNome = this.todosTêmNome();

    console.log("\n--- Estatísticas do Catálogo ---");
    console.log(`Total de Pokémon: ${this.pokemons.length}`);
    console.log(`Peso total: ${pesoTotal}`);
    console.log(`Média de peso: ${mediaPeso.toFixed(2)}`);
    console.log(`Todos têm nome válido: ${todosTêmNome}`);
    console.log("--------------------------------\n");
  }

  exibirErro(mensagem: string): void {
    console.log(formatarMensagemErro(mensagem));
  }
}
