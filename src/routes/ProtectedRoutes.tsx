// project import
import React from 'react'
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';


// ==============================|| MAIN ROUTING ||============================== //

const ProtectedRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default ProtectedRoutes;
