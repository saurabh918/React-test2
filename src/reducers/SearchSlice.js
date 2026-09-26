import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SAVED_RECIPES_KEY = "savedRecipes";
const SEARCH_ERROR_MESSAGE = "Unable to load recipes. Please try again.";

export const searchRecipes = createAsyncThunk(
  "searchRecipes",
  async (searchQuery, { signal }) => {
    const recipes = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
      { signal }
    );
    return recipes.data.meals;
  }
);

const isAbortedRequest = (action) => {
  const error = action.error || {};
  return (
    action.meta?.aborted === true ||
    error.name === "AbortError" ||
    error.name === "CanceledError" ||
    error.code === "ERR_CANCELED"
  );
};

const loadSavedRecipes = () => {
  try {
    const storedRecipes = localStorage.getItem(SAVED_RECIPES_KEY);
    if (!storedRecipes) {
      return [];
    }

    const parsed = JSON.parse(storedRecipes);
    if (!Array.isArray(parsed)) {
      return [];
    }

    const seen = new Set();
    const uniqueRecipes = parsed.filter((recipe) => {
      if (!recipe || recipe.idMeal == null || seen.has(recipe.idMeal)) {
        return false;
      }
      seen.add(recipe.idMeal);
      return true;
    });

    if (uniqueRecipes.length !== parsed.length) {
      localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(uniqueRecipes));
    }

    return uniqueRecipes;
  } catch {
    return [];
  }
};

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: null,
    searchResults: [],
    savedRecipes: loadSavedRecipes(),
    error: null,
    requestId: null,
    resultsQuery: null,
  },
  reducers: {
    saveRecipe: (state, action) => {
      const recipe = action.payload;
      const alreadySaved = state.savedRecipes.some(
        (savedRecipe) => savedRecipe.idMeal === recipe?.idMeal
      );

      if (!recipe || alreadySaved) {
        return state;
      }

      const savedRecipes = [...state.savedRecipes, recipe];
      localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(savedRecipes));
      return {
        ...state,
        savedRecipes,
      };
    },

    deleteRecipe: (state, action) => {
      const savedRecipes = state.savedRecipes.filter(
        (recipe) => recipe.idMeal !== action.payload
      );
      localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(savedRecipes));
      return {
        ...state,
        savedRecipes,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchRecipes.pending, (state, action) => {
        return {
          ...state,
          loading: true,
          error: null,
          requestId: action.meta.requestId,
        };
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        if (state.requestId !== action.meta.requestId) {
          return state;
        }
        return {
          ...state,
          loading: false,
          searchResults: action.payload ?? [],
          error: null,
          resultsQuery: action.meta.arg,
        };
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        if (state.requestId !== action.meta.requestId) {
          return state;
        }
        if (isAbortedRequest(action)) {
          return {
            ...state,
            loading: false,
          };
        }
        return {
          ...state,
          loading: false,
          searchResults: [],
          error: SEARCH_ERROR_MESSAGE,
          resultsQuery: action.meta.arg,
        };
      });
  },
});

export const { saveRecipe, deleteRecipe } = searchSlice.actions;

export default searchSlice.reducer;
