// import from modules
import React from "react";
import { Link } from "react-router-dom";

// import styled components
import { StyledNavbar } from "./Navbar.Styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <h1>
            <Link to="/">Recipes</Link>
          </h1>
        </li>
        <li>
          <Link to="/saved">Saved Recipes</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
