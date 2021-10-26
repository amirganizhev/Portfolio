import React from 'react';
import classes from './styles/SearchButton.module.css';

const SearchButton = React.forwardRef((props, ref) => {

  return (
    <button className={classes.searchButton} ref={ref} {...props}>
      {props.children}
    </button>
  )

})

export default SearchButton;
