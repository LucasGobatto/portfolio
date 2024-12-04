import { PaletteOptions } from '@mui/material';

declare module '@mui/material' {
  // Add custom shades to the palette. No type side effects because Color is already optional on MUI.
  interface Color {}
}

export const palette: PaletteOptions = {
  primary: {
    300: '#D8DBE2',
    400: '#A9BCD0',
    500: '#0B4F6C',
    600: '#153243',
    700: '#0A171F',
  },
  grey: {
    300: '#EBEBEB',
    400: '#CCCCCC',
    500: '#ADADAD',
    600: '#8F8F8F',
    700: '#707070',
  },
};
