import React from 'react';
import {
  Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import history from './history';
import HomePage from './views/HomePage';

const Main = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={'/'} component={HomePage} />
      <Redirect to={'/'} />
    </Switch>
  </Router>
);

const App = hot(module)(Main);

export default App;
