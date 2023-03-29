import React from "react";

const Movie = (props) => {
  const { description, poster, movieName, watchTime, imdbRating } = props.movie;
  const witchTime = props.witchTime
  return (
    <div className="card mb-3 py-3">
      <div className="m-auto w-50 movies-img ">
        <div className="text-center w-50 m-auto">
        <img className="w-50 h-25" src={poster} alt="movise image" />
        <h2>{movieName}</h2>
        </div>
        <p>{description}</p>
        <div className="d-flex justify-content-between">
          <p>WatchTime: {watchTime} min </p>
          <p>Rating: {imdbRating} ster</p>
        </div>
        <button onClick={() => witchTime(watchTime)} className="bg-primary border border-none py-3 rounded text-light w-100">Book Now</button>
      </div>
    </div>
  );
};

export default Movie;
