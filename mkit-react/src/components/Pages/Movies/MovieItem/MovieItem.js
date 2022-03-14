import React from 'react';

import classes from "./MovieItem.module.css";

export default function MovieItem(props) {
  return (
    <div className={classes.movie}>
        <img src={props.imageUrl}/>
        <div className={classes['movie-desc']}>
            <h2>{props.name}({props.year})</h2>
            <p>{props.category}|{props.duration}min</p>
            <p>{props.description}</p>
            <a href={props.movieLink}>Visit official site</a>
            <button>Add To Favorites</button>
        </div>
    </div>
  )
}
