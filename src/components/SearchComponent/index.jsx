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
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cardSize, setCartSize] = useState(4)

  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.search.searchResults);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setSearchInitiated(false);
    }
  };

  const handleSearch = () => {
    setSearchInitiated(true);
    fetchRecipes();
  };

  const handleKeyPress = (e) => {
    if (e.target.value !== "") {
      setSearchInitiated(true);
      setCartSize(4)
      fetchRecipes();
    }
  };

  const onScroll = () => {
    const scrollTop = window.scrollY
    const clientHeight = window.innerHeight
    const scrollHeight = document.documentElement.scrollHeight
    if(scrollTop + clientHeight + 2 >= scrollHeight) {
      setCartSize(prev => prev + 4)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])

  const fetchRecipes = async () => {
    setLoading(true)
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
        onKeyUp={handleKeyPress}
        placeholder="search more recipes"
      /><Button onClick={handleSearch} label={<BiSearch />} type="button" className="search-btn" />
      </div>
      <StyledRecipeContainer>
      <StyledRecipeList className="recipe-list">
        {searchInitiated  && loading ? <p>Loading</p> : 
          (<>{searchQuery && searchInitiated  &&
            (searchResults && searchResults.length > 0 ? (
              searchResults.slice(0,cardSize).map((recipe) => (
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
