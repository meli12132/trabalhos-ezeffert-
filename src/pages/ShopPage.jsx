import { useState } from "react";
import ProductCard from "../components/ProductCard";
import CartSidebar from "../components/CartSidebar";

export default function ShopPage() {
  const [showCart, setShowCart] = useState(false);

  const products = [
    { name: "Produto 1", price: 100 },
    { name: "Produto 2", price: 150 },
    { name: "Produto 3", price: 200 },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Loja</h1>
      <button onClick={() => setShowCart(true)}>🛒 Carrinho</button>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <CartSidebar isOpen={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
}
