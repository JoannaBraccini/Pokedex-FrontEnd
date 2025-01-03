import * as React from "react";
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
import logo from "/logo.png";
import {
  appStyle,
  boxMdStyle,
  boxXsStyle,
  buttonStyle,
  iconStyle,
  imgMdStyle,
  imgXsStyle,
  pokeMdStyle,
  pokeXsStyle,
} from "./style.ts";
import { Link, useLocation } from "react-router";
import { AppBar } from "@mui/material";
import { SearchBar } from "../SearchBar";

const pages = ["PokéAPI", "Documentação", "Growdev"];
const list = ["Detalhes", "Favoritos", "Conectar"];

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const location = useLocation();
  const menuItems = location.pathname === "/" ? pages : list;

  const pathTranslation: Record<string, string> = {
    Detalhes: "details",
    Favoritos: "pokedex",
    Conectar: "sign",
  };
  // URLs dinâmicas
  const isActive = (path: string) => {
    // verifica o início do pathname
    return location.pathname.startsWith(`/${pathTranslation[path]}`);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={appStyle}>
      <Container maxWidth="xl" sx={{ marginTop: 1 }}>
        <Toolbar disableGutters sx={{ display: "flex" }}>
          {/* menu tela grande */}
          <CatchingPokemon sx={pokeMdStyle} />
          <Link to="/">
            <Container component="img" src={logo} sx={imgMdStyle} />
          </Link>
          {/* menu tela pequena */}
          <Box sx={boxXsStyle}>
            <Tooltip title="Menu">
              <IconButton
                size="large"
                aria-label="menu-pop"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={iconStyle}
                onClick={handleOpenNavMenu}
              >
                <CatchingPokemon sx={pokeXsStyle} />
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
              {menuItems.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <Container component="img" src={logo} sx={imgXsStyle} />
          </Link>
          <Box sx={boxMdStyle}>
            {menuItems.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  ...buttonStyle,
                  backgroundColor: isActive(page) ? "#ff5050" : "black",
                  color: isActive(page) ? "black" : "white",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {location.pathname === "/" && <SearchBar />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
