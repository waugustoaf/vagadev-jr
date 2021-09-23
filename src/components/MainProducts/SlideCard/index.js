import { Container, ModalContent } from './styles';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useCart } from '../../../hooks/cart';
import Modal from 'react-modal';
import { rgba } from 'polished';
import { RiCloseLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { modalStyles } from '../../../styles/modalStyles';
import { useCallback, useMemo, useState } from 'react';

export const SlideCard = ({ game }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { addItem } = useCart();
  const theme = useTheme();

  const handleToggleModalVisibility = useCallback(() => {
    setIsModalVisible(prevState => !prevState);
  }, []);

  const handleBuy = () => {
    handleToggleModalVisibility();
    addItem(game);
  };

  const priceFormatted = useMemo(() => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(game.price);
  }, [game]);

  return (
    <Container>
      <div className="image">
        <Image src={game.image} width={450} height={480} />
      </div>
      <div className="details">
        <p>{game.name}</p>
        <span>{priceFormatted}</span>
        <button type="button" onClick={handleBuy}>
          COMPRAR
        </button>
      </div>

      <Modal
        isOpen={isModalVisible}
        onRequestClose={handleToggleModalVisibility}
        style={modalStyles(theme.colors.primary)}
      >
        <ModalContent>
          <header>
            <button type="button" onClick={handleToggleModalVisibility}>
              <RiCloseLine />
            </button>
          </header>
          <section>
            <span>
              Pedido realizado <br />
              com sucesso!
            </span>
          </section>
          <footer>
            <Image src="/img/mario.png" width={300} height={350} />
          </footer>
        </ModalContent>
      </Modal>
    </Container>
  );
};

SlideCard.propTypes = {
  game: PropTypes.shape().isRequired,
};
