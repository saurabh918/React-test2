import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

import RecipeSlice from "../reducers/RecipeSlice";
import SearchSlice from "../reducers/SearchSlice";

let store;
if (process.env.NODE_ENV === "development") {
  store = configureStore(
    {
      reducer: { recipe:RecipeSlice,search: SearchSlice },
    },
    composeWithDevTools()
  );
} else {
  store = configureStore(
    {
      reducer: { recipe:RecipeSlice,search: SearchSlice },
    }
  );
}

export default store
 
