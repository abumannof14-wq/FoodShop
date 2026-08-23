import React from 'react'
import { foods } from '../../data/food'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

const OrganicFood = () => {
    return (
        <>
            <div className="text-center py-20">
                <p>From nature to your table</p>
                <h3 className="text-green-400 text-3xl">Health Starts With Organic Food</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper convallis fermentum.</p>
                    <div className="grid grid-cols-4 gap-10 mt-16 m-auto max-w-7xl m-auto">
                        {foods.map((food, index) => (
                            <div key={index} className="w-[130px]">
                                <div className="relative w-[110px] h-[110px] mx-auto">
                                    <Image src={food.img} alt={food.name} fill className="object-contain" />
                                </div>
                                <p className="text-[#8caf28] font-serif text-[15px] mt-2">{food.name}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-gray-700 text-[14px]">${food.price}</p>
                                    <button className="w-5 h-5 rounded-full bg-[#8caf28] text-white text-[10px] flex items-center justify-center"><ShoppingCart className='w-[15px]'/></button>
                                </div>
                            </div>
                        ))}
                    </div>
            </div >
        </>
    )
}

export default OrganicFood