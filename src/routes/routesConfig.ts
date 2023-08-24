// routes.ts
import React from 'react';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

interface RouteConfig {
  path: string;
  element: any;
  private?: boolean;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/contact',
    element: Contact,
    private: true,
  },
  {
    path: '/notfound',
    element: NotFound,
  },
  // Add more routes here

  { path: '*', element: NotFound }, // Not Found route
];

export default routes;
