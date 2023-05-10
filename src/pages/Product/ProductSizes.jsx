import styles from './styles/ProductSizes.module.css';

// using index as key bcoz the sizes list won't ever change, it's static!
const ProductSizes = ({ sizes }) => {
  return (
    <div className={styles.product_sizes}>
      {sizes.map((size, index) => (
        <div key={index} className={styles.product_size}>
          {size}
        </div>
      ))}
    </div>
  );
};

export default ProductSizes;
