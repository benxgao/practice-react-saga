import 'babel-polyfill';
import reset from 'reset-css'; // eslint-disable-line

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import rootSaga from './sagas';
import configureStore from './store/configureStore';

const store = configureStore();
store.runSaga(rootSaga);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
