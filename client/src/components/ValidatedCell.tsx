import { Box, Tooltip } from '@mui/material';
import { GridEditInputCell, GridRenderEditCellParams } from '@mui/x-data-grid';
import React, { forwardRef } from 'react';

const ValidatedCell = forwardRef<HTMLDivElement, GridRenderEditCellParams>((
  props,
  ref,
) => {
  const { error } = props;

  return (
    <Tooltip
      open={!!error}
      title={error as string || ''}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'error.main',
            color: 'error.contrastText',
          },
        },
      }}
    >
      <Box ref={ref}>
        <GridEditInputCell {...props} />
      </Box>
    </Tooltip>
  );
});

ValidatedCell.displayName = 'ValidatedCell';

export default ValidatedCell;
