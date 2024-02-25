// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routesConfig';
import { GlobalContextProvider } from './Context/GlobalContext';
import './index.css';

const App = () => {
  const router = createBrowserRouter([...routes]);

  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
};

export default App;
