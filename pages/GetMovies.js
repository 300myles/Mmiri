import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { trendingMovies } from "../api"

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export function loader () {
  return trendingMovies();
}


export default function Movies (props) {
  const moviesData = useLoaderData();
  
  let moviesBOX;
  
  ((props.name === "trending") && (moviesBOX = moviesData.trending.results));
  
  ((props.name === "popular") && (moviesBOX = moviesData.popular.results))

  const movies = moviesBOX.map(movie => {
    return (
      <div key={movie.id} className="movie">
        <Link to={`/${movie.title || movie.name}/${movie.id}`}>
          <div className="movie-card">
            
            <div className="image">
              <img src={IMG_PATH + movie.poster_path} className="thumbnail" />
            </div>
              
            <h3>
              {movie.title || movie.name}
            </h3>
            
          </div>
        </Link>
      </div>
      
    );
  });
  
  
  
  return (
    <div className="movie-div">
      
      <a className="query-link" href={props.link}>
        <h2 className="sort-name">
          {props.id}
        </h2>
      </a>
      
      <div className="movies">
        {movies}
      </div>
    </div>
    
  );
  
}

  /*
  for (let i = 0; i < 1; i++) {
    const URL = props.url + (i + 1);
    
    React.useEffect(() => {
      fetch(URL).then(res => res.json())
      .then(data => {
        const movies = data.results
        setMoviesBOX(prevState => [
          ...prevState, 
          ...movies
        ])
      })
    }, [i]);
    
  }
  
  if (moviesBOX === []) {
    return <h2>Loading...</h2>
  }
  */
