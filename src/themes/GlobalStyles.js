import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.secondaryColor};
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  #root {
    flex: 1;
  }

  footer {
    margin-top: auto;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 0;
    font-weight: 600;
  }

  h3,
  h3 span {
    font-size: 1.125rem;
    line-height: 1.35;
    margin: 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
  }

  @keyframes appFadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes appFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes appSkeletonShimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export default GlobalStyle;
