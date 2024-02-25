import React, { useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { MdMenuOpen } from 'react-icons/md';

// components
import Profile from './Profile';
import { useGlobalContext } from '../../../context/GlobalContext';
import { useLocation } from 'react-router-dom';

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const {pageTitle, setPageTitle} = useGlobalContext()

  const location = useLocation();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '72px',
    },
    padding: 0,
    width: 'cal(100vw - 270px)',
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    if(location.pathname.split('/').length === 2) setPageTitle(location.pathname.split('/')[1])
    if(location.pathname.split('/').length > 2) {
      if(location.pathname.split('/')[2] === 'list'){
        setPageTitle(`${location.pathname.split('/')[1]} ${location.pathname.split('/')[2]}`);
      } else {
        setPageTitle(`${location.pathname.split('/')[2]} ${location.pathname.split('/')[1]}`);
      }
    }
  }, [location.pathname])

  console.log(location.pathname.split('/'))
  

  return (
    <AppBarStyled position='sticky' color='default'>
      <ToolbarStyled className='p-0' sx={{ width: 'calc(100vw-270px)' }}>
        <Grid container>
          <Grid item xs={11} className='flex items-center justify-start'>
          <IconButton
              color='inherit'
              aria-label='menu'
              onClick={toggleMobileSidebar}
              sx={{
                display: {
                  lg: 'none',
                  xs: 'inline',
                },
                marginRight: '10px',
              }}
            >
              <MdMenuOpen width='100' height='100' />
            </IconButton>
            {pageTitle ? <Typography variant='h5' className='capitalize text-black'>{pageTitle}</Typography> : ''}
          </Grid>
          <Grid item xs={1}>
            {/* <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>
        </IconButton> */}
            <Stack spacing={1} direction='row' alignItems='center'>
              <Profile />
            </Stack>
          </Grid>
        </Grid>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
