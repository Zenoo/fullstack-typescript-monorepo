import {Box, BoxProps} from '@mui/material';
import React from 'react';

function Logo({sx, ...rest}: BoxProps) {
  const link = '/static/logo.svg';

  return (
    <Box
      alt="Logo"
      component="img"
      src={link}
      sx={{maxWidth: '100%', ...sx}}
      {...rest}
    />
  );
}

export default Logo;
