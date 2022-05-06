import React, { useContext, useState } from 'react';
import SearchContext from '../../Context/SearchContext';
import { fetchDrinksByCategory, fetchDrinks } from '../../Services';
import './index.css';

function CategoryDrinksBtn(category, index) {
  // console.log('btn');
  const { categoryName } = category;
  // console.log(categoryName);
  const [toggleCategory, setToggleCategory] = useState(true);
  const { setSearchDrink } = useContext(SearchContext);

  const handleCategory = async () => {
    // console.log('click');
    // console.log(categoryName);
    if (toggleCategory) {
      const response = await fetchDrinksByCategory(categoryName);
      // console.log(response);
      setSearchDrink(response);
      setToggleCategory(false);
    } else {
      const standardResponse = await fetchDrinks();
      setSearchDrink(standardResponse);
      setToggleCategory(true);
    }
  };

  return (
    <section className="btn-category" key={ index }>
      <button
        className="drinks-category-button"
        type="submit"
        data-testid={ `${categoryName}-category-filter` }
        onClick={ () => handleCategory() }
      >
        { categoryName }
      </button>
    </section>
  );
}

export default CategoryDrinksBtn;
