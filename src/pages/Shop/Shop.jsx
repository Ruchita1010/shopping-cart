import ProductCard from './ProductCard';
import products from '../../data/data.json';
import styles from './styles/Shop.module.css';

const Shop = () => {
  return (
    <div className={styles.product_card_grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
