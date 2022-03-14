import React from 'react';

import classes from "./Favorites.module.css";
import FavoritesItem from './FavoritesItem/FavoritesItem';

const DUMMY_DATA = [
    {
        id: "m1",
        name: "Batman Begins",
        year: 2005,
        category: "action",
        likes: 10,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

    },

    {
        id: "m2",
        name: "Iron Man 2",
        year: 2010,
        category: "action",
        likes: 5,
        imageUrl: "https://play-lh.googleusercontent.com/iJ7eiIU3Mgw1GLS52cbWLj0ycC0TqmC68UJmUd6QzGtqsFxAmOzouyheto9jlIGPhZc"

    },

    {
        id: "m3",
        name: "It",
        year: 2017,
        category: "horror",
        likes: 5,
        imageUrl: "https://xcapefun.com/wp-content/uploads/2018/11/it-2017-movie-poster.jpg"

    },

    {
        id: "m2",
        name: "Iron Man 2",
        year: 2010,
        category: "action",
        likes: 5,
        imageUrl: "https://play-lh.googleusercontent.com/iJ7eiIU3Mgw1GLS52cbWLj0ycC0TqmC68UJmUd6QzGtqsFxAmOzouyheto9jlIGPhZc"

    },

    {
        id: "m2",
        name: "Iron Man 2",
        year: 2010,
        category: "action",
        likes: 5,
        imageUrl: "https://play-lh.googleusercontent.com/iJ7eiIU3Mgw1GLS52cbWLj0ycC0TqmC68UJmUd6QzGtqsFxAmOzouyheto9jlIGPhZc"

    }
]

export default function Favorites() {
  return (
    <section className={classes.favorites}>
        <h1>Your Favorites</h1>
        <ul className={classes['favorites-movies']}>
            {DUMMY_DATA.map(movie => {
               return  <FavoritesItem key={movie.id} {...movie} />
            })}
        </ul>
    </section>
  )
}
