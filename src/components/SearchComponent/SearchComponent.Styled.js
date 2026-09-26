import { styled } from "styled-components";

import { fadeInUp } from "../../themes/motion";

export const StyledSearchResults = styled.div`
  ${fadeInUp}
`;

export const StyledSearch = styled.section`
  ${fadeInUp}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.cardRadius};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);

  h2 {
    font-size: ${(props) => props.theme.fontSizeSectionTitle};
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
    color: ${(props) => props.theme.secondaryColor};
  }

  .search-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  label {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => props.theme.secondaryColor};
  }

  input {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4;
    color: ${(props) => props.theme.secondaryColor};
    min-height: 2.75rem;
    padding: 0.75rem 0.875rem;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.surfaceColor};
    transition: border-color 0.15s ease, box-shadow 0.15s ease,
      background-color 0.15s ease;

    &::placeholder {
      color: ${(props) => props.theme.placeholderColor};
    }

    &:hover {
      border-color: ${(props) => props.theme.borderColorHover};
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      border-color: ${(props) => props.theme.brandColor};
      box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.15);
    }
  }

  .search-query {
    color: ${(props) => props.theme.secondaryColor};
    font-weight: 600;
  }
`;

export const StyledSearchSkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 17.5rem), 1fr));
  gap: 1.25rem;
  width: 100%;

  .skeleton-card {
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: ${(props) => props.theme.cardRadius};
    overflow: hidden;
    background-color: ${(props) => props.theme.surfaceColor};
  }

  .skeleton-block {
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.borderColor};
    background-color: ${(props) => props.theme.pageBackground};
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme.pageBackground} 0%,
      #e9ecef 50%,
      ${(props) => props.theme.pageBackground} 100%
    );
    background-size: 200% 100%;
    animation: appSkeletonShimmer 1.8s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      background-image: none;
    }
  }

  .skeleton-image {
    aspect-ratio: 4 / 3;
    width: 100%;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
  }

  .skeleton-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .skeleton-line {
    height: 0.75rem;
    border-radius: 999px;

    &.title {
      height: 1rem;
      width: 75%;
    }

    &.short {
      width: 55%;
    }
  }
`;
