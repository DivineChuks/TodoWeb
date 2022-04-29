import { createSlice } from "@reduxjs/toolkit";

export const filterReducer = createSlice({
  name: "filter",
  initialState: "both",
  reducers: {
    setFilter: (_, action) => {
      return action.payload.filter;
    },
  },
});

export const { setFilter } = filterReducer.actions;
export default filterReducer.reducer;
