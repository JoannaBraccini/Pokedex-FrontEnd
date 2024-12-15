import { Button } from "@mui/material";
import { Link, useParams } from "react-router";
import { DefaultLayout } from "../config/DefaultLayout";

export function Details() {
  // Pegando o parâmetro 'id' da URL, convertendo para número
  const { id } = useParams<{ id: string }>();
  // Convertendo o id de string para número
  const pokemonId = id ? parseInt(id, 10) : NaN;

  return (
    <DefaultLayout>
      <h1>Detalhes do Pokémon</h1>
      <p>Pokémon ID: {pokemonId}</p>
      <p>Pokémon Nome: </p>
      <p>Pokémon Tamanho: </p>
      <p>Pokémon Habilidades: </p>
      <p>Pokémon Stats: </p>
      <Link to={"/"}>
        <Button variant="contained">Voltar à tela inicial</Button>
      </Link>
    </DefaultLayout>
  );
}
