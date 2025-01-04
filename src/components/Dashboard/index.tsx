import Box from "@mui/material/Box";
import {
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { BoxStyle } from "./style";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { PokedexData, Stat } from "../../config/utils/types";
import { useEffect } from "react";
import { Favorite } from "@mui/icons-material";
import { toggleFavorite } from "../../store/modules/favorites/favoritesSlice";

const statTranslation: Record<string, string> = {
  hp: "HP",
  attack: "Ataque",
  defense: "Defesa",
  "special-attack": "Ataque Especial",
  "special-defense": "Defesa Especial",
  speed: "Velocidade",
};

export function Dashboard() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite.favorites);
  const { pokemonDetail } = useAppSelector((state) => state.pokemon);
  const stats =
    pokemonDetail?.stats.map((stat: Stat) => ({
      stat: statTranslation[stat.stat.name],
      value: stat.base_stat,
    })) || [];

  const isFavorited = favorites.some(
    (favPokemon) => favPokemon.name === pokemonDetail?.name
  );

  const handleFavorite = () => {
    if (pokemonDetail) {
      const pokemon: PokedexData = {
        id: pokemonDetail.id,
        name: pokemonDetail.name,
        sprites: pokemonDetail.sprites,
      };
      dispatch(toggleFavorite(pokemon));
    }
  };

  useEffect(() => {}, [pokemonDetail]);

  return (
    <Box component="main" maxWidth="lg" sx={{ flexGrow: 1, p: 3 }}>
      <Grid2 container width={{ xs: "88vw", sm: "95vw" }} spacing={3}>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box
            sx={{
              ...BoxStyle,
              flexDirection: "row",
              gap: 1,
              backgroundColor: "#D9EEFE",
            }}
          >
            <Box
              component="img"
              height={90}
              mr={4}
              src={pokemonDetail?.sprites.other.showdown.front_default}
            />
            <Box>
              <Typography variant="button">ID: {pokemonDetail?.id}</Typography>
              <Typography>{pokemonDetail?.name}</Typography>
            </Box>
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                cursor: "pointer",
                zIndex: 10,
              }}
              onClick={handleFavorite}
            >
              <Favorite color={isFavorited ? "error" : "inherit"} />
            </IconButton>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#FFF5D4" }}>
            <Typography variant="button">
              Altura:{" "}
              {pokemonDetail?.height && `${pokemonDetail.height * 10} cm`}
            </Typography>
            <Typography variant="button">
              Peso:{" "}
              {pokemonDetail?.weight && `${pokemonDetail.weight / 100} kg`}
            </Typography>
            <Typography variant="button">
              Experiência Base: {pokemonDetail?.base_experience}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#FFE9DB" }}>
            <Typography variant="button" fontSize={16}>
              Tipo:
            </Typography>
            <List>
              {pokemonDetail?.types.map((type, index) => (
                <ListItem key={index} sx={{ py: 0 }}>
                  <ListItemText
                    slotProps={{ primary: { variant: "button" } }}
                    primary={type.type.name}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#EFDBFF" }}>
            <Typography variant="button" fontSize={16}>
              Habilidades:
            </Typography>
            <List>
              {pokemonDetail?.abilities.map((hab, index) => (
                <ListItem key={index} sx={{ py: 0 }}>
                  <ListItemText
                    slotProps={{ primary: { variant: "button" } }}
                    primary={hab.ability.name}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "transparent" }}>
            <Box
              component="img"
              width={{ lg: "110%" }}
              maxWidth={{ xs: "130%" }}
              src={
                pokemonDetail?.sprites.other["official-artwork"]
                  ?.front_default || pokemonDetail?.sprites?.front_default
              }
              alt={pokemonDetail?.name}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box sx={{ ...BoxStyle, p: 1, backgroundColor: "#DBFFDD" }}>
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={15}
              horizontal
              padding={{ top: 20, bottom: 30, left: 100, right: 30 }}
            >
              <VictoryAxis
                style={{
                  tickLabels: { fontSize: 13, padding: 1 },
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  tickLabels: { fontSize: 12, padding: 5 },
                }}
              />
              <VictoryBar
                data={stats}
                x="stat"
                y="value"
                style={{
                  data: { fill: "#9b1f00", width: 20 },
                }}
                labels={({ datum }) => datum.value} // Adiciona o valor como label
              />
            </VictoryChart>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
