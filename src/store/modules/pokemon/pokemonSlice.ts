import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getPokemonListThunk,
  getPokemonDetailThunk,
  getPokemonDataThunk,
} from "./pokemonThunk";
import {
  Pokemon,
  PokemonData,
  PokemonList,
} from "../../../config/utils/types/pokemon";
import { ResponseAPI } from "../../../config/services/api.service";

interface InitialState {
  pokemonList: PokemonList | null;
  pokemonData: PokemonData[];
  pokemonDetail: Pokemon | null;
  loading: boolean;
  error: string;
}

const initialState: InitialState = {
  pokemonList: null,
  pokemonData: [],
  pokemonDetail: null,
  loading: false,
  error: "",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPokemonListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getPokemonListThunk.fulfilled,
        (state, action: PayloadAction<ResponseAPI<PokemonList> | null>) => {
          state.loading = false;

          if (action.payload && action.payload.ok && action.payload.data) {
            const response = action.payload.data;
            state.pokemonList = {
              count: response.count,
              next: response.next,
              previous: response.previous,
              results: response.results,
            };
          } else {
            state.error = action.payload?.message || "Erro ao buscar pokémons.";
            state.pokemonList = null;
          }
        }
      )
      .addCase(getPokemonListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erro ao buscar pokémons.";
      });

    builder
      .addCase(getPokemonDataThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getPokemonDataThunk.fulfilled,
        (state, action: PayloadAction<PokemonData[]>) => {
          state.loading = false;

          if (!action.payload || action.payload.length === 0) {
            state.pokemonData = [];
            state.error = "Não foi possível carregar os dados dos pokémons.";
          }

          state.pokemonData = action.payload;
        }
      )
      .addCase(getPokemonDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Erro ao buscar dados do pokémon.";
      });

    builder
      .addCase(getPokemonDetailThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getPokemonDetailThunk.fulfilled,
        (state, action: PayloadAction<ResponseAPI<Pokemon>>) => {
          state.loading = false;
          console.log("payload 3", action.payload);

          if (action.payload.ok && action.payload.data) {
            state.pokemonDetail = action.payload.data;
          } else {
            state.error =
              action.payload.message || "Erro ao carregar detalhes do Pokémon.";
          }
        }
      )
      .addCase(getPokemonDetailThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Erro ao carregar detalhes do Pokémon.";
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
