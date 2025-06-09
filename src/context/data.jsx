import { CartProvider } from "./CartContext";
import { ProductProvider } from "./ProductContext";

export function DataProvider({ children }) {
  return (
    <CartProvider>
      <ProductProvider>
        {children}
      </ProductProvider>
    </CartProvider>
  );
}
