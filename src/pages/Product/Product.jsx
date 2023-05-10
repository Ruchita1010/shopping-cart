import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import ProductSizes from './ProductSizes';
import { formatToCurrency } from '../../utils/formatToCurrency';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import styles from './styles/Product.module.css';
import '../../styles/global.css';

const Product = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === id);
  const { name, image, price, availableSizes, description } = product;
  const { cartDispatch } = useShoppingCartContext();

  const handleAddToCart = () => {
    cartDispatch({ type: 'ADD_ITEM', id });
  };

  return (
    <div className={styles.product_container}>
      <img src={image} alt={name} className={styles.product_image} />
      <div className={styles.product_details}>
        <p className={styles.product_name}>{name}</p>
        <p className={styles.product_price}>{formatToCurrency(price)}</p>
        <ProductSizes sizes={availableSizes} />
        <button className="btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Product;
