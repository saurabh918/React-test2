import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../elements/Button";

import { deleteRecipe, saveRecipe } from "../../reducers/SearchSlice";

import { StyledRecipeCard } from "./RecipeCard.Styled";

const RecipeCard = ({ recipe, api, saveButton, deleteBtn }) => {
  const dispatch = useDispatch();

  const savedRecipes = useSelector((state) => state.search.savedRecipes);

  const isRecipeSaved = savedRecipes.some(
    (savedRecipe) => savedRecipe.idMeal === recipe.idMeal
  );

  const handleSaveRecipe = () => {
    // save searched recipe
    dispatch(saveRecipe(recipe));
  };

  const handleDeleteRecipe = () => {
    // delete recipe from saved
    dispatch(deleteRecipe(recipe.idMeal));
  };

  return (
    <StyledRecipeCard>
      <Link
        key={recipe.idMeal}
        to={`/recipes/${recipe.idMeal}${api ? `/${api}` : ""}`}
      >
        <h3>{recipe.strMeal}</h3>
      </Link>
      {recipe.strCategory && <p>Meal Type: {recipe.strCategory}</p>}
      {recipe.serves && <p>Serves: {recipe.serves}</p>}
      {recipe.strArea && <p>Area: {recipe.strArea}</p>}
      {recipe.difficulty && <p>Difficulty: {recipe.difficulty}</p>}
      {recipe.strMealThumb && (
        <img src={recipe.strMealThumb} alt={recipe.title} />
      )}
      {saveButton && !isRecipeSaved && (
        <Button
          type="button"
          className="save-btn"
          label="save"
          onClick={handleSaveRecipe}
        />
      )}
      {(deleteBtn || isRecipeSaved) && (
        <Button
          type="button"
          className="del-btn"
          label="Remove from saved"
          onClick={handleDeleteRecipe}
        />
      )}
    </StyledRecipeCard>
  );
};

export default RecipeCard;
