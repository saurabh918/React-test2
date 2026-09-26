import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { fadeIn, fadeInUp, interactivePress } from "../../themes/motion";
import { StyledRecipeList } from "../../components/RecipeList/RecipeList.Styled";

export const StyledSavedPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.25rem 0 2rem;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledPageIntro = styled.header`
  ${fadeInUp}

  h1 {
    margin: 0 0 0.375rem;
    font-size: clamp(1.375rem, 3vw, 1.5rem);
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme.secondaryColor};
  }

  p {
    margin: 0;
    font-size: ${(props) => props.theme.fontSizeLead};
    line-height: ${(props) => props.theme.lineHeightLead};
    color: ${(props) => props.theme.textMuted};
    max-width: 42rem;
  }
`;

export const StyledSavedGrid = styled(StyledRecipeList)`
  ${fadeInUp}
`;

export const StyledEmptyState = styled.section`
  ${fadeInUp}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  padding: clamp(1.75rem, 5vw, 2.5rem) clamp(1rem, 4vw, 1.5rem);
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  background-color: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.cardRadius};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);

  .empty-icon {
    ${fadeIn}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme.pageBackground};
    border: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.brandColor};
    font-size: 1.375rem;
    margin-bottom: 0.25rem;
  }

  h2 {
    margin: 0;
    font-size: ${(props) => props.theme.fontSizeSectionTitle};
    font-weight: 600;
    line-height: 1.3;
    color: ${(props) => props.theme.secondaryColor};
  }

  p {
    margin: 0;
    max-width: 22rem;
    font-size: ${(props) => props.theme.fontSizeLead};
    line-height: ${(props) => props.theme.lineHeightLead};
    color: ${(props) => props.theme.textMuted};
  }
`;

export const StyledBrowseLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  margin-top: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.brandColor};
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  ${interactivePress}

  &:hover {
    background-color: ${(props) => props.theme.brandColorHover};
    box-shadow: 0 2px 10px rgba(196, 30, 58, 0.22);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.brandColor};
    outline-offset: 2px;
  }
`;
