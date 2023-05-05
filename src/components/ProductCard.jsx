import { Link } from 'react-router-dom';
import { formatToCurrency } from '../utils/formatToCurrency';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { id, name, image, colourCount, price } = product;
  return (
    <Link to={`/shop/${id}`}>
      <div className={styles.product_card}>
        <img src={image} alt={name} className={styles.product_img} />
        <div className={styles.product_info}>
          <div>
            <p className={styles.product_name}>{name}</p>
            <p className={styles.product_colour_count}>{colourCount} Colours</p>
          </div>
          <div>
            <p>{formatToCurrency(price)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
