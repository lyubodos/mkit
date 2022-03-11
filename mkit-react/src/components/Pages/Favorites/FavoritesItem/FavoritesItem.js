import React from 'react';

import classes from "./FavoritesItem.module.css";

export default function FavoritesItem(props) {
  return (
    <div className={classes.favorite}>
        <img className={classes['favorite-image']} src={props.imageUrl} />
    </div>
  )
}
