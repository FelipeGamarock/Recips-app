import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';
import { fetchIngredientsFoodList } from '../../Services';
import Card from '../../Components/Card';
import SearchContext from '../../Context/SearchContext';

const MAX_LENGTH = 12;

function ExploreFoodsByIngredient() {
  const { setSearchFoodOrDrink } = useContext(SearchContext);
  const history = useHistory();
  const [ingredientsList, setIngredientsList] = useState('');

  useEffect(() => {
    async function RequestIngredientList() {
      const response = await fetchIngredientsFoodList();
      setIngredientsList(response.meals.slice(0, MAX_LENGTH));
    }
    RequestIngredientList();
  }, []);

  const handleClick = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    setSearchFoodOrDrink(data);
    (history.push('/foods'));
  };

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
            onClick={ () => handleClick(ingredient.strIngredient) }
            cardTitle={ ingredient.strIngredient }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredient;
