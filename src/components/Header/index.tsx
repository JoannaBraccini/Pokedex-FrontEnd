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
import { Link, useLocation, useNavigate } from "react-router";
import { AppBar } from "@mui/material";
import { SearchBar } from "../SearchBar";

const pages = [
  { name: "PokéAPI", url: "https://pokeapi.co/" },
  {
    name: "Documentação",
    url: "https://github.com/JoannaBraccini/Pokedex-FrontEnd/blob/main/README.md",
  },
  { name: "Growdev", url: "https://www.growdev.com.br/" },
];
const list = [
  { name: "Home", path: "/" },
  { name: "Detalhes", path: "/details" },
  { name: "Favoritos", path: "/pokedex" },
  { name: "Conectar", path: "/sign" },
];

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = location.pathname === "/" ? pages : list;

  const pathTranslation: Record<string, string> = {
    Detalhes: "details",
    Favoritos: "pokedex",
    Conectar: "sign",
  };
  // URLs dinâmicas
  const isActive = (path: string) => {
    // verifica o início do pathname
    return location.pathname.match(`/${pathTranslation[path]}`);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: {
    name: string;
    url?: string;
    path?: string;
  }) => {
    if (page.url) {
      // Abrir link externo
      window.open(page.url, "_blank");
    } else if (page.path) {
      // Navegação interna
      navigate(`${page.path}`);
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={appStyle}>
      <Container maxWidth="xl" sx={{ marginTop: 1 }}>
        <Toolbar disableGutters sx={{ display: "flex" }}>
          {/* menu tela grande */}
          <IconButton sx={iconStyle} onClick={() => navigate("/")}>
            <CatchingPokemon sx={pokeMdStyle} />
          </IconButton>
          <Container component="img" src={logo} sx={imgMdStyle} />
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
                <MenuItem
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page)}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: isActive(page.name) ? "#FD0100" : "inherit",
                    }}
                  >
                    {page.name}
                  </Typography>
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
                key={page.name}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  ...buttonStyle,
                  backgroundColor: isActive(page.name) ? "#ff5050" : "black",
                  color: isActive(page.name) ? "black" : "white",
                  "&:hover": {
                    color: isActive(page.name) ? "black" : "#ff5050",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {location.pathname === "/" && <SearchBar />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
