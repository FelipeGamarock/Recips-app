import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';
import { fetchRandomFood } from '../../Services';

function ExploreFoods() {
  const [randomFoodId, setRandomFoodId] = useState('');
  useEffect(() => {
    async function foodsIdGenerator() {
      const response = await fetchRandomFood();
      const foodsId = response.meals[0].idMeal;
      setRandomFoodId(foodsId);
    }
    foodsIdGenerator();
  }, []);

  const history = useHistory();

  return (
    <div>
      <HeaderForExplore title="Explore Foods" />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>

        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>

        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push(`/foods/${randomFoodId}`) }
        >
          Surprise me!
        </button>

      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
