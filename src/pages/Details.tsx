import { DefaultLayout } from "../config/DefaultLayout";
import bgDex from "/bgDex.jpeg";
import ToastSnackbar from "../components/ToastSnackbar";
import { Dashboard } from "../components/Dashboard";
import { Loading } from "../components/Loading";
import { useAppSelector } from "../store/hooks";

export function Details() {
  const { loading } = useAppSelector((state) => state.pokemon);

  return (
    <DefaultLayout backgroundImage={bgDex}>
      {loading && <Loading />}
      <Dashboard />
      <ToastSnackbar />
    </DefaultLayout>
  );
}
