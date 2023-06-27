import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    savedRecipes: [],
  },
  reducers: {
    // update recipes to show when user starts to search
    setSearchResult: (state, action) => {
      return {
        ...state,
        searchResults: action.payload,
      };
    },

    saveRecipe: (state, action) => {
      // save recipe in state
      const recipe = action.payload;
      return {
        ...state,
        savedRecipes: [...state.savedRecipes, recipe],
      };
    },

    deleteRecipe: (state, action) => {
      // delete existing saved recipe in state
      const recipeToDelete = state.savedRecipes.find(
        (recipe) => recipe.idMeal === action.payload
      );

      if (recipeToDelete) {
        const newItems = state.savedRecipes.filter(
          (recipe) => recipe.idMeal !== action.payload
        );
        return {
          ...state,
          savedRecipes: newItems,
        };
      }
    },
  },
});

export const { setSearchResult, saveRecipe, deleteRecipe } =
  searchSlice.actions;

export default searchSlice.reducer;
