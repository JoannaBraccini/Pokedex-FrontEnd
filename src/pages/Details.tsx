import { Button } from "@mui/material";
import { Link } from "react-router";
import { DefaultLayout } from "../config/DefaultLayout";
import bgDex from "/bgDex.jpeg";
import ToastSnackbar from "../components/ToastSnackbar";
import { useAppSelector } from "../store/hooks";

export function Details() {
  const { pokemonDetail } = useAppSelector((state) => state.pokemon);

  return (
    <DefaultLayout backgroundImage={bgDex}>
      <h1>Detalhes do Pokémon</h1>
      <p>ID: {pokemonDetail?.id}</p>
      <p>Nome: {pokemonDetail?.name}</p>
      <p>Altura: {pokemonDetail?.height}</p>
      <p>Peso: {pokemonDetail?.weight}</p>
      <ul>
        Habilidades:
        {pokemonDetail?.abilities.map((hab) => `<il>${hab.ability}</il>`)}
      </ul>
      <ul>
        Pokémon Stats:{" "}
        {pokemonDetail?.stats.map(
          (stat) =>
            `<il>${stat.stat}</il><il>${stat.baseStat}</il><il>${stat.effort}</il>`
        )}
      </ul>
      <p>Experiência Base: {pokemonDetail?.base_experience}</p>
      <ul>
        Tipos: {pokemonDetail?.types.map((type) => `<il>${type.type}</il>`)}
      </ul>
      <img
        src={pokemonDetail?.sprites.other["official-artwork"].front_default}
      />
      <Link to={"/"}>
        <Button variant="contained">Voltar à tela inicial</Button>
      </Link>
      <ToastSnackbar />
    </DefaultLayout>
  );
}
