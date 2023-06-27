// import from modules
import React from "react";

// import from components
import Navbar from "../navbar";
import WrapperComponent from "../WrapperComponent";

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
