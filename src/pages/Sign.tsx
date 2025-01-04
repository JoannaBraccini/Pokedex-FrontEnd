import bgPurple from "/bgPurple.jpg";
import ToastSnackbar from "../components/ToastSnackbar";
import { Loading } from "../components/Loading";
import { useAppSelector } from "../store/hooks";
import { Container } from "@mui/material";

export function Sign() {
  const { loading } = useAppSelector((state) => state.pokemon);

  return (
    <Container sx={{ backgroundImage: `url(${bgPurple})` }}>
      {loading && <Loading />}
      <ToastSnackbar />
    </Container>
  );
}
