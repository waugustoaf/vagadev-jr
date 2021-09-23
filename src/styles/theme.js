import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: '#084154',
    secondary: '#3EC6E0',
    shape: '#EBEBEB',
    fontPrimary: '#FFFFFF',
  },
};

export const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
