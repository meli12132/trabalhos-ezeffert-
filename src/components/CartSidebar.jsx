import { useCart } from "../context/CartContext";

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: isOpen ? 0 : "-300px",
      width: "300px",
      height: "100%",
      background: "#fff",
      boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
      padding: "1rem",
      transition: "right 0.3s",
      zIndex: 1000
    }}>
      <h3>Carrinho</h3>
      <button onClick={onClose}>Fechar</button>
      <ul>
        {cartItems.map((item, i) => (
          <li key={i}>
            {item.name} - R$ {item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item)}>Remover</button>
          </li>
        ))}
      </ul>
      <hr />
      <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
    </div>
  );
}
