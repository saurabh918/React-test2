import { styled } from "styled-components";

export const StyledRecipeCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-basis: 20%;

  h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

p {  
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
}

ul {
  margin-top: 10px;
  margin-bottom: 20px;
}

li {
  font-size: 14px;
  color: #333;
}

img {
  max-width: 100%;
  height: 200px;
  border-radius: 4px;
  margin-top: 20px;
}
`