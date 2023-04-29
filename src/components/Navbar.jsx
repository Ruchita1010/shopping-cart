import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">LOGO</Link>
        </div>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <img
          src="https://img.icons8.com/pastel-glyph/64/000000/shopping-trolley--v2.png"
          className={styles.shopping_cart_icon}
        />
      </nav>
    </header>
  );
};

export default Navbar;
