import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";

import classes from "./MovieDetails.module.css";

export default function MovieDetails() {
  const movies = useSelector(state => state.movies.items);
  const urlParts = window.location.href.split("/");
  const movieId = urlParts[urlParts.length - 1];
  const [movie, setMovie] = useState('');


  useEffect(() => {
    const movieData = movies.filter(movie => movie.id === movieId)[0];
    setMovie(movieData);
    console.log(movie);
  }, [movieId]);

  return (
    <Fragment>
    <MovieItem {...movie} />
    <div className={classes.details}>
      <h1>Your Review</h1>
      <p>Rating</p>
      <textarea placeholder="Your private notes an comments about the movie..."></textarea>
    </div>
    </Fragment>
  );
}
