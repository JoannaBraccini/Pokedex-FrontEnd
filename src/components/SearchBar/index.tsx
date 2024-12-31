import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { showAlert } from "../../store/modules/alert/AlertSlice";
import { getPokemonDetailThunk } from "../../store/modules/pokemon/pokemonThunk";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { pokemonList } = useAppSelector((state) => state.pokemon);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (searchTerm) {
      const pokemonSearch = pokemonList?.results.find((pokemon) =>
        pokemon.name.includes(searchTerm.toLowerCase())
      );
      if (pokemonSearch) {
        dispatch(getPokemonDetailThunk(pokemonSearch.name));
      } else {
        dispatch(
          showAlert({
            message: "Nenhum pokémon encontrado com esse nome!",
            type: "error",
          })
        );
      }
    }
  };

  useEffect(() => {}, [searchTerm, pokemonList, dispatch, navigate]);

  return (
    <Search
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          handleSearch(e);
        }
      }}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "white" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="PokéBusca..."
        inputProps={{ "aria-label": "pesquisar" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Search>
  );
}
