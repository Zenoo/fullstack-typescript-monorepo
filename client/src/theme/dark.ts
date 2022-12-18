import { createTheme } from '@mui/material';
import ThemeOptions from './ThemeOptions';
import { enUS } from '@mui/x-data-grid';
import { enUS as pickersEnUS } from '@mui/x-date-pickers';
import { enUS as coreEnUS } from '@mui/material/locale';

const dark = createTheme(
  {
    ...ThemeOptions,
    palette: {
      mode: 'dark',
      ...ThemeOptions.palette,
    },
  },
  enUS,
  pickersEnUS,
  coreEnUS,
);

export default dark;
