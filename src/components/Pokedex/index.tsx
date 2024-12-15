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
import logo2 from "../../assets/logo2.png";
import quem from "../../assets/quem.png";

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
    <Dialog open={open} onClose={handleClose} fullWidth>
      <Box
        sx={{
          backgroundImage: `url(${logo2})`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
          height: { xs: 90, md: 150 },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            "&:hover": { color: "#e01d18" },
          }}
        >
          <HighlightOff />
        </IconButton>
      </Box>
      <DialogContent>
        {currentPokemon && (
          <Box
            sx={{
              backgroundImage: `url(${quem})`,
              backgroundSize: "cover",
              backgroundPositionY: "bottom",
              pl: { md: 3 },
              pt: { md: 1 },
            }}
          >
            <img
              src={currentPokemon.avatar}
              alt={currentPokemon.name}
              style={{
                height: "auto",
                width: "15rem",
                marginBottom: "16px",
              }}
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
          fullWidth
          variant="outlined"
          onClick={handlePrev}
          color="primary"
          sx={{
            color: "white",
            background: "linear-gradient(90deg, #ff0000,  #080808)",
            "&:hover": {
              background: "linear-gradient(90deg, #080808, #ff0000)",
            },
          }}
        >
          Anterior
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleNext}
          color="primary"
          sx={{
            color: "white",
            background: "linear-gradient(90deg, #080808, #ff0000)",
            "&:hover": {
              background: "linear-gradient(90deg, #ff0000,  #080808)",
            },
          }}
        >
          Próximo
        </Button>
      </DialogActions>
    </Dialog>
  );
}
