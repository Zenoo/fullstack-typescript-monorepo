import {Delete, IosShare} from '@mui/icons-material';
import {Button} from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarContainerProps,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useAlert} from '../hooks/useAlert';
import {useConfirm} from '../hooks/useConfirm';
import {useLoader} from '../hooks/useLoader';
import catchError from '../utils/catchError';
import DatatableExportButton from './DatatableExportButton';
import {GlobalCsvExport} from './DatatableGlobalExport';
import DropzoneDialog from './DropzoneDialog';

export interface DatatableToolbarProps extends GridToolbarContainerProps {
  globalCsvExport: GlobalCsvExport;
  importMethod?: (data: FormData) => Promise<never>;
  reload: () => void;
  empty?: () => Promise<never>;
}

function DatatableToolbar({
  globalCsvExport,
  importMethod,
  reload,
  empty,
  ...rest
}: DatatableToolbarProps) {
  const {t} = useTranslation('table');
  const Loader = useLoader();
  const Alert = useAlert();
  const Confirm = useConfirm();

  const uploadFile = useCallback(
    async ([file]: File[]) => {
      if (!importMethod) {
        return;
      }

      Loader.open();
      const data = new FormData();
      data.set('file', file, file.name);

      await importMethod(data)
        .then(() => {
          Alert.open('success', t('importSuccess'));
        })
        .catch(catchError(Alert));

      reload();
      Loader.close();
    },
    [Alert, Loader, importMethod, reload, t]
  );

  const confirmEmpty = useCallback(() => {
    if (!empty) {
      return;
    }

    Confirm.open(t('emptyTable'), t('emptyTableDescription'), () => {
      Loader.open();
      empty()
        .then(() => {
          Alert.open('success', t('emptySuccess'));
          reload();
        })
        .catch(catchError(Alert))
        .finally(() => {
          Loader.close();
        });
    });
  }, [Alert, Confirm, Loader, empty, reload, t]);

  return (
    <GridToolbarContainer {...rest}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <DatatableExportButton globalCsvExport={globalCsvExport} />
      {importMethod && (
        <DropzoneDialog
          accept={{'text/csv': ['.csv']}}
          onSave={uploadFile}
          title={t('import')}
          options={{maxFiles: 1}}
        >
          <Button size="small" startIcon={<IosShare />}>
            {t('import')}
          </Button>
        </DropzoneDialog>
      )}
      {empty && (
        <Button size="small" onClick={confirmEmpty} startIcon={<Delete />}>
          {t('empty')}
        </Button>
      )}
    </GridToolbarContainer>
  );
}

export default DatatableToolbar;
