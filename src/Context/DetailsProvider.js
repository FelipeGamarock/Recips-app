import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailsContext from './DetailsContext';
import { fetchDrinks, fetchMeals } from '../Services';

function DetailsProvider({ children }) {
  const history = useHistory();
  const [details, setDetails] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [recomended, setRecomended] = useState([]);
  const [favoriteRecepies, setFavoriteRecepies] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [date, setDate] = useState('');
  const [doneRecipes, setDoneRecipes] = useState([]);
  const pageType = history.location.pathname.split('/')[1];

  const fetchRecomended = (async (type) => {
    if (type === 'foods') {
      const recomendedDrinks = await fetchDrinks();
      // console.log(recomendedDrinks.drinks);
      setRecomended(recomendedDrinks.drinks);
    } else {
      const recomendedMeals = await fetchMeals();
      // console.log(recomendedMeals.meals);
      setRecomended(recomendedMeals.meals);
    }
  });

  const filterIngredients = useCallback((data) => {
    const findIngredients = (Object.entries(data)
      .filter((element) => element[0].includes('strIngredient') && element[1]));
    setIngredients(findIngredients);
    const findQuantities = (Object.entries(data)
      .filter((element) => element[0].includes('strMeasure') && element[1] !== null));
    setQuantities(findQuantities);
    // console.log(pageType);
    fetchRecomended(pageType);
  }, [setIngredients, setQuantities, pageType]);

  const contextValue = {
    details,
    setDetails,
    ingredients,
    quantities,
    filterIngredients,
    recomended,
    favoriteRecepies,
    setFavoriteRecepies,
    isFavorite,
    setIsFavorite,
    date,
    setDate,
    doneRecipes,
    setDoneRecipes,
  };

  return (
    <DetailsContext.Provider value={ contextValue }>
      { children }
    </DetailsContext.Provider>
  );
}

DetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailsProvider;
