import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { PokedexData } from "../../utils/types";
import { HighlightOff } from "@mui/icons-material";
import { useState } from "react";

interface PokedexProps {
  open: boolean;
  handleClose: () => void;
  pokedex: PokedexData[];
}

export function Pokedex({ open, handleClose, pokedex }: PokedexProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar ao próximo Pokémon
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pokedex.length);
  };

  // Função para voltar ao Pokémon anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pokedex.length - 1 : prevIndex - 1
    );
  };

  // Pokémon atual a ser exibido
  const currentPokemon = pokedex[currentIndex];

  return (
    <Dialog open={open} onClose={handleClose}>
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <HighlightOff />
      </IconButton>
      <DialogTitle>PokéDex: ({pokedex.length} favoritos)</DialogTitle>
      <DialogContent>
        {currentPokemon && (
          <Box textAlign="center">
            <img
              src={currentPokemon.avatar}
              alt={currentPokemon.name}
              style={{ width: "150px", height: "150px", marginBottom: "16px" }}
            />
            <Typography variant="h6">
              {currentPokemon.id} -{currentPokemon.name}
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handlePrev} color="primary">
          Anterior
        </Button>
        <Button onClick={handleNext} color="primary">
          Próximo
        </Button>
        <Button onClick={handleClose} color="secondary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
