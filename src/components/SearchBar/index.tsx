import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
import { SearchIconWrapper, StyledInputBase } from "./style";

export function SearchBar() {
  return (
    <Search sx={{ display: { xs: "none", sm: "flex" } }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="PokéBusca..."
        inputProps={{ "aria-label": "pesquisar" }}
      />
    </Search>
  );
}
