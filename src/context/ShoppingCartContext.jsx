import { createContext, useReducer } from 'react';
import Cart from '../components/Cart';

const initialState = {
  items: [],
  totalPrice: 0,
  isCartVisible: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_DISPLAY':
      return {
        ...state,
        isCartVisible: !state.isCartVisible,
      };
    default:
      return state;
  }
};

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  return (
    <ShoppingCartContext.Provider value={{ ...cartState, cartDispatch }}>
      {children}
      <Cart />
    </ShoppingCartContext.Provider>
  );
}
