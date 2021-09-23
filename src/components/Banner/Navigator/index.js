import { useGame } from '../../../hooks/games';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Container, Content } from './styles';
import { useTheme } from 'styled-components';

export const BannerNavigator = () => {
  const { currentGameId, findGame } = useGame();
  const currentGame = findGame(currentGameId);

  const theme = useTheme();

  return (
    <Container>
      <Content>
        <div className="infos">
          <span>{currentGame.name}</span>
          <div />
        </div>
        <div className="pagination">
          <p>1/2</p>
          <span>
            <button>
              <FaChevronLeft size={14} color={theme.colors.shape} />
            </button>
            <button>
              <FaChevronRight size={14} color={theme.colors.shape} />
            </button>
          </span>
        </div>
      </Content>
    </Container>
  );
};
