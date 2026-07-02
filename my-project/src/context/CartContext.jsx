"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add Product
  const addToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.weight === product.weight
    );

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id &&
          item.weight === product.weight
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Remove Product
  const removeFromCart = (id, weight) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === id && item.weight === weight)
      )
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Increase Quantity
  const increaseQuantity = (id, weight) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.weight === weight
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id, weight) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        item.weight === weight &&
        item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);