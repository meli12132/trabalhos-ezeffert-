import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import CreateProductPage from "./pages/CreateProductPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/criar" element={<CreateProductPage />} />
      <Route path="/editar" element={<EditProductPage />} /> {/* Se necessário */}
    </Routes>
  );
}
