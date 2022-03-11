import React from 'react';
import Button from '../../UI/Button/Button';

import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
        <p>Mk It Movie Collection</p>
        <nav>
            <input placeholder='Search by movie title...'/>
            <Button>Search</Button>
        </nav>
    </header>
  )
}
