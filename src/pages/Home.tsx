import React, { useEffect, useState } from "react";
import { MovieList } from "../sections/home/MovieList";
import "../scss/home.scss";
import { SearchResult } from "../sections/home/SearchResult";
import { RootState } from "../store";
import { useAppSelector } from "../hooks/useAppDispatch";
import Popup from "../components/Popup";
export default function Home() {
  const { movieDataFromSearch } = useAppSelector((state: RootState) => state);
  const { movieData } = movieDataFromSearch;
  const [tab, setTab] = useState(1);

  return (
    <div className="home-container">
      {movieData.searchInput.length ? (
        <SearchResult />
      ) : (
        <>
          <div className="tab-container">
            <button
              className={"tab-btn " + (tab === 1 ? "active" : "")}
              data-tab="tab1"
              onClick={() => setTab(1)}
            >
              Now Playing
            </button>
            <button
              className={"tab-btn " + (tab === 2 ? "active" : "")}
              data-tab="tab2"
              onClick={() => setTab(2)}
            >
              Top Rated
            </button>
          </div>

          <div
            className={"tab-content " + (tab === 1 ? "active" : "")}
            id="tab1"
          >
            <MovieList content="now_playing" />
          </div>
          <div
            className={"tab-content " + (tab === 2 ? "active" : "")}
            id="tab2"
          >
            <MovieList content="top_rated" />
          </div>
        </>
      )}
    </div>
  );
}
