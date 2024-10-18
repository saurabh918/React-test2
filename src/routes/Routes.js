import React from "react";
import { Routes, Route } from "react-router-dom";

import RecipesHome from "../pages/RecipesHome";
import RecipeDetails from "../pages/RecipeDetails";
import SavedRecipes from "../pages/SavedRecipes";
import PageNotFound from "../pages/PageNotFound";

const RoutesComponent = () => {
  return (
      <Routes>
        <Route exact path="/" element={<RecipesHome />} />
        <Route exact path="/saved" element={<SavedRecipes />} />
        <Route path="/recipes/:id/:api" element={<RecipeDetails />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default RoutesComponent;
