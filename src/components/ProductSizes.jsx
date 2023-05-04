import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/ProductSizes.module.css';

const ProductSizes = ({ sizes }) => {
  return (
    <div className={styles.product_sizes}>
      {sizes.map((size) => (
        <div key={uuidv4()} className={styles.product_size}>
          {size}
        </div>
      ))}
    </div>
  );
};

export default ProductSizes;
