import { styled } from "styled-components";

import { interactivePress } from "../../themes/motion";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 2.75rem;
  padding: ${(props) => props.theme.buttonPadding};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  ${interactivePress}

  &:active {
    transform: scale(0.99);
  }

  @media (prefers-reduced-motion: reduce) {
    &:active {
      transform: none;
    }
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.secondaryColor};
    outline-offset: 2px;
  }

  &.save-btn {
    background-color: ${(props) => props.theme.saveButtonColor};
    color: #ffffff;

    &:hover {
      background-color: ${(props) => props.theme.saveButtonHoverColor};
      box-shadow: 0 2px 8px rgba(5, 150, 105, 0.25);
    }

    &:focus-visible {
      outline-color: ${(props) => props.theme.saveButtonColor};
    }
  }

  &.del-btn {
    background-color: ${(props) => props.theme.deleteButtonColor};
    color: #ffffff;

    &:hover {
      background-color: ${(props) => props.theme.deleteButtonHoverColor};
      box-shadow: 0 2px 8px rgba(220, 38, 38, 0.22);
    }

    &:focus-visible {
      outline-color: ${(props) => props.theme.deleteButtonColor};
    }
  }
`;
