import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { deleteRecipe, saveRecipe } from "../../reducers/SearchSlice";

import Button from "../../elements/Button";

import {
  getInstructionContent,
  getRecipeIngredients,
} from "./recipeDetailsHelpers";
import {
  StyledBackLink,
  StyledContentSection,
  StyledDetailsPage,
  StyledHeroCard,
  StyledImageFrame,
  StyledIngredientList,
  StyledInstructionSteps,
  StyledInstructionText,
  StyledLoadingSkeleton,
  StyledMetaBadges,
  StyledMetaFacts,
  StyledRecipeActions,
  StyledStatusPanel,
  StyledSummary,
} from "./RecipeDetails.Styled";

const DetailsLoading = () => (
  <StyledLoadingSkeleton aria-busy="true" aria-label="Loading recipe">
    <div className="skeleton-hero">
      <div className="skeleton-block skeleton-image" />
      <div className="skeleton-lines">
        <div className="skeleton-block skeleton-line title" />
        <div className="skeleton-block skeleton-line short" />
        <div className="skeleton-block skeleton-line medium" />
        <div className="skeleton-block skeleton-line long" />
      </div>
    </div>
    <div className="skeleton-section">
      <div className="skeleton-block skeleton-line short" />
      <div className="skeleton-lines">
        <div className="skeleton-block skeleton-line long" />
        <div className="skeleton-block skeleton-line long" />
        <div className="skeleton-block skeleton-line medium" />
      </div>
    </div>
  </StyledLoadingSkeleton>
);

const DetailsStatus = ({ title, message, isError = false }) => (
  <StyledStatusPanel
    className={isError ? "status-error" : "status-not-found"}
    role={isError ? "alert" : "status"}
  >
    <h1>{title}</h1>
    <p>{message}</p>
    <StyledBackLink to="/">← Back to recipes</StyledBackLink>
  </StyledStatusPanel>
);

const RecipeDetails = () => {
  const { savedRecipes, recipes } = useSelector((state) => ({
    savedRecipes: state.search.savedRecipes,
    recipes: state.recipe.recipes,
  }));

  const { id, api } = useParams();
  const isApiRecipe = Boolean(api);

  const dispatch = useDispatch();

  const [recipeDetailsData, setRecipeDetailsData] = useState({
    recipe: null,
    loading: true,
    errMsg: "",
  });
  const [isRecipeSaved, setIsRecipeSaved] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchRecipeDetails = async () => {
      setRecipeDetailsData({
        recipe: null,
        loading: true,
        errMsg: "",
      });

      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (ignore) {
          return;
        }

        const meals = response?.data?.meals;
        const recipeData =
          Array.isArray(meals) && meals.length > 0 ? meals[0] : null;

        setRecipeDetailsData({
          recipe: recipeData,
          loading: false,
          errMsg: "",
        });
      } catch {
        if (ignore) {
          return;
        }

        setRecipeDetailsData({
          recipe: null,
          loading: false,
          errMsg: "Unable to load this recipe. Please try again.",
        });
      }
    };

    if (isApiRecipe) {
      fetchRecipeDetails();
    } else {
      const foundRecipe =
        recipes.find((recipe) => recipe.idMeal === id) || null;
      setRecipeDetailsData({
        recipe: foundRecipe,
        loading: false,
        errMsg: "",
      });
    }

    return () => {
      ignore = true;
    };
  }, [id, isApiRecipe, recipes]);

  useEffect(() => {
    const isSaved = savedRecipes.some(
      (savedRecipe) => savedRecipe.idMeal === id
    );
    setIsRecipeSaved(isSaved);
  }, [savedRecipes, id]);

  const { recipe, loading, errMsg } = recipeDetailsData;

  const handleSaveRecipe = () => {
    dispatch(saveRecipe(recipe));
  };

  const handleDeleteRecipe = () => {
    dispatch(deleteRecipe(recipe.idMeal));
  };

  const ingredients = recipe
    ? getRecipeIngredients(recipe, isApiRecipe)
    : [];
  const instructionContent = recipe ? getInstructionContent(recipe) : null;

  return (
    <StyledDetailsPage>
      <StyledBackLink to="/">← Back to recipes</StyledBackLink>

      {loading && <DetailsLoading />}

      {!loading && errMsg && (
        <DetailsStatus
          isError
          title="Unable to load recipe"
          message="Please check your connection and try again."
        />
      )}

      {!loading && !errMsg && !recipe && (
        <DetailsStatus
          title="Recipe not found"
          message="This recipe could not be found. Try browsing or searching from the home page."
        />
      )}

      {!loading && !errMsg && recipe && (
        <>
          <StyledHeroCard aria-labelledby="recipe-title">
            {recipe.strMealThumb && (
              <StyledImageFrame>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal || "Recipe"}
                />
              </StyledImageFrame>
            )}
            <StyledSummary>
              {recipe.strMeal && <h1 id="recipe-title">{recipe.strMeal}</h1>}

              {(recipe.strCategory || recipe.strArea) && (
                <StyledMetaBadges>
                  {recipe.strCategory && (
                    <span>{recipe.strCategory}</span>
                  )}
                  {recipe.strArea && <span>{recipe.strArea}</span>}
                </StyledMetaBadges>
              )}

              {((recipe.serves != null && recipe.serves !== "") ||
                recipe.difficulty) && (
                <StyledMetaFacts>
                  {recipe.serves != null && recipe.serves !== "" && (
                    <li>
                      Serves: <strong>{recipe.serves}</strong>
                    </li>
                  )}
                  {recipe.difficulty && (
                    <li>
                      Difficulty: <strong>{recipe.difficulty}</strong>
                    </li>
                  )}
                </StyledMetaFacts>
              )}

              {isApiRecipe && (
                <StyledRecipeActions>
                  {isRecipeSaved ? (
                    <Button
                      type="button"
                      onClick={handleDeleteRecipe}
                      className="del-btn"
                      label="Remove from saved"
                      ariaLabel={`Remove ${recipe.strMeal || "recipe"} from saved recipes`}
                    />
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSaveRecipe}
                      className="save-btn"
                      label="Save recipe"
                      ariaLabel={`Save ${recipe.strMeal || "recipe"}`}
                    />
                  )}
                </StyledRecipeActions>
              )}
            </StyledSummary>
          </StyledHeroCard>

          {ingredients.length > 0 && (
            <StyledContentSection aria-labelledby="ingredients-heading">
              <h2 id="ingredients-heading">Ingredients</h2>
              <StyledIngredientList>
                {ingredients.map((item, index) => (
                  <li key={`${item.ingredient}-${index}`}>
                    {item.measure ? (
                      <span className="measure">{item.measure}</span>
                    ) : null}
                    <span className="ingredient">{item.ingredient}</span>
                  </li>
                ))}
              </StyledIngredientList>
            </StyledContentSection>
          )}

          {instructionContent && (
            <StyledContentSection aria-labelledby="instructions-heading">
              <h2 id="instructions-heading">Instructions</h2>
              {instructionContent.type === "steps" ? (
                <StyledInstructionSteps>
                  {instructionContent.steps.map((step, index) => (
                    <li key={`${index}-${step.slice(0, 24)}`}>
                      <span className="step-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="step-text">{step}</p>
                    </li>
                  ))}
                </StyledInstructionSteps>
              ) : (
                <StyledInstructionText>
                  {instructionContent.text}
                </StyledInstructionText>
              )}
            </StyledContentSection>
          )}
        </>
      )}
    </StyledDetailsPage>
  );
};

export default RecipeDetails;
