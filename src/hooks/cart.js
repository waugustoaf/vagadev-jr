import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== undefined && cart.length === 0) {
      setCart(JSON.parse(localStorage.getItem('@n1rush:cart')) || []);
    }
  }, []);

  const addItem = useCallback(game => {
    setCart(prevState => [...prevState, game]);

    if (typeof window !== undefined) {
      localStorage.setItem('@n1rush:cart', JSON.stringify(cart));
    }
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);

    if (typeof window !== undefined) {
      localStorage.setItem('@n1rush:cart', JSON.stringify(cart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart }}>
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
