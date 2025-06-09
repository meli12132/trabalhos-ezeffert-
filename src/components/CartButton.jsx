import { ShoppingCart } from "lucide-react";

export default function CartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#004AAD",
        color: "white",
        border: "none",
        borderRadius: "50%",
        padding: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <ShoppingCart size={24} />
    </button>
  );
}