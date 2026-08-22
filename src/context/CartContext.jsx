"use client";
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // "$5" kabi matndan raqamni to'g'ri ajratib olamiz
  const parsePrice = (price) => parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0;

  // Savatga qo'shish
  const addToCart = (product, variant, quantity) => {
    const unitPrice = parsePrice(product.price);
    const id = `${product.id}-${variant}`;

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id,
          product,
          variant,
          quantity,
          unitPrice, // <-- endi bitta dona narxi saqlanadi, jami narx emas
        },
      ];
    });

    setIsCartOpen(true); // Savatni ochish
  };

  // Savatdan o'chirish
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Miqdorni o'zgartirish
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Umumiy summa — har safar unitPrice * quantity orqali qayta hisoblanadi
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  const delivery = cartItems.length > 0 ? 3.95 : 0;
  const total = subtotal + delivery;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
        delivery,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
