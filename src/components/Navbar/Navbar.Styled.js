import { styled } from "styled-components";

import { interactivePress } from "../../themes/motion";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.875rem 0;
  min-height: 3.5rem;
  min-width: 0;
  width: 100%;

  .site-brand {
    margin: 0;
    min-width: 0;
    flex: 1 1 auto;
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    line-height: 1.2;
    font-weight: 700;

    a {
      color: ${(props) => props.theme.brandColor};
      text-decoration: none;
      ${interactivePress}

      &:hover {
        color: ${(props) => props.theme.brandColorHover};
      }

      &:focus-visible {
        outline: 2px solid ${(props) => props.theme.brandColor};
        outline-offset: 3px;
        border-radius: 4px;
      }
    }
  }

  .saved-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    min-height: 2.75rem;
    padding: 0.5rem 0.875rem;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme.borderColor};
    background-color: ${(props) => props.theme.surfaceColor};
    color: ${(props) => props.theme.secondaryColor};
    font-size: 0.9375rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    ${interactivePress}

    svg {
      color: ${(props) => props.theme.brandColor};
      flex-shrink: 0;
    }

    .count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 1.375rem;
      height: 1.375rem;
      padding: 0 0.375rem;
      border-radius: 999px;
      background-color: ${(props) => props.theme.pageBackground};
      font-size: 0.8125rem;
      font-weight: 700;
      color: ${(props) => props.theme.secondaryColor};
    }

    &:hover {
      border-color: ${(props) => props.theme.borderColorHover};
      background-color: ${(props) => props.theme.pageBackground};
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
    }

    &:focus-visible {
      outline: 2px solid ${(props) => props.theme.brandColor};
      outline-offset: 2px;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.mobile}) {
    .saved-link {
      font-size: 0.8125rem;
      padding: 0.4375rem 0.625rem;
      gap: 0.375rem;

      .saved-label-full {
        display: none;
      }
    }
  }

  @media only screen and (min-width: ${(props) => props.theme.mobile}) {
    .saved-link .saved-label-short {
      display: none;
    }
  }
`;
