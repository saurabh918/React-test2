import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { StyledRecipeDetails } from "./RecipeDetails.Styled";

const RecipeDetails = () => {
  const { id, api } = useParams();
  const recipes = useSelector((state) => state.recipe.recipes);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errMsg,setErrMsg] = useState("");

  useEffect(() => {
    // fetch searched recipe details
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const recipeData = response.data.meals[0];
        setRecipe(recipeData);
        setLoading(false);
      } catch (error) {
        setErrMsg(error.toJSON().message)
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

  return (
    <>
    <h2>Recipe Details</h2>
    <StyledRecipeDetails>
      {errMsg.length < 1 ? 
      
      (<><div className="recipe-info">
        {recipe.strMeal && <h2>{recipe.strMeal}</h2>}
        {recipe.strCategory && <p>Meal Type: {recipe.strCategory}</p>}
        {recipe.serves && <p>Serves: {recipe.serves}</p>}
        {recipe.difficulty && <p>Difficulty: {recipe.difficulty}</p>}
        {recipe.strInstructions && (
          <p>Instructions: {recipe.strInstructions}</p>
        )}
      </div>
      <div className="recipe-image">
        {recipe.strMealThumb && (
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        )}
      </div></>) : (<h2>{errMsg}</h2>) }
    </StyledRecipeDetails>
    </>
  );
};

export default RecipeDetails;
