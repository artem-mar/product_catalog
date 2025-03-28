"use client"

import { XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { Product } from "@/types"
import ProductQuantityControlPanel from "./ProductQuantityControlPanel"
interface ProductSidePanelProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductSidePanel({ product, isOpen, onClose }: ProductSidePanelProps) {
  return (
    <div
      className={`top-16 bg-white w-full max-w-md border-gray-100 border-s-1 transition-all duration-500 ease-in-out fixed h-[calc(100vh-4rem)] overflow-y-auto ${
        isOpen ? "right-0" : "right-[-100%]"
      }`}
    >
      {product && (
        <div className='p-6 flex flex-col justify-between h-full gap-6'>
          <div className='flex justify-between items-start'>
            <h2 className='text-2xl font-bold text-gray-800'>{product.title}</h2>
            <button
              onClick={() => onClose()}
              className='text-gray-400 hover:text-gray-600 active:scale-95 transition-colors'
            >
              <XMarkIcon className='h-6 w-6' />
            </button>
          </div>

          <div className='relative w-full h-96 bg-white p-4'>
            <Image src={product.image} alt={product.title} fill className='object-contain' />
          </div>

          <div className='space-y-4 flex-grow flex flex-col gap-2 justify-start'>
            <div>
              <h3 className='text-lg font-semibold text-gray-800'>Описание</h3>
              <p className='text-gray-600'>{product.description}</p>
            </div>

            <div className='flex-grow'>
              <h3 className='text-lg font-semibold text-gray-800'>Категория</h3>
              <p className='text-gray-600 capitalize'>{product.category}</p>
            </div>

            <div className='flex items-center justify-between gap-5 sm:gap-12 pt-4 border-t border-gray-100'>
              <div>
                <span className='text-2xl font-bold text-[#005bff]'>${product.price}</span>
              </div>

              <ProductQuantityControlPanel product={product} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
