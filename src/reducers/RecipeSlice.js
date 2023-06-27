import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "../data";

const initialState = {
  recipes: recipes,
};


export const RecipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    // Add more reducers as needed
  },
});

export const { } = RecipeSlice.actions;

export default RecipeSlice.reducer;
