import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Container,
  Grid2,
} from "@mui/material";
import { PokedexData } from "../../utils/types";
import { FastForward, FastRewind, HighlightOff } from "@mui/icons-material";
import { useState } from "react";
import {
  buttonNextStyle,
  buttonPrevStyle,
  dialogStyle,
  closeButtonStyle,
  imgBoxStyle,
  contentBoxStyle,
  favoriteTextStyle,
  nameTextStyle,
  DialogActionsStyle,
  DialogContentStyle,
  boxButtonsStyle,
  boxCloseStyle,
} from "./style";

interface PokedexProps {
  open: boolean;
  handleClose: () => void;
  pokedex: PokedexData[];
}

export function Pokedex2({ open, handleClose, pokedex }: PokedexProps) {
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
      <Grid2 container sx={{ display: "flex", height: "100%" }}>
        <DialogContent sx={DialogContentStyle}>
          <DialogTitle variant="button" sx={nameTextStyle}>
            {currentPokemon
              ? `${currentPokemon.name}`
              : "Carregando Pokémon..."}
          </DialogTitle>

          <Grid2 size={12} sx={contentBoxStyle}>
            {currentPokemon && (
              <Container
                component="img"
                src={currentPokemon.avatar}
                alt={currentPokemon.name}
                sx={imgBoxStyle}
              />
            )}
          </Grid2>

          <DialogActions sx={{ width: "100%" }}>
            <Grid2 container sx={DialogActionsStyle}>
              <Grid2 size={6} sx={boxCloseStyle}>
                <IconButton onClick={handleClose} sx={closeButtonStyle}>
                  <HighlightOff />
                </IconButton>
              </Grid2>

              <Grid2 size={6} sx={boxButtonsStyle}>
                <IconButton
                  onClick={handlePrev}
                  color="primary"
                  sx={buttonPrevStyle}
                >
                  <FastRewind />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  color="primary"
                  sx={buttonNextStyle}
                >
                  <FastForward />
                </IconButton>
              </Grid2>
            </Grid2>
          </DialogActions>

          <DialogTitle variant="button" sx={favoriteTextStyle}>
            {pokedex.length > 1
              ? `${pokedex.length}\nfavoritos`
              : `${pokedex.length}\nfavorito`}
          </DialogTitle>
        </DialogContent>
      </Grid2>
    </Dialog>
  );
}
