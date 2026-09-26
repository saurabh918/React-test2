import { css } from "styled-components";

export const fadeInUp = css`
  animation: appFadeInUp 0.3s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const fadeIn = css`
  animation: appFadeIn 0.28s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const disableTransformMotion = css`
  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.15s ease, box-shadow 0.15s ease,
      background-color 0.15s ease, color 0.15s ease;

    &:hover {
      transform: none !important;
    }
  }
`;

export const interactivePress = css`
  transition: transform 0.15s ease, background-color 0.15s ease,
    box-shadow 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:active {
    transform: scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    &:active {
      transform: none;
    }
  }
`;
