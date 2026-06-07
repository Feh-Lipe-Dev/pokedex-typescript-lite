import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon";
import { APIError } from "../models/CustomErrors";
import { formatarMensagemErro, formatarMensagemOk } from "../utils/textFormatters";

// URL base da PokeAPI para buscar informações de Pokémon
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Função para buscar um Pokémon por nome ou ID
export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `${BASE_URL}/${nomeOuId.toLowerCase().trim()}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      if (resposta.status === 404) {
        console.log(formatarMensagemErro(`Pokémon não encontrado: ${nomeOuId}`));
      } else {
        throw new APIError(`Erro na API: status ${resposta.status}`, resposta.status);
      }
      return null;
    }

    // Processar a resposta da API e mapear para o formato de resumo do Pokémon
    const dados = (await resposta.json()) as PokemonApiResponse;

    // Extrair os tipos do Pokémon
    const tipos: string[] = dados.types.map((item) => item.type.name);

    // Criar o objeto de resumo do Pokémon
    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos,
      altura: dados.height,
      peso: dados.weight,
    };

    console.log(formatarMensagemOk(`Pokémon encontrado: ${pokemon.nome}`));
    return pokemon;

  } catch (erro) {
    if (erro instanceof APIError) {
      console.log(formatarMensagemErro(erro.message));
    } else {
      console.log(formatarMensagemErro("Não foi possível buscar o Pokémon."));
    }
    return null;
  }
}
