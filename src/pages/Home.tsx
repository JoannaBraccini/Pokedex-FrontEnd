import { Box, CircularProgress, Typography } from "@mui/material";
import { PokeTable } from "../components/PokeTable";
import ToastSnackbar from "../components/ToastSnackbar";
import { DefaultLayout } from "../config/DefaultLayout";
import { useAppSelector } from "../store/hooks";
import bgPikachu from "/bgPikachu.jpg";

export function Home() {
  const loading = useAppSelector((state) => state.pokemon.loading);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
          <Typography variant="button" sx={{ fontSize: 18 }}>
            Aguarde...
          </Typography>
        </Box>
      ) : (
        <DefaultLayout backgroundImage={bgPikachu}>
          <PokeTable />
          <ToastSnackbar />
        </DefaultLayout>
      )}
    </>
  );
}
