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
    console.log(response);

    if (!response.ok) {
      dispatch(
        showAlert({
          message: response.message || "Erro ao carregar Pokémons.",
          type: "error",
        })
      );
    }
    return response;
  }
);

export const getPokemonDataThunk = createAsyncThunk(
  "pokemon/getData",
  async (pokemonList: { name: string }[], { dispatch }) => {
    const pokemons = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const response: ResponseAPI<PokemonData> = await getPokemonDataService(
          pokemon.name
        );
        if (!response.ok) {
          dispatch(
            showAlert({
              message: "Erro ao carregar dados dos Pokémons.",
              type: "error",
            })
          );
          return null;
        }
        console.log("response.data", response.data);

        return response.data;
      })
    );
    const validPokemons: PokemonData[] = pokemons.filter(
      (pokemon): pokemon is PokemonData => pokemon !== null
    );

    console.log("validPokemons", validPokemons);
    return validPokemons;
  }
);

export const getPokemonDetailThunk = createAsyncThunk(
  "pokemon/getDetail",
  async (name: string, { dispatch }) => {
    const response: ResponseAPI<Pokemon> = await getPokemonDetailService(name);

    if (!response.ok) {
      dispatch(
        showAlert({
          message: response.message || "Erro ao carregar Pokémon.",
          type: "error",
        })
      );
    }
    return response;
  }
);
