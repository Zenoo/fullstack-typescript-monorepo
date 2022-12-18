import { Tooltip as MUITooltip, TooltipProps as MUITooltipProps } from '@mui/material';
import React from 'react';

export interface TooltipProps extends Omit<MUITooltipProps, 'title'> {
  title: string;
}

const Tooltip = ({
  title,
  children,
  ...rest
}: TooltipProps) => {
  if (!title) return children;
  return (
    <MUITooltip title={title} {...rest}>
      {children}
    </MUITooltip>
  );
};

export default Tooltip;
