import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Main from "./Main.js";
import Movie from "./Movie.js";
import NotFound from "./NotFound.jsx";
import Error from "./Error.jsx";
import { loader as allMoviesLoader } from "./GetMovies.js";
import { loader as movieLoader } from "./Movie.js";


const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route 
        path="//"
        loader={allMoviesLoader}
        errorElement={<Error />}
        element={<Main />}
      />
      
      <Route 
        path="/:movie/:id"
        loader={movieLoader}
        errorElement={<Error />}
        element={<Movie />}
      />
      
      <Route 
        path="/*"
        errorElement={<Error />}
        element={<NotFound />}
      />
    </Route>
  ));
export default function App () {
  
  
  return(
    <RouterProvider router={router}/>
  );
}
