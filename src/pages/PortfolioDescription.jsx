import React from 'react';
import classes from './styles/PortfolioDescription.module.css';

import AddButton from '../components/UI/buttons/AddButton';
import DeleteButton from '../components/UI/buttons/DeleteButton';
import SearchButton from '../components/UI/buttons/SearchButton';

const PortfolioDescription = () => {

  return (
    <div className={classes.portfolioDescription}>
      <AddButton>Add</AddButton>
      <DeleteButton>Delete</DeleteButton>
      <SearchButton>Search</SearchButton>
    </div>
  )

}

export default PortfolioDescription;
