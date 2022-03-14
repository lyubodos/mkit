import React from 'react';
import MovieItem from '../MovieItem/MovieItem';


import classes from "./MovieDetails.module.css";

const DUMMY_MOVIE = {
    id: "m1",
    name: "Batman Begins",
    year: 2005,
    category: "action/superhero",
    description: "Batman Begins is a 2005 superhero film directed by Christopher Nolan and written by Nolan and David S. Goyer. Based on the DC Comics character Batman, it stars Christian Bale as Bruce Wayne / Batman, with Michael Caine, Liam Neeson, Katie Holmes, Gary Oldman, Cillian Murphy, Tom Wilkinson, Rutger Hauer, Ken Watanabe, and Morgan Freeman in supporting roles. The film reboots the Batman film series, telling the origin story of Bruce Wayne from the death of his parents to his journey to become Batman and his fight to stop Ra's al Ghul and the Scarecrow from plunging Gotham City into chaos. ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Batman_Begins_Poster.jpg/220px-Batman_Begins_Poster.jpg",
    duration: 140,
    movieLink: "https://www.imdb.com/title/tt0372784"
}


export default function MovieDetails() {
  return (
    <div className={classes.details}>
       <MovieItem id={DUMMY_MOVIE.id} {...DUMMY_MOVIE} />
    </div>
  )
}
