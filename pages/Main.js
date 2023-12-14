import React from "react";
import Movies, { loader as movieLoader } from "./GetMovies";
import TopNav from "./TopNav.js";


export default function Main () {
  
  const APIKEY = "1d5b80f4a2cdafc3280ef64abf5de7a7";
  
  return (
    <div>
      <TopNav />
      
      <div className="movieland">
      
      <Movies 
        id="Trending now"
        name="trending"
        link="trending.html"
        url= "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=1d5b80f4a2cdafc3280ef64abf5de7a7&page="
        />
        
        
        
        <div className="movie-div"></div>
        
        <img className="coming-soon" src="images/coming-soon.png" />
        
      </div>
    </div>
  );
}

/* <Movies
id = "Popular movies"
name = "popular-movies"
link = "popular.html"
url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d5b80f4a2cdafc3280ef64abf5de7a7&page=" /
  >

  <Movies 
      id="Top rated"
      name="most-rated"
      link="rated.html"
      url= "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=1d5b80f4a2cdafc3280ef64abf5de7a7&vote_count.gte=10000&page="
      />

  <
  Movies
id = "Coming soon"
name = "latest-movies"
link = "latest.html"
url = "https://api.themoviedb.org/3/discover/movie?api_key=1d5b80f4a2cdafc3280ef64abf5de7a7&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=true&page=" /
  >
*/