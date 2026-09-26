import { styled } from "styled-components";

import { fadeInUp } from "../../themes/motion";
export const StyledRecipesHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.25rem 0 2rem;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledHomeIntro = styled.section`
  ${fadeInUp}

  h1 {
    margin: 0 0 0.375rem;
    font-size: clamp(1.375rem, 3vw, 1.5rem);
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme.secondaryColor};
  }

  p {
    font-size: ${(props) => props.theme.fontSizeLead};
    line-height: ${(props) => props.theme.lineHeightLead};
    color: ${(props) => props.theme.textMuted};
    max-width: 42rem;
  }
`;
