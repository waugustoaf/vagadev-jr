import { createServer, Model } from 'miragejs';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { HooksProvider } from '../hooks';
import { GlobalStyle } from '../styles/global';
import { CustomThemeProvider } from '../styles/theme';
import { gamesCategories } from '../utils/games';

createServer({
  models: {
    game: Model,
  },

  seeds(server) {
    server.db.loadData({
      games: gamesCategories,
    });
  },

  routes() {
    this.namespace = 'rest';
    this.timing = 500;

    this.get('/games', () => this.schema.all('game'));

    this.post('/games', (schema, request) => {
      const data = JSON.parse(request.body);

      return schema.create('game', data);
    });
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
