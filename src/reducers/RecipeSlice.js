import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "../data";

const initialState = {
  recipes: recipes,
};


export const RecipeSlice = createSlice({
  name: "recipe",
  initialState,
});

export default RecipeSlice.reducer;
