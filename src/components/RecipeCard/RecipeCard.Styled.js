import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { disableTransformMotion } from "../../themes/motion";

export const StyledRecipeCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  max-width: 100%;
  background-color: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.cardRadius};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
  overflow: visible;
  transition: box-shadow 0.22s ease, border-color 0.18s ease,
    transform 0.22s ease;

  .card-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 1rem 1rem;
    margin-top: auto;
    border-top: 1px solid ${(props) => props.theme.borderColor};
    padding-top: 0.875rem;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${(props) => props.theme.borderColorHover};
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
      transform: translateY(-3px);
    }
  }

  ${disableTransformMotion}
`;

export const StyledCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-decoration: none;
  color: inherit;
  min-width: 0;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.brandColor};
    outline-offset: 2px;
    border-radius: ${(props) => props.theme.borderRadius};
  }

  &:focus-visible h3 {
    color: ${(props) => props.theme.brandColor};
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }
`;

export const StyledImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: ${(props) => props.theme.pageBackground};
  overflow: hidden;
  border-radius: ${(props) => props.theme.cardRadius} ${(props) => props.theme.cardRadius} 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1);
    transition: transform 0.25s ease;
  }

  ${StyledRecipeCard}:hover & img {
    @media (hover: hover) and (pointer: fine) {
      transform: scale(1.03);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
      transform: none !important;
    }
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1rem 0.875rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.35;
    color: ${(props) => props.theme.secondaryColor};
    transition: color 0.18s ease;
    overflow-wrap: break-word;
  }

  ${StyledCardLink}:hover h3 {
    @media (hover: hover) and (pointer: fine) {
      color: ${(props) => props.theme.brandColor};
    }
  }
`;

export const StyledMetaDetails = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.375rem;

  li {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    font-size: 0.8125rem;
    line-height: 1.4;
    color: ${(props) => props.theme.textMuted};
    padding: 0.25rem 0;
    border-bottom: 1px solid ${(props) => props.theme.pageBackground};

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .label {
    flex-shrink: 0;
    font-weight: 500;
  }

  .value {
    text-align: right;
    color: ${(props) => props.theme.secondaryColor};
    font-weight: 600;
    text-transform: capitalize;
    overflow-wrap: anywhere;
    min-width: 0;
  }
`;
