// import from modules
import React from "react";

// import styled components
import { StyledWrapper } from "./wrapper.styled";

const WrapperComponent = ({ children }) => {
  return <StyledWrapper className="wrapper">{children}</StyledWrapper>;
};

export default WrapperComponent;
