import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';
import { fetchIngredientsFoodList } from '../../Services';
import Card from '../../Components/Card';

const MAX_LENGTH = 12;

function ExploreFoodsByIngredient() {
  // const history = useHistory();
  const [ingredientsList, setIngredientsList] = useState('');

  useEffect(() => {
    async function RequestIngredientList() {
      const response = await fetchIngredientsFoodList();
      setIngredientsList(response.meals.slice(0, MAX_LENGTH));
    }
    RequestIngredientList();
  }, []);

  return (
    <div>
      <HeaderForExplore title="Explore Ingredients" />
      <div>
        { ingredientsList && ingredientsList.map((ingredient, index) => (
          <Card
            key={ ingredient.id }
            index={ index }
            type="ingredient"
            src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            // onClick={ () => history.push(`/foods/${ingredient}`) }
            cardTitle={ ingredient.strIngredient }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredient;
