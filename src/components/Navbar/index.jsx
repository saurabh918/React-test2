// import from modules
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBookmark } from 'react-icons/fa';

// import styled components
import { StyledNavbar } from "./Navbar.Styled";

const Navbar = () => {

  const savedRecipes = useSelector((state) => state.search.savedRecipes);

  const savedRecipesCount = savedRecipes.length ? savedRecipes.length : 0;

  return (
    <StyledNavbar>
      <ul>
        <li>
          <h1>
            <Link to="/">Recipes</Link>
          </h1>
        </li>
        <li>
          <Link to="/saved"><FaBookmark /> Saved Recipes {savedRecipesCount}</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
