import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { getStyle } from "./style";

interface DefaultLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
}

export function DefaultLayout({
  children,
  backgroundImage,
}: DefaultLayoutProps) {
  const style = getStyle(backgroundImage);
  return (
    <>
      <Header />
      <Box
        sx={{
          ...style,
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
