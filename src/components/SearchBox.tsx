import React, { useState } from "react";
import "../scss/search-box.scss";
import { Icon } from "@iconify/react";
import useDebounce from "../hooks/useDebounce";
import fetcher from "../utils/fetcher";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  _fetchFailMovieFromSearch,
  _fetchRequestMovieFromSearch,
  _fetchSuccessMovieFromSearch,
} from "../store/movieFromSearch";

export default function SearchBox() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch: (arg: any) => void = useAppDispatch();

  const handleSearchMovie = (searchInputParam: string) => {
    dispatch(_fetchRequestMovieFromSearch());
    fetcher().get(
      `/search/movie?query=${searchInputParam}&language=en-US&page=1&include_adult=false&region=US`,
      (result) => {
        if (result) {
          dispatch(
            _fetchSuccessMovieFromSearch({
              ...result,
              searchInput: searchInputParam,
            })
          );
        }
      },
      (error) => {
        if (error) {
          dispatch(_fetchFailMovieFromSearch(error));
        }
      }
    );
  };
  useDebounce(
    () => {
      handleSearchMovie(searchInput.trim());
    },
    [searchInput],
    700
  );
  return (
    <div className="search-box">
      <input
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <Icon
        height={20}
        icon={searchInput.trim().length ? "ci:close-sm" : "dashicons:search"}
        className={"icon-search " + (searchInput.trim().length ? "active" : "")}
        onClick={() => {
          if (searchInput.trim().length) {
            setSearchInput("");
          }
        }}
      />
    </div>
  );
}
