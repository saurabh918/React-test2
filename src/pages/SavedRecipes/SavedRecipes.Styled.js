import { styled } from "styled-components";

export const StyledSavedRecipes = styled.div`
  background-color: #f9f9f9;
  padding: 20px;

  h2 {
    font-size: 24px;
    color: ${props => props.theme.secondaryColor};
    margin-bottom: 10px;
  }
`;
