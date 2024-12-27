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
        state.error = "";
      })
      .addCase(getPokemonListThunk.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);

        if (action.payload.ok && action.payload.data) {
          state.pokemonList = action.payload.data;
        } else {
          state.error = action.payload.message || "Erro ao buscar pokémons.";
        }
      })
      .addCase(getPokemonListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erro ao buscar pokémons.";
      });

    builder
      .addCase(getPokemonDataThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemonDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);

        // const { data } = action.payload;
        // if (data) {
        //   state.pokemonData = data;
        // } else {
        //   state.error = "Não foi possível carregar os dados dos pokémons.";
        // }
      })
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
