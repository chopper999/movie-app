import React, { useState } from "react";
import { baseUrlImage } from "../utils/fetcher";
import "../scss/movie-card.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Popup from "./Popup";
import StarRating from "./Rating";

interface MovieCardInterface {
  poster_path: string;
  title: string;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}
export function MovieCard({ data }: { data: MovieCardInterface }) {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <div
        className="movie-card"
        onClick={() => {
          setOpenPopup(true);
        }}
      >
        <LazyLoadImage
          src={baseUrlImage + data.poster_path}
          alt={data.title}
          effect="blur"
          style={{ width: "200px" }}
        />
        <h4 className="title">{data.title}</h4>
      </div>
      <Popup
        title={data.title}
        open={openPopup}
        onClose={() => setOpenPopup(false)}
      >
        <img
          className="img-container"
          src={baseUrlImage + data.backdrop_path}
          alt={data.title}
        />
        <div className="rating-container">
          <div className="vote-average">{data.vote_average}</div>
          <div className="rate-review-container">
            <StarRating rate={data.vote_average} />
            <p>{data.vote_count} reviews</p>
          </div>
          <div className="release-day">{data.release_date}</div>
        </div>
        <div className="divider"></div>
        <div className="description-container">
          <p className="description">{data.overview}</p>
        </div>
      </Popup>
    </>
  );
}
