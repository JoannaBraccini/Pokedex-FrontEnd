import { useParams } from "react-router";

export function Details() {
  // Pegando o parâmetro 'id' da URL, convertendo para número
  const { id } = useParams<{ id: string }>();
  // Convertendo o id de string para número
  const pokemonId = id ? parseInt(id, 10) : NaN;

  return (
    <div>
      <h1>Detalhes do Pokémon</h1>
      <p>Pokémon ID: {pokemonId}</p>
      <p>Pokémon Nome: </p>
      <p>Pokémon Tamanho: </p>
      <p>Pokémon Habilidades: </p>
      <p>Pokémon Stats: </p>
      <button>Voltar à tela inicial</button>
    </div>
  );
}
