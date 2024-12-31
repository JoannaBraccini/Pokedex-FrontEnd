import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { buttonStyle, cardMediaStyle, cardStyle } from "./style";
import { useAppDispatch } from "../../store/hooks";
import { showAlert } from "../../store/modules/alert/AlertSlice";
import { PokedexData } from "../../config/utils/types";
import { getPokemonDetailThunk } from "../../store/modules/pokemon/pokemonThunk";

export function PokeCard({ id, name, avatar }: PokedexData) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLinkClick = (id: number) => {
    if (!id) {
      dispatch(
        showAlert({
          message: "Escolha um Pokémon na lista!",
          type: "warning",
        })
      );
      return;
    }
    dispatch(getPokemonDetailThunk(name));
    navigate(`/details/${name}`);
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        sx={cardMediaStyle}
        component="img"
        alt={name}
        image={avatar}
      />
      <CardContent>
        <Typography
          textAlign={"center"}
          gutterBottom
          variant="h5"
          fontWeight={600}
          component="div"
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={buttonStyle}
          fullWidth
          size="small"
          onClick={() => handleLinkClick(id)}
        >
          Ver detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
