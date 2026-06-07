import { PokemonResumo } from "../models/Pokemon";

// formatar as informações de um Pokémon em uma linha de texto
export function formatarLinhaPokemon(pokemon: PokemonResumo): string {
  return `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`;
}

// formatar uma mensagem de sucesso, erro ou aviso
export function formatarMensagemOk(mensagem: string): string {
  return `[OK] ${mensagem}`;
}

// formatar uma mensagem de erro
export function formatarMensagemErro(mensagem: string): string {
  return `[ERRO] ${mensagem}`;
}

// formatar uma mensagem de aviso
export function formatarMensagemAviso(mensagem: string): string {
  return `[AVISO] ${mensagem}`;
}

// formatar uma lista de tipos de Pokémon em uma string legível
export function formatarTipos(tipos: string[]): string {
  return tipos.join(", ");
}
