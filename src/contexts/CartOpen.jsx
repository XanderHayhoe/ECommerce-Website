import { createContext, useState } from "react";

export const CartOpenContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartOpenProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return (
    <CartOpenContext.Provider value={value}>
      {children}
    </CartOpenContext.Provider>
  );
};
