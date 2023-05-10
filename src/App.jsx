import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home.jsx';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const App = () => {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Product />} />
          </Route>
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
};

export default App;
