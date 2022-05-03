import React from 'react';
import DoneFavoriteFiltersBtns from '../../Components/DoneFavoriteFiltersBtns';
import HeaderForExplore from '../../Components/HeaderForExplore';

function FavoriteRecipes() {
  return (
    <div>
      <HeaderForExplore title="Favorite Recipes" />
      <DoneFavoriteFiltersBtns />
    </div>
  );
}

export default FavoriteRecipes;
