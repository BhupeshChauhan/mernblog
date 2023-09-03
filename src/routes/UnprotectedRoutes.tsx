// project import
import AuthLogin from '../pages/authentication/AuthLogin';
import AuthRegister from '../pages/authentication/AuthRegister';
import React from 'react'
import MinimalLayout from "../layout/MinimalLayout";

// render - login

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
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
  ],
};

export default LoginRoutes;
