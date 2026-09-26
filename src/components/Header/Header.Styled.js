import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.surfaceColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  position: sticky;
  top: 0;
  z-index: 20;
`;
