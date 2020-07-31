import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Board from '../pages/Board';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/board" component={Board} />
  </Switch>
);

export default Routes;
