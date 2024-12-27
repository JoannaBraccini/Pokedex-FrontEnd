import { createSlice } from "@reduxjs/toolkit";
import { PokemonData } from "../../../config/utils/types";

interface InitialState {
  order: "asc" | "desc";
  orderBy: keyof PokemonData;
  page: number;
  rowsPerPage: number;
}

const initialState: InitialState = {
  order: "asc",
  orderBy: "name",
  page: 0,
  rowsPerPage: 5,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
  },
});

export const { setOrder, setOrderBy, setPage, setRowsPerPage } =
  tableSlice.actions;

export const tableReducer = tableSlice.reducer;
