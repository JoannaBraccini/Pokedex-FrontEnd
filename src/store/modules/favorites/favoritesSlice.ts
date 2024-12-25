import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  favorites: string[];
}

const initialState: InitialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const isFavorited = state.favorites.includes(name);
      if (isFavorited) {
        state.favorites = state.favorites.filter((favName) => favName !== name);
      } else {
        state.favorites.push(name);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;
