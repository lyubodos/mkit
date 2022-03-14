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
        name: "Batman Begins",
        year: 2005,
        category: "action",
        likes: 10,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

    },
    {
        id: "m3",
        name: "Batman Begins",
        year: 2005,
        category: "action",
        likes: 10,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

    },

    {
        id: "m4",
        name: "Batman Begins",
        year: 2005,
        category: "action",
        likes: 10,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

    },

    {
        id: "m5",
        name: "Batman Begins",
        year: 2005,
        category: "action",
        likes: 10,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

    },
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
