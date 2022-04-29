import React, { useContext, useState } from 'react';
import SearchContext from '../../Context/SearchContext';
import { fetchMealsByCategory, fetchMeals } from '../../Services';

function CategoryMealsBtn(category, index) {
  // console.log('btn');
  const { categoryName } = category;
  // console.log(categoryName);
  const [toggleCategory, setToggleCategory] = useState(true);
  const { setSearchFoodOrDrink } = useContext(SearchContext);

  const handleCategory = async () => {
    if (toggleCategory) {
      const response = await fetchMealsByCategory(categoryName);
      setSearchFoodOrDrink(response);
      setToggleCategory(false);
    } else {
      const standardResponse = await fetchMeals();
      setSearchFoodOrDrink(standardResponse);
      setToggleCategory(true);
    }
  };

  return (
    <section className="btn-category" key={ index }>
      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
        onClick={ () => handleCategory() }
      >
        { categoryName }
      </button>
    </section>
  );
}

export default CategoryMealsBtn;
