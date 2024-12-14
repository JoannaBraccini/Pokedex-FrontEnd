import { Box } from "@mui/material";
import { Header } from "../components/Header";
import bgPikachu from "../assets/bgPikachu.jpg";
import { PokeTable } from "../components/PokeTable";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${bgPikachu})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "-50px", lg: "-3rem bottom" },
          height: { xs: "91vh", lg: "90vh" },
        }}
      >
        <PokeTable />
      </Box>
      <Footer />
    </>
  );
}
/**
 * A lista de personagens deve ter:
- As informações de cada personagem: id, 
nome, tamanho;
- A imagem de cada personagem;
- Link para abrir a página de detalhes de 
cada personagem;
- Paginação.

Na página de lista, adicione uma seção 
para a Pokedex:
- A Pokedex consiste em uma lista de 
personagens favoritos.
- Crie um botão para inserir cada 
personagem na Pokedex.
- Mostrar apenas nome e imagem dos 
personagens da Pokedex.
AVALIAÇÃO
O que vamos fazer?

 */
