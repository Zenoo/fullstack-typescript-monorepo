import {Checkbox} from '@mui/material';
import {GridRenderCellParams, useGridApiContext} from '@mui/x-data-grid';
import React, {useCallback} from 'react';

export interface DatatableBooleanProps extends GridRenderCellParams<boolean> {
  editing?: boolean;
}

/**
 * Datatable boolean component
 */
function DatatableBoolean(params: DatatableBooleanProps) {
  const api = useGridApiContext();

  const {value, isEditable, editing} = params;

  const toggleBoolean = useCallback(
    ({id, field}: GridRenderCellParams<boolean>) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isEditable) {
          if (api.current.getCellMode(id, field) !== 'edit') {
            api.current.startCellEditMode({id, field});
          }
          const editPromise = api.current.setEditCellValue(
            {id, field, value: event.target.checked},
            event
          );

          if (editPromise) {
            editPromise
              .then(() => {
                api.current.stopCellEditMode({id, field});
              })
              .catch(() => {
                api.current.stopCellEditMode({id, field});
              });
          } else {
            api.current.stopCellEditMode({id, field});
          }
        }
      },
    [api, isEditable]
  );

  return (
    <Checkbox
      checked={value}
      onChange={toggleBoolean(params)}
      readOnly={!editing}
    />
  );
}

export default DatatableBoolean;
