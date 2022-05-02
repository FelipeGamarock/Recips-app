import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';

function Explore() {
  const history = useHistory();

  return (
    <div>
      <HeaderForExplore title="Explore" />
      <div>
        <button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods

        </button>

        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks

        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
