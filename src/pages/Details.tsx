import { DefaultLayout } from "../config/DefaultLayout";
import bgDex from "/bgDex.jpeg";
import ToastSnackbar from "../components/ToastSnackbar";
import { useAppSelector } from "../store/hooks";
import { Dashboard } from "../components/Dashboard";

const statTranslation: Record<string, string> = {
  hp: "HP",
  attack: "Ataque",
  defense: "Defesa",
  "special-attack": "Ataque Especial",
  "special-defense": "Defesa Especial",
  speed: "Velocidade",
};

export function Details() {
  const { pokemonDetail } = useAppSelector((state) => state.pokemon);

  return (
    <DefaultLayout backgroundImage={bgDex}>
      <Dashboard />
      <h1>Detalhes do Pokémon</h1>
      <p>ID: {pokemonDetail?.id}</p>
      <p>Nome: {pokemonDetail?.name}</p>
      <p>Altura: {pokemonDetail!.height * 10} cm</p>
      <p>Peso: {pokemonDetail!.weight / 100} kg</p>
      <ul>
        Habilidades:{" "}
        {pokemonDetail?.abilities.map((hab, index) => (
          <li key={index}>{hab.ability.name}</li>
        ))}
      </ul>
      <ul>
        Estatísticas:{" "}
        {pokemonDetail?.stats.map((stat, index) => (
          <li key={index}>
            {statTranslation[stat.stat.name]}: {stat.base_stat}{" "}
            {stat.effort > 0 && ` (EV: ${stat.effort})`}
          </li>
        ))}
      </ul>
      <p>Experiência Base: {pokemonDetail?.base_experience}</p>
      <ul>
        Tipos:{" "}
        {pokemonDetail?.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <img
        src={
          pokemonDetail?.sprites.other["official-artwork"]?.front_default ||
          pokemonDetail?.sprites?.front_default
        }
        alt={pokemonDetail?.name}
      />
      <ToastSnackbar />
    </DefaultLayout>
  );
}
