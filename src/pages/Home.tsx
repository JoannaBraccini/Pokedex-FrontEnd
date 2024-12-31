import { Box, CircularProgress, Typography } from "@mui/material";
import { PokeTable } from "../components/PokeTable";
import ToastSnackbar from "../components/ToastSnackbar";
import { DefaultLayout } from "../config/DefaultLayout";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import bgPikachu from "/bgPikachu.jpg";
import { useEffect } from "react";
import {
  getPokemonDataThunk,
  getPokemonListThunk,
} from "../store/modules/pokemon/pokemonThunk";

export function Home() {
  const loading = useAppSelector((state) => state.pokemon.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonListThunk({ limit: 1302, offset: 0 }));
    const timer = setTimeout(() => {
      dispatch(getPokemonDataThunk({ limit: 1302, offset: 0 }));
    }, 4000);
    return () => clearTimeout(timer);
  }, [dispatch]);

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
          <CircularProgress color="error" />
          <Typography variant="button" sx={{ fontSize: 18, color: "white" }}>
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
