import React from "react";
import { useSelector } from "react-redux";

import RecipeCard from "../../components/RecipeCard";

import { StyledSavedRecipes } from "./SavedRecipes.Styled";
import {
  StyledRecipeContainer,
  StyledRecipeList,
} from "../../components/RecipeList/RecipeList.Styled";

const SavedRecipes = () => {
  const savedRecipes = useSelector((state) => state.search.savedRecipes);

  return (
    <StyledSavedRecipes>
      <h2>Saved Recipes</h2>
      {savedRecipes.length === 0 ? ( 
        <p>No saved recipes found.</p>
      ) : (
        <StyledRecipeContainer>
          <StyledRecipeList className="recipe-list">
            {savedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                api="apiData"
                deleteBtn={true}
              />
            ))}
          </StyledRecipeList>
        </StyledRecipeContainer>
      )}
    </StyledSavedRecipes>
  );
};

export default SavedRecipes;
