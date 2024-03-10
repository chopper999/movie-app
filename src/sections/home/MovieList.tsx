import React, { useCallback, useEffect, useState } from "react";
import fetcher from "../../utils/fetcher";
import "./../../scss/movie-list.scss";
import { Loader } from "../../components/Loader";
import { MovieCard } from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { toast } from "react-toastify";
import MovieCardSkeleton from "../../components/MovieCardSkeleton";

export const MovieList = ({ content }: { content: string }) => {
  const [list, setList] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getList = () => {
    setIsProcessing(true);
    fetcher().get(
      `/movie/${content}?language=en-US&page=${page}`,
      (result: any) => {
        setIsProcessing(false);
        setList(result.results);
        setTotalPage(result.total_pages);
        scrollToTopContent();
      },
      (error: any) => {
        toast.error(error);
        setIsProcessing(false);
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
    getList();
  }, [page]);
  return (
    <>
      {isProcessing ? (
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
        <div className="movie-list-container" id="movie-list-container">
          <div className="movie-list">
            {list.map((item, index) => (
              <MovieCard key={index} data={item} />
            ))}
          </div>
        </div>
      )}
      {list.length && (
        <div style={{ marginBottom: "40px" }}>
          <Pagination
            page={page}
            totalPage={totalPage && totalPage}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      )}
    </>
  );
};
