import React from "react";
import { Routes, Route } from "react-router-dom";

import RecipesHome from "../pages/RecipesHome";
const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RecipesHome />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
