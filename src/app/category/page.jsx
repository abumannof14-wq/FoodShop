import { foods } from "../../data/food";
import Logo from '../../../public/images/gLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, UserRound, Search } from 'lucide-react'



export default function category() {
  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold">
          <Image src={Logo} alt="Logo" width={174} />
        </div>
        <div className="flex gap-10 text-black  ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/category">
            Category
          </Link>
          <Link href="/food">
            Food
          </Link>
          <Link href="/cart">
            Cart
          </Link>
        </div>
        <div className="flex gap-8 text-black " >
          <Search />
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
      <div className="min-h-screen bg-white px-10 py-8">

        <div className="text-[8px]">HOME / COLLECTIONS / FOOD</div>
        <div className="grid grid-cols-[170px_1fr] gap-10 mt-12">
          <div>
            <div className="flex items-center justify-between border-b border-gray-200 py-3">
              <div className="text-[8px]">COLLECTION</div>
              <div className="text-sm font-light">+</div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 py-3">
              <div className="text-[8px]">ORIGIN</div>
              <div className="text-sm font-light">+</div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 py-3">
              <div className="text-[8px]">FLAVOUR</div>
              <div className="text-sm font-light">+</div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 py-3">
              <div className="text-[8px]">QUANTITY</div>
              <div className="text-sm font-light">+</div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 py-3">
              <div className="text-[8px]">CAFFEINE</div>
              <div className="text-sm font-light">+</div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 py-3">
              <div className="text-[8px]">ALLERGENS</div>
              <div className="text-sm font-light">+</div>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="text-[8px]">ORGANIC</div>
              <div className="w-7 h-3.5 bg-black rounded-full">
                <div className="w-2.5 h-2.5 bg-white rounded-full relative top-[2px] left-[15px]" />
              </div>
            </div>

          </div>
          <div>
            <div className="flex justify-end mb-6">
              <div className="text-[8px] tracking-[0.15em]">SORT BY <span className="ml-2">↓</span></div>
            </div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-10">
              {foods.map((food) => (
                <div key={food.name}>
                  <div className="aspect-square bg-[#f3f1f2] overflow-hidden">
                    <img src={food.img} alt={food.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center mt-3">
                    <div className="text-[9px]">{food.name}</div>
                    <div className="text-[7px] text-gray-400 mt-1">Fresh healthy food</div>
                    <div className="text-[8px] mt-1">€{food.price} / portion</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}