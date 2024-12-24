import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CardActionArea, Dialog } from "@mui/material";
import {
  actionsStyle,
  skipButtonStyle,
  favoriteStyle,
  CardStyle,
  closeAreaStyle,
  closeButtonStyle,
  dialogStyle,
  headerStyle,
  mediaBoxStyle,
  mediaStyle,
  skipAreaStyle,
} from "./style";
import { FastForward, FastRewind, HighlightOff } from "@mui/icons-material";
import { PokedexData } from "../../store/modules/pokemon/pokemonTypes";

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
      <Card sx={CardStyle}>
        <CardHeader
          sx={headerStyle}
          titleTypographyProps={{
            fontSize: { xs: 20, sm: 30, xl: 25 },
            fontWeight: 600,
          }}
          title={`${currentPokemon?.name}`}
        />
        <CardMedia sx={mediaBoxStyle}>
          <CardMedia
            component="img"
            sx={mediaStyle}
            src={currentPokemon?.avatar}
            alt={currentPokemon?.name}
          />
        </CardMedia>
        <CardActions disableSpacing sx={actionsStyle}>
          <CardActionArea sx={closeAreaStyle}>
            <IconButton onClick={handleClose} sx={closeButtonStyle}>
              <HighlightOff />
            </IconButton>
          </CardActionArea>
          <CardActionArea sx={skipAreaStyle}>
            <IconButton
              onClick={handlePrev}
              color="primary"
              sx={skipButtonStyle}
            >
              <FastRewind />
            </IconButton>
            <IconButton
              onClick={handleNext}
              color="primary"
              sx={skipButtonStyle}
            >
              <FastForward />
            </IconButton>
          </CardActionArea>
        </CardActions>
        <CardContent>
          <Typography variant="button" sx={favoriteStyle}>
            {pokedex.length > 1
              ? `${pokedex.length}\nfavoritos`
              : `${pokedex.length}\nfavorito`}
          </Typography>
        </CardContent>
      </Card>
    </Dialog>
  );
}
