import {Backdrop, Box} from '@mui/material';
import React, {useCallback, useContext, useMemo, useState} from 'react';
import Loader from '../components/Loader';
import Text from '../components/Text';

interface LoaderContextInterface {
  open: (message?: string) => void;
  close: () => void;
}

const LoaderContext = React.createContext<LoaderContextInterface>({
  open: () => {
    console.error('LoaderContext.display() not implemented');
  },
  close: () => {
    console.error('LoaderContext.hide() not implemented');
  },
});

export const useLoader = () => {
  const context = useContext(LoaderContext);
  return context;
};

interface LoaderProviderProps {
  children: React.ReactNode;
}

export function LoaderProvider({children}: LoaderProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const open = useCallback((message = '') => {
    setLoaderMessage(message);
    setIsLoading(true);
  }, []);
  const close = useCallback(() => {
    setIsLoading(false);
    setLoaderMessage('');
  }, []);

  const methods = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close]
  );

  return (
    <LoaderContext.Provider value={methods}>
      {children}
      <Backdrop
        open={isLoading}
        sx={{zIndex: 9998, color: '#fff', flexDirection: 'column'}}
      >
        <Box>
          <Loader />
        </Box>
        {!!loaderMessage.length && (
          <Text sx={{m: 2, textAlign: 'center'}}>{loaderMessage}</Text>
        )}
      </Backdrop>
    </LoaderContext.Provider>
  );
}
