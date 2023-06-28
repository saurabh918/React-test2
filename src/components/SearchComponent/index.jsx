import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BiSearch } from "react-icons/bi";

import RecipeCard from "../RecipeCard";

import Button from "../../elements/Button";

import { setSearchResult } from "../../reducers/SearchSlice";

import { StyledSearch } from "./SearchComponent.Styled";
import { StyledRecipeContainer,StyledRecipeList} from "../RecipeList/RecipeList.Styled";


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.search.searchResults);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchButtonClicked(true)
    fetchRecipes();
  };

  const handleKeyPress = (e) => {
    console.log("key enter")
    if (e.key === "Enter") {
      setSearchButtonClicked(true);
      fetchRecipes();
    }
  };

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      dispatch(setSearchResult(response.data.meals));
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  };

  return (
    <StyledSearch>
      <div className="search-section">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="search more recipes"
      /><Button onClick={handleSearch} label={<BiSearch />} type="button" className="search-btn" />
      </div>
      <StyledRecipeContainer>
      <StyledRecipeList className="recipe-list">
        {searchButtonClicked && loading ? <p>Loading</p> : 
          (<>{searchQuery && searchButtonClicked &&
            (searchResults && searchResults.length > 0 ? (
              searchResults.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  api="apiData"
                  saveButton={true}
                />
              ))
            ) : (
              <p>No recipes found for <span className="search-query">{searchQuery}</span></p>
            ))}</>)}
        </StyledRecipeList>
      </StyledRecipeContainer>
    </StyledSearch>
  );
};

export default Search;
