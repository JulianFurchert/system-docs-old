import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme';

export const SystemProvider = ({
  theme = defaultTheme,
  children,
}) => {
  const next = (prev) => ({ ...prev, systemDocs: theme })
  return (
    <ThemeProvider theme={next}>
      {children}
    </ThemeProvider>
  );
};
