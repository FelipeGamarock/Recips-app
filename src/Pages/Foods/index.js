import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { fetchMeals } from '../../Services';
import SearchContext from '../../Context/SearchContext';
import Card from '../../Components/Card';

function Foods() {
  const { searchFoodOrDrink, setSearchFoodOrDrink } = useContext(SearchContext);
  const responseArray = Object.values(searchFoodOrDrink).flat();

  const MAX_LENGTH = 12;
  const history = useHistory();

  const initialFetch = async () => {
    const response = await fetchMeals();
    console.log(response);
    setSearchFoodOrDrink(response);
  };

  useEffect(() => {
    initialFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cardsClass">
      <Header title="Foods" />
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
      <Footer />
    </div>
  );
}

export default Foods;
