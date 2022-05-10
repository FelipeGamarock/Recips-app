import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';
import { fetchRandomFood } from '../../Services';
import ExploreBtn from '../../Components/ExploreBtn';
import './index.css';

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
        <ExploreBtn
          title="By Ingredient"
          testeid="explore-by-ingredient"
          route="/explore/foods/ingredients"
        />

        <ExploreBtn
          title="By Nationality"
          testeid="explore-by-nationality"
          route="/explore/foods/nationalities"
        />

        <button
          className="surprise-btn"
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
