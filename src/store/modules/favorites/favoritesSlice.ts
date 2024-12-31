import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokedexData } from "../../../config/utils/types";

interface InitialState {
  favorites: PokedexData[];
}

const initialState: InitialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<PokedexData>) => {
      const pokemon = action.payload;
      const isFavorited = state.favorites.some(
        (favPokemon) => favPokemon.name === pokemon.name
      );
      if (isFavorited) {
        state.favorites = state.favorites.filter(
          (favPokemon) => favPokemon.name !== pokemon.name
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;
