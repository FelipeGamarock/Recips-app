import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [searchFoodOrDrink, setSearchFoodOrDrink] = useState([]); // guarda retorno da fetch e alimenta os componentes Card
  const [mealsCategory, setMealsCategory] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [toggleCategory, setToggleCategory] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin({ name, value }) {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }

  const contextValue = {
    searchFoodOrDrink,
    setSearchFoodOrDrink,
    mealsCategory,
    setMealsCategory,
    drinksCategory,
    setDrinksCategory,
    toggleCategory,
    setToggleCategory,
    email,
    password,
    handleLogin,
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
