import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import CartSidebar from "../components/CartSidebar";
import { useNavigate } from "react-router-dom";

export default function ShopPage() {
  const [showCart, setShowCart] = useState(false);
  const [removeMode, setRemoveMode] = useState(false);
  const { products } = useProducts();
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>🛍️ Loja</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button
          onClick={() => setShowCart(true)}
          style={{
            backgroundColor: "#0077cc",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          🛒 Carrinho
        </button>

        <button
          onClick={() => navigate("/criar")}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          ➕ Criar Produto
        </button>

        <button
          onClick={() => setRemoveMode(!removeMode)}
          style={{
            backgroundColor: removeMode ? "#6c757d" : "#dc3545",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {removeMode ? "🔒 Sair do modo de remoção" : "🗑️ Remover Produtos"}
        </button>
      </div>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} removeMode={removeMode} />
        ))}
      </div>

      <CartSidebar isOpen={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
}
