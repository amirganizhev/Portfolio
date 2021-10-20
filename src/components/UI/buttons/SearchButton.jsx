import React from 'react';
import classes from './styles/SearchButton.module.css';

const SearchButton = (props) => {

  return (
    <button className={classes.searchButton}>
      {props.children}
    </button>
  )

}

export default SearchButton;
