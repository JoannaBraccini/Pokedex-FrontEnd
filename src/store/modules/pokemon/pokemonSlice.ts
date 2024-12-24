import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "./pokemonTypes";

interface PokemonState {
  success: boolean;
  message: string;
  loading: boolean;
  pokemonList: Pokemon[];
}

const initialState: PokemonState = {
  success: false,
  message: "",
  loading: false,
  pokemonList: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
