import React from "react";

import WrapperComponent from "../WrapperComponent";

import { StyledFooter } from "./Footer.Styled";

const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <WrapperComponent>
        <p>
          <span className="footer-product">Recipe Search</span>
          <span className="footer-meta">
            &copy; {year}. All rights reserved.
          </span>
        </p>
      </WrapperComponent>
    </StyledFooter>
  );
};

export default FooterComponent;
