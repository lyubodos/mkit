import { Fragment } from "react";
import { Link } from 'react-router-dom';

import classes from "./Home.module.css";
import heroImg from "../../../assets/movie-cover.jpeg";
import Favorites from "../Favorites/Favorites";



export default function Home() {



  return (
    <Fragment>
    <section className={classes.hero}>
      <div className={classes["hero-image"]}>
        <img src={heroImg} alt="movie-cover" />
      </div>
      <div className={classes['hero-summary']}>
          <h1>MK It Movie Collection</h1>
          <p> Welcome to the MK It movie collection web page. Here You can find all of your favorite <strong>shows</strong> and <strong>movies</strong> , and watch them on demand!</p>
          <Link to="/search"><button className={classes['hero-button']} >Search</button></Link>
      </div>
    </section>
   <Favorites />
   </Fragment>

  );
}
