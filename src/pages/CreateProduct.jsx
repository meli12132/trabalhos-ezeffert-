import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addProduct({ name, price: parseFloat(price), image });
    navigate("/shop");
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <h2>Criar Produto</h2>
      <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Preço" type="number" value={price} onChange={e => setPrice(e.target.value)} required />
      <input placeholder="URL da Imagem" value={image} onChange={e => setImage(e.target.value)} required />
      <button type="submit">Salvar</button>
    </form>
  );
}
//15