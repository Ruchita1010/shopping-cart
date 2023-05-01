import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, image, colourCount, price } = product;
  return (
    <div className={styles.product_card}>
      <img src={image} alt={name} className={styles.product_img} />
      <div className={styles.product_info}>
        <div>
          <p className={styles.product_name}>{name}</p>
          <p className={styles.product_colour_count}>{colourCount} Colours</p>
        </div>
        <div>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
