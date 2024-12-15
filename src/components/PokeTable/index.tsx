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
import { PokemonData, PokedexData } from "../../utils/types";
import { rows } from "../../mock";

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
  const [favorites, setFavorites] = React.useState<number[]>([]); //estado global
  const [pokedex, setPokedex] = React.useState<PokedexData[]>([]);
  const [openPokedex, setOpenPokedex] = React.useState(false);
  const [showPokemon, setShowPokemon] = React.useState<PokedexData>(
    {} as PokedexData
  );

  const handlePokedexOpen = () => {
    // Filtra os Pokémon favoritos presentes na Pokedex
    if (favorites.length === 0) {
      console.warn("Nenhum Pokémon favoritado!");
      return;
    }

    const favoritePokemons = rows.filter((pokemon) =>
      favorites.includes(pokemon.id)
    );

    setPokedex(favoritePokemons);
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

  const handleFavoriteClick = (id: number) => {
    //estado global
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((favId) => favId !== id) // Desfavorita
        : [...prev, id]; // Favorita
      return newFavorites;
    });
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        paddingBottom: "3rem",
      }}
    >
      <PokeCard
        id={showPokemon.id}
        name={showPokemon.name}
        avatar={showPokemon.avatar}
      />
      <div
        id="details"
        style={{
          position: "fixed",
          top: "63%",
          left: "10%",
          visibility: "hidden",
        }}
      />
      <Paper
        sx={{ width: { xs: "100%", md: "60%" }, mb: 2, mr: { xs: 0, md: 5 } }}
      >
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <div
              id="search"
              style={{
                position: "fixed",
                top: "20%",
                right: 0,
                visibility: "hidden",
              }}
            />
            <PokeTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              favorites={favorites}
              handlePokedexOpen={handlePokedexOpen}
            />
            <div
              id="pokedex"
              style={{
                position: "fixed",
                top: "20%",
                right: "46%",
                visibility: "hidden",
              }}
            />
            <div
              id="avatar"
              style={{
                position: "fixed",
                top: "30%",
                right: "40%",
                visibility: "hidden",
              }}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                const isFavorited = favorites.includes(row.id);
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
                          handleFavoriteClick(row.id);
                        }}
                        aria-label="favorite"
                      >
                        <div
                          id="favorite"
                          style={{
                            position: "fixed",
                            top: "30%",
                            right: "40%",
                            visibility: "hidden",
                          }}
                        />
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
          count={rows.length}
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
