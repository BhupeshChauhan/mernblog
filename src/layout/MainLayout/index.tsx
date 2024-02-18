import React, { useEffect, useState } from 'react';
import { styled, Container, Box, ThemeProvider } from '@mui/material';
import { useGlobalContext } from '../../context/GlobalContext';
import { baselightTheme } from '../../theme/DefaultColors';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import AnimationWapper from '../../common/PageAnimation';
import { useLocation } from 'react-router-dom';

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  height: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  height: '100%',
  zIndex: 1,
  marginBottom: '20px',
  backgroundColor: 'transparent',
}));

const FullLayout = ({ children }: any) => {
  const { userData, setUserData } = useGlobalContext();
  let location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={baselightTheme}>
      <MainWrapper className='mainwrapper'>
        <>
          {/* ------------------------------------------- */}
          {/* Sidebar */}
          {/* ------------------------------------------- */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
          {/* ------------------------------------------- */}
          {/* Main Wrapper */}
          {/* ------------------------------------------- */}
          <PageWrapper className='page-wrapper'>
            {/* ------------------------------------------- */}
            {/* Header */}
            {/* ------------------------------------------- */}
            <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
            {/* ------------------------------------------- */}
            {/* PageContent */}
            {/* ------------------------------------------- */}
            <Container
              sx={{
                paddingTop: '20px',
                maxWidth: '1200px',
                display: 'flex',
                flexGrow: 1,
                width: '100%',
              }}
            >
              <AnimationWapper keyValue={location} className='w-full'>
                {children}
              </AnimationWapper>
            </Container>
          </PageWrapper>
        </>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default FullLayout;
