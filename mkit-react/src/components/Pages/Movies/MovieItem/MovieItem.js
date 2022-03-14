import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { movieActions } from '../../../../store';

import classes from "./MovieItem.module.css";

export default function MovieItem(props) {
  const {id, name, year, category, description, imageUrl,duration, movieLink} = props;
  const history = useHistory();
  const movies = useSelector(state => state.movies.items)
  const dispatch = useDispatch();

  const detailsHandler = () => {
    history.push(`movies/${props.id}`);

  }

  const addToFavorites = () => {
    dispatch(movieActions.addToFavorites({...props}))
  }

  return (
    <div className={classes.movie}>
        <img  src={props.imageUrl} alt="movie-picture"/>
        <div className={classes['movie-desc']}>
            <h2 onClick={detailsHandler} >{props.name} ({props.year})</h2>
            <p>{props.category}|{props.duration}min</p>
            <p>{props.description}</p>
            <a href={props.movieLink}>Visit official site</a>
            <button onClick={addToFavorites}>{!props.favs && 'Add To Favorites'}</button>
        </div>
    </div>
  )
}
