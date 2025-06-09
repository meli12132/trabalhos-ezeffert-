import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, removeMode }) {
  const { addToCart } = useCart();
  const { removeProduct, setEditProduct } = useProducts();
  const navigate = useNavigate();

  function handleEdit() {
    setEditProduct(product);
    navigate("/editar");
  }

  return (
    <div style={{
      position: "relative",
      width: "220px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      padding: "16px",
      transition: "transform 0.2s",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      {removeMode && (
        <button
          onClick={() => removeProduct(product.name)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          ×
        </button>
      )}

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "12px"
        }}
      />

      <div>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>{product.name}</h4>
        <p style={{ fontWeight: "bold", fontSize: "18px", color: "#F26724" }}>
          R$ {product.price.toFixed(2)}
        </p>
      </div>

      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <button
          onClick={() => addToCart(product)}
          style={{
            flex: 1,
            backgroundColor: "#F26724",
            color: "white",
            border: "none",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Comprar
        </button>

        <button
          onClick={handleEdit}
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          ✏️
        </button>
      </div>
    </div>
  );
}
