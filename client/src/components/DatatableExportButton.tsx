import {ButtonProps} from '@mui/material';
import {
  GridCsvExportMenuItem,
  GridToolbarExportContainer,
} from '@mui/x-data-grid';
import React from 'react';
import DatatableGlobalExport, {GlobalCsvExport} from './DatatableGlobalExport';

export interface DatatableExportButtonProps extends ButtonProps {
  globalCsvExport: GlobalCsvExport;
}

function DatatableExportButton({
  globalCsvExport,
  ...rest
}: DatatableExportButtonProps) {
  return (
    <GridToolbarExportContainer {...rest}>
      <GridCsvExportMenuItem options={{utf8WithBom: false, delimiter: ';'}} />
      <DatatableGlobalExport globalCsvExport={globalCsvExport} />
    </GridToolbarExportContainer>
  );
}

export default DatatableExportButton;
