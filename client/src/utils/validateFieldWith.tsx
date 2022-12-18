import { GridPreProcessEditCellProps, GridRenderEditCellParams } from '@mui/x-data-grid';
import React from 'react';
import ValidatedCell from '../components/ValidatedCell';

type ValidatorReturn = {
  error: string | undefined;
  value?: unknown;
  isValidating?: boolean | undefined;
  isProcessingProps?: boolean | undefined;
};

type Validator = (
  params: GridPreProcessEditCellProps,
) => ValidatorReturn | Promise<ValidatorReturn>;

const validateFieldWith = (validator: Validator) => ({
  renderEditCell: (params: GridRenderEditCellParams) => <ValidatedCell {...params} />,
  preProcessEditCellProps: validator,
});

export default validateFieldWith;
