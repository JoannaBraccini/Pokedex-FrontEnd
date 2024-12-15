import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { Pokedex } from "../PokeTable/PokeTable";
import bgPokedex from "../../assets/bgPokedex.png";

export function PokeCard({ id, name, avatar }: Pokedex) {
  const navigate = useNavigate();

  const handleLinkClick = (id: number) => {
    navigate(`/details/${id}`);
  };
  return (
    <Card
      sx={{
        width: 300,
        height: "100%",
        ml: 5,
        p: 2,
        border: "4px solid #521605",
        backgroundColor: "#f8f7e5",
      }}
    >
      <CardMedia
        sx={{
          backgroundImage: `url(${bgPokedex})`,
          border: "2px solid #521605",
        }}
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
          sx={{
            border: "2px solid #521605",
            color: "white",
            backgroundColor: "#FD0100",
            "&:hover": { backgroundColor: "#A32B13" },
          }}
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
