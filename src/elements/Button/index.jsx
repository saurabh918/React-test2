import React from "react";

import { StyledButton } from "./Button.Styled";

const Button = ({ type, onClick, label, className }) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      {label}
    </StyledButton>
  );
};

export default Button;
