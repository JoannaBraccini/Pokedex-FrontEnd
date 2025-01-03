import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material";
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
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#D9EEFE" }}>
            <Box>
              <ul>
                Estatísticas:
                {pokemonDetail?.stats.map((stat, index) => (
                  <li key={index}>
                    {statTranslation[stat.stat.name]}: {stat.base_stat}{" "}
                    {stat.effort > 0 && ` (EV: ${stat.effort})`}
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#EFDBFF" }}>
            {/* <ul>
              Habilidades:
              {pokemonDetail?.abilities.map((hab, index) => (
                <li key={index}>{hab.ability.name}</li>
              ))}
            </ul> */}
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box sx={{ ...BoxStyle, backgroundColor: "#FFF5D4" }}>
            <p>ID: {pokemonDetail?.id}</p>
            <p>Nome: {pokemonDetail?.name}</p>
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
        <Grid2 size={8}>
          <Box>
            <img
              src={
                pokemonDetail?.sprites.other["official-artwork"]
                  ?.front_default || pokemonDetail?.sprites?.front_default
              }
              alt={pokemonDetail?.name}
            />
          </Box>
        </Grid2>
        <Grid2 size={4}>
          <Box sx={{ backgroundColor: "white" }}>
            <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
              <VictoryAxis />
              <VictoryAxis dependentAxis />
              <VictoryBar data={stats} x="stat" y="value" />
            </VictoryChart>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
