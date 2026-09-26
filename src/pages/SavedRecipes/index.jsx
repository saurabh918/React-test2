import React from "react";
import { useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa";

import RecipeCard from "../../components/RecipeCard";
import {
  StyledBrowseLink,
  StyledEmptyState,
  StyledPageIntro,
  StyledSavedGrid,
  StyledSavedPage,
} from "./SavedRecipes.Styled";

const SavedRecipes = () => {
  const savedRecipes = useSelector((state) => state.search.savedRecipes);
  const count = savedRecipes.length;

  return (
    <StyledSavedPage>
      <StyledPageIntro>
        <h1>Saved recipes</h1>
        {count > 0 ? (
          <p>
            You have {count} saved recipe{count === 1 ? "" : "s"} ready to
            cook.
          </p>
        ) : (
          <p>Your saved recipes, all in one place.</p>
        )}
      </StyledPageIntro>

      {count === 0 ? (
        <StyledEmptyState aria-labelledby="saved-empty-heading">
          <span className="empty-icon" aria-hidden="true">
            <FaBookmark />
          </span>
          <h2 id="saved-empty-heading">No saved recipes yet</h2>
          <p>Save recipes you love and they&apos;ll appear here.</p>
          <StyledBrowseLink to="/">Browse recipes</StyledBrowseLink>
        </StyledEmptyState>
      ) : (
        <StyledSavedGrid className="recipe-list" aria-label="Saved recipes">
          {savedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              api="apiData"
              deleteBtn={true}
            />
          ))}
        </StyledSavedGrid>
      )}
    </StyledSavedPage>
  );
};

export default SavedRecipes;
