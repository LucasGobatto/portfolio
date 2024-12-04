import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material' {
  interface TypographyPropsVariantOverrides {
    navbar: true;
  }
}

export const typography: (palette: Palette) => TypographyOptions = () => ({
  allVariants: {
    fontFamily: 'Inter, sans-serif',
  },
  variantMapping: {
    label: 'p',
  },
  h1: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: 'unset',
  },
  h2: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: 'unset',
  },
  h3: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: 'unset',
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: 'unset',
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: 'unset',
  },
  navbar: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16px',
    textTransform: 'uppercase',
    letterSpacing: 'unset',
    color: 'unset',
    textDecoration: 'none',
  },
});
