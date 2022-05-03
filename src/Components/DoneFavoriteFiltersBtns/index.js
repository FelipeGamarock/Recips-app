import React from 'react';

function DoneFavoriteFiltersBtns() {
  return (
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
  );
}

export default DoneFavoriteFiltersBtns;
