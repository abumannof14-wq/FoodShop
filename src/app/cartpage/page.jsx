'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cartItems, subtotal, delivery, total, removeFromCart, updateQuantity } = useCart();

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 font-sans text-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Chap tomon: Mahsulotlar ro'yxati, Subtotal va Navigatsiya */}
        <section className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-900">Shopping Cart</h1>

            {cartItems.length === 0 ? (
              <div className="py-12 border-b border-gray-200 text-center">
                <p className="text-gray-500 text-sm">Your cart is currently empty.</p>
              </div>
            ) : (
              <div className="space-y-4 border-b border-gray-200 pb-6">
                {cartItems.map((item) => {
                  const itemTotal = (item.unitPrice * item.quantity).toFixed(2);
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 py-3 border-b border-gray-100 last:border-none"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                          <Image
                            src={item.product?.img || "/placeholder.png"}
                            alt={item.product?.name || "Product"}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-gray-900">{item.product?.name}</h3>
                          <p className="text-xs text-gray-500">Size: {item.variant}</p>
                          <p className="text-xs text-gray-500 mt-0.5">${item.unitPrice.toFixed(2)} / unit</p>

                          {/* Miqdorni o'zgartirish va O'chirish */}
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 transition-colors"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-semibold text-gray-800">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 transition-colors"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-xs text-red-500 hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-gray-900">${itemTotal}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Subtotal */}
            <div className="pt-4 flex justify-between items-center text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <Link
              href="/"
              className="inline-block border border-black text-black text-xs font-semibold px-6 py-3 uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              Back to shopping
            </Link>
          </div>
        </section>

        {/* O'ng tomon: Order summary, Payment, Delivery */}
        <section className="lg:col-span-5 space-y-6">

          {/* Order Summary */}
          <div className="bg-[#f5f5f3] p-6 space-y-4">
            <h2 className="text-lg font-normal text-gray-800">Order summary</h2>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
              <span className="text-sm font-semibold">Total</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>

            <p className="text-xs text-gray-500 pt-1">
              Estimated shipping time: 2 days
            </p>
            <Link href="/checkout">
              <button
                disabled={cartItems.length === 0}
                className="w-full bg-[#262626] disabled:bg-gray-400 text-white py-3 text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors"
              >
                Check out
              </button>
            </Link>
          </div>

          {/* Payment Type */}
          <div className="bg-[#f5f5f3] p-6">
            <h3 className="text-sm text-gray-800 mb-4">Payment type</h3>
            <div className="flex gap-2 flex-wrap">
              <div className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded">VISA</div>
              <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">MasterCard</div>
              <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">Maestro</div>
              <div className="bg-pink-600 text-white text-[10px] font-bold px-2 py-1 rounded">Klarna</div>
              <div className="bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded">Advance</div>
            </div>
          </div>

          {/* Delivery and Retour */}
          <div className="bg-[#f5f5f3] p-6 space-y-3 text-xs text-gray-600">
            <h3 className="text-sm text-gray-800 font-normal mb-2">Delivery and retour</h3>
            <p className="flex items-start gap-2">
              <span>›</span> Order before 12:00 and we will ship the same day.
            </p>
            <p className="flex items-start gap-2">
              <span>›</span> Orders made after Friday 12:00 are processed on Monday.
            </p>
            <p className="flex items-start gap-2">
              <span>›</span> To return your articles, please contact us first.
            </p>
            <p className="flex items-start gap-2">
              <span>›</span> Postal charges for retour are not reimbursed.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}