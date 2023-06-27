import { styled } from "styled-components";

export const StyledRecipeContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;

  h2 {
    font-size: 24px;
    color: ${props => props.theme.secondaryColor};
    margin-bottom: 20px;
  }
`;

export const StyledRecipeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
