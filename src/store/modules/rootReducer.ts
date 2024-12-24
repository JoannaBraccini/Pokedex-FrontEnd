import { combineReducers } from "@reduxjs/toolkit";
import { alertReducer } from "./alert/AlertSlice";
import { pokemonReducer } from "./pokemon/pokemonSlice";

export const rootReducer = combineReducers({
  alert: alertReducer,
  pokemon: pokemonReducer,
});
