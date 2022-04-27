import React from 'react';
import {
  Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from "history";
import Main from './views/Main';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path={'/'} children={Main} />
      {/* <Redirect to={'/'} /> */}
      {/* <Route path="about" render={() => <Redirect to="about-us" />} /> */}
    </Switch>
  </Router>
);

export default hot(module)(App);

