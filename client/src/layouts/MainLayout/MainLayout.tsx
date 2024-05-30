import {Outlet} from 'react-router-dom';
import React from 'react';
import {Box} from '@mui/material';
import TopBar from './TopBar';

function MainLayout() {
  return (
    <Box
      sx={{
        bgcolor: 'background.dark',
        display: 'flex',
        height: 1,
        width: 1,
        overflow: 'hidden',
      }}
    >
      <TopBar />
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          overflow: 'hidden',
          pt: '64px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              flex: '1 1 auto',
              height: 1,
              overflow: 'auto',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
