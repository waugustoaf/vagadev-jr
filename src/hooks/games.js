import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';
import PropTypes from 'prop-types';

const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [currentGameId, setCurrentGameId] = useState(1);

  useEffect(() => {
    (async () => {
      const response = (await api.get('/rest/games')).data.games;

      setGames(response);
    })();
  }, []);

  const findGame = useCallback(
    gameId => {
      let currentGame = {};

      games.forEach(game =>
        game.games.forEach(gameList => {
          if (gameList.id === gameId) {
            currentGame = gameList;
          }
        }),
      );

      return currentGame;
    },
    [games],
  );

  return (
    <GameContext.Provider
      value={{ games, currentGameId, setCurrentGameId, findGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }

  return context;
};

export { GameProvider, useGame };

GameProvider.propTypes = {
  children: PropTypes.node,
};
