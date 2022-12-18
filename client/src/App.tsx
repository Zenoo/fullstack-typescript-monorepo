import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { GlobalStyles, StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { AlertProvider } from './hooks/useAlert';
import { AuthProvider } from './hooks/useAuth';
import { useLanguage } from './hooks/useLanguage';
import { LoaderProvider } from './hooks/useLoader';
import shadows from './theme/shadows';
import { ConfirmProvider } from './hooks/useConfirm';
import routes from './routes';
import theme from './theme/index';

const App = () => {
  const routing = useRoutes(routes);
  const Language = useLanguage();

  return (
    <HelmetProvider>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <GlobalStyles styles={{
              '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
              },
              html: {
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                height: '100%',
                width: '100%',
              },
              body: {
                backgroundColor: theme.palette.background.dark,
                height: '100%',
                width: '100%',
              },
              '*::-webkit-scrollbar': {
                width: '8px',
              },
              '*::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.scrollbar.main,
                borderRadius: '4px',
              },
              '*::-webkit-scrollbar-track': {
                WebkitBoxShadow: shadows[2],
              },
              '*::-webkit-scrollbar-thumb:hover': {
                backgroundColor: theme.palette.scrollbar.hover,
              },
              a: {
                textDecoration: 'none',
              },
              '#root': {
                height: '100%',
                width: '100%',
              },
            }}
            />
            <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={Language.language}>
              <LoaderProvider>
                <AlertProvider>
                  <ConfirmProvider>
                    {routing}
                  </ConfirmProvider>
                </AlertProvider>
              </LoaderProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
