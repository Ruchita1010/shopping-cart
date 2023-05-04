import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import ProductSizes from './ProductSizes';
import styles from '../styles/Product.module.css';

const Product = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === id);
  const { name, image, price, availableSizes, description } = product;
  return (
    <div className={styles.product_container}>
      <img src={image} alt={name} className={styles.product_image} />
      <div className={styles.product_details}>
        <p className={styles.product_name}>{name}</p>
        <p className={styles.product_price}>${price}</p>
        <ProductSizes sizes={availableSizes} />
        <button className={styles.add_to_cart_btn}>Add to Cart</button>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Product;
