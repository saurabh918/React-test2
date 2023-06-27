import { styled } from "styled-components";

export const StyledButton = styled.button`
  display: block;
  background-color: #ccc;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }

  &.save-btn {
    background-color: #3CB371;
    &:hover {
      background-color: #013220;
    }
  }

  &.del-btn {
    background-color: #FF0000;
    &:hover {
      background-color: #8B0000;
    }
  }
`