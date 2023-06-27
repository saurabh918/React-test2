// import from modules
import React from "react";

// import component

// import styled component
import { StyledFooter } from "./Footer.Styled";
import WrapperComponent from "../WrapperComponent";

const FooterComponent = () => {
  return (
      <StyledFooter>
        <WrapperComponent>
          <span>&copy;Copyright 2023. All rights reserved &reg;</span>
        </WrapperComponent>
      </StyledFooter>
  );
};

export default FooterComponent;
