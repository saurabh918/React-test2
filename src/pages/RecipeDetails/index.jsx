import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { StyledRecipeDetails } from './RecipeDetails.Styled';

const RecipeDetails = () => {
  const { id, api } = useParams();
  const recipes = useSelector((state) => state.recipe.recipes);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id)

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const recipeData = response.data.meals[0];
        setRecipe(recipeData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (api) {
      fetchRecipeDetails();
    } else {
      const foundRecipe = recipes.find((recipe) => recipe.idMeal === id);
      setRecipe(foundRecipe);
      setLoading(false);
    }
  }, [id, api, recipes]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  console.log(recipes)

  return (
    <StyledRecipeDetails>
      <div className="recipe-info">
        <h2>{recipe.strMeal}</h2>
        <p>Meal Type: {recipe.strTags}</p>
        <p>Serves: {recipe.strMeasure1}</p>
        <p>Difficulty: {recipe.difficulty}</p>
      </div>
      <div className="recipe-image">
        {recipe.strMealThumb && <img src={recipe.strMealThumb} alt={recipe.strMeal} />}
      </div>
    </StyledRecipeDetails>
  );
};

export default RecipeDetails;
