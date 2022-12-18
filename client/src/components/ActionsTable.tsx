import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import RecordRoutes from '../api/RecordRoutes';
import useStateAsync from '../hooks/useStateAsync';
import Text from './Text';

interface ActionsTableProps {
  object?: string;
  newRecord: number;
  reloadActions?: number;
}
const ActionsTable = ({
  object,
  newRecord,
  reloadActions,
}: ActionsTableProps) => {
  const { t } = useTranslation('actions');

  const recordsFetchProps = useMemo(() => ({
    object,
    fetchPath: '(id, actionTime, actionType, objectType, author(person(firstName, lastName)))',
  }), [object]);

  const { data: records, reload: reloadRecords } = useStateAsync(
    [],
    RecordRoutes.list,
    recordsFetchProps,
  );

  // Reload table when new record is added and/or when reloadActions is updated
  useEffect(() => {
    if (newRecord > 0 || (reloadActions && reloadActions > 0)) {
      reloadRecords();
    }
  }, [newRecord, reloadActions, reloadRecords]);

  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      <Text h4>
        {t('actionsHistory')}
      </Text>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('user')}</TableCell>
              {!object && <TableCell align="right">{t('object')}</TableCell>}
              <TableCell align="right">{t('action')}</TableCell>
              <TableCell align="right">{t('date')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.length ? (
              records.map((action) => (
                <TableRow
                  key={action.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                  {action.author ? (
                    <TableCell component="th" scope="row">
                      {action.author.person.firstName} {action.author.person.lastName}
                    </TableCell>
                  ) : (
                    <TableCell component="th" scope="row">{t('anonymousAuthor')}</TableCell>
                  )}
                  {!object && (
                    <TableCell align="right">{action.objectType}</TableCell>
                  )}
                  <TableCell align="right">{action.actionType}</TableCell>
                  <TableCell align="right">{moment(action.actionTime).format('DD/MM/YYYY HH:mm')}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>
                  <Text>{t('noActions')}</Text>
                </TableCell>
              </TableRow>
            )}
            { }
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ActionsTable;
