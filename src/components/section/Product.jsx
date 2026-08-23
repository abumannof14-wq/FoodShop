"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext'; 

const Product = ({ product }) => {
  const { addToCart } = useCart(); 

  const [selectedVariant, setSelectedVariant] = useState('1 kg');
  const [quantity, setQuantity] = useState(1);

  const variants = [
    { name: '1 kg' },
    { name: '5 kg' },
    { name: '10 kg' },
  ];

  const unitPrice = parseFloat(String(product?.price).replace(/[^0-9.]/g, '')) || 0;
  const totalPrice = (unitPrice * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <nav className="text-xs text-gray-500 uppercase tracking-wider mb-8 flex items-center gap-2">
        <span className="hover:text-emerald-600 cursor-pointer transition-colors">Home</span>
        <span>/</span>
        <span className="hover:text-emerald-600 cursor-pointer transition-colors">Vegetables</span>
        <span>/</span>
        <span className="text-gray-800 font-medium truncate">{product?.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-3xl aspect-square flex justify-center items-center overflow-hidden group border border-emerald-100/50">
          <Image
            src={product?.img || "/placeholder.png"}
            alt={product?.name}
            width={500}
            height={500}
            className="object-contain w-3/4 h-3/4 drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
            {product?.name}
          </h1>
          
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            High-quality, naturally grown produce. Straight from the farm to your table.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-100">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Premium Quality
            </span>
            <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-green-100">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Natural
            </span>
          </div>

          <div className="mb-8 flex items-baseline gap-2">
            <span className="text-4xl font-black text-emerald-600">{product?.price}</span>
            <span className="text-lg font-semibold text-gray-500">USD / kg</span>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Select Size</label>
            <div className="grid grid-cols-3 gap-3">
              {variants.map((v) => {
                const isSelected = selectedVariant === v.name;
                return (
                  <button
                    key={v.name}
                    onClick={() => setSelectedVariant(v.name)}
                    className={`relative px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                      isSelected 
                        ? 'bg-emerald-600 border-2 border-emerald-600 text-white shadow-md shadow-emerald-200' 
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/30'
                    }`}
                  >
                    {v.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Quantity</label>
            <div className="inline-flex items-center border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-14 h-14 flex items-center justify-center text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
              </button>
              <span className="w-16 text-center text-xl font-black text-gray-900 border-x-2 border-gray-200 py-2 select-none">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-14 h-14 flex items-center justify-center text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </button>
            </div>
          </div>

          <div className="mb-8 flex items-center justify-between bg-emerald-50/60 border border-emerald-100 rounded-2xl px-5 py-4">
            <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Total Price</span>
            <span className="text-2xl font-black text-emerald-700">${totalPrice}</span>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-gray-900 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-xl shadow-gray-200/50 hover:shadow-emerald-200/50 flex items-center justify-center gap-3 group text-lg"
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            ADD TO CART — ${totalPrice}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;