import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';
import { fetchRandomDrink } from '../../Services';

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
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>

        <button
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
