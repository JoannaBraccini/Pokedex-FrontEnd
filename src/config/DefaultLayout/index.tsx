import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { style } from "./style";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Box sx={style}>{children}</Box>
      <Footer />
    </>
  );
}
