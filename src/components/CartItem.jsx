import products from '../utils/getProductDataWithImage';
import { formatToCurrency } from '../utils/formatToCurrency';
import { useShoppingCartContext } from '../context/ShoppingCartContext';
import styles from '../styles/CartItem.module.css';

const CartItem = ({ id, quantity }) => {
  const product = products.find((product) => product.id === id);
  if (!product) return null;

  const { name, image, price } = product;
  const { cartDispatch } = useShoppingCartContext();

  const incrementQuantity = () => {
    cartDispatch({ type: 'ADD_ITEM', id });
  };

  const decrementQuantity = () => {
    cartDispatch({ type: 'REMOVE_ITEM', id });
  };

  return (
    <div className={styles.item}>
      <img src={image} alt={name} className={styles.product_image} />
      <div className={styles.product_details}>
        <p className={styles.product_name}>{name}</p>
        <p className={styles.product_price}>{formatToCurrency(price)}</p>
        <div className={styles.quantity_controller}>
          <button
            className={styles.quantity_control_btn}
            onClick={decrementQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24">
              <path d="M0 10h24v4h-24z" />
            </svg>
          </button>
          <p className={styles.quantity}>{quantity}</p>
          <button
            className={styles.quantity_control_btn}
            onClick={incrementQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24">
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
