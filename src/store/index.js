import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

import { recipeSlice,searchSlice } from "../reducers/RecipeSlice";

let store;
if (process.env.NODE_ENV === "development") {
  store = configureStore(
    {
      reducer: { recipeSlice,searchSlice },
    },
    composeWithDevTools()
  );
} else {
  store = configureStore(
    {
      reducer: { recipeSlice,searchSlice },
    }
  );
}

export default store
 
