import { Container, GameButton } from './styles';
import { gamesCategories } from '../../utils/games';
import PropTypes from 'prop-types';

export const Menu = ({ gameId, setCurrentGameId }) => {
  return (
    <Container>
      {gamesCategories.map(gameCategory => (
        <div key={gameCategory.id.toString()}>
          <h4>{gameCategory.type}</h4>
          <div>
            {gameCategory.games.map(game => (
              <GameButton
                type="button"
                isActive={gameId === game.id}
                key={game.id.toString()}
                onClick={() => setCurrentGameId(game.id)}
              >
                {game.name}
              </GameButton>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

Menu.propTypes = {
  gameId: PropTypes.number.isRequired,
  setCurrentGameId: PropTypes.func.isRequired,
};
