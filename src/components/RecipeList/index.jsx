import React from "react";
import { useSelector } from "react-redux";

import RecipeCard from "../RecipeCard";
import { StyledStatusMessage } from "../../elements/StatusMessage/StatusMessage.Styled";

import {
  StyledRecipeList,
  StyledRecipeSection,
} from "./RecipeList.Styled";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipe.recipes);

  return (
    <StyledRecipeSection aria-labelledby="featured-recipes-heading">
      <h2 id="featured-recipes-heading">Featured recipes</h2>
      {recipes.length === 0 ? (
        <StyledStatusMessage>
          <h2>No recipes available</h2>
          <p>
            Featured recipes are not available right now. Try searching for
            meals above.
          </p>
        </StyledStatusMessage>
      ) : (
        <StyledRecipeList className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </StyledRecipeList>
      )}
    </StyledRecipeSection>
  );
};

export default RecipeList;
