import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = () => {
  const location = useLocation();
  const showBackgroundImage = location.pathname === '/';
  return (
    <div className={showBackgroundImage ? styles.bg : ''}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
