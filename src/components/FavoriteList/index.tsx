import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Container,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PokedexData } from "../../config/utils/types";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getPokemonDetailThunk } from "../../store/modules/pokemon/pokemonThunk";
import { toggleFavorite } from "../../store/modules/favorites/favoritesSlice";

export function FavoriteList() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.favorite);
  const [selectedPokemon, setSelectedPokemon] = useState<PokedexData | null>(
    null
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detecta telas sm e menores

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>,
    pokemon: PokedexData
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedPokemon(pokemon);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedPokemon(null);
  };

  //Detalhes
  const handleDetails = () => {
    if (selectedPokemon) {
      dispatch(getPokemonDetailThunk(selectedPokemon.name));
      navigate("/details");
    }
  };

  // Remover
  const handleRemove = () => {
    handleCloseMenu();
    if (selectedPokemon) dispatch(toggleFavorite(selectedPokemon));
  };

  return (
    <Container>
      <ImageList
        sx={{
          width: "auto",
          height: "auto",
        }}
        cols={isSmallScreen ? 1 : 2} // Define o layout responsivo
      >
        {favorites.map((pokemon) => (
          <ImageListItem key={pokemon.id}>
            <Box
              component="img"
              srcSet={pokemon.sprites.other["official-artwork"].front_default}
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              loading="lazy"
              maxHeight={300}
              maxWidth={300}
              alignSelf="center"
            />
            <ImageListItemBar
              title={pokemon.name}
              subtitle={`ID: ${pokemon.id}`}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`menu para ${pokemon.name}`}
                  onClick={(event) => handleOpenMenu(event, pokemon)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: 1,
            borderRadius: 1,
          },
        }}
      >
        {selectedPokemon && (
          <>
            <MenuItem onClick={handleDetails}>Detalhes</MenuItem>
            <MenuItem onClick={handleRemove}>Remover</MenuItem>
          </>
        )}
      </Menu>
    </Container>
  );
}
