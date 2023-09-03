import React from 'react';
import Header from './Header';
import Sidebar, { SidebarItem } from './Sidebar';
import Footer from './Footer';
import { LayoutDashboard } from 'lucide-react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <main className='flex min-h-screen'>
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text={'Dashboard'}
            alert
            active={true}
          />
        </Sidebar>
        <div className='w-full'>
          <Header />
          <div className='p-5'><Outlet /></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
