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
    navigate(`/details/${id}`);
  };
  return (
    <Card sx={cardStyle}>
      <CardMedia
        sx={cardMediaStyle}
        component="img"
        alt={name}
        height={160}
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
          {id} - {name}
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
