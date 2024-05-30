import {ExpandMoreOutlined} from '@mui/icons-material';
import {
  Badge,
  Box,
  Button,
  ListItem,
  ListItemProps,
  ListItemText,
  SvgIconTypeMap,
} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';
import React from 'react';
import {NavLink as RouterLink} from 'react-router-dom';

interface Props extends ListItemProps {
  href?: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>> & {
    muiName: string;
  };
  title: string;
  notifications?: number;
  minimized?: boolean;
  selected?: boolean;
  nestedItem?: boolean;
  hasChildren?: boolean;
  sx?: object;
}

function NavItem({
  href,
  icon,
  title,
  notifications,
  minimized = false,
  selected = false,
  nestedItem = false,
  hasChildren = false,
  sx,
  ...rest
}: Props) {
  const Icon = icon;

  const buttonProps = {
    ...(href
      ? {
          component: !hasChildren ? RouterLink : 'button',
          to: href,
        }
      : {}),
    sx: {
      color: 'text.secondary',
      fontWeight: 'fontWeightMedium',
      justifyContent: minimized ? 'center' : 'flex-start',
      letterSpacing: 0,
      px: 2,
      py: 1,
      textTransform: 'none',
      width: 1,
      '&:active': {
        color: 'primary.main',
        '& $title': {
          fontWeight: 'fontWeightMedium',
        },
        '& $icon': {
          color: 'primary.main',
        },
      },
      ...(minimized && nestedItem
        ? {
            minWidth: 0,
          }
        : {}),
    },
  };

  return (
    <ListItem
      disableGutters
      selected={selected}
      sx={{
        display: 'flex',
        py: 0,
        width: 1,
        ...sx,
      }}
      {...rest}
    >
      <Button {...buttonProps}>
        {notifications ? (
          <Badge
            badgeContent={notifications}
            color={notifications ? 'secondary' : 'default'}
            sx={{
              mr: 1,
              width: minimized ? 1 : 0.15,
              display: 'flex',
              justifyContent: minimized ? 'flex-start' : 'center',
            }}
          >
            <Icon />
          </Badge>
        ) : (
          <Box
            sx={{
              mr: minimized ? 0 : 1,
              width: minimized ? null : 0.15,
              display: 'flex',
              justifyContent: minimized ? 'flex-start' : 'center',
            }}
          >
            <Icon />
          </Box>
        )}
        <Box
          component="span"
          sx={{
            display: minimized ? 'none' : null,
            mr: 'auto',
            pl: 2,
            textAlign: 'left',
          }}
        >
          {title}
        </Box>
        <ListItemText
          sx={{
            display: minimized ? 'none' : null,
            flex: 'unset',
            m: 0,
            height: 24,
          }}
        >
          {hasChildren ? (
            <ExpandMoreOutlined
              sx={{
                height: 24,
              }}
            />
          ) : null}
        </ListItemText>
      </Button>
    </ListItem>
  );
}

export default NavItem;
