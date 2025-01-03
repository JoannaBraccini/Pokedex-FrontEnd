import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { BoxStyle } from "./style";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { Stat } from "../../config/utils/types";

const statTranslation: Record<string, string> = {
  hp: "HP",
  attack: "Ataque",
  defense: "Defesa",
  "special-attack": "Ataque Especial",
  "special-defense": "Defesa Especial",
  speed: "Velocidade",
};

export function Dashboard() {
  const { pokemonDetail } = useAppSelector((state) => state.pokemon);
  const stats =
    pokemonDetail?.stats.map((stat: Stat) => ({
      stat: statTranslation[stat.stat.name],
      value: stat.base_stat,
    })) || [];

  return (
    <Box component="main" maxWidth="lg" sx={{ flexGrow: 1, p: 3 }}>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
          <Box
            sx={{
              ...BoxStyle,
              flexDirection: "row",
              backgroundColor: "#D9EEFE",
            }}
          >
            <img src={pokemonDetail?.sprites.front_default} />
            <Box>
              <Typography>ID: {pokemonDetail?.id}</Typography>
              <Typography>{pokemonDetail?.name}</Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#EFDBFF" }}>
            <ul>
              Habilidades:
              {pokemonDetail?.abilities.map((hab, index) => (
                <li key={index}>{hab.ability.name}</li>
              ))}
            </ul>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#FFF5D4" }}>
            <p>
              Altura:{" "}
              {pokemonDetail?.height && `${pokemonDetail.height * 10} cm`}
            </p>
            <p>
              Peso:{" "}
              {pokemonDetail?.weight && `${pokemonDetail.weight / 100} kg`}
            </p>
            <p>Experiência Base: {pokemonDetail?.base_experience}</p>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#FFE9DB" }}>
            <ul>
              Tipo:{" "}
              {pokemonDetail?.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <Box sx={{ ...BoxStyle, backgroundColor: "GrayText" }}>
            <Box
              component="img"
              src={
                pokemonDetail?.sprites.other["official-artwork"]
                  ?.front_default || pokemonDetail?.sprites?.front_default
              }
              alt={pokemonDetail?.name}
            />
          </Box>
        </Grid2>
        <Grid2 size={4}>
          <Box sx={{ ...BoxStyle, p: 1, backgroundColor: "#dbffdd" }}>
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={15}
              horizontal
              padding={{ top: 20, bottom: 30, left: 100, right: 30 }}
            >
              <VictoryAxis
                style={{
                  tickLabels: { fontSize: 12, padding: 5 },
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
