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
import { PokeTableHead } from "./TableHead";
import { PokeCard } from "../PokeCard";
import TutorialPopover from "../TutorialPopover";

export interface Data {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: number;
  avatar: string; //home>front>default
}

export type Pokedex = Pick<Data, "id" | "name" | "avatar">;

//passos do tutorial
const tableSteps = [
  {
    selector: "#favorite",
    content:
      "Clique nos corações para favoritar seus Pokémons e guardá-los na PokéDex",
    position: { top: "20%", left: "80%" },
  },
  {
    selector: "#avatar",
    content: "Clique nas linhas para ver a foto do Pokémon selecionado",
    position: { top: "20%", left: "80%" },
  },
  {
    selector: "#search",
    content: "Busque Pokémons específicos",
    position: { top: "20%", left: "80%" },
  },
  {
    selector: "#details",
    content: "Veja os detalhes do Pokémon selecionado",
    position: { top: "20%", left: "80%" },
  },
  {
    selector: "#pokedex",
    content: "Acesse seus favoritos",
    position: { top: "20%", left: "80%" },
  },
];

//mock para testes
const rows: Data[] = [
  {
    id: 1,
    name: "Bulbasaur",
    height: 0.7,
    weight: 6.9,
    abilities: 2,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "Charmander",
    height: 0.6,
    weight: 8.5,
    abilities: 3,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 3,
    name: "Squirtle",
    height: 0.5,
    weight: 9.0,
    abilities: 2,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 4,
    name: "Pikachu",
    height: 0.4,
    weight: 6.0,
    abilities: 1,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: 5,
    name: "Jigglypuff",
    height: 0.5,
    weight: 5.5,
    abilities: 2,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  },
  {
    id: 6,
    name: "Meowth",
    height: 0.4,
    weight: 4.2,
    abilities: 3,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
  {
    id: 7,
    name: "Psyduck",
    height: 0.8,
    weight: 19.6,
    abilities: 2,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  },
  {
    id: 8,
    name: "Machop",
    height: 0.8,
    weight: 19.5,
    abilities: 4,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  },
  {
    id: 9,
    name: "Magnemite",
    height: 0.3,
    weight: 6.0,
    abilities: 1,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  },
  {
    id: 10,
    name: "Gengar",
    height: 1.5,
    weight: 40.5,
    abilities: 3,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
  {
    id: 11,
    name: "Onix",
    height: 8.8,
    weight: 210.0,
    abilities: 1,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
  },
  {
    id: 12,
    name: "Eevee",
    height: 0.3,
    weight: 6.5,
    abilities: 2,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
  {
    id: 13,
    name: "Snorlax",
    height: 2.1,
    weight: 460.0,
    abilities: 1,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  },
  {
    id: 14,
    name: "Dratini",
    height: 1.8,
    weight: 3.3,
    abilities: 2,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
  },
  {
    id: 15,
    name: "Mewtwo",
    height: 2.0,
    weight: 122.0,
    abilities: 3,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  },
  {
    id: 16,
    name: "Caterpie",
    height: 0.3,
    weight: 2.9,
    abilities: 1,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  {
    id: 17,
    name: "Rattata",
    height: 0.3,
    weight: 3.5,
    abilities: 1,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 18,
    name: "Pidgey",
    height: 0.3,
    weight: 1.8,
    abilities: 1,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    id: 19,
    name: "Zubat",
    height: 0.8,
    weight: 7.5,
    abilities: 2,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  },
  {
    id: 20,
    name: "Lugia",
    height: 5.2,
    weight: 216.0,
    abilities: 3,
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
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

function getComparator<Key extends keyof Data>(
  order: Order,
  orderBy: Key
): (a: Data, b: Data) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy) // Se for 'desc', compara de forma decrescente
    : (a, b) => -descendingComparator(a, b, orderBy); // Se for 'asc', inverte o resultado(-) para ordem crescente
}

export function PokeTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [favorites, setFavorites] = React.useState<number[]>([]); //estado global
  const [pokedex, setPokedex] = React.useState<Pokedex>({} as Pokedex);

  const handleAvatarClick = (id: number, name: string, avatar: string) => {
    setPokedex({ id, name, avatar });
  };

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleFavoriteClick = (id: number) => {
    //estado global
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
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
      <TutorialPopover
        steps={tableSteps}
        tutorialKey="tutorialSeen"
        onFinish={() => console.log("Tutorial finalizado!")}
      />
      <PokeCard id={pokedex.id} name={pokedex.name} avatar={pokedex.avatar} />
      <div id="details" style={{ display: "visualy-hidden" }} />
      <Paper
        sx={{ width: { xs: "100%", md: "60%" }, mb: 2, mr: { xs: 0, md: 5 } }}
      >
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <div id="search" style={{ display: "visualy-hidden" }} />
            <PokeTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <div id="pokedex" style={{ display: "visualy-hidden" }} />
            <div id="favorite" style={{ display: "visualy-hidden" }} />
            <div id="avatar" style={{ display: "visualy-hidden" }} />
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
    </Box>
  );
}
