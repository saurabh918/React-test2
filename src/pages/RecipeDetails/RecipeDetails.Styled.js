import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { fadeInUp, interactivePress } from "../../themes/motion";

export const StyledDetailsPage = styled.div`
  padding: 1.25rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  width: fit-content;
  min-height: 2.75rem;
  padding: 0.25rem 0;
  font-size: ${(props) => props.theme.fontSizeLead};
  font-weight: 600;
  color: ${(props) => props.theme.textMuted};
  text-decoration: none;
  ${interactivePress}

  &:hover {
    color: ${(props) => props.theme.brandColor};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.brandColor};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const StyledHeroCard = styled.section`
  ${fadeInUp}
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: 1.75rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.cardRadius};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);

  @media only screen and (max-width: ${(props) => props.theme.ipad}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: ${(props) => props.theme.mobile}) {
    padding: 1rem;
    gap: 1.25rem;
  }
`;

export const StyledImageFrame = styled.div`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  background-color: ${(props) => props.theme.pageBackground};
  border: 1px solid ${(props) => props.theme.borderColor};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;

  h1 {
    margin: 0;
    font-size: clamp(1.375rem, 2.5vw, 2rem);
    line-height: 1.25;
    font-weight: 700;
    color: ${(props) => props.theme.secondaryColor};
    overflow-wrap: break-word;
  }
`;

export const StyledMetaBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.625rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme.pageBackground};
    border: 1px solid ${(props) => props.theme.borderColor};
    font-size: 0.8125rem;
    font-weight: 600;
    color: ${(props) => props.theme.secondaryColor};
    line-height: 1.2;
    text-transform: capitalize;
  }
`;

export const StyledMetaFacts = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;

  li {
    font-size: ${(props) => props.theme.fontSizeLead};
    line-height: ${(props) => props.theme.lineHeightLead};
    color: ${(props) => props.theme.textMuted};

    strong {
      color: ${(props) => props.theme.secondaryColor};
      font-weight: 600;
    }
  }
`;

export const StyledRecipeActions = styled.div`
  margin-top: 0.25rem;
  max-width: 20rem;

  @media only screen and (max-width: ${(props) => props.theme.mobile}) {
    max-width: none;
  }
`;

export const StyledContentSection = styled.section`
  ${fadeInUp}
  padding: 1.5rem;
  min-width: 0;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.cardRadius};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);

  h2 {
    margin: 0 0 1rem;
    font-size: ${(props) => props.theme.fontSizeSectionTitle};
    font-weight: 600;
    line-height: 1.3;
    color: ${(props) => props.theme.secondaryColor};
  }

  @media only screen and (max-width: ${(props) => props.theme.mobile}) {
    padding: 1rem;
  }

  & + & {
    animation-delay: 60ms;

    @media (prefers-reduced-motion: reduce) {
      animation-delay: 0ms;
    }
  }
`;

export const StyledIngredientList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.625rem;

  @media only screen and (min-width: ${(props) => props.theme.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem 1.25rem;
  }

  li {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    font-size: ${(props) => props.theme.fontSizeLead};
    line-height: 1.45;
    color: ${(props) => props.theme.secondaryColor};
    padding: 0.625rem 0.75rem;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.pageBackground};
    border: 1px solid ${(props) => props.theme.borderColor};
  }

  .measure {
    flex-shrink: 0;
    font-weight: 600;
    color: ${(props) => props.theme.textMuted};
    min-width: 3.25rem;
    max-width: 40%;
    overflow-wrap: anywhere;
  }

  .ingredient {
    font-weight: 500;
  }
`;

export const StyledInstructionSteps = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.875rem;
    align-items: start;
  }

  .step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme.pageBackground};
    border: 1px solid ${(props) => props.theme.borderColor};
    font-size: 0.8125rem;
    font-weight: 700;
    color: ${(props) => props.theme.brandColor};
  }

  .step-text {
    margin: 0;
    font-size: ${(props) => props.theme.fontSizeLead};
    line-height: 1.6;
    color: ${(props) => props.theme.secondaryColor};
    padding-top: 0.125rem;
    overflow-wrap: break-word;
    min-width: 0;
  }
`;

export const StyledInstructionText = styled.div`
  font-size: ${(props) => props.theme.fontSizeLead};
  line-height: 1.7;
  color: ${(props) => props.theme.secondaryColor};
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  min-width: 0;
`;

export const StyledStatusPanel = styled.div`
  ${fadeInUp}
  padding: 2rem 1.5rem;
  text-align: center;
  background-color: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.cardRadius};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);

  h1 {
    margin: 0 0 0.5rem;
    font-size: 1.375rem;
    font-weight: 700;
    color: ${(props) => props.theme.secondaryColor};
  }

  p {
    margin: 0 0 1.25rem;
    font-size: 0.9375rem;
    color: ${(props) => props.theme.textMuted};
    line-height: 1.5;
  }

  &.status-error {
    border-color: ${(props) => props.theme.errorBorder};
    background-color: ${(props) => props.theme.errorSurface};

    h1 {
      color: ${(props) => props.theme.errorHeading};
    }
  }
`;

export const StyledLoadingSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .skeleton-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
    gap: 1.75rem;
    padding: 1.5rem;
    background-color: ${(props) => props.theme.surfaceColor};
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.theme.cardRadius};

    @media only screen and (max-width: ${(props) => props.theme.ipad}) {
      grid-template-columns: 1fr;
    }
  }

  .skeleton-block {
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.borderColor};
    background-color: ${(props) => props.theme.pageBackground};
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme.pageBackground} 0%,
      #eceff1 50%,
      ${(props) => props.theme.pageBackground} 100%
    );
    background-size: 200% 100%;
    animation: appSkeletonShimmer 2s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      background-image: none;
    }
  }

  .skeleton-image {
    aspect-ratio: 4 / 3;
    width: 100%;
  }

  .skeleton-lines {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.25rem 0;
  }

  .skeleton-line {
    height: 0.875rem;
    border-radius: 999px;

    &.title {
      height: 1.75rem;
      width: 75%;
    }

    &.short {
      width: 45%;
    }

    &.medium {
      width: 65%;
    }

    &.long {
      width: 90%;
    }
  }

  .skeleton-section {
    padding: 1.5rem;
    background-color: ${(props) => props.theme.surfaceColor};
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.theme.cardRadius};
  }
`;
