import React from "react";

import RecipeList from "../../components/RecipeList";
import Search from "../../components/SearchComponent";

const RecipesHome = () => {
  return (
    <>
      <RecipeList />
      <Search />
    </>
  );
};

export default RecipesHome;
