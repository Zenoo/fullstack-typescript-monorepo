import { Input, Person } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, AppBarProps, Box, Hidden, IconButton, Toolbar, Tooltip } from '@mui/material';
import React, { useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import { useAuth } from '../../hooks/useAuth';

interface Props extends AppBarProps {
  onMobileNavOpen: () => void;
}

const TopBar = ({
  onMobileNavOpen,
  ...rest
}: Props) => {
  const auth = useAuth();

  /**
   * Sign out
   */
  const handleSignout = useCallback(() => {
    auth.signout();
  }, [auth]);

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/app/data/table/lptp/sites">
          <Logo sx={{ height: 50 }} />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden lgDown>
          <RouterLink to="/app/account">
            <IconButton size="large">
              <Tooltip title="Account">
                <Person />
              </Tooltip>
            </IconButton>
          </RouterLink>
          <IconButton color="inherit" onClick={handleSignout} size="large">
            <Tooltip title="Logout">
              <Input />
            </Tooltip>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
