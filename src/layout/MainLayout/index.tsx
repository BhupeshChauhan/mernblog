import React from 'react';
import Header from './Header';
import Sidebar, { SidebarItem } from './Sidebar';
import Footer from './Footer';
import { LayoutDashboard } from 'lucide-react';
import { Outlet } from 'react-router';
import Breadcrum from '../../components/Navigation/Breadcrum';

const MainLayout = () => {
  return (
    <main className='flex flex-col h-screen'>
      <Header />
      <div className='flex h-full'>
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text={'Dashboard'}
            alert
            active={true}
          />
        </Sidebar>
        <div className='flex flex-col h-full w-full'>
          <Breadcrum />
          <div className='h-full w-full p-5'>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
