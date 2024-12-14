import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { style } from "./style";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Box boxShadow="0px -7px 5px 0px rgba(143, 141, 109, 0.801)" sx={style}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
