import { Container, GameButton } from './styles';
import { useGame } from '../../hooks/games';
import PropTypes from 'prop-types';

export const Menu = ({ onCloseMenu }) => {
  const { games, currentGameId, setCurrentGameId } = useGame();

  const handleChangeGame = gameId => {
    setCurrentGameId(gameId);
    onCloseMenu();
  };

  return (
    <Container>
      {games.map(gameCategory => (
        <div key={gameCategory.id.toString()}>
          <h4>{gameCategory.type}</h4>
          <div>
            {gameCategory.games.map(game => (
              <GameButton
                type="button"
                isActive={currentGameId === game.id}
                key={game.id.toString()}
                onClick={() => handleChangeGame(game.id)}
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
  onCloseMenu: PropTypes.func.isRequired,
};
