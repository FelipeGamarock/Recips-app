import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './index.css';
import SearchContext from '../../Context/SearchContext';

function Footer() {
  const { initialFetch } = useContext(SearchContext);
  const { push } = useHistory();

  const handleFoodsButton = () => {
    initialFetch();
    push('/foods');
  };

  return (
    <footer data-testid="footer" className="footer">
      <button
        className="footer-button"
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        aria-label="drink-icon"
        onClick={ () => push('/drinks') }
      >
        <img src={ drinkIcon } alt="drink" />
      </button>
      <button
        className="footer-button"
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        aria-label="explore-icon"
        onClick={ () => push('/explore') }
      >
        <img
          src={ exploreIcon }
          alt="Explore"
        />
      </button>
      <button
        className="footer-button"
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        aria-label="meal-icon"
        onClick={ () => handleFoodsButton() }
      >
        <img
          src={ mealIcon }
          alt="Meal Icon"
        />
      </button>
    </footer>
  );
}

export default Footer;
