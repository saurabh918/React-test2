import React from "react";
import { useSelector } from "react-redux";

import RecipeCard from "../RecipeCard";

import { StyledRecipeContainer, StyledRecipeList } from "./RecipeList.Styled";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipe.recipes);

  return (
    <StyledRecipeContainer>
      <StyledRecipeList className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </StyledRecipeList>
    </StyledRecipeContainer>
  );
};

export default RecipeList;
