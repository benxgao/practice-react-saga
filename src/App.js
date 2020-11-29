import React from 'react';
import {
  Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import history from './history';
import Main from './views/Main';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Redirect to={'/'} />
    </Switch>
  </Router>
);

export default hot(module)(App);

