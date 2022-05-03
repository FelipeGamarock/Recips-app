import React from 'react';
import HeaderForExplore from '../../Components/HeaderForExplore';
import DoneFavoriteFiltersBtns from '../../Components/DoneFavoriteFiltersBtns';
import DoneRecipesCard from '../../Components/DoneRecipesCard';

function DoneRecipes() {
  return (
    <div>
      <HeaderForExplore title="Done Recipes" />
      <DoneFavoriteFiltersBtns />
      <main>
        <DoneRecipesCard
          index="0"
          tagName="Pasta"
          src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg  "
        />
        <DoneRecipesCard
          index="1"
          tagName="Tags: 'cheese'"
        />
      </main>
    </div>
  );
}

export default DoneRecipes;
