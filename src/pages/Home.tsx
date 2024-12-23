import { PokeTable } from "../components/PokeTable";
import ToastSnackbar from "../components/ToastSnackbar";
import { DefaultLayout } from "../config/DefaultLayout";
import bgPikachu from "/bgPikachu.jpg";

export function Home() {
  return (
    <DefaultLayout backgroundImage={bgPikachu}>
      <PokeTable />
      <ToastSnackbar />
    </DefaultLayout>
  );
}
