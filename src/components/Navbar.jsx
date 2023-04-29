import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/" title="Home">
            LOGO
          </Link>
        </div>
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
        <img
          src="https://img.icons8.com/pastel-glyph/64/000000/shopping-trolley--v2.png"
          className={styles.shopping_cart_icon}
          alt="Shopping cart icon"
        />
      </nav>
    </header>
  );
};

export default Navbar;
