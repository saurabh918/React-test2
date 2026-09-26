import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { fadeInUp, interactivePress } from "../../themes/motion";

export const StyledStatusMessage = styled.div`
  ${fadeInUp}
  padding: 1.25rem 1.5rem;
  background-color: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.cardRadius};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);

  h1,
  h2 {
    margin: 0 0 0.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.35;
    color: ${(props) => props.theme.secondaryColor};
  }

  p {
    margin: 0;
    font-size: ${(props) => props.theme.fontSizeLead};
    line-height: ${(props) => props.theme.lineHeightLead};
    color: ${(props) => props.theme.textMuted};
  }

  .status-code {
    margin: 0 0 0.375rem;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${(props) => props.theme.brandColor};
  }

  &.status-error {
    border-color: ${(props) => props.theme.errorBorder};
    background-color: ${(props) => props.theme.errorSurface};

    h2 {
      color: ${(props) => props.theme.errorHeading};
    }
  }

  &.status-empty {
    text-align: center;
    width: 100%;
    max-width: 26rem;
    padding: clamp(1.5rem, 4vw, 1.75rem) clamp(1.25rem, 4vw, 1.5rem);

    .status-code {
      margin-bottom: 0.5rem;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
    }

    h1 {
      margin-bottom: 0.625rem;
      font-size: clamp(1.25rem, 3.5vw, 1.375rem);
      font-weight: 700;
      line-height: 1.25;
    }

    p {
      max-width: 22rem;
      margin-inline: auto;
    }
  }
`;

export const StyledStatusAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  margin-top: 1rem;
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
