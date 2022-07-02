import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
// import { hot } from 'react-hot-loader/root';
import Main from './views/Main';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </BrowserRouter>
);

// export default hot(App);
export default App;
