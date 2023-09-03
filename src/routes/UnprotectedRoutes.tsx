// project import
import AuthLogin from '../pages/authentication/AuthLogin';
import AuthRegister from '../pages/authentication/AuthRegister';
import React from 'react';
import MinimalLayout from '../layout/MinimalLayout';
import NotFound from '../pages/NotFound';

// render - login

// ==============================|| AUTH ROUTING ||============================== //

const UnprotectedRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />,
    },
    {
      path: 'register',
      element: <AuthRegister />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default UnprotectedRoutes;
