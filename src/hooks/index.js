import PropTypes from 'prop-types';
import { CartProvider } from './cart';
import { GameProvider } from './games';

export const HooksProvider = ({ children }) => {
  return (
    <GameProvider>
      <CartProvider>{children}</CartProvider>
    </GameProvider>
  );
};

HooksProvider.propTypes = {
  children: PropTypes.node,
};
