"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

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
  const [isInitialized, setIsInitialized] = useState(false);

  // 1. LocalStorage'dan ma'lumotni yuklash
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('LocalStorage error:', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // 2. LocalStorage'ga avtomatik saqlash
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  const parsePrice = (price) => parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0;

  const addToCart = (product, variant, quantity) => {
    const unitPrice = parsePrice(product?.price || 0);
    
    // Unikal ID faqat product ID (yoki nomi) va variantga bog'liq (Date.now olib tashlandi)
    const productId = product?.id || product?.name || 'prod';
    const id = `${productId}-${variant}`;

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        // Agar mahsulot allaqachon bo'lsa, faqat miqdorini oshiramiz
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Yangi mahsulot sifatida qo'shish
      return [
        ...prev,
        {
          id,
          product,
          variant,
          quantity,
          unitPrice,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

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

  const clearCart = () => {
    setCartItems([]);
  };

  // Hisob-kitoblar
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
        clearCart,
        subtotal,
        delivery,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};