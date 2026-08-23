"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { All } from "../../data/vegetables";

const SectionMap = () => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-50/50 px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {All.map((product, index) => {
          const itemId = product.id ?? index;
          const isLiked = likedItems[itemId];
          
          return (
            <div key={itemId} className="group relative bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.15)] hover:border-emerald-200/60 transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden">
              
              <div className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
                <button onClick={() => toggleLike(itemId)} className="absolute top-5 right-5 z-20 p-3 rounded-full backdrop-blur-md border shadow-sm transition-all duration-300 active:scale-95 hover:scale-110 bg-white/90 border-gray-100 text-gray-400 hover:text-red-500">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={isLiked ? 0 : 2} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                </button>
                <Image src={product.img} alt={product.name} width={180} height={180} className="relative z-10 w-44 h-44 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-115 group-hover:-rotate-2" priority={index < 3} />
              </div>

              <div className="p-6 space-y-5">
                <h2 className="text-xl font-extrabold text-gray-800 tracking-tight line-clamp-1">{product.name}</h2>
                <div className="flex items-end justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-emerald-600 tracking-tight">{product.price}</span>
                    <span className="text-sm font-bold text-emerald-600/60">dollar/kg</span>
                  </div>
                </div>

                <Link 
                  href={`/product/${itemId}`} 
                  className="relative w-full overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/60 flex items-center justify-center gap-3 group/btn"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Batafsil / Savatga
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionMap;


