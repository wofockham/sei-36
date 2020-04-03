import React from 'react';
// HashRouter is strongly preferred to prevent deployment headaches.
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import FAQ from './components/FAQ';
import Character from './components/Character';

// Not a component: just a string of JSX
const Routes = (
  <Router>
    <div>
      <h1>Uncle Moe's Family Feed Bag</h1>
      <Route exact path="/" component={ Home } />
      <Route exact path="/faq" component={ FAQ } />
      <Route path="/characters/:name" component={ Character } />
    </div>
  </Router>
);

export default Routes;
