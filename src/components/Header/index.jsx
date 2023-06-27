// import from modules
import React from "react";

// import from components
import Navbar from "../Navbar";
import WrapperComponent from "../WrapperComponent";

// import styled components
import { StyledHeader } from "./Header.Styled";

const HeaderComponent = () => {
  return (
    <StyledHeader>
      <WrapperComponent>
        <Navbar />
      </WrapperComponent>
    </StyledHeader>
  );
};

export default HeaderComponent;
