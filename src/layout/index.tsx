import MainLayout from './MainLayout';
import MiniLayout from './MiniLayout';
import { Outlet } from 'react-router-dom';
import AuthGard from './MainLayout/AuthGard';

const Layout = ({ type }: any) => {
  return (
    <>
      <AuthGard>
        {type === 'main' ? (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ) : type === 'mini' ? (
          <MiniLayout>
            <Outlet />
          </MiniLayout>
        ) : null}
      </AuthGard>
    </>
  );
};

export default Layout;
