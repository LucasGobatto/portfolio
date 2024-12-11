import { Box, styled } from '@mui/material';

export const Grid = styled(Box)<{ maxColumns?: number | string }>(({ theme, maxColumns = 2 }) => ({
  display: 'grid',
  marginInline: 'auto',
  gap: '8px',
  gridTemplateColumns: `repeat(${maxColumns}, minmax(200px, 1fr))`,

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: `repeat(${maxColumns}, minmax(150px, 1fr))`,
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: `repeat(${maxColumns}, minmax(100px, 1fr))`,
  },
}));
