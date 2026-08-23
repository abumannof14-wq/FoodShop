"use client"

import { useState } from "react"
import { Minus } from "lucide-react"
import Link from "next/link"
import Navigation from "../../components/section/Navigation"

const vegetables = [
  { id: 0, img: "/images/vegetables/lecture.png", name: "Lettuce", price: "$5" },
  { id: 1, img: "/images/vegetables/pear.png", name: "Pear", price: "$3" },
  { id: 2, img: "/images/vegetables/Broccoli.png", name: "Broccoli", price: "$8" },
  { id: 3, img: "/images/vegetables/Tomatoes.png", name: "Tomatoes", price: "$10" },
  { id: 4, img: "/images/vegetables/cucumbers.png", name: "Cucumbers", price: "$10" },
  { id: 5, img: "/images/vegetables/cherry.png", name: "Cherries", price: "$20" },
  { id: 6, img: "/images/vegetables/avocados.png", name: "Avocados", price: "$8" },
  { id: 7, img: "/images/vegetables/raspberries.png", name: "Raspberries", price: "$20" },
  { id: 8, img: "/images/vegetables/cabbage.png", name: "Cabbage", price: "$10" },
]

// Yangilangan foods massivi (id qo'shildi)
const foods = [
  { id: 9, img: "https://png.pngtree.com/png-clipart/20250115/original/pngtree-grilled-chicken-salad-bowl-with-fresh-vegetables-png-image_20197186.png", name: "Chicken Salad", price: 55 },
  { id: 10, img: "https://jow.fr/_next/image?url=https%3A%2F%2Fstatic.jow.fr%2F880x880%2Frecipes%2FH05MGHtMwLROCA.png&w=2560&q=100", name: "Egg Salad", price: 35 },
  { id: 11, img: "https://static.vecteezy.com/system/resources/previews/024/108/102/non_2x/tasty-fresh-hawaiian-salmon-poke-salad-on-transparent-background-png.png", name: "Poke salad", price: 65 },
  { id: 12, img: "https://png.pngtree.com/png-clipart/20240320/original/pngtree-tasty-vegan-food-salad-isolated-png-image_14635331.png", name: "Vegan salad", price: 45 },
  { id: 13, img: "https://static.vecteezy.com/system/resources/previews/050/478/311/non_2x/colorful-fresh-fruit-salad-served-png.png", name: "Mixed fruit", price: 65 },
  { id: 14, img: "https://static.vecteezy.com/system/resources/previews/054/720/830/non_2x/delicious-berry-smoothie-bowl-on-transparent-background-png.png", name: "Acai smoothie", price: 45 },
  { id: 15, img: "https://static.vecteezy.com/system/resources/previews/071/044/832/non_2x/keto-diet-plate-with-grilled-pork-eggs-cheese-berries-and-nuts-on-white-plate-healthy-eating-transparent-background-png.png", name: "Keto diet salad", price: 65 },
  { id: 16, img: "https://png.pngtree.com/png-vector/20241231/ourmid/pngtree-pear-and-walnut-salad-transparent-background-png-image_14982502.png", name: "Tropical salad", price: 45 },
]

const allItems = [...vegetables, ...foods]

export default function CategoryPage() {
  const [open, setOpen] = useState({
    COLLECTIONS: true,
    ORIGIN: true,
    FLAVOR: true,
  })

  const toggle = (title) => {
    setOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const items = [...new Set(allItems.map((f) => f.name))]

  return (
    <div>
      <Navigation />

      <div className="flex min-h-screen bg-gray-50">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r p-6 space-y-4 shrink-0">
          {/* COLLECTIONS */}
          <div className="border-b pb-3">
            <button
              className="flex w-full items-center justify-between text-sm font-bold uppercase tracking-wide"
              onClick={() => toggle("COLLECTIONS")}
            >
              <span>COLLECTIONS</span>
              <Minus className="h-4 w-4" />
            </button>

            {open.COLLECTIONS && (
              <div className="space-y-2 mt-2">
                {items.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <label className="text-sm text-gray-600 cursor-pointer">{item}</label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ORIGIN */}
          <div className="border-b pb-3">
            <button
              className="flex w-full items-center justify-between text-sm font-bold uppercase tracking-wide"
              onClick={() => toggle("ORIGIN")}
            >
              <span>ORIGIN</span>
              <Minus className="h-4 w-4" />
            </button>

            {open.ORIGIN && (
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <label className="text-sm text-gray-600 cursor-pointer">Local</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <label className="text-sm text-gray-600 cursor-pointer">Imported</label>
                </div>
              </div>
            )}
          </div>

          {/* FLAVOR */}
          <div>
            <button
              className="flex w-full items-center justify-between text-sm font-bold uppercase tracking-wide"
              onClick={() => toggle("FLAVOR")}
            >
              <span>FLAVOR</span>
              <Minus className="h-4 w-4" />
            </button>

            {open.FLAVOR && (
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <label className="text-sm text-gray-600 cursor-pointer">Sweet</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <label className="text-sm text-gray-600 cursor-pointer">Sour</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <label className="text-sm text-gray-600 cursor-pointer">Bitter</label>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* MAIN CONTENT - CARDS */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <span className="text-sm text-gray-500">{allItems.length} items</span>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {allItems.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group block"
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                  <p className="text-sm font-semibold text-gray-900">
                    {typeof item.price === "number" ? `$${item.price}` : item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}