import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import _debounce from "lodash/debounce";

import RecipeCard from "../RecipeCard";
import { searchRecipes } from "../../reducers/SearchSlice";

import { StyledSearch } from "./SearchComponent.Styled";
import { StyledRecipeContainer, StyledRecipeList } from "../RecipeList/RecipeList.Styled";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const dispatch = useDispatch();
  const {loading,searchResults} = useSelector((state) => state.search);

  const debouncedSearch = useMemo(
    () =>
      _debounce((query) => {
        setDebouncedQuery(query); // Set the debounced query after delay
      }, 1000),
    []
  );

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(searchRecipes(debouncedQuery));
    }
  }, [debouncedQuery, dispatch]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query); // Trigger the debounced function
  };
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
          {loading ? (<div>Loading...</div>) : searchQuery &&
            (searchResults && searchResults.length > 0 ? (
              searchResults.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  api="apiData"
                  saveButton={true}
                />
              ))
            ) : loading === null ? (<>
              <p>Loading...</p>
            </>) : (
              <p>No recipes found for <span className="search-query">{searchQuery}</span></p>
            ))}
        </StyledRecipeList>
      </StyledRecipeContainer>
    </StyledSearch>
  );
};

export default Search;
