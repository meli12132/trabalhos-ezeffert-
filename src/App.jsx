import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/criar" element={<CreateProduct />} />
          <Route path="/editar" element={<UpdateProduct />} />
        </Routes>
      </CartProvider>
    </ProductProvider>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import CreateProductPage from "./pages/CreateProductPage";

<Router>
  <Routes>
    <Route path="/" element={<ShopPage />} />
    <Route path="/criar" element={<CreateProductPage />} />
    {/* futura tela de edição */}
  </Routes>
</Router>
