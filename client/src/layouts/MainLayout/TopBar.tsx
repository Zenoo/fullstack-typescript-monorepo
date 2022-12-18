import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../components/Logo';

const TopBar = ({ ...rest }) => (
  <AppBar
    elevation={0}
    {...rest}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/app/home">
        <Logo sx={{ height: 50 }} />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default TopBar;
