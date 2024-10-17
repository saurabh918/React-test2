import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchRecipes = createAsyncThunk('searchRecipes', async (searchQuery) => {
  const recipes = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
  return recipes.data.meals
})

// export const recipeDetails 

const storedRecipes = localStorage.getItem('savedRecipes')
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: null,
    searchResults: [],
    savedRecipes: storedRecipes ? JSON.parse(storedRecipes) : [],
    // recipeDetails: 
    error: null
  },
  reducers: {
    saveRecipe: (state, action) => {
      // save recipe in state
      const recipe = action.payload;
      const newSavedRecipes = {
        ...state,
        savedRecipes: [...state.savedRecipes, recipe],
      };
      localStorage.setItem('savedRecipes', JSON.stringify([...state.savedRecipes, recipe]))
      return newSavedRecipes
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
  extraReducers: builder => {
    builder.addCase(searchRecipes.pending, (state) => {
      return {
        ...state,
        loading: true
      }
    })
    .addCase(searchRecipes.fulfilled, (state,action) => {
      return {
        ...state,
        loading: false,
        searchResults: action.payload
      }
    })
    .addCase(searchRecipes.rejected, (state,action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message
      }
    })
  }
});

export const { saveRecipe, deleteRecipe } =
  searchSlice.actions;

export default searchSlice.reducer;
