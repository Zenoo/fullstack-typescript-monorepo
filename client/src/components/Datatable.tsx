import { Box } from '@mui/material';
import { DataGrid, DataGridProps, enUS, frFR, GridColumns, GridFilterItem, GridLinkOperator } from '@mui/x-data-grid';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../hooks/useAlert';
import { useLanguage } from '../hooks/useLanguage';
import { GlobalCsvExport } from './DatatableGlobalExport';
import DatatableToolbar from './DatatableToolbar';

export interface WithId {
  id: number;
}

export interface TableState {
  page: number;
  sortOrder: { name: string, direction: string } | Record<string, never>;
  rowsPerPage: number;
  filters: GridFilterItem[];
  filtersOperator: GridLinkOperator;
}

interface DatatableProps<DataType, Model> extends Omit<DataGridProps, 'columns' | 'rows'> {
  getter: (params: TableState) => Promise<{ data: DataType[], count: number }>;
  setter?: (id: number, data: Partial<DataType>) => Promise<Model>;
  columns: GridColumns;
  options?: Omit<DataGridProps, 'columns' | 'rows'>;
  globalCsvExport: GlobalCsvExport;
  importMethod?: (data: FormData) => Promise<never>;
  empty?: () => Promise<never>;
}

/**
 * Datatable component
 */
const Datatable = <DataType extends WithId, Model>({
  getter,
  columns,
  options,
  setter,
  globalCsvExport,
  importMethod,
  empty,
  ...rest
}: DatatableProps<DataType, Model>) => {
  const Alert = useAlert();
  const { t } = useTranslation('table');
  const { language } = useLanguage();

  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const [sortOrder, setSortOrder] = useState({});
  const [filters, setFilters] = useState<GridFilterItem[]>([]);
  const [filtersOperator, setFiltersOperator] = useState<GridLinkOperator>(GridLinkOperator.And);
  const [data, setData] = useState<DataType[]>([]);

  const localeText = useMemo(() => (language === 'fr' ? frFR : enUS).components.MuiDataGrid.defaultProps.localeText, [language]);

  const tableOptions: Omit<DataGridProps, 'columns' | 'rows'> = {
    autoHeight: true,
    checkboxSelection: true,
    filterMode: 'server',
    loading: isLoading,
    page,
    pageSize: rowsPerPage,
    pagination: true,
    paginationMode: 'server',
    rowCount: count,
    rowsPerPageOptions: [5, 10, 20, 50, 100, 500, 1000, 2000, 5000],
    sortingMode: 'server',
    sortingOrder: ['asc', 'desc'],
    onSortModelChange: async (param) => {
      setLoading(true);
      let sort = {};
      if (param.length) {
        sort = {
          name: param[0].field,
          direction: param[0].sort,
        };
      }

      setSortOrder(sort);
      const response = await getter({
        page,
        sortOrder: sort,
        rowsPerPage,
        filters,
        filtersOperator,
      });
      setData(response.data);
      setCount(response.count);
      setLoading(false);
    },
    onPageChange: async (newPage) => {
      setLoading(true);
      setPage(newPage);
      const response = await getter({
        page: newPage,
        sortOrder,
        rowsPerPage,
        filters,
        filtersOperator,
      });
      setData(response.data);
      setLoading(false);
    },
    onPageSizeChange: async (numberOfRows) => {
      setLoading(true);
      setRowsPerPage(numberOfRows);
      const response = await getter({
        page,
        sortOrder,
        rowsPerPage: numberOfRows,
        filters,
        filtersOperator,
      });
      setData(response.data);
      setLoading(false);
    },
    onFilterModelChange: async (params) => {
      // Set value to 'x' for empty and notEmpty filters to bypass non null check server side
      const newFilters = params.items.map((item) => ({
        ...item,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value: (item.operatorValue === 'isEmpty' || item.operatorValue === 'isNotEmpty') ? 'x' : item.value,
      }));

      setLoading(true);
      setFilters(newFilters);
      setFiltersOperator(params.linkOperator || GridLinkOperator.And);
      const response = await getter({
        page,
        sortOrder,
        rowsPerPage,
        filters: newFilters,
        filtersOperator: params.linkOperator || GridLinkOperator.And,
      });

      setData(response.data);
      setLoading(false);
    },
    processRowUpdate: (row: DataType) => {
      if (setter) {
        const response = setter(row.id, row);
        Alert.open('success', t('updateSuccess'));
        return response;
      }

      return Promise.resolve(row);
    },
    onProcessRowUpdateError: () => {
      Alert.open('error', t('updateError'));
    },
    ...options,
  };

  useEffect(() => {
    let isSubscribed = true;

    (async () => {
      setLoading(true);
      const response = await getter({
        page,
        sortOrder,
        rowsPerPage,
        filters,
        filtersOperator,
      });
      if (isSubscribed) {
        setData(response.data);
        setCount(response.count);
        setLoading(false);
      }
    })();

    return () => { isSubscribed = false; };
  }, [filters, filtersOperator, getter, page, rowsPerPage, sortOrder]);

  const reload = useCallback(async () => {
    setLoading(true);
    const response = await getter({
      page,
      sortOrder,
      rowsPerPage,
      filters,
      filtersOperator,
    });
    setData(response.data);
    setCount(response.count);
    setLoading(false);
  }, [filters, filtersOperator, getter, page, rowsPerPage, sortOrder]);

  return (
    <Box sx={{ display: 'flex', height: 1 }}>
      <Box
        sx={{
          flexGrow: 1,
          width: 1,
          '& .MuiDataGrid-toolbarContainer': {
            flexWrap: 'wrap',
          },
        }}
      >
        <DataGrid
          localeText={localeText}
          experimentalFeatures={{ newEditingApi: true }}
          columns={columns}
          components={{
            Toolbar: DatatableToolbar,
          }}
          componentsProps={{ toolbar: {
            globalCsvExport,
            importMethod,
            reload,
            empty,
          } }}
          rows={data}
          {...tableOptions}
          {...rest}
        />
      </Box>
    </Box>
  );
};

export default Datatable;
