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
  officialArtwork: {
    frontDefault: string;
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

interface PokemonSummary {
  name: string;
  url: string;
}

export interface GetAllResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
}

//se 'results' in response => response.results.map(p => p.name) é um getAll
//senão é um getId para detalhes: response.name...
