import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: localStorage.getItem("filter") ?? "",
};

export const filter = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    editFilter: (state, { payload }) => {
      state.filter = payload.filter;
    },
  },
});

const { actions, reducer } = filter;

export const { editFilter } = actions;

export default reducer;
