import React from "react";
import { Routes, Route } from "react-router-dom";

import RecipesHome from "../pages/RecipesHome";
import RecipeDetails from "../components/RecipeDetails";
const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RecipesHome />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
