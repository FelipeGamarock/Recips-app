import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';
import { fetchIngredientsDrinkList } from '../../Services';
import Card from '../../Components/Card';
import SearchContext from '../../Context/SearchContext';

const MAX_LENGTH = 12;

function ExploreDrinksByIngredient() {
  const { setSearchFoodOrDrink } = useContext(SearchContext);
  const history = useHistory();
  const [ingredientsDrinkList, setIngredientsDrinkList] = useState([]);

  useEffect(() => {
    async function RequestIngredientList() {
      const response = await fetchIngredientsDrinkList();
      setIngredientsDrinkList(response.drinks.slice(0, MAX_LENGTH));
    }
    RequestIngredientList();
  }, []);

  const handleClick = async (ingredient) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    setSearchFoodOrDrink(data);
    (history.push('/drinks'));
  };

  return (
    <div>
      <HeaderForExplore title="Explore Ingredients" />
      <h2>Teste</h2>
      <div>
        { ingredientsDrinkList && ingredientsDrinkList.map((ingredient, index) => (
          <Card
            key={ index }
            index={ index }
            type="ingredient"
            src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
            onClick={ () => handleClick(ingredient.strIngredient1) }
            cardTitle={ ingredient.strIngredient1 }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredient;
