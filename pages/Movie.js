import React from "react";
import { useParams, NavLink, useLoaderData } from "react-router-dom";
import { movieData } from "../api";

export function loader ({ params }) {
  console.log(params)
  return movieData(params.id);
}

export default function Movie () {
  const movie = useLoaderData();
  
  return (
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
  );
}

  /*
  const params = useParams();
  const [movie, setMovie] = React.useState(null);
  
  
  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=1d5b80f4a2cdafc3280ef64abf5de7a7`).
    then(res => res.json()).
    then(data => {
      setMovie(data);
    });
  }, []);
  */
