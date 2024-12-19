import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import { PokedexData } from "../../utils/types";
import { HighlightOff } from "@mui/icons-material";
import { useState } from "react";
import {
  buttonNextStyle,
  buttonPrevStyle,
  dialogStyle,
  closeButtonStyle,
  imgBoxStyle,
  contentBoxStyle,
  titleLeftStyle,
  titleRightStyle,
  boxRightStyle,
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
    <Dialog
      maxWidth="md"
      open={open}
      onClose={handleClose}
      fullWidth
      sx={dialogStyle}
    >
      <Container sx={{ display: "flex" }}>
        <DialogContent>
          <Box sx={contentBoxStyle}>
            {currentPokemon && (
              <Container
                component="img"
                src={currentPokemon.avatar}
                alt={currentPokemon.name}
                sx={imgBoxStyle}
              />
            )}
          </Box>
          <DialogActions>
            <IconButton onClick={handleClose} sx={closeButtonStyle}>
              <HighlightOff />
            </IconButton>
          </DialogActions>
          <Box>
            <DialogTitle variant="button" sx={titleLeftStyle}>
              {pokedex.length} favoritos
            </DialogTitle>
          </Box>
        </DialogContent>

        <DialogContent>
          <Box sx={boxRightStyle}>
            <DialogTitle variant="button" sx={titleRightStyle}>
              {currentPokemon
                ? `${currentPokemon.name}`
                : "Carregando Pokémon..."}
            </DialogTitle>
          </Box>
          <DialogActions>
            <Button
              variant="text"
              onClick={handlePrev}
              color="primary"
              sx={buttonPrevStyle}
            >
              Anterior
            </Button>
            <Button
              variant="text"
              onClick={handleNext}
              color="primary"
              sx={buttonNextStyle}
            >
              Próximo
            </Button>
          </DialogActions>
        </DialogContent>
      </Container>
    </Dialog>
  );
}
