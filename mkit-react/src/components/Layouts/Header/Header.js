import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
        <p>Mk It Movie Collection</p>
        <nav>
            <Input placeholder="Search by movie title..."/>
            <Button>Search</Button>
        </nav>
    </header>
  )
}
