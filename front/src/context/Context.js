import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (itemName) => {
    const existingItem = items.find((item) => item.name === itemName);

    if (existingItem) {
      const updatedCartItems = items.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      );
      setItems(updatedCartItems);
    } else {
      setItems([...items, { name: itemName, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    const updatedItems = items.filter(item => item.name !== itemName);
    setItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
