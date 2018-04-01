// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import RecipesPage from './components/RecipesPage';
import JourneyPage from './components/JourneyPage';
import AboutMePage from './components/AboutMePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="recipes" component={RecipesPage}/>
    <Route path="journey" component={JourneyPage}/>
    <Route path="about" component={AboutMePage}/>
    {/*<Route path="athlete/:id" component={AthletePage}/>*/}
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;