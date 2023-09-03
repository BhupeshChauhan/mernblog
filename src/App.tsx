// App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './input.css';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
