// components/PrivateRoute.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  const isAuthenticated = /* Check your authentication state here */ true;

  if (!isAuthenticated) {
    navigate('/login'); // Redirect to the login page if not authenticated
    return null; // Render nothing
  }

  return element;
};

export default PrivateRoute;
