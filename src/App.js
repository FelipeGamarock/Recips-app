import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import FoodsDetails from './Pages/FoodsDetails';
import FoodsInProgress from './Pages/FoodsInProgress';
import DrinksDetails from './Pages/DrinksDetails';
import DrinksInProgress from './Pages/DrinksInProgress';
import Explore from './Pages/Explore';
import ExploreFoods from './Pages/ExploreFoods';
import ExploreDrinks from './Pages/ExploreDrinks';
import ExploreFoodsByIngredient from './Pages/ExploreFoodsByIngredient';
import ExploreDrinksByIngredient from './Pages/ExploreDrinksByIngredient';
import ExploreFoodsByNationality from './Pages/ExploreFoodsByNationality';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />

        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ FoodsDetails } />
        <Route
          exact
          path="/foods/:id/in-progress"
          component={ FoodsInProgress }
        />
        <Route exact path="/drinks/:id" component={ DrinksDetails } />
        <Route
          exact
          path="/drinks/:id/in-progress"
          component={ DrinksInProgress }
        />

        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodsByIngredient }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksByIngredient }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreFoodsByNationality }
        />

        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}
export default App;
