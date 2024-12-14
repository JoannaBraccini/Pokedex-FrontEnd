import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

export function Footer() {
  function socialClick() {
    //openModalSocial
  }
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "rgb(0, 0, 0, 0.3)" }}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="social" onClick={socialClick}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          variant="button"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Desenvolvido por Joanna Braccini -- Growdev
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
