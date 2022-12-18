import { Box } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import catchError from '../../utils/catchError';
import { ErrorType } from '../../utils/fetcher';
import NavBar from './NavBar/NavBar';
import TopBar from './TopBar';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const Alert = useAlert();
  const { t } = useTranslation();

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const onMobileNavOpen = useCallback(() => setMobileNavOpen(true), []);
  const onMobileClose = useCallback(() => setMobileNavOpen(false), []);

  useEffect(() => {
    if (!auth.authed) {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token') || '';

      if (user) {
        auth.signin(user, token).catch((error: ErrorType) => {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          navigate('/login', { replace: true });
          catchError(Alert, t)(error);
        });
      } else {
        navigate('/login', { replace: true });
      }
    }
  }, [Alert, auth, navigate, t]);

  return auth.authed ? (
    <Box sx={{
      bgcolor: 'background.dark',
      display: 'flex',
      height: 1,
      overflow: 'hidden',
      width: 1,
    }}
    >
      <TopBar
        onMobileNavOpen={onMobileNavOpen}
      />
      <NavBar
        onMobileClose={onMobileClose}
        openMobile={isMobileNavOpen}
      />
      <Box sx={{
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        pt: {
          xs: 7,
          sm: 8,
        },
      }}
      >
        <Box sx={{
          display: 'flex',
          flex: '1 1 auto',
          overflow: 'hidden',
        }}
        >
          <Box sx={{
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
  ) : (
    <Loader />
  );
};

export default DashboardLayout;
