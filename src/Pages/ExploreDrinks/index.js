import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';
import ExploreBtn from '../../Components/ExploreBtn';
import { fetchRandomDrink } from '../../Services';
import './index.css';

function ExploreDrinks() {
  const [randomDrinkId, setRandomDrinkId] = useState('');
  useEffect(() => {
    async function DrinkIdGenerator() {
      const response = await fetchRandomDrink();
      const drinkId = response.drinks[0].idDrink;
      setRandomDrinkId(drinkId);
    }
    DrinkIdGenerator();
  }, []);

  const history = useHistory();

  return (
    <div>
      <HeaderForExplore title="Explore Drinks" />
      <div>
        <ExploreBtn
          title="By Ingredient"
          testeid="explore-by-ingredient"
          route="/explore/drinks/ingredients"
        />

        <button
          className="surprise-btn"
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push(`/drinks/${randomDrinkId}`) }
        >
          Surprise me!
        </button>

      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
