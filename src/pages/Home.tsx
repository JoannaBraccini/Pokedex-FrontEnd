import { Container, Typography } from "@mui/material";
import { PokeButton } from "../components/ErrorPage";
import { PokeTable } from "../components/PokeTable";
import ToastSnackbar from "../components/ToastSnackbar";
import { DefaultLayout } from "../config/DefaultLayout";
import { useAppSelector } from "../store/hooks";
import bgPikachu from "/bgPikachu.jpg";

export function Home() {
  const loading = useAppSelector((state) => state.pokemon);
  return (
    // <>
    //   {loading ? (
    //     <Container
    //       sx={{
    //         width: "100%",
    //         height: "100vh",
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         gap: 6,
    //       }}
    //     >
    //       <Typography variant="h3">Aguarde...</Typography>
    //       <PokeButton />
    //     </Container>
    //   ) : (
    <DefaultLayout backgroundImage={bgPikachu}>
      <PokeTable />
      <ToastSnackbar />
    </DefaultLayout>
    //   )}
    // </>
  );
}
