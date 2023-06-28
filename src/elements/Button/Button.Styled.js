import { styled } from "styled-components";

export const StyledButton = styled.button`
  display: block;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  padding: ${(props) => props.theme.buttonPadding};
  border: none;
  cursor: pointer;

  @media only screen and (max-width: ${(props) => props.theme.ipad}) {
    padding: ${(props) => props.theme.buttonPadding};
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }

  &.save-btn {
    background-color: ${(props) => props.theme.saveButtonColor};
    &:hover {
      background-color: ${(props) => props.theme.saveButtonHoverColor};
    }
  }

  &.del-btn {
    background-color: ${(props) => props.theme.deleteButtonColor};
    &:hover {
      background-color: ${(props) => props.theme.deleteButtonHoverColor};
    }
  }

  &.search-btn {
    background-color: #007bff;
    color: #ffffff;

    &:hover {
    background-color: #0056b3;
    }
  }
`;
