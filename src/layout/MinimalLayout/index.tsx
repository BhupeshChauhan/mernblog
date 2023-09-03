import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MinimalLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MinimalLayout;
