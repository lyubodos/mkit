import React from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import classes from "./Search.module.css";

export default function Search() {
  return (
    <div className={classes.search}>
      <h1>Search</h1>
      <div className={classes['search-engine']}>
      <Input placeholder="Search by movie title..." />
      <Button>Search</Button>
      </div>

      <section>
        
      </section>
    </div>
  );
}
