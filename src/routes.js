// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout.jsx';
import IndexPage from './components/IndexPage.jsx';
import RecipesPage from './components/RecipesPage.jsx';
import JourneyPage from './components/JourneyPage.jsx';
import AboutMePage from './components/AboutMePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

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