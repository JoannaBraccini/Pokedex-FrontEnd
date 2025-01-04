import { DefaultLayout } from "../config/DefaultLayout";
import bgBlack from "/bgBlack.jpeg";
import ToastSnackbar from "../components/ToastSnackbar";
import { Loading } from "../components/Loading";
import { useAppSelector } from "../store/hooks";
import { FavoriteList } from "../components/FavoriteList";

export function PokedexPage() {
  const { loading } = useAppSelector((state) => state.pokemon);

  return (
    <DefaultLayout backgroundImage={bgBlack}>
      {loading && <Loading />}
      <FavoriteList />
      <ToastSnackbar />
    </DefaultLayout>
  );
}
