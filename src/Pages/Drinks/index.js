import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { fetchDrinks, fetchCategoryDrinks } from '../../Services';
import SearchContext from '../../Context/SearchContext';
import Card from '../../Components/Card';
import CategoryDrinksBtn from '../../Components/CategoryMealsBtn';
import './index.css';

function Drinks() {
  const {
    searchFoodOrDrink,
    setSearchFoodOrDrink,
    drinksCategory,
    setDrinksCategory,
  } = useContext(SearchContext);
  const responseArray = Object.values(searchFoodOrDrink).flat();
  const responseDrinksCategoriy = Object.values(drinksCategory).flat();

  const MAX_LENGTH = 12;
  const MAX_CATEGORIES = 5;
  const history = useHistory();

  // const initialFetch = async () => {
  //   const response = await fetchDrinks();
  //   console.log(response);
  //   setSearchFoodOrDrink(response);
  // };

  const fetchCategories = useCallback(async () => {
    const response = await fetchCategoryDrinks();
    setDrinksCategory(response);
  }, [setDrinksCategory]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    async function initialFetch() {
      const response = await fetchDrinks();
      console.log(response);
      setSearchFoodOrDrink(response);
    }
    initialFetch();
  }, [setSearchFoodOrDrink]);

  return (
    <div className="cardsClass">
      <Header title="Drinks" />
      <div className="categoryBtn">
        {
          responseDrinksCategoriy.slice(0, MAX_CATEGORIES).map((category, index) => (
            <CategoryDrinksBtn
              key={ index }
              categoryName={ category.strCategory }
            />
          ))
        }
      </div>
      <div>
        {responseArray.slice(0, MAX_LENGTH).map((aux, index) => (
          <Card
            key={ `${aux.idDrink}${Math.random() * MAX_LENGTH}` }
            index={ index }
            type="recipe"
            src={ aux.strDrinkThumb }
            onClick={ () => history.push(`/foods/${aux.idDrink}`) }
            cardTitle={ aux.strDrink }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
