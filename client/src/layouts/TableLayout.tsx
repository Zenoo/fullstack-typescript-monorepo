import {PrismaInclude} from '@fullstack-typescript-monorepo/core';
import {Box, BoxProps, Button, ButtonGroup, Paper} from '@mui/material';
import {DataGridProps, GridRowId} from '@mui/x-data-grid';
import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import ActionsTable from '../components/ActionsTable';
import Datatable, {TableState, WithId} from '../components/Datatable';
import {GlobalCsvExport} from '../components/DatatableGlobalExport';
import {useAlert} from '../hooks/useAlert';
import {useAuth} from '../hooks/useAuth';
import {useLoader} from '../hooks/useLoader';
import catchError from '../utils/catchError';

interface TableOptions extends Omit<DataGridProps, 'rows'> {
  options?: Omit<DataGridProps, 'columns' | 'rows'>;
}

interface TableLayoutProps<DataType, Model> {
  include?: PrismaInclude;
  getter: (
    state: TableState,
    include?: PrismaInclude
  ) => Promise<{data: Model[]; count: number}>;
  setter?: (
    id: number,
    data: Partial<DataType>,
    include?: object
  ) => Promise<Model>;
  mapper?: (rows: Model) => DataType;
  add?: () => void;
  edit?: (id: number) => void;
  remove?: (id: number) => Promise<never>;
  tableOptions: TableOptions;
  additionalButtons?: React.ReactNode;
  model?: string;
  importMethod?: (data: FormData) => Promise<never>;
  reloadActions?: number;
  globalCsvExport: GlobalCsvExport;
  empty?: () => Promise<never>;
  sx?: BoxProps['sx'];
}

/**
 * Datatable component
 */
function TableLayout<DataType extends WithId, Model extends WithId>({
  include,
  getter,
  setter,
  mapper,
  add,
  edit,
  remove,
  tableOptions,
  additionalButtons,
  model,
  importMethod,
  reloadActions,
  globalCsvExport,
  empty,
  sx,
  ...rest
}: TableLayoutProps<DataType, Model>) {
  const Loader = useLoader();
  const Alert = useAlert();
  const {authed} = useAuth();
  const {t} = useTranslation();

  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);
  const [deleted, setDeleted] = useState(0);
  const [newRecord, setNewRecord] = useState(0);

  /**
   * Hack to reload data on delete
   */
  const handleGetter = useCallback(
    (params: TableState) => {
      if (authed) {
        return getter(params, include)
          .then(response => ({
            data: response.data.map(item => ({
              deleted, // Hack to force data reload on deletion, useless server-side
              ...(mapper ? mapper(item) : (item as unknown as DataType)),
            })),
            count: response.count,
          }))
          .catch((response: string) => {
            catchError(Alert)(response);
            return {data: [], count: 0};
          });
      }
      return Promise.resolve({data: [], count: 0});
    },
    [Alert, authed, deleted, getter, include, mapper]
  );

  // Update actions table on setter call
  const handleSetter = useCallback(
    (id: number, data: Partial<DataType>) =>
      new Promise<Model>((resolve, reject) => {
        if (setter) {
          setter(id, data, include)
            .then(response => {
              resolve(response);
              setNewRecord(prev => prev + 1);
            })
            .catch(reject);
        } else {
          reject();
        }
      }),
    [include, setter]
  );

  // Enable/disable buttons based on row selection
  const handleSelection = useCallback((data: GridRowId[]) => {
    setSelectedRows(data);
  }, []);

  // Add button
  const handleAdd = useCallback(() => {
    if (add) add();
  }, [add]);

  // Edit button
  const handleEdit = useCallback(() => {
    if (edit) edit(+selectedRows[0]);
  }, [edit, selectedRows]);

  // Delete button
  const handleDelete = useCallback(() => {
    if (remove) {
      Loader.open();
      const deletions: Promise<unknown>[] = [];
      selectedRows.forEach(featureToDelete => {
        deletions.push(remove(+featureToDelete));
      });
      Promise.all(deletions)
        .then(() => {
          // Force reload the table data
          setDeleted(deleted + 1);
          // Reload actions table
          setNewRecord(prev => prev + 1);
          Loader.close();
        })
        .catch((response: string) => {
          catchError(Alert)(response);
          Loader.close();
        });
    }
  }, [Alert, Loader, deleted, remove, selectedRows]);

  return (
    <Box sx={sx}>
      {(add || edit || remove) && (
        <ButtonGroup sx={{mb: 2, mr: 2}} variant="contained">
          {add && (
            <Button color="primary" onClick={handleAdd}>
              {t('add')}
            </Button>
          )}
          {edit && (
            <Button
              disabled={selectedRows.length !== 1}
              onClick={handleEdit}
              color="warning"
            >
              {t('edit')}
            </Button>
          )}
          {remove && (
            <Button
              disabled={selectedRows.length < 1}
              onClick={handleDelete}
              color="error"
            >
              {t('delete')}
            </Button>
          )}
        </ButtonGroup>
      )}
      {additionalButtons && <Box sx={{mb: 2}}>{additionalButtons}</Box>}
      <Paper sx={{display: 'flex'}}>
        <Box sx={{flexGrow: 1}}>
          {authed && (
            <Datatable<DataType, Model>
              {...tableOptions}
              onSelectionModelChange={handleSelection}
              getter={handleGetter}
              setter={setter ? handleSetter : undefined}
              globalCsvExport={globalCsvExport}
              importMethod={importMethod}
              empty={empty}
              {...rest}
            />
          )}
        </Box>
      </Paper>
      {model && (
        <ActionsTable
          object={model}
          newRecord={newRecord}
          reloadActions={reloadActions}
        />
      )}
    </Box>
  );
}

export default TableLayout;
