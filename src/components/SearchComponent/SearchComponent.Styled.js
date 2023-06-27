import { styled } from "styled-components";

export const StyledSearch = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;

  input {
    margin-left: 5%;
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: ${props => props.theme.secondaryColor};
    padding: 8px;
    border: none;
    border-radius: 4px;

    &:focus {
      outline: none;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
  }

  .search-query {
    color: #000;
    font-weight: bold;
  }
`;
