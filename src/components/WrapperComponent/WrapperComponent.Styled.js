import { styled } from "styled-components";

export const StyleWrapper = styled.div` // styled component for wrapper
  max-width: ${props => props.theme.desktop};
  width: 95%;
  margin: 0 auto;
`;
