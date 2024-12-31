import * as React from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { CatchingPokemonTwoTone } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { PokemonData } from "../../config/utils/types";
import { useAppSelector } from "../../store/hooks";

interface HeadCell {
  id: keyof PokemonData;
  label: string;
  numeric: boolean;
}

const headCellList: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Nome",
  },
  {
    id: "height",
    numeric: true,
    label: "Altura (cm)",
  },
  {
    id: "weight",
    numeric: true,
    label: "Peso (g)",
  },
  {
    id: "abilitiesCount",
    numeric: true,
    label: "Habilidades",
  },
  {
    id: "avatar",
    numeric: false,
    label: "Avatar",
  },
];

const headCells = headCellList.map((headCell) => {
  if (headCell.id === "abilitiesCount") {
    return { ...headCell, id: "abilities" as keyof PokemonData };
  }
  return headCell;
});

interface PokeTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof PokemonData
  ) => void;
  order: "asc" | "desc";
  orderBy: string;
  rowCount: number;
  handlePokedexOpen: () => void;
}

export function PokeTableHead({
  order,
  orderBy,
  onRequestSort,
  handlePokedexOpen,
}: PokeTableHeadProps) {
  const favorites = useAppSelector((state) => state.favorite.favorites);

  const createSortHandler =
    (property: keyof PokemonData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow
        sx={{
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        }}
      >
        <TableCell padding="normal">
          <Tooltip title="pokéDex">
            <IconButton sx={{ px: 0 }} onClick={() => handlePokedexOpen()}>
              <Badge color="secondary" badgeContent={favorites.length}>
                <CatchingPokemonTwoTone sx={{ color: "#D32F2F" }} />
              </Badge>
            </IconButton>
          </Tooltip>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding="checkbox"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "ordem decrescente" : "ordem crescente"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
