import React from 'react';
import HeaderForExplore from '../../Components/HeaderForExplore';
import DoneRecipesCard from '../../Components/DoneRecipesCard';

function DoneRecipes() {
  return (
    <div>
      <HeaderForExplore title="Done Recipes" />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        // onclick={}
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        // onclick={}
        >
          Foods
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        // onclick={}
        >
          Drinks
        </button>
      </section>
      <main>
        <DoneRecipesCard
          index="0"
          tagName="Pasta"
          src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
        />
        <DoneRecipesCard
          index="1"
          tagName=" Tags: 'cheese'"
        />
      </main>
    </div>
  );
}

export default DoneRecipes;
