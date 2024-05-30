import {GridValueFormatterParams} from '@mui/x-data-grid';

const numberFormatter = (params: GridValueFormatterParams<number>) =>
  `${params.value != null ? params.value : ''}`;

export default numberFormatter;
