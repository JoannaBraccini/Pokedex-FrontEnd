/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon, PokemonData, PokemonList } from "../utils/types/pokemon";
import { QueryPaginationRequest } from "../utils/types";
import { api, ResponseAPI } from "./api.service";

function capitalize(name: string): string {
  return name
    .split("-") // Dividir o nome em palavras
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizar inicial de cada palavra
    .join(" "); // Juntar as palavras de volta com espaços
}

function restoreHyphen(name: string): string {
  return name.replace(" ", "-"); // Substitui o espaço de volta por hífen
}

export async function getPokemonListService(
  query: QueryPaginationRequest
): Promise<ResponseAPI<PokemonList>> {
  const params = new URLSearchParams();

  params.set("limit", String(query.limit));
  params.set("offset", String(query.offset));

  try {
    const response = await api.get("/pokemon", { params });
    return {
      ok: true,
      message: response.data.message || "Pokémons carregados com sucesso.",
      data: response.data,
    };
  } catch (error: any) {
    console.error(
      "Erro ao buscar pokémons:",
      error.response?.data || error.message
    );
    return {
      ok: false,
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
    const response = await api.get(
      `/pokemon/${restoreHyphen(name.toLowerCase())}`
    );

    const data: PokemonData = {
      id: response.data.id,
      name: capitalize(response.data.name),
      height: response.data.height,
      weight: response.data.weight,
      abilitiesCount: response.data.abilities.length,
      sprites: response.data.sprites,
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
    const response = await api.get(
      `/pokemon/${restoreHyphen(name.toLowerCase())}`
    );

    const data: Pokemon = {
      id: response.data.id,
      name: capitalize(response.data.name),
      height: response.data.height,
      weight: response.data.weight,
      base_experience: response.data.base_experience,
      stats: response.data.stats,
      types: response.data.types,
      abilities: response.data.abilities,
      sprites: response.data.sprites,
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
