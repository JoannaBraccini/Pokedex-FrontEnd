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
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof PokemonData>("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [pokedex, setPokedex] = React.useState<PokedexData[]>([]);
  const [openPokedex, setOpenPokedex] = React.useState(false);
  const [showPokemon, setShowPokemon] = React.useState<PokedexData>(
    {} as PokedexData
  );
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state.pokemonList);
  const favorites = useAppSelector((state) => state.favorites);

  const handlePokedexOpen = () => {
    // Filtra os Pokémon favoritos presentes na Pokedex
    if (favorites.length === 0) {
      dispatch(
        showAlert({ message: "Nenhum Pokémon favoritado!", type: "error" })
      );
      return;
    }

    setPokedex(favorites);
    setOpenPokedex(true);
  };

  const handleClose = () => {
    setOpenPokedex(false);
  };

  const handleAvatarClick = (id: number, name: string, avatar: string) => {
    setShowPokemon({ id, name, avatar });
  };

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof PokemonData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleFavoriteClick = (name: string) => {
    dispatch(toggleFavorite(name));
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pokemons.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...pokemons]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, pokemons]
  );

  return (
    <Box sx={boxStyle}>
      <PokeCard
        id={showPokemon.id}
        name={showPokemon.name}
        avatar={showPokemon.avatar}
      />
      <Box id="details" sx={detailsStyle} />
      <Paper sx={paperStyle}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <Box id="search" sx={searchStyle} />
            <PokeTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={pokemons.length}
              handlePokedexOpen={handlePokedexOpen}
            />
            <Box id="pokedex" sx={pokedexStyle} />
            <Box id="avatar" sx={avatarStyle} />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                const isFavorited = favorites.includes(row.name);
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      handleAvatarClick(row.id, row.name, row.avatar)
                    }
                  >
                    <TableCell padding="checkbox">
                      <IconButton
                        onClick={(event) => {
                          event.stopPropagation();
                          handleFavoriteClick(row.name);
                        }}
                        aria-label="favorite"
                      >
                        <Box id="favorite" sx={favoriteStyle} />
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
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.height}</TableCell>
                    <TableCell align="center">{row.weight}</TableCell>
                    <TableCell align="center">{row.abilities}</TableCell>
                    <TableCell align="center">
                      <Avatar
                        src={row.avatar}
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
          component="div"
          count={pokemons.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Linhas por Página"
        />
      </Paper>
      <TutorialPopover steps={tableSteps} tutorialKey="tutorialSeen" />
      <Pokedex open={openPokedex} handleClose={handleClose} pokedex={pokedex} />
    </Box>
  );
}
