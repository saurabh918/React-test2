import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import RecipeCard from "../RecipeCard";

import { setSearchResult } from "../../reducers/SearchSlice";

import { StyledSearch } from "./SearchComponent.Styled";
import {
  StyledRecipeContainer,
  StyledRecipeList,
} from "../RecipeList/RecipeList.Styled";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.search.searchResults);

  const handleInputChange = (e) => {
    //Update search value when user starts to write
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // fetch recipes when search value is updated
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        dispatch(setSearchResult(response.data.meals));
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, [searchQuery, dispatch]);

  return (
    <StyledSearch>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="search more recipes"
      />
      <StyledRecipeContainer>
        <StyledRecipeList className="recipe-list">
          {searchQuery &&
            searchResults &&
            searchResults.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                api="apiData"
                saveButton={true}
              />
            ))}
        </StyledRecipeList>
      </StyledRecipeContainer>
    </StyledSearch>
  );
};

export default Search;
