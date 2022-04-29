import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  // const [email, setEmail] = useState('');
  const [searchFoodOrDrink, setSearchFoodOrDrink] = useState([]); // guarda retorno da fetch e alimenta os componentes Card
  const [mealsCategory, setMealsCategory] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [toggleCategory, setToggleCategory] = useState(true);

  const contextValue = {
    searchFoodOrDrink,
    setSearchFoodOrDrink,
    mealsCategory,
    setMealsCategory,
    drinksCategory,
    setDrinksCategory,
    toggleCategory,
    setToggleCategory,
  };
  return (
    <SearchContext.Provider value={ contextValue }>
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
