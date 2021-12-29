import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  let items = [];
  let localSt = JSON.parse(localStorage.getItem("items"));
  console.log(localSt);
  if (localSt) {
    items = localSt;
  }

  console.log(localSt);

  const [cart, setCart] = useState(items);

  return (
    <CartContext.Provider value={{ cart, setCart, items, localSt }}>
      {children}
    </CartContext.Provider>
  );
};
