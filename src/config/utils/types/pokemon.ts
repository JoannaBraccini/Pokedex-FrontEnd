interface Ability {
  ability: {
    name: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}

interface Sprite {
  front_default: string;
  other: {
    "official-artwork": {
      front_default: string;
    };
    showdown: {
      front_default: string;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprite;
  base_experience: number;
  abilities: Ability[];
  stats: Stat[];
  types: Type[];
}
export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilitiesCount: number;
  sprites: Sprite;
}

export interface PokemonSummary {
  name: string;
  url: string;
}
export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
}

export type PokedexData = Pick<Pokemon, "id" | "name" | "sprites">;
