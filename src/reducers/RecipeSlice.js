import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "../data";

const initialState = {
  RecipeData: recipes,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
  },
});

// Action creators are generated for each case reducer function
export const {
} = recipeSlice.actions;

export default recipeSlice.reducer;
