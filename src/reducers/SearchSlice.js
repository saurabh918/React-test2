import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState:'',
  reducers: {
  },
});

// Action creators are generated for each case reducer function
export const {
} = searchSlice.actions;

export default searchSlice.reducer;
