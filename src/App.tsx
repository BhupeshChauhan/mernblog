// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import routes from './routes/routesConfig';
import PrivateRoute from './routes/PrivateRoute';
import './input.css';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
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
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
