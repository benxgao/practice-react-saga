import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Main from './views/Main';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default App;
