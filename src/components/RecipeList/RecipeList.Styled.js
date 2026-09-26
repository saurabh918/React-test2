import { styled } from "styled-components";

import { fadeInUp } from "../../themes/motion";

export const StyledRecipeSection = styled.section`
  ${fadeInUp}
  min-width: 0;

  h2 {
    font-size: ${(props) => props.theme.fontSizeSectionTitle};
    font-weight: 600;
    line-height: 1.3;
    color: ${(props) => props.theme.secondaryColor};
    margin: 0 0 1rem;
  }
`;

export const StyledRecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 17.5rem), 1fr));
  gap: 1.25rem;
  align-items: stretch;
  min-width: 0;
  width: 100%;

  @media only screen and (max-width: ${(props) => props.theme.gridSingleColumn}) {
    grid-template-columns: 1fr;
  }
`;
