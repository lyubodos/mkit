import React from 'react';
import MovieItem from './MovieItem/MovieItem';

import classes from "./Movies.module.css";

const DUMMY_DATA = [
    {
        id: "m1",
        name: "Batman Begins",
        year: 2005,
        category: "action/superhero",
        description: "Batman Begins is a 2005 superhero film directed by Christopher Nolan and written by Nolan and David S. Goyer. Based on the DC Comics character Batman, it stars Christian Bale as Bruce Wayne / Batman, with Michael Caine, Liam Neeson, Katie Holmes, Gary Oldman, Cillian Murphy, Tom Wilkinson, Rutger Hauer, Ken Watanabe, and Morgan Freeman in supporting roles. The film reboots the Batman film series, telling the origin story of Bruce Wayne from the death of his parents to his journey to become Batman and his fight to stop Ra's al Ghul and the Scarecrow from plunging Gotham City into chaos. ",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Batman_Begins_Poster.jpg/220px-Batman_Begins_Poster.jpg",
        duration: 140,
        movieLink: "https://www.imdb.com/title/tt0372784"
    },

    {
        id: "m2",
        name: "Captain America: The First Avenger",
        year: 2011,
        category: "action/superhero",
        description: "Captain America: The First Avenger is a 2011 American superhero film based on the Marvel Comics character Captain America. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fifth film in the Marvel Cinematic Universe (MCU). The film was directed by Joe Johnston, written by Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside Tommy Lee Jones, Hugo Weaving, Hayley Atwell, Sebastian Stan, Dominic Cooper, Neal McDonough, Derek Luke, and Stanley Tucci. During World War II, Steve Rogers, a frail man, is transformed into the super-soldier Captain America and must stop the Red Skull (Weaving) from using the Tesseract as an energy source for world domination",
        imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1663/1663837_so.jpg",
        duration: 124,
        movieLink: "https://www.imdb.com/title/tt0458339"
    },

    {
        id: "m3",
        name: "Iron Man 2",
        year: 2010,
        category: "action/superhero",
        description: "Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the sequel to Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau and written by Justin Theroux, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Sam Rockwell, Mickey Rourke, and Samuel L. Jackson. Six months after Iron Man, Tony Stark resists calls from the United States government to hand over the Iron Man technology, which is causing his declining health. Meanwhile, Russian scientist Ivan Vanko (Rourke) uses his own version of the technology to pursue a vendetta against the Stark family.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg",
        duration: 125,
        movieLink: "https://www.imdb.com/title/tt1228705"
    },



]

export default function Movies() {
  return (
    <section className={classes.movies}>
        <h2 className={classes.movies_title}>MK It Movies</h2>
        {DUMMY_DATA.map(movie => {
            return <MovieItem key={movie.id} {...movie} />
        })}
    </section>
  )
}
