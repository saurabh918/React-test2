import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../elements/Button";

import { deleteRecipe, saveRecipe } from "../../reducers/SearchSlice";

import {
  StyledCardBody,
  StyledCardLink,
  StyledImageFrame,
  StyledMetaDetails,
  StyledRecipeCard,
} from "./RecipeCard.Styled";

const RecipeCard = ({ recipe, api, saveButton, deleteBtn }) => {
  const dispatch = useDispatch();

  const savedRecipes = useSelector((state) => state.search.savedRecipes);

  const isRecipeSaved = savedRecipes.some(
    (savedRecipe) => savedRecipe.idMeal === recipe.idMeal
  );

  const detailPath = `/recipes/${recipe.idMeal}${api ? `/${api}` : ""}`;
  const recipeName = recipe.strMeal || "recipe";

  const handleSaveRecipe = () => {
    dispatch(saveRecipe(recipe));
  };

  const handleDeleteRecipe = () => {
    dispatch(deleteRecipe(recipe.idMeal));
  };

  return (
    <StyledRecipeCard>
      <StyledCardLink to={detailPath}>
        {recipe.strMealThumb && (
          <StyledImageFrame>
            <img
              src={recipe.strMealThumb}
              alt=""
              loading="lazy"
            />
          </StyledImageFrame>
        )}
        <StyledCardBody>
          <h3>{recipe.strMeal}</h3>
          <StyledMetaDetails>
            {recipe.strCategory && (
              <li>
                <span className="label">Meal Type</span>
                <span className="value">{recipe.strCategory}</span>
              </li>
            )}
            {recipe.serves != null && recipe.serves !== "" && (
              <li>
                <span className="label">Serves</span>
                <span className="value">{recipe.serves}</span>
              </li>
            )}
            {recipe.strArea && (
              <li>
                <span className="label">Area</span>
                <span className="value">{recipe.strArea}</span>
              </li>
            )}
            {recipe.difficulty && (
              <li>
                <span className="label">Difficulty</span>
                <span className="value">{recipe.difficulty}</span>
              </li>
            )}
          </StyledMetaDetails>
        </StyledCardBody>
      </StyledCardLink>
      {(saveButton && !isRecipeSaved) ||
      deleteBtn ||
      (saveButton && isRecipeSaved) ? (
        <div className="card-actions">
          {saveButton && !isRecipeSaved && (
            <Button
              type="button"
              className="save-btn"
              label="Save"
              ariaLabel={`Save ${recipeName}`}
              onClick={handleSaveRecipe}
            />
          )}
          {(deleteBtn || (saveButton && isRecipeSaved)) && (
            <Button
              type="button"
              className="del-btn"
              label="Remove from saved"
              ariaLabel={`Remove ${recipeName} from saved recipes`}
              onClick={handleDeleteRecipe}
            />
          )}
        </div>
      ) : null}
    </StyledRecipeCard>
  );
};

export default RecipeCard;
