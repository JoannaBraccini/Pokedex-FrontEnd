import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPokemonListService,
  getPokemonDetailService,
  getPokemonDataService,
} from "../../../config/services/pokemon.service";
import { showAlert } from "../alert/AlertSlice";
import {
  Pokemon,
  PokemonData,
  QueryPaginationRequest,
} from "../../../config/utils/types";
import { ResponseAPI } from "../../../config/services/api.service";

export const getPokemonListThunk = createAsyncThunk(
  "pokemon/getList",
  async (query: QueryPaginationRequest, { dispatch }) => {
    const response = await getPokemonListService(query);

    if (!response.data) {
      dispatch(
        showAlert({
          message: response.message || "Erro ao carregar Pokémons.",
          type: "error",
        })
      );
      return null;
    }

    return response;
  }
);

export const getPokemonDataThunk = createAsyncThunk(
  "pokemon/getData",
  async (query: QueryPaginationRequest, { dispatch }) => {
    const listResponse = await getPokemonListService(query);
    const names = listResponse.data?.results;

    if (!names) {
      dispatch(
        showAlert({
          message: "Erro ao carregar dados dos Pokémons.",
          type: "error",
        })
      );
      return listResponse;
    }

    const pokemons = await Promise.all(
      names.map(async (pokemon) => {
        const response: ResponseAPI<PokemonData> = await getPokemonDataService(
          pokemon.name
        );
        if (!response.data) {
          dispatch(
            showAlert({
              message: "Erro ao carregar dados dos Pokémons.",
              type: "error",
            })
          );
          return null;
        }
        return response.data;
      })
    );

    // Filtrar os resultados nulos
    const filteredPokemons = pokemons.filter(
      (pokemon) => pokemon !== null
    ) as PokemonData[];
    console.log("filtered", filteredPokemons);

    return filteredPokemons;
  }
);

export const getPokemonDetailThunk = createAsyncThunk<
  ResponseAPI<Pokemon>,
  string
>("pokemon/getDetail", async (name: string, { dispatch }) => {
  const response: ResponseAPI<Pokemon> = await getPokemonDetailService(name);

  if (!response.data) {
    dispatch(
      showAlert({
        message: response.message || "Erro ao carregar Pokémon.",
        type: "error",
      })
    );
    return response;
  }
  return response;
});
