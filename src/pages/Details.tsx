import { Button } from "@mui/material";
import { Link, useParams } from "react-router";
import { DefaultLayout } from "../config/DefaultLayout";
import bgDex from "/bgDex.jpeg";
import { rows } from "../mock";
import ToastSnackbar from "../components/ToastSnackbar";

export function Details() {
  const { id } = useParams<{ id: string }>();

  const pokemon = rows.find((p) => p.id === Number(id));

  return (
    <DefaultLayout backgroundImage={bgDex}>
      <h1>Detalhes do Pokémon</h1>
      <p>ID: {id}</p>
      <p>Nome: {pokemon?.name}</p>
      <p>Altura: {pokemon?.height}</p>
      <p>Peso: {pokemon?.weight}</p>
      <p>Habilidades:{pokemon?.abilities} </p>
      <p>Pokémon Stats: </p>
      <Link to={"/"}>
        <Button variant="contained">Voltar à tela inicial</Button>
      </Link>
      <ToastSnackbar />
    </DefaultLayout>
  );
}
