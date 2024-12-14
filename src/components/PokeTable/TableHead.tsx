import * as React from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { CatchingPokemonTwoTone } from "@mui/icons-material";
import { Data } from "./PokeTable";

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Nome",
  },
  {
    id: "height",
    numeric: true,
    label: "Altura",
  },
  {
    id: "weight",
    numeric: true,
    label: "Peso",
  },
  {
    id: "abilities",
    numeric: true,
    label: "Habilidades",
  },
  {
    id: "avatar",
    numeric: false,
    label: "Avatar",
  },
];

interface PokeTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: "asc" | "desc";
  orderBy: string;
  rowCount: number;
}

export function PokeTableHead({
  order,
  orderBy,
  onRequestSort,
}: PokeTableHeadProps) {
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="normal">
          <CatchingPokemonTwoTone color="inherit" />
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
