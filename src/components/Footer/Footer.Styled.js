import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  margin-top: auto;
  padding: 1.25rem 0 1.5rem;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.surfaceColor};
  text-align: center;
  font-size: ${(props) => props.theme.fontSizeFooter};
  line-height: ${(props) => props.theme.lineHeightLead};
  color: ${(props) => props.theme.textMuted};
  overflow-wrap: anywhere;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    margin: 0 auto;
    max-width: 28rem;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  .footer-product {
    font-weight: 600;
    color: ${(props) => props.theme.secondaryColor};
    letter-spacing: 0.01em;
  }

  .footer-meta {
    font-size: inherit;
  }

  @media only screen and (min-width: ${(props) => props.theme.mobileMedium}) {
    p {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.35rem;
    }

    .footer-meta::before {
      content: "·";
      margin-inline-end: 0.35rem;
      color: ${(props) => props.theme.borderColorHover};
      font-weight: 400;
    }
  }
`;
