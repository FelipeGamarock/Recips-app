import React from 'react';
import DoneFavoriteFiltersBtns from '../../Components/DoneFavoriteFiltersBtns';
import HeaderForExplore from '../../Components/HeaderForExplore';
import UnderConstruction from '../../Components/UnderConstruction';

function FavoriteRecipes() {
  return (
    <div>
      <UnderConstruction />
      <HeaderForExplore title="Favorite Recipes" />
      <DoneFavoriteFiltersBtns />
    </div>
  );
}

export default FavoriteRecipes;
