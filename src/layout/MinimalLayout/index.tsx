import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

const MinimalLayout = () => {
  return (
    <>
      <Header />
      <div className='h-screen'>
        <Outlet />
      </div>
    </>
  );
};

export default MinimalLayout;
