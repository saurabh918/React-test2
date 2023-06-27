import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "../data";

const initialState = {
  recipes: recipes,
};


export const RecipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    // Add more reducers as needed
  },
});

export const { addRecipe } = RecipeSlice.actions;

export default RecipeSlice.reducer;
