import React from 'react';
import Footer from '../../Components/Footer';
import HeaderForExplore from '../../Components/HeaderForExplore';
import ExploreBtn from '../../Components/ExploreBtn';

function Explore() {
  return (
    <div>
      <HeaderForExplore title="Explore" />
      <div>
        <ExploreBtn
          title="Explore Foods"
          testeid="explore-foods"
          route="/explore/foods"
        />

        <ExploreBtn
          title="Explore Drinks"
          testeid="explore-drinks"
          route="/explore/drinks"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
