import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Cart';
import styles from '../styles/Layout.module.css';

const Layout = () => {
  const location = useLocation();
  const showBackgroundImage = location.pathname === '/';
  return (
    <div className={showBackgroundImage ? styles.bg : ''}>
      <Navbar />
      {/* Cart is neither a child of any other component, nor does it has any route defined for it but appears when cart icon is clicked!
        It uses context and thus, should be wrapped with a provider. As of now, I think this would be a good place to include the Cart component.
        Including Cart in the ContextProvider function itself, leads to error as the value becomes undefined which cannot be destructured.
        More on the error here: https://kentcdodds.com/blog/how-to-use-react-context-effectively
      */}
      <Cart />
      <Outlet />
    </div>
  );
};

export default Layout;
