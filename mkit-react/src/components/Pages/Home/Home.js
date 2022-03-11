import { Fragment } from "react";

import classes from "./Home.module.css";
import heroImg from "../../../assets/movie-cover.jpeg";



export default function Home() {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-image"]}>
        <img src={heroImg} alt="movie-cover" />
      </div>
      <div className={classes['hero-summary']}>
          <h1>MK It Movie Collection</h1>
          <p> Welcome to the MK It movie collection web page. Here You can find all of your favorite <strong>shows</strong> and <strong>movies</strong> , and watch them on demand!</p>
          <button className={classes['hero-button']}>Search</button>
      </div>
     
    </section>
  );
}
