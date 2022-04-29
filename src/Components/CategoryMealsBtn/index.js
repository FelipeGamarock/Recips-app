import React from 'react';

function CategoryMealsBtn(category, index) {
  // console.log('btn');
  const { categoryName } = category;
  // console.log(categoryName);
  return (
    <section className="btn-category" key={ index }>
      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
      >
        { categoryName }
      </button>
    </section>
  );
}

export default CategoryMealsBtn;
