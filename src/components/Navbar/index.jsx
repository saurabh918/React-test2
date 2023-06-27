// import from modules
import React from "react";
import { Link } from "react-router-dom";

import { BsBook } from 'react-icons/bs';

// import styled components
import { StyledNavbar } from "./Navbar.Styled";


const Navbar = () => {
  return (
      <StyledNavbar>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
        </ul>
      </StyledNavbar>
  );
};

export default Navbar;
