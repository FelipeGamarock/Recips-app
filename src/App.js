import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Foods from './Pages/Foods';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />

        <Route exact path="/foods" component={ Foods } />
        {/* <Route exact path="/drinks" component={ Drinks } /> */}
        {/* <Route exact path="/foods/:id" component={ FoodsDetails } /> */}
        {/* <Route exact path="/foods/:id/in-progress" component={ InProgress } /> */}
        {/* <Route exact path="/drinks/:id/in-progress" component={ InProgress } /> */}
        {/* <Route exact path="/drinks/:id" component={ DrinksDetails } /> */}

        {/* <Route exact path="/explore" component={ Explore } /> */}
        {/* <Route exact path="/explore/foods" component={ ExploreFoods } /> */}
        {/* <Route exact path="/explore/drinks" component={ ExploreDrinks } /> */}
        {/* <Route exact path="/explore/foods/ingredients" component={ ExploreFoodsByIngredient } /> */}
        {/* <Route exact path="/explore/drinks/ingredients" component={ ExploreDrinksByIngredient } /> */}
        {/* <Route exact path="/explore/foods/nationalities" component={ ExploreFoodsByNationality } /> */}

        {/* <Route exact path="/done-recipes" component={ DoneRecipes } /> */}
        {/* <Route exact path="/favorite-recipes" component={ FavoriteRecipes } /> */}
        {/* <Route path="*" component={ NotFound } /> */}

      </Switch>
    </div>
  );
}
export default App;
