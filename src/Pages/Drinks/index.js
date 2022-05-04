import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { fetchCategoryDrinks } from '../../Services';
import SearchContext from '../../Context/SearchContext';
import Card from '../../Components/Card';
import CategoryDrinksBtn from '../../Components/CategoryDrinksBtn';

function Drinks() {
  const {
    searchDrink,
    // setSearchFoodOrDrink,
    drinksCategory,
    setDrinksCategory,
    initialDrinksFetch,
  } = useContext(SearchContext);
  const responseArray = Object.values(searchDrink).flat();
  console.log(responseArray);
  const responseDrinksCategoriy = Object.values(drinksCategory).flat();

  const MAX_LENGTH = 12;
  const MAX_CATEGORIES = 5;
  const history = useHistory();

  // const initialFetch = async () => {
  //   const response = await fetchDrinks();
  //   console.log(response);
  //   setSearchFoodOrDrink(response);
  // };

  // useEffect(() => {
  //   async function initialFetch() {
  //     const response = await fetchDrinks();
  //     console.log(response);
  //     setSearchFoodOrDrink(response);
  //   }
  //   initialFetch();
  // }, [setSearchFoodOrDrink]);

  const fetchCategories = useCallback(async () => {
    const response = await fetchCategoryDrinks();
    setDrinksCategory(response);
  }, [setDrinksCategory]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // async function handleAllBtn() {
  //   const response = await fetchDrinks();
  //   setSearchFoodOrDrink(response);
  // }

  return (
    <div className="cardsClass">
      <Header title="Drinks" />
      <div>
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
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => initialDrinksFetch() }
        >
          All Categories
        </button>
      </div>
      <div>
        {responseArray.slice(0, MAX_LENGTH).map((aux, index) => (
          <Card
            key={ `${aux.idDrink}${Math.random() * MAX_LENGTH}` }
            index={ index }
            type="recipe"
            src={ aux.strDrinkThumb }
            onClick={ () => history.push(`/drinks/${aux.idDrink}`) }
            cardTitle={ aux.strDrink }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
