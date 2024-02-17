// App.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routesConfig';
import './input.css';
import { GlobalContextProvider } from './context/GlobalContext';

const App = () => {
  const router = createBrowserRouter([...routes]);

  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
};

export default App;
