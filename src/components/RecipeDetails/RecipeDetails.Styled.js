import { styled } from "styled-components";

export const StyledRecipeDetails = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: center;

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
}

ul {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

li {
  margin: 15px;
}

.recipe-info {
  flex-basis: 25%;
}

.recipe-image {
  flex-basis: 50%;
  img {
    width: 300px;
  }
}
`;