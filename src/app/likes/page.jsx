"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import { useLikes } from "../../context/LikeContext";

const LikesPage = () => {
  const { likes, toggleLike, isLiked } = useLikes();

  if (!likes || likes.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">Sevimlilar bo'sh</h1>
          <p className="text-gray-500 mb-6">Hali hech qanday mahsulotni sevimlilarga qo'shmadingiz.</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all"
          >
            Mahsulotlarni ko'rish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Sevimlilar</h1>
          <p className="text-gray-500 mt-2">{likes.length} ta mahsulot sevimlilarda</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {likes.map((product) => {
            const itemId = product.id ?? product.name;
            const liked = isLiked(itemId);
            
            return (
              <div key={itemId} className="group relative bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
                  <button 
                    onClick={() => toggleLike(product)} 
                    className={`absolute top-5 right-5 z-20 p-3 rounded-full border transition-all duration-300 active:scale-95 ${
                      liked 
                        ? 'bg-red-500 border-red-500 text-white' 
                        : 'bg-white/90 border-gray-200 text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <svg className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <Image 
                    src={product.img} 
                    alt={product.name} 
                    width={180} 
                    height={180} 
                    className="w-44 h-44 object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 space-y-5">
                  <h2 className="text-xl font-extrabold text-gray-800 tracking-tight line-clamp-1">{product.name}</h2>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-emerald-600 tracking-tight">{product.price}</span>
                    <span className="text-sm font-bold text-emerald-600/60">dollar/kg</span>
                  </div>

                  <Link 
                    href={`/product/${itemId}`} 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-emerald-200/50 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Batafsil / Savatga
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LikesPage;