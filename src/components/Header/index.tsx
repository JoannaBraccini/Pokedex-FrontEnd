import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { CatchingPokemon } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import { SearchBar } from "../SearchBar";
import bgPokebola from "../../assets/bgPokebola.jpeg";

const pages = ["Products", "Pricing", "Blog"];

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: `url(${bgPokebola})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* menu tela grande */}
          <CatchingPokemon
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          />
          <Container
            component="img"
            src={logo}
            sx={{
              mr: 1,
              mb: 1,
              height: "70px",
              width: "auto",
              display: { xs: "none", md: "flex" },
            }}
          ></Container>
          {/* menu tela pequena */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Menu">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <CatchingPokemon sx={{ display: { xs: "flex", md: "none" } }} />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Container
            component="img"
            src={logo}
            sx={{
              pl: 0,
              mr: 2,
              mb: 1,
              height: "70px",
              width: "auto",
              display: { xs: "flex", md: "none" },
            }}
          ></Container>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
