import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { deleteRecipe, saveRecipe } from "../../reducers/SearchSlice";

import Button from "../../elements/Button";

import { StyledRecipeDetails } from "./RecipeDetails.Styled";


const RecipeDetails = () => {
  const { savedRecipes, recipes } = useSelector((state) => ({
    savedRecipes: state.search.savedRecipes,
    recipes: state.recipe.recipes,
  }));

  const { id, api } = useParams();

  const dispatch = useDispatch();

  const [ recipeDetailsData, setRecipeDetailsData ] = useState({
    recipe: null,
    loading: true,
    errMsg: ""
  })
  const [isRecipeSaved, setIsRecipeSaved] = useState(false);

  useEffect(() => {
    // fetch searched recipe details
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const recipeData = response.data.meals[0];
        // setRecipe(recipeData);
        // setLoading(false);
        setRecipeDetailsData(prev => {
          return {
            ...prev,
            recipe: recipeData,
            loading: false
          }
        })
      } catch (error) {
        // setErrMsg(error.toJSON().message)
        // setLoading(false);
        setRecipeDetailsData(prev => {
          return {
            ...prev,
            errMsg: error.toJSON().message,
            loading: false
          }
        })
      }
    };

    if (api) {
      fetchRecipeDetails();
    } else {
      const foundRecipe = recipes.find((recipe) => recipe.idMeal === id);
      // setRecipe(foundRecipe);
      // setLoading(false);
      setRecipeDetailsData(prev => {
        return {
          ...prev,
          recipe: foundRecipe,
          loading: false
        }
      })
    }
  }, [id, api, recipes, setRecipeDetailsData]);

  useEffect(() => {
    // Check if the current recipe is saved 
    const isSaved = savedRecipes.some((savedRecipe) => savedRecipe.idMeal === id);
    setIsRecipeSaved(isSaved);
  }, [savedRecipes, id]);

  const handleSaveRecipe = () => {
    dispatch(saveRecipe(recipe));
  };

  const handleDeleteRecipe = () => {
    dispatch(deleteRecipe(recipe.idMeal));
  };

  console.log(recipeDetailsData, 'recipeDetailsData')

  const { recipe,loading,errMsg } = recipeDetailsData


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <>
    <h2 className="details-heading">Recipe Details</h2>
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
      </div>
      {api &&
      <div className="recipe-actions">
              {isRecipeSaved ? (
                <Button type="button" onClick={handleDeleteRecipe} className="del-btn" label="delete" />
              ) : (
                <Button type="button" onClick={handleSaveRecipe} className="save-btn" label="save" />
              )}
            </div>}
      </>) : (<h2>{errMsg}</h2>) }
    </StyledRecipeDetails>
    </>
  );
};

export default RecipeDetails;
