import { createServer } from 'miragejs';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { HooksProvider } from '../hooks';
import { GlobalStyle } from '../styles/global';
import { CustomThemeProvider } from '../styles/theme';
import { gamesCategories } from '../utils/games';

createServer({
  routes() {
    this.get('/rest/games', () => gamesCategories);
    this.passthrough();
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <HooksProvider>
        <Component {...pageProps} />
      </HooksProvider>
      <GlobalStyle />
    </CustomThemeProvider>
  );
}

export default MyApp;
