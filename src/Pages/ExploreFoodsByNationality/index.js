import React, { useEffect, useState } from 'react';
// import Header from '../../Components/Header';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import searchIcon from '../../images/searchIcon.svg';
import HeaderForExplore from '../../Components/HeaderForExplore';
import { fetchNationalitiesList, fetchMeals, fetchMealsByArea } from '../../Services';
import Card from '../../Components/Card';

function ExploreFoodsByNationality() {
  // const [showSelector, setShowSelector] = useState(true);
  const [nationalities, setNationalities] = useState([]);
  const [selectedOption, setSelectedOption] = useState('all');
  const [meals, setMeals] = useState([]);
  const MAX_LENGTH = 12;
  const history = useHistory();

  const fetchCoutries = async () => {
    const data = await fetchNationalitiesList();
    setNationalities(data.meals);
  };

  const fetchInitialMeals = async () => {
    const data = await fetchMeals();
    setMeals(data.meals.slice(0, MAX_LENGTH));
  };

  const fetchMealByNationality = async () => {
    if (selectedOption === 'all') {
      return fetchInitialMeals();
    }
    const data = await fetchMealsByArea(selectedOption);
    setMeals(data.meals.slice(0, MAX_LENGTH));
  };

  useEffect(() => {
    fetchCoutries();
    fetchInitialMeals();
  }, []);

  useEffect(() => {
    fetchMealByNationality();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  const handleSelectorChange = ({ target }) => {
    setSelectedOption(target.value);
  };

  return (
    <div>
      <header>
        <HeaderForExplore title="Explore Nationalities" />
        <button
          type="button"
          // onClick={ () => setIsSearching(!showSelector) }
          data-testid="search-top-btn"
          src={ searchIcon }
        >
          <img src={ searchIcon } alt="search" />
        </button>
      </header>

      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ (event) => handleSelectorChange(event) }
      >
        <option
          data-testid="All-option"
          value="all"
        >
          All
        </option>
        {nationalities.map((nationality, ind) => (
          <option
            data-testid={ `${nationality.strArea}-option` }
            value={ nationality.strArea }
            key={ ind }
          >
            {nationality.strArea}
          </option>))}
      </select>

      {meals.map((meal, index) => (
        <Card
          key={ `${meal.idMeal}${Math.random() * MAX_LENGTH}` }
          index={ index }
          type="recipe"
          src={ meal.strMealThumb }
          onClick={ () => history.push(`/foods/${meal.idMeal}`) }
          cardTitle={ meal.strMeal }
        />
      ))}

      <Footer />
    </div>
  );
}

export default ExploreFoodsByNationality;
