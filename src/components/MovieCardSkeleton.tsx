import React from "react";
import "../scss/movie-card-skeleton.scss";

export default function MovieCardSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
    </div>
  );
}
