import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { fetchDrinks } from '../../Services';
import SearchContext from '../../Context/SearchContext';
import Card from '../../Components/Card';

function Drinks() {
  const { searchFoodOrDrink, setSearchFoodOrDrink } = useContext(SearchContext);
  const responseArray = Object.values(searchFoodOrDrink).flat();

  const MAX_LENGTH = 12;
  const history = useHistory();

  const initialFetch = async () => {
    const response = await fetchDrinks();
    console.log(response);
    setSearchFoodOrDrink(response);
  };

  useEffect(() => {
    initialFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cardsClass">
      <Header title="Drinks" />
      {responseArray.slice(0, MAX_LENGTH).map((aux, index) => (
        <Card
          key={ `${aux.idDrink}${Math.random() * MAX_LENGTH}` }
          index={ index }
          type="recipe"
          src={ aux.strDrinkThumb }
          onClick={ () => history.push(`/foods/${aux.idDrink}`) }
          cardTitle={ aux.strDrink }
        />
      ))}
      <Footer />
    </div>
  );
}

export default Drinks;
