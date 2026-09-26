import { css } from "styled-components";

export const fadeInUp = css`
  animation: appFadeInUp 0.32s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: appFadeIn 0.15s ease both;
  }
`;

export const fadeIn = css`
  animation: appFadeIn 0.3s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: appFadeIn 0.15s ease both;
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
  transition: transform 0.18s ease, background-color 0.2s ease,
    box-shadow 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:active {
    transform: scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.15s ease, box-shadow 0.15s ease,
      color 0.15s ease, border-color 0.15s ease;

    &:active {
      transform: none;
    }
  }
`;
