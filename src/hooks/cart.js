import { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = useCallback(game => {
    setCart(prevState => [...prevState, game]);
  }, []);

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCard must be used within CardProvider');
  }

  return context;
};

export { CartProvider, useCart };

CartProvider.propTypes = {
  children: PropTypes.node,
};
