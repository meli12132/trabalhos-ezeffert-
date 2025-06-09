import { useState, useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const { editProduct, updateProduct } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!editProduct) return;
    setName(editProduct.name);
    setPrice(editProduct.price);
    setImage(editProduct.image);
  }, [editProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    updateProduct({ name, price: parseFloat(price), image, originalName: editProduct.name });
    navigate("/shop");
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <h2>Editar Produto</h2>
      <input value={name} onChange={e => setName(e.target.value)} required />
      <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />
      <input value={image} onChange={e => setImage(e.target.value)} required />
      <button type="submit">Atualizar</button>
    </form>
  );
}
//15