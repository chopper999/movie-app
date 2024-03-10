import React, { useEffect, useState } from "react";
import fetcher from "../../utils/fetcher";
import "./../../scss/movie-list.scss";
import { Loader } from "../../components/Loader";
import { MovieCard } from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import {
  _fetchFailMovieFromSearch,
  _fetchRequestMovieFromSearch,
  _fetchSuccessMovieFromSearch,
} from "../../store/movieFromSearch";
import ResultNotFound from "../../components/ResultNotFound";
import MovieCardSkeleton from "../../components/MovieCardSkeleton";

export const SearchResult = () => {
  const [page, setPage] = useState(1);
  const { movieDataFromSearch } = useAppSelector((state) => state);
  const { loading, movieData, error } = movieDataFromSearch;
  const dispatch: (arg: any) => void = useAppDispatch();

  const handleSearchMovie = () => {
    dispatch(_fetchRequestMovieFromSearch());
    fetcher().get(
      `/search/movie?query=${movieData.searchInput}&language=en-US&page=${page}&include_adult=false&region=US`,
      (result) => {
        if (result) {
          scrollToTopContent();
          dispatch(
            _fetchSuccessMovieFromSearch({
              ...result,
              searchInput: movieData.searchInput,
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

  const scrollToTopContent = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleSearchMovie();
  }, [page]);

  return (
    <>
      {loading ? (
        <div className="movie-list-container" id="movie-list-container">
          <div className="movie-list">
            {Array(10)
              .fill("")
              .map((_, i) => (
                <MovieCardSkeleton />
              ))}
          </div>
        </div>
      ) : (
        <>
          <h2 style={{ textAlign: "start" }}>
            The results from '{movieData.searchInput}'
          </h2>
          <div className="movie-list-container" id="movie-list-container">
            <div className="movie-list">
              {movieData.results?.length ? (
                movieData.results.map((item: any, index: number) => (
                  <MovieCard key={index} data={item} />
                ))
              ) : (
                <ResultNotFound />
              )}
            </div>
          </div>
        </>
      )}
      {movieData.total_pages > 1 ? (
        <div style={{ marginBottom: "40px" }}>
          <Pagination
            page={page}
            totalPage={movieData.total_pages && movieData.total_pages}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
