import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: baseURL,
});
//https://pokeapi.co/docs/v2
//https://pokeapi.co/docs/v2#pokemon
//GET https://pokeapi.co/api/v2/pokemon/{id or name}/
