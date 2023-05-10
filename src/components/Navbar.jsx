import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCartContext } from '../context/ShoppingCartContext';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { totalQuantity, cartDispatch } = useShoppingCartContext();
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" title="Home">
          <img
            src="https://img.icons8.com/laces/64/null/shoes.png"
            className={styles.logo}
          />
        </Link>
        <div
          className={`${styles.burger} ${showMenu && styles.active}`}
          onClick={() => setShowMenu(!showMenu)}>
          <span
            className={`${styles.burger_line} 
            ${showMenu && styles.active}`}></span>
          <span
            className={`${styles.burger_line} 
            ${showMenu && styles.active}`}></span>
          <span
            className={`${styles.burger_line} 
            ${showMenu && styles.active}`}></span>
        </div>
        <ul className={`${styles.nav_list} ${showMenu && styles.active}`}>
          <li className={styles.nav_item}>
            <Link to="/" title="Home" onClick={() => setShowMenu(!showMenu)}>
              Home
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to="/shop"
              title="Shop"
              onClick={() => setShowMenu(!showMenu)}>
              Shop
            </Link>
          </li>
        </ul>
        <div
          className={styles.shopping_cart_icon_wrapper}
          onClick={() => cartDispatch({ type: 'TOGGLE_CART_DISPLAY' })}>
          <img
            src="https://img.icons8.com/pastel-glyph/64/000000/shopping-trolley--v2.png"
            className={styles.shopping_cart_icon}
            alt="Shopping cart icon"
          />
          {totalQuantity > 0 && (
            <p className={styles.total_quantity_badge}>{totalQuantity}</p>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
