import React from 'react'
import { products } from '../../data/data'
import Image from 'next/image'


const OurProducts = () => {
    return (
        <div className="text-center py-20">
            <p>Be Healtyly</p>
            <h3 className="text-green-400 text-3xl">Our Products</h3>
            <p>Discover our range of healthy and delicious products.</p>

            <div className="flex  justify-center mt-8 items-center">
                {products.map((product, index) => (
                    <div key={index} className="m-4 flex flex-col items-center">
                        <Image src={product.img} alt={product.name} width={25} className="object-contain" />
                        <p className="text-[18px] mt-2">{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurProducts