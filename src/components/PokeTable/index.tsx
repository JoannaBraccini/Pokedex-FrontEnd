import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { Favorite } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { PokeTableHead } from "../TableHead";
import { PokeCard } from "../PokeCard";
import TutorialPopover from "../TutorialPopover";
import { Pokedex } from "../Pokedex";
import {
  avatarStyle,
  boxStyle,
  detailsStyle,
  favoriteStyle,
  paperStyle,
  pokedexStyle,
  searchStyle,
} from "./style";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showAlert } from "../../store/modules/alert/AlertSlice";
import { PokedexData, PokemonData } from "../../config/utils/types";
import { toggleFavorite } from "../../store/modules/favorites/favoritesSlice";
import {
  setOrder,
  setOrderBy,
  setPage,
  setRowsPerPage,
} from "../../store/modules/table/tableSlice";

//passos do tutorial
const tableSteps = [
  {
    selector: "#favorite",
    content:
      "Clique nos corações para favoritar seus Pokémons e guardá-los na PokéDex",
  },
  {
    selector: "#avatar",
    content: "Clique nas linhas para ver a foto do Pokémon selecionado",
  },
  {
    selector: "#search",
    content: "Busque Pokémons específicos",
  },
  {
    selector: "#details",
    content: "Veja os detalhes do Pokémon selecionado",
  },
  {
    selector: "#pokedex",
    content: "Clique na Pokébola para acessar seus favoritos",
  },
];
//ordenação
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof PokemonData>(
  order: Order,
  orderBy: Key
): (a: PokemonData, b: PokemonData) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy) // Se for 'desc', compara de forma decrescente
    : (a, b) => -descendingComparator(a, b, orderBy); // Se for 'asc', inverte o resultado(-) para ordem crescente
}

export function PokeTable() {
  const [manualNavigation, setManualNavigation] =
    React.useState<boolean>(false);
  const [openPokedex, setOpenPokedex] = React.useState(false);
  const [openPokeCard, setOpenPokeCard] = React.useState<PokedexData>(
    {} as PokedexData
  );
  const dispatch = useAppDispatch();
  const { pokemonData, pokemonDetail } = useAppSelector(
    (state) => state.pokemon
  );
  const favorites = useAppSelector((state) => state.favorite.favorites);
  const { order, orderBy, page, rowsPerPage } = useAppSelector(
    (state) => state.table
  );

  const handlePokedexOpen = () => {
    // Filtra os Pokémon favoritos presentes na Pokedex
    if (favorites.length === 0) {
      dispatch(
        showAlert({ message: "Nenhum Pokémon favoritado!", type: "error" })
      );
      return;
    }
    setOpenPokedex(true);
  };

  const handleClose = () => {
    setOpenPokedex(false);
  };

  const handlePokeCardClick = ({ id, name, sprites }: PokedexData) => {
    setOpenPokeCard({ id, name, sprites });
  };

  const handleFavoriteClick = ({ id, name, sprites }: PokedexData) => {
    const pokemon: PokedexData = { id, name, sprites };
    dispatch(toggleFavorite(pokemon));
  };

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof PokemonData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    dispatch(setOrder(isAsc ? "desc" : "asc"));
    dispatch(setOrderBy(property));
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setManualNavigation(true);
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pokemonData.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...pokemonData]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, pokemonData]
  );

  // Calcula em qual página o Pokémon está
  const getPokemonPage = (id: number) => {
    const index = pokemonData.findIndex((pokemon) => pokemon.id === id);
    return Math.floor(index / rowsPerPage); // página baseada no índice
  };

  // Vai até o Pokémon encontrado usando o id
  const scrollToPokemon = (id: number) => {
    const pokemonRow = document.getElementById(`pokemon-${id}`);
    if (pokemonRow) {
      pokemonRow.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  React.useEffect(() => {
    if (!manualNavigation && pokemonDetail) {
      setOpenPokeCard({
        id: pokemonDetail.id,
        name: pokemonDetail.name,
        sprites: pokemonDetail.sprites,
      });

      const pageIndex = getPokemonPage(pokemonDetail.id);
      if (pageIndex !== page) {
        // Ajusta a página ativa para onde o Pokémon está
        dispatch(setPage(pageIndex));
      } else {
        // Se o Pokémon já está na página ativa, rola até ele
        scrollToPokemon(pokemonDetail.id);
      }
    }
    //Reseta o estado
    if (manualNavigation) {
      setManualNavigation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonDetail, page]);

  return (
    <Box sx={boxStyle}>
      <PokeCard
        id={openPokeCard.id}
        name={openPokeCard.name}
        sprites={openPokeCard.sprites}
      />
      <Box id="details" sx={detailsStyle} />
      <Box id="pokedex" sx={pokedexStyle} />
      <Box id="search" sx={searchStyle} />
      <Box id="avatar" sx={avatarStyle} />
      <Box id="favorite" sx={favoriteStyle} />
      <Paper sx={paperStyle}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <PokeTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={pokemonData.length}
              handlePokedexOpen={handlePokedexOpen}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                const isFavorited = favorites.some(
                  (favPokemon) => favPokemon.name === row.name
                );
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    id={`pokemon-${row.id}`}
                    sx={{ cursor: "pointer" }}
                    onClick={() => handlePokeCardClick(row)}
                  >
                    <TableCell padding="checkbox">
                      <IconButton
                        onClick={(event) => {
                          event.stopPropagation();
                          handleFavoriteClick(row);
                        }}
                        aria-label="favorite"
                      >
                        <Favorite color={isFavorited ? "error" : "inherit"} />
                      </IconButton>
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="normal"
                      align="center"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.height * 10}</TableCell>
                    <TableCell align="center">{row.weight * 100}</TableCell>
                    <TableCell align="center">{row.abilitiesCount}</TableCell>
                    <TableCell align="center">
                      <Avatar
                        src={row.sprites.front_default}
                        alt={row.name}
                        sx={{ justifySelf: "center", height: 50, width: 50 }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}

              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          showFirstButton
          showLastButton
          component="div"
          count={pokemonData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Linhas por Página"
        />
      </Paper>
      <TutorialPopover steps={tableSteps} tutorialKey="tutorialSeen" />
      <Pokedex
        open={openPokedex}
        handleClose={handleClose}
        pokedex={favorites}
      />
    </Box>
  );
}
