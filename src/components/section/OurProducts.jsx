"use client";
import React from 'react';
import { products } from '../../data/data';
import Image from 'next/image';

const OurProducts = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            {/* Sarlavha qismi - Premium va zamonaviy */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                {/* Kichik badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-emerald-100">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Be Healthy
                </div>
                
                {/* Asosiy sarlavha */}
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">Products</span>
                </h2>
                
                {/* Tavsif */}
                <p className="text-gray-500 text-lg leading-relaxed">
                    Discover our range of healthy and delicious products.
                </p>
            </div>

            {/* Mahsulotlar grid - Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.12)] hover:border-emerald-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        {/* Rasm qismi */}
                        <div className="bg-gradient-to-b from-emerald-50/60 to-white rounded-xl p-4 mb-4 flex justify-center items-center h-32">
                            <Image 
                                src={product.img} 
                                alt={product.name} 
                                width={80} 
                                height={80} 
                                className="object-contain transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        
                        {/* Mahsulot nomi */}
                        <p className="text-center text-base font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200 truncate">
                            {product.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurProducts;