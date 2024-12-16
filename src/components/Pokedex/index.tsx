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
import {
  boxStyle,
  buttonNextStyle,
  buttonPrevStyle,
  contentBoxStyle,
  dialogStyle,
  closeButtonStyle,
  imgBoxStyle,
} from "./style";

interface PokedexProps {
  open: boolean;
  handleClose: () => void;
  pokedex: PokedexData[];
}

export function Pokedex({ open, handleClose, pokedex }: PokedexProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPokemon = pokedex[currentIndex];

  // Avançar ao próximo Pokémon
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pokedex.length);
  };

  // Voltar ao Pokémon anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pokedex.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth sx={dialogStyle}>
      <Box sx={boxStyle}>
        <IconButton onClick={handleClose} sx={closeButtonStyle}>
          <HighlightOff />
        </IconButton>

        <DialogContent>
          {currentPokemon && (
            <Box sx={contentBoxStyle}>
              <img
                src={currentPokemon.avatar}
                alt={currentPokemon.name}
                style={imgBoxStyle}
              />
            </Box>
          )}
          <Typography variant="h6" textAlign="center">
            {currentPokemon
              ? `É ${currentPokemon.name}!`
              : "Carregando Pokémon..."}
          </Typography>
        </DialogContent>
        <DialogTitle variant="button" textAlign="center">
          {pokedex.length} favoritos
        </DialogTitle>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handlePrev}
            color="primary"
            sx={buttonPrevStyle}
          >
            Anterior
          </Button>
          <Button
            variant="outlined"
            onClick={handleNext}
            color="primary"
            sx={buttonNextStyle}
          >
            Próximo
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
