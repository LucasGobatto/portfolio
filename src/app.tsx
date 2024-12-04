import { theme } from '@components/theme';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          '*': { padding: 0, margin: 0, boxSizing: 'border-box' },
          html: { height: '100%' },
          body: { height: '100%' },
          '#root': { height: '100%' },
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
