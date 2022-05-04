import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';
import { fetchMeals, fetchDrinks } from '../Services';

function SearchProvider({ children }) {
  const [searchFoodOrDrink, setSearchFoodOrDrink] = useState([]); // guarda retorno da fetch e alimenta os componentes Card
  const [searchDrink, setSearchDrink] = useState([]);
  const [mealsCategory, setMealsCategory] = useState([]);
  const [drinksCategory, setDrinksCategory] = useState([]);
  const [toggleCategory, setToggleCategory] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstRender, setFirstRender] = useState(true);

  function handleLogin({ name, value }) {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }

  async function initialFetch() {
    const response = await fetchMeals();
    console.log('renderizou');
    setSearchFoodOrDrink(response);
  }

  async function initialDrinksFetch() {
    const response = await fetchDrinks();
    console.log('renderizou');
    setSearchDrink(response);
  }

  useEffect(() => {
    initialFetch();
    initialDrinksFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    searchFoodOrDrink,
    setSearchFoodOrDrink,
    searchDrink,
    setSearchDrink,
    mealsCategory,
    setMealsCategory,
    drinksCategory,
    setDrinksCategory,
    toggleCategory,
    setToggleCategory,
    email,
    password,
    handleLogin,
    firstRender,
    setFirstRender,
    initialFetch,
    initialDrinksFetch,
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
