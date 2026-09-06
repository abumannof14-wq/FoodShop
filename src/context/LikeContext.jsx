"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('likedProducts');
      if (stored) setLikes(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('likedProducts', JSON.stringify(likes));
    } catch {}
  }, [likes]);

  const getId = (p) => p?.id ?? p?.name;

  const toggleLike = (product) => {
    setLikes((prev) =>
      prev.some((item) => getId(item) === getId(product))
        ? prev.filter((item) => getId(item) !== getId(product))
        : [...prev, product]
    );
  };

  const isLiked = (idOrProduct) => {
    const id = typeof idOrProduct === 'object' ? getId(idOrProduct) : idOrProduct;
    return likes.some((item) => getId(item) === id);
  };

  return (
    <LikeContext.Provider value={{ likes, likeCount: likes.length, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikeContext);
  if (!context) throw new Error('useLikes LikeProvider ichida ishlatilishi kerak');
  return context;
};