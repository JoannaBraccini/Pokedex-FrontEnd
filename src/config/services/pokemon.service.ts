/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon, PokemonList } from "../utils/types/pokemon";
import { QueryPaginationRequest } from "../utils/types";
import { api, ResponseAPI } from "./api.service";

export async function getAllPokemonService(
  query: QueryPaginationRequest = { limit: 20, offset: 0 }
): Promise<ResponseAPI<PokemonList>> {
  const params = new URLSearchParams();

  params.set("limit", String(query.limit));
  params.set("offset", String(query.offset));

  try {
    const response = await api.get("/pokemon", { params });
    return {
      ok: true,
      message: "Pokémons carregados com sucesso.",
      data: response.data,
    };
  } catch (error: any) {
    console.error(
      "Erro ao buscar pokémons:",
      error.response?.data || error.message
    );
    return {
      ok: false,
      message: "Não foi possível buscar a lista de pokémons.",
    };
  }
}

export async function getOnePokemonService(
  name: string
): Promise<ResponseAPI<Pokemon>> {
  try {
    const response = await api.get(`/pokemon/${name}`);

    return {
      ok: true,
      message: "Pokémon carregado com sucesso.",
      data: response.data,
    };
  } catch (error: any) {
    console.error(
      "Erro ao buscar pokémons:",
      error.response?.data || error.message
    );
    return {
      ok: false,
      message: "Não foi possível buscar os detalhes do pokémon.",
    };
  }
}
