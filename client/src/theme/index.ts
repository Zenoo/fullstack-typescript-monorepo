import { createTheme } from '@mui/material';
import { enUS } from '@mui/x-data-grid';
import { enUS as pickersEnUS } from '@mui/x-date-pickers';
import { enUS as coreEnUS } from '@mui/material/locale';
import ThemeOptions from './ThemeOptions';
import { FontStyle } from '@mui/material/styles/createTypography';

interface TypeTransition {
  time: string;
}

interface TypeScrollbar {
  main: string;
  hover: string;
}

declare module '@mui/material/styles' {
  interface TypeBackground {
    dark: string;
    whiteTransparent: string;
  }

  interface Palette {
    transition: TypeTransition,
    scrollbar: TypeScrollbar
  }
  interface PaletteOptions {
    transition: TypeTransition,
    scrollbar: TypeScrollbar
  }
  interface Typography {
    largeTextBackground: FontStyle
    tinyTextBackground: FontStyle
  }
}

const theme = createTheme(
  {
    ...ThemeOptions,
    palette: {
      ...ThemeOptions.palette,
      mode: 'light',
    },
  },
  enUS,
  pickersEnUS,
  coreEnUS,
);

export default theme;
