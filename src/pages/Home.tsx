import { PokeTable } from "../components/PokeTable";
import { DefaultLayout } from "../config/DefaultLayout";
import bgPikachu from "../assets/bgPikachu.jpg";

export function Home() {
  return (
    <DefaultLayout backgroundImage={bgPikachu}>
      <PokeTable />
    </DefaultLayout>
  );
}
