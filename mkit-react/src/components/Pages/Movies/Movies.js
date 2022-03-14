import {Link} from 'react-router-dom';
import MovieItem from './MovieItem/MovieItem';
import { useSelector } from "react-redux";

import classes from "./Movies.module.css";


export default function Movies() {
   const movies = useSelector(state => state.movies.items);
   console.log(movies);

  return (
    <section className={classes.movies}>
        <h2 className={classes.movies_title}>MK It Movies</h2>
        {movies.map(movie => {
            return  <MovieItem key={movie.id} {...movie} />
            
        })}
    </section>
  )
}
