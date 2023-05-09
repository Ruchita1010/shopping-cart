import { createContext, useReducer } from 'react';
import { getItemPriceById } from '../utils/priceById';

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  isCartVisible: false,
};

const addItem = (state, id) => {
  const { items } = state;
  if (items.find((item) => item.id === id)) {
    return {
      ...state,
      items: items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
      totalQuantity: state.totalQuantity + 1,
      totalPrice: state.totalPrice + getItemPriceById(id),
    };
  } else {
    return {
      ...state,
      items: [...items, { id, quantity: 1 }],
      totalQuantity: state.totalQuantity + 1,
      totalPrice: state.totalPrice + getItemPriceById(id),
    };
  }
};

const removeItem = (state, id) => {
  const { items } = state;
  const item = items.find((item) => item.id === id);
  if (item?.quantity === 1) {
    return {
      ...state,
      items: items.filter((item) => item.id !== id),
      totalQuantity: state.totalQuantity - 1,
      totalPrice: state.totalPrice - getItemPriceById(id),
    };
  }
  return {
    ...state,
    items: items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ),
    totalQuantity: state.totalQuantity - 1,
    totalPrice: state.totalPrice - getItemPriceById(id),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItem(state, action.id);
    case 'REMOVE_ITEM':
      return removeItem(state, action.id);
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
    </ShoppingCartContext.Provider>
  );
}
