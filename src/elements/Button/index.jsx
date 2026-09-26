import React from "react";

import { StyledButton } from "./Button.Styled";

const Button = ({ type, onClick, label, className, ariaLabel }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
