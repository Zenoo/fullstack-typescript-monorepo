import {Helmet} from 'react-helmet-async';
import React from 'react';
import {Box, BoxProps, SxProps} from '@mui/material';

interface Props extends BoxProps {
  children: React.ReactNode;
  title?: string;
  fullHeight?: boolean;
  sx?: SxProps;
}

/**
 * Page component
 */
function Page({children, title = '', fullHeight = false, sx, ...rest}: Props) {
  return (
    <Box
      sx={{
        bgcolor: 'background.dark',
        minHeight: 1,
        height: fullHeight ? 1 : null,
        p: 2,
        ...sx,
      }}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
}

export default Page;
