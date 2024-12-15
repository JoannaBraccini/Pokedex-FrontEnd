import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import { SocialMenu } from "../DrawerFooter";

export function Footer() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "rgb(0, 0, 0, 0.3)",
      }}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="social">
          <SocialMenu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          variant="button"
          noWrap
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Desenvolvido por Joanna Braccini -- Growdev
        </Typography>
        <Typography
          variant="button"
          noWrap
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          Joanna Braccini
        </Typography>
        <Copyright
          fontSize="small"
          sx={{ marginX: "5px", paddingX: "2px", paddingBottom: "2px" }}
        />
        <Typography> 2024</Typography>
      </Toolbar>
    </AppBar>
  );
}
