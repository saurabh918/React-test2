import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import _debounce from "lodash/debounce";

import RecipeCard from "../RecipeCard";
import { searchRecipes } from "../../reducers/SearchSlice";
import { StyledStatusMessage } from "../../elements/StatusMessage/StatusMessage.Styled";

import {
  StyledSearch,
  StyledSearchResults,
  StyledSearchSkeletonGrid,
} from "./SearchComponent.Styled";
import { StyledRecipeList } from "../RecipeList/RecipeList.Styled";

const SEARCH_INPUT_ID = "recipe-search-input";
const SEARCH_RESULTS_ID = "recipe-search-results";

const SearchLoading = () => (
  <StyledSearchSkeletonGrid aria-busy="true" aria-label="Searching recipes">
    {[0, 1, 2].map((item) => (
      <div key={item} className="skeleton-card">
        <div className="skeleton-block skeleton-image" />
        <div className="skeleton-body">
          <div className="skeleton-block skeleton-line title" />
          <div className="skeleton-block skeleton-line short" />
        </div>
      </div>
    ))}
  </StyledSearchSkeletonGrid>
);

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const dispatch = useDispatch();
  const { loading, searchResults, error, resultsQuery } = useSelector(
    (state) => state.search
  );

  const debouncedSearch = useMemo(
    () =>
      _debounce((query) => {
        setDebouncedQuery(query);
      }, 1000),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    const query = debouncedQuery.trim();
    if (!query) {
      return undefined;
    }

    const request = dispatch(searchRecipes(query));
    return () => {
      request.abort();
    };
  }, [debouncedQuery, dispatch]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query.trim());
  };

  const trimmedQuery = searchQuery.trim();
  const isCurrentResult =
    trimmedQuery !== "" && trimmedQuery === resultsQuery && !loading;

  const searchResultsKey = !trimmedQuery
    ? "idle"
    : !isCurrentResult
    ? `loading-${trimmedQuery}`
    : error
    ? `error-${resultsQuery}`
    : `results-${resultsQuery}-${searchResults?.length ?? 0}`;

  let searchStatus = null;
  if (trimmedQuery) {
    if (!isCurrentResult) {
      searchStatus = <SearchLoading />;
    } else if (error) {
      searchStatus = (
        <StyledStatusMessage className="status-error" role="alert">
          <h2>Unable to load recipes</h2>
          <p>Please check your connection and try again.</p>
        </StyledStatusMessage>
      );
    } else if (searchResults && searchResults.length > 0) {
      searchStatus = (
        <StyledRecipeList className="recipe-list">
          {searchResults.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              api="apiData"
              saveButton={true}
            />
          ))}
        </StyledRecipeList>
      );
    } else {
      searchStatus = (
        <StyledStatusMessage>
          <h2>No recipes found</h2>
          <p>
            We couldn&apos;t find a recipe matching{" "}
            <span className="search-query">&quot;{trimmedQuery}&quot;</span>.
          </p>
        </StyledStatusMessage>
      );
    }
  }

  return (
    <StyledSearch aria-labelledby="search-section-heading">
      <h2 id="search-section-heading">Search recipes</h2>
      <div className="search-field">
        <label htmlFor={SEARCH_INPUT_ID}>Search TheMealDB</label>
        <input
          id={SEARCH_INPUT_ID}
          type="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for more recipes..."
          autoComplete="off"
          aria-controls={trimmedQuery ? SEARCH_RESULTS_ID : undefined}
        />
      </div>
      {searchStatus && (
        <StyledSearchResults id={SEARCH_RESULTS_ID} key={searchResultsKey}>
          {searchStatus}
        </StyledSearchResults>
      )}
    </StyledSearch>
  );
};

export default Search;
