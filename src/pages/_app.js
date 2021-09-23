import { CustomThemeProvider } from '../styles/theme';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default MyApp;
