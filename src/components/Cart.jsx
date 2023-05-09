import { useContext } from 'react';
import CartItem from './CartItem';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import useDisableScroll from '../hooks/useDisableScroll';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  const { items, isCartVisible, cartDispatch } =
    useContext(ShoppingCartContext);

  useDisableScroll(isCartVisible);

  return (
    isCartVisible && (
      <div className={styles.cart_container}>
        <div className={styles.cart}>
          <div className={styles.close_cart_btn_container}>
            <button
              className={styles.close_cart_btn}
              onClick={() => cartDispatch({ type: 'TOGGLE_CART_DISPLAY' })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
              </svg>
            </button>
          </div>
          <div className={styles.item_container}>
            {items.length === 0 ? (
              <p className={styles.empty_cart_message}>Your Cart Is Empty :/</p>
            ) : (
              items.map((item) => (
                <CartItem key={item.id} id={item.id} quantity={item.quantity} />
              ))
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Cart;
