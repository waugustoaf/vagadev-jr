import { CustomThemeProvider } from '../styles/theme';
import { GlobalStyle } from '../styles/global';
import { createServer, Model } from 'miragejs';
import { gamesCategories } from '../utils/games';
import { HooksProvider } from '../hooks'

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
