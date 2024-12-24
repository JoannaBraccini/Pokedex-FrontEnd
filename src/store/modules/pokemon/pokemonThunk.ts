import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPokemonService,
  getOnePokemonService,
} from "../../../config/services/pokemon.service";
import { showAlert } from "../../../store/modules/alert/AlertSlice";
import {
  Pokemon,
  PokemonList,
  QueryPaginationRequest,
} from "../../../config/utils/types";
import { ResponseAPI } from "../../../config/services/api.service";

export const getAllPokemonThunk = createAsyncThunk(
  "pokemon/getAll",
  async (query: QueryPaginationRequest, { dispatch }) => {
    const response: ResponseAPI<PokemonList> = await getAllPokemonService(
      query
    );

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

export const getOnePokemonThunk = createAsyncThunk(
  "pokemon/getOne",
  async (name: string, { dispatch }) => {
    const response: ResponseAPI<Pokemon> = await getOnePokemonService(name);

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
