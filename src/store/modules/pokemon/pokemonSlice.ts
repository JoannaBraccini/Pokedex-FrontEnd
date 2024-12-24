import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllPokemonThunk, getOnePokemonThunk } from "./pokemonThunk";
import {
  PokedexData,
  Pokemon,
  PokemonList,
} from "../../../config/utils/types/pokemon";
import { ResponseAPI } from "../../../config/services/api.service";

interface InitialState {
  pokemonList: PokemonList | null;
  pokemon: Pokemon | null;
  favorited: PokedexData[];
  loading: boolean;
  error: string;
}

const initialState: InitialState = {
  pokemonList: null,
  pokemon: null,
  favorited: [],
  loading: false,
  error: "",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonThunk.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        getAllPokemonThunk.fulfilled,
        (state, action: PayloadAction<ResponseAPI<PokemonList>>) => {
          state.loading = false;
          if (action.payload.ok) {
            const { results, count, next, previous } =
              action.payload.data || {};
            state.pokemonList = {
              results: results || [],
              count: count || 0,
              next: next || null,
              previous: previous || null,
            };
          } else {
            state.error = action.payload.message;
          }
        }
      )
      .addCase(getAllPokemonThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erro ao buscar pokémons.";
      });

    builder
      .addCase(getOnePokemonThunk.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        getOnePokemonThunk.fulfilled,
        (state, action: PayloadAction<ResponseAPI<Pokemon>>) => {
          state.loading = false;
          if (action.payload.ok) {
            state.pokemon = action.payload.data || null;
          } else {
            state.error = action.payload.message;
          }
        }
      )
      .addCase(getOnePokemonThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Erro ao buscar detalhes do pokémon.";
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
