import { CssBaseline, GlobalStyles, CSSObject } from "@mui/material";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

const styles: Record<string, CSSObject> = {
  "*": {
    fontFamily: "Poppins, sans-serif",
  },
};
export function GlobalStyle() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />;
    </>
  );
}
