/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon, PokemonData, PokemonList } from "../utils/types/pokemon";
import { QueryPaginationRequest } from "../utils/types";
import { api, ResponseAPI } from "./api.service";

export async function getPokemonListService(
  query: QueryPaginationRequest = { limit: 20, offset: 0 }
): Promise<ResponseAPI<PokemonList>> {
  const params = new URLSearchParams();

  params.set("limit", String(query.limit));
  params.set("offset", String(query.offset));

  try {
    const response = await api.get("/pokemon", { params });
    return {
      ok: response.data.ok,
      message: response.data.message || "Pokémons carregados com sucesso.",
      data: response.data.data,
    };
  } catch (error: any) {
    console.error(
      "Erro ao buscar pokémons:",
      error.response?.data || error.message
    );
    return {
      ok: error.response.data.ok,
      message:
        error.response.data.message ||
        "Não foi possível buscar a lista de pokémons.",
      data: null,
    };
  }
}

export async function getPokemonDataService(
  name: string
): Promise<ResponseAPI<PokemonData>> {
  try {
    const response = await api.get(`/pokemon/${name}`);

    const data: PokemonData = {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      abilitiesCount: response.data.abilitiesCount,
      avatar: response.data.sprites.front_default,
    };

    return {
      ok: true,
      message: "Pokémons carregados com sucesso.",
      data: data,
    };
  } catch (error: any) {
    console.error(
      "Erro ao buscar dados dos pokémons:",
      error.response?.data || error.message
    );
    return {
      ok: false,
      message: "Não foi possível buscar os dados dos pokémons.",
      data: null,
    };
  }
}

export async function getPokemonDetailService(
  name: string
): Promise<ResponseAPI<Pokemon>> {
  try {
    const response = await api.get(`/pokemon/${name}`);

    const data: Pokemon = {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      base_experience: response.data.base_experience,
      stats: response.data.stats,
      types: response.data.types,
      abilities: response.data.abilities,
      sprites: response.data.sprites.front_default,
    };

    return {
      ok: true,
      message: "Pokémon carregado com sucesso.",
      data: data,
    };
  } catch (error: any) {
    console.error(
      "Erro ao buscar detalhes do pokémon:",
      error.response?.data || error.message
    );
    return {
      ok: false,
      message: "Não foi possível buscar os detalhes do pokémon.",
      data: null,
    };
  }
}
