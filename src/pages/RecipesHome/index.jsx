import React from "react";

import RecipeList from "../../components/RecipeList";
import Search from "../../components/SearchComponent";

import { StyledHomeIntro, StyledRecipesHome } from "./RecipesHome.Styled";

const RecipesHome = () => {
  return (
    <StyledRecipesHome>
      <StyledHomeIntro>
        <h1>Discover recipes</h1>
        <p>
          Browse featured dishes below or search TheMealDB for more meal ideas.
        </p>
      </StyledHomeIntro>
      <Search />
      <RecipeList />
    </StyledRecipesHome>
  );
};

export default RecipesHome;
