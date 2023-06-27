import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledRecipeDetails } from './RecipeDetails.Styled';

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = useSelector((state) =>
    state.recipe.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <StyledRecipeDetails>
      <div className="recipe-info">
      <h2>{recipe.title}</h2>
      <p>Meal Type: {recipe.mealType}</p>
      <p>Serves: {recipe.serves}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      
      <h3>Steps:</h3>
      <ol>
        {recipe.preparationSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      </div>
      <div className="recipe-image">
      {recipe.image && <img src={recipe.image} alt={recipe.title} />}
      </div>
    </StyledRecipeDetails>
  );
};

export default RecipeDetails;