import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/home/home.component';
import Recipes from '../components/recipes/recipes.component';
import Recipe from '../components/recipes/recipe.component';




export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/recipes' component={ Recipes }/>
      <Route exact path="/recipe/:id" component={ Recipe }/>
    </Switch>
  </Router>
);


