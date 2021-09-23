import { useGame } from '../../hooks/games';
import { Header } from '../Header';
import { BannerNavigator } from './Navigator';
import { Container } from './styles';

export const Banner = () => {
  const { findGame, currentGameId } = useGame();
  const currentGame = findGame(currentGameId);
  const [currentPriceInteger, currentPriceRest] = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(currentGame.price)
    .split(',');

  return (
    <Container>
      <Header />

      <div className="infos">
        <h1>{currentGame.name}</h1>
        <span>
          <strong>{currentPriceInteger}</strong>
          <small>,{currentPriceRest}</small>
        </span>
        <article>{currentGame.description}</article>
      </div>

      <BannerNavigator />
    </Container>
  );
};
