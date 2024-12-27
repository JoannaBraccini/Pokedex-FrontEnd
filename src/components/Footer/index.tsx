import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import { SocialMenu } from "../DrawerFooter";
import { appStyle, copyStyle, typoSM, typoXS } from "./style";

export function Footer() {
  return (
    <AppBar sx={appStyle}>
      <Toolbar
        sx={{
          maxWidth: "xl",
          mx: "auto",
        }}
      >
        <SocialMenu />
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="button" noWrap sx={typoSM}>
          Desenvolvido por Joanna Braccini -- Growdev
        </Typography>
        <Typography variant="button" noWrap sx={typoXS}>
          Joanna Braccini
        </Typography>
        <Copyright sx={copyStyle} />
        <Typography> 2024</Typography>
      </Toolbar>
    </AppBar>
  );
}
