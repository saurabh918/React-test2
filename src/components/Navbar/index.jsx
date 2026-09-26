import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa";

import { StyledNavbar } from "./Navbar.Styled";

const Navbar = () => {
  const savedRecipes = useSelector((state) => state.search.savedRecipes);
  const savedRecipesCount = savedRecipes.length;

  const savedLinkLabel =
    savedRecipesCount > 0
      ? `Saved recipes, ${savedRecipesCount} saved`
      : "Saved recipes";

  return (
    <StyledNavbar aria-label="Main">
      <div className="site-brand">
        <Link to="/">Recipes</Link>
      </div>
      <Link to="/saved" className="saved-link" aria-label={savedLinkLabel}>
        <FaBookmark aria-hidden="true" />
        <span className="saved-label-full" aria-hidden="true">
          Saved recipes
        </span>
        <span className="saved-label-short" aria-hidden="true">
          Saved
        </span>
        <span className="count" aria-hidden="true">
          {savedRecipesCount}
        </span>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
