// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import routes from './routes/routesConfig';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.private ? <PrivateRoute element={<route.element />} /> : <route.element />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
