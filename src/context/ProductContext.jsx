import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  function addProduct(product) {
    setProducts([...products, product]);
  }

  function removeProduct(name) {
    setProducts(products.filter(p => p.name !== name));
  }

  function updateProduct(updated) {
    setProducts(products.map(p => p.name === updated.originalName ? updated : p));
  }

  return (
    <ProductContext.Provider value={{
      products, addProduct, removeProduct, updateProduct, editProduct, setEditProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
async function createProduct(newProduct) {
  
  await api.post("/produtos", newProduct); 
  fetchProducts(); 
}
