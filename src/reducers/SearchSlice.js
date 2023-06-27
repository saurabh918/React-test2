import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    savedRecipes: [],
  },
  reducers: {
    setSearchResult: (state, action) => {
      return {
        ...state,
        searchResults: action.payload,
      };
    },
    saveRecipe: (state, action) => {
      const recipe = action.payload;
      return {
        ...state,
        savedRecipes: [...state.savedRecipes, recipe],
      };
    },
    deleteRecipe: (state,action) => {
      const recipeToDelete = state.savedRecipes.find(recipe => recipe.idMeal === action.payload)

      if(recipeToDelete) {
        const newItems = state.savedRecipes.filter((recipe => recipe.idMeal !== action.payload))
        return {
          ...state,
          savedRecipes: newItems
        }
      }

    }
  },
});

export const { setSearchResult, saveRecipe, deleteRecipe } = searchSlice.actions;

export default searchSlice.reducer;
