import React from 'react';
import classes from './styles/SearchInput.module.css';

const SearchInput = React.forwardRef((props, ref) => {

  return (
    <input className={classes.searchInput} ref={ref} {...props}/>
  )

})

export default SearchInput;
