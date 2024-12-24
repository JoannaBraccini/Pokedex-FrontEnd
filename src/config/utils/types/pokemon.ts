interface Ability {
  ability: {
    name: string;
  };
}

interface Stat {
  baseStat: number;
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
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

interface PokemonSummary {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
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
  avatar: string; //home>front>default
}

export type PokedexData = Pick<PokemonData, "id" | "name" | "avatar">;

//se 'results' in response => response.results.map(p => p.name) é um getAll
//senão é um getId para detalhes: response.name...
