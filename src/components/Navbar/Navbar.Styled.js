import { styled } from "styled-components";

export const StyledNavbar = styled.div`
  // styled component for navbar
  ul {
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
      a {
        margin: auto 20px;
        color: #000;
        font-size: 25px;
        font-weight: bold;
        text-decoration: none;
        @media only screen and (max-width: ${(props) => props.theme.mobile}) {
          font-size: 17px;
        }
      }
      h1 {
        a {
          font-size: 46px;
          color: #dc143c;
          @media only screen and (max-width: ${props => props.theme.mobile}) {
            font-size: 25px;
          }
        }
      }
    }
  }
`;
