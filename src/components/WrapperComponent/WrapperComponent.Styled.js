import { styled } from "styled-components";

export const StyleWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.desktop};
  margin: 0 auto;
  padding-inline: clamp(1rem, 4vw, 1.5rem);
  box-sizing: border-box;
`;
