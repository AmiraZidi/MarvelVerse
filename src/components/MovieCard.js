import React from 'react'
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <img src={movie.posterurl} alt={movie.name} />
        <div className="movie-info">
          <h3>{movie.name}</h3>
          <h3 className='rating'>
          <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                edit={false}
                value={movie.rating}
            />
          </h3>
          <p>{movie.date}</p>
        </div>
      </div>
    );
  }  
export default MovieCard