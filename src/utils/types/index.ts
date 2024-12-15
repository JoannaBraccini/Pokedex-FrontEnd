export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: number;
  avatar: string; //home>front>default
}

export type PokedexData = Pick<PokemonData, "id" | "name" | "avatar">;
