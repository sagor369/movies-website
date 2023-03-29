import React, { useEffect, useState } from "react";
import Movie from "../movie/Movie";
import SiteBar from "../siteBar/SiteBar";
import "./Movies.css";


const Movies = () => {
    const [movies , setMovies] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])
    const [witchTime, setWitchTime] = useState(0)
    const hendleWitchTime = (time) =>{
        setWitchTime(time)
    }
  return (
    <div className="movies">
        <div>
            {
                movies.map(movie => <Movie movie={movie} witchTime = {hendleWitchTime}></Movie>)
            }
        </div>
     
      <div className="card text-center">
            <SiteBar witchVideo = {witchTime}></SiteBar>
      </div>
    </div>
  );
};

export default Movies;
