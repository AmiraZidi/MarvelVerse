import React, { useState } from "react";
import MovieCard from "./MovieCard";
import ReactStars from "react-rating-stars-component";

function MoviesList({ text, movies }) {
  const [rate, setrate] = useState("");

  return (
    <div className="marvel-movies">
      <div className="filter">
        <h2 className="title">Movies</h2>
        <div className="f-rating">
          <h4 className="title">Filter By Rating: </h4>
          <ReactStars
            count={5}
            size={24}
            activeColor="#D32F2F"
            edit={true}
            onChange={(newRating) => setrate(newRating)}
          />
        </div>
      </div>
      <div className="movies">
        {movies
          .filter(
            (el) =>
              el.name.toLowerCase().includes(text.toLowerCase()) &&
              el.rating >= rate
          )
          .map((el) => (<MovieCard movie={el} />)).reverse()}
      </div>
    </div>
  );
}

export default MoviesList;
