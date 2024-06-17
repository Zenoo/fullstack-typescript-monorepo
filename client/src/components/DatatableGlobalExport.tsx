import {MenuItem} from '@mui/material';
import {GridExportMenuItemProps} from '@mui/x-data-grid';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useAlert} from '../hooks/useAlert';
import {useLoader} from '../hooks/useLoader';
import catchError from '../utils/catchError';

export type GlobalCsvExport = {
  fetcher: (title: string) => Promise<Blob>;
  title: string;
};

export interface DatatableGlobalExportProps
  extends GridExportMenuItemProps<Record<string, unknown>> {
  globalCsvExport: GlobalCsvExport;
}

function DatatableGlobalExport(props: DatatableGlobalExportProps) {
  const {hideMenu, globalCsvExport} = props;
  const {t} = useTranslation('table');
  const Alert = useAlert();
  const Loader = useLoader();

  const globalExport = useCallback(() => {
    Loader.open();
    const blobPromise = globalCsvExport
      .fetcher(globalCsvExport.title)
      .catch(catchError(Alert));

    Loader.close();

    blobPromise
      .then(blob => {
        if (!blob) {
          Alert.open('error', 'Internal Server Error');
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
      })
      .catch(catchError(Alert));
  }, [Alert, globalCsvExport, hideMenu, Loader]);

  return <MenuItem onClick={globalExport}>{t('globalExport')}</MenuItem>;
}

export default DatatableGlobalExport;
