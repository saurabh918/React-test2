// import from modules
import React from "react";

// import from components
import WrapperComponent from "../wrapper";
import Navbar from "../navbar";

// import styled components
import { StyledHeader } from "./header.styled";

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
