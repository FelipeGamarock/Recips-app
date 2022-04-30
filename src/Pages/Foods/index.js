import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { fetchCategoryMeals, fetchMeals } from '../../Services';
import SearchContext from '../../Context/SearchContext';
import Card from '../../Components/Card';
import CategoryMealsBtn from '../../Components/CategoryMealsBtn';

function Foods() {
  const {
    searchFoodOrDrink,
    setSearchFoodOrDrink,
    mealsCategory,
    setMealsCategory,
  } = useContext(SearchContext);
  const responseArray = Object.values(searchFoodOrDrink).flat();
  const responseMealsCategoriy = Object.values(mealsCategory).flat();
  // console.log(responseMealsCategoriy);

  const MAX_LENGTH = 12;
  const MAX_CATEGORIES = 5;
  const history = useHistory();

  // const initialFetch = async () => {
  //   const response = await fetchMeals();
  //   console.log(response);
  //   setSearchFoodOrDrink(response);
  // };

  useEffect(() => {
    async function initialFetch() {
      const response = await fetchMeals();
      console.log(response);
      setSearchFoodOrDrink(response);
    }
    initialFetch();
  }, [setSearchFoodOrDrink]);
  async function handleAllBtn() {
    const response = await fetchMeals();
    setSearchFoodOrDrink(response);
  }

  const fetchCategories = useCallback(async () => {
    const response = await fetchCategoryMeals();
    setMealsCategory(response);
  }, [setMealsCategory]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="cardsClass">
      <Header title="Foods" />
      <div>
        {
          responseMealsCategoriy.slice(0, MAX_CATEGORIES).map((category, index) => (
            <CategoryMealsBtn
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
          onClick={ () => handleAllBtn() }
        >
          All Categories
        </button>
      </div>
      <div>
        {responseArray.slice(0, MAX_LENGTH).map((aux, index) => (
          <Card
            key={ `${aux.idMeal}${Math.random() * MAX_LENGTH}` }
            index={ index }
            type="recipe"
            src={ aux.strMealThumb }
            onClick={ () => history.push(`/foods/${aux.idMeal}`) }
            cardTitle={ aux.strMeal }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
