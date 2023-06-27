import React from 'react';
import { StyledRecipeCard } from './RecipeCard.Styled';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <StyledRecipeCard>
      <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
      <h3>{recipe.title}</h3>
      </Link>
      <p>Meal Type: {recipe.mealType}</p>
      <p>Serves: {recipe.serves}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
    </StyledRecipeCard>
  );
};

export default RecipeCard;