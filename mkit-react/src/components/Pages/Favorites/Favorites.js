import React from 'react';
import { useSelector } from 'react-redux';

import classes from "./Favorites.module.css";
import FavoritesItem from './FavoritesItem/FavoritesItem';


export default function Favorites() {
 const favorites = useSelector(state => state.movies.favorites);

  return (
    <section className={classes.favorites}>
        <h1>Your Favorites</h1>
        <ul className={classes['favorites-movies']}>
            {favorites.map(favorite => {
               return  <FavoritesItem key={favorite.id} {...favorite} />
            })}
        </ul>
    </section>
  )
}
