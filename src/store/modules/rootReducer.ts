import { combineReducers } from "@reduxjs/toolkit";
import { alertReducer } from "./alert/AlertSlice";
import { pokemonReducer } from "./pokemon/pokemonSlice";
import { favoriteReducer } from "./favorites/favoritesSlice";

export const rootReducer = combineReducers({
  alert: alertReducer,
  pokemon: pokemonReducer,
  favorite: favoriteReducer,
});
