"use client"; // 👈 BU QATOR QO'SHILADI
import React from 'react'
import Link from 'next/link'
import Logo from '../../../public/images/logo.png'
import Image from 'next/image'
import { ShoppingBag, UserRound, Search, Heart } from 'lucide-react'
import { useLikes } from '../../context/LikeContext'

const Navigation = () => {
  const { likeCount } = useLikes()

  return (
    <div className="max-w-7xl mx-auto">
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold">
          <Image src={Logo} alt="Logo" width={174} />
        </div>
        <div className="flex gap-10 text-white  ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/category">Category</Link>
          <Link href="/food">Food</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <div className="flex gap-8 text-white " >
          <Search />

          {/* ❤️ Like tugmasi va badge */}
          <div className="relative">
            {likeCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center z-10">
                {likeCount}
              </span>
            )}
            <Link href="/likes" aria-label="Sevimlilar">
              <Heart
                className={likeCount > 0 ? "text-red-400" : ""}
                fill={likeCount > 0 ? "currentColor" : "none"}
              />
            </Link>
          </div>

          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
            <Link href="/cart">
              <ShoppingBag />
            </Link>
          </div>
          <Link href="/login">
            <UserRound />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navigation