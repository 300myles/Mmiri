import React from "react";
export async function trendingMovies () {
  const [trending, popular] = await Promise.all ([
    fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=1d5b80f4a2cdafc3280ef64abf5de7a7&page=1").then(res => {
      if (!res.ok) {
        throw {
          message: "Failed to generate movies",
          statusText: res.statusText, 
          status: res.status
        }
      }
      return res.json()
    }), 
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d5b80f4a2cdafc3280ef64abf5de7a7&page=1").then(res => {
      if (!res.ok) {
        throw {
          message: "Failed to generate movies",
          statusText: res.statusText, 
          status: res.status
        }
      }
      return res.json()
    }), 
  ]);
  
  return { trending, popular };
}

export async function movieData (id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1d5b80f4a2cdafc3280ef64abf5de7a7`
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to generate movies",
      statusText: res.statusText, 
      status: res.status
    }
  }
  const data = await res.json();
  return data
}
/*
export async function trendingMovies () {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=1d5b80f4a2cdafc3280ef64abf5de7a7&page=1");
  const data = await res.json();
  return data
}
*/