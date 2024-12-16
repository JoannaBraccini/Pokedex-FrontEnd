import { Button } from "@mui/material";
import { Link, useParams } from "react-router";
import { DefaultLayout } from "../config/DefaultLayout";
import bgDex from "../assets/bgDex.jpeg";
import { rows } from "../mock";

export function Details() {
  // Pegando o parâmetro 'id' da URL, convertendo para número
  const { id } = useParams<{ id: string }>();
  // Convertendo o id de string para número
  // const pokemonId = id ? parseInt(id, 10) : NaN;

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
    </DefaultLayout>
  );
}
