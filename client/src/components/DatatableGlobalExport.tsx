import { MenuItem } from '@mui/material';
import { GridExportMenuItemProps } from '@mui/x-data-grid';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../hooks/useAlert';
import { useLoader } from '../hooks/useLoader';
import catchError from '../utils/catchError';

export type GlobalCsvExport = {
  fetcher: (fetchPath: string, title: string) => Promise<Blob>;
  fetchPath: string;
  title: string;
};

export interface DatatableGlobalExportProps extends GridExportMenuItemProps<
  Record<string, unknown>
> {
  globalCsvExport: GlobalCsvExport;
}

const DatatableGlobalExport = (props: DatatableGlobalExportProps) => {
  const { hideMenu, globalCsvExport } = props;
  const { t } = useTranslation('table');
  const Alert = useAlert();
  const Loader = useLoader();

  const globalExport = useCallback(async () => {
    Loader.open();
    const blob = await globalCsvExport.fetcher(
      globalCsvExport.fetchPath,
      globalCsvExport.title,
    ).catch(catchError(Alert, t));

    Loader.close();

    if (!blob) {
      Alert.open('error', t('InternalServerError'));
      return;
    }

    // Download file
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${globalCsvExport.title}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Hide the export menu after the export
    hideMenu?.();
  }, [Alert, globalCsvExport, hideMenu, t, Loader]);

  return (
    <MenuItem
      onClick={globalExport}
    >
      {t('globalExport')}
    </MenuItem>
  );
};

export default DatatableGlobalExport;
