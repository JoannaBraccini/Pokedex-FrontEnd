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
import { Loading } from "../components/Loading";

export function Home() {
  const { loading } = useAppSelector((state) => state.pokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonListThunk({ limit: 1302, offset: 0 }));
    const timer = setTimeout(() => {
      dispatch(getPokemonDataThunk({ limit: 1302, offset: 0 }));
    }, 4000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <DefaultLayout backgroundImage={bgPikachu}>
      {loading && <Loading />}
      <PokeTable />
      <ToastSnackbar />
    </DefaultLayout>
  );
}
