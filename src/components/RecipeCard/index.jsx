import React from 'react';
import { StyledRecipeCard } from './RecipeCard.Styled';

const RecipeCard = ({ recipe }) => {
  return (
    <StyledRecipeCard>
      <h3>{recipe.title}</h3>
      <p>Meal Type: {recipe.mealType}</p>
      <p>Serves: {recipe.serves}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
    </StyledRecipeCard>
  );
};

export default RecipeCard;