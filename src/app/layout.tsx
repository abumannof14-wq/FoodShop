import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ 1. SHU IKKITA QATORNI QO'SHING:
import { CartProvider } from "../context/CartContext";
import MyBag from "../components/section/MyBag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FoodShop - Organic", // ✅ Nomni o'zgartirib qo'ydim
  description: "Tabiiy va sifatli mahsulotlar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz" // ✅ O'zbek tiliga o'zgartirdim
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* ✅ 2. MUHIM: {children} va <MyBag /> albatta CartProvider ichida bo'lishi shart! */}
        <CartProvider>
          {children}
          <MyBag />
        </CartProvider>

      </body>
    </html>
  );
}