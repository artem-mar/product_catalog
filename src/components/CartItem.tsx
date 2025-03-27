"use client"

import Image from "next/image"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useCartStore } from "@/store/useCartStore"

interface CartItemProps {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

export default function CartItem({ id, title, price, image, quantity }: CartItemProps) {
  const { removeItem, updateQuantity } = useCartStore()

  const decrementProductQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    updateQuantity(id, quantity - 1)
  }

  const incrementProductQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    updateQuantity(id, quantity + 1)
  }

  return (
    <div
      key={id}
      className='w-full flex flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-[#005bff] transition-all duration-200'
    >
      <div className='relative w-24 sm:w-32 aspect-square bg-white p-3 flex items-center justify-center'>
        <Image src={image} alt={title} fill className='object-contain' />
      </div>
      <div className='flex-1 w-full h-full flex flex-col gap-2'>
        <h3 className='font-medium text-gray-800 text-lg'>{title}</h3>
        <p className='text-[#005bff] font-semibold text-lg'>${price}</p>
        <div className='flex flex-row flex-grow justify-between items-end gap-2'>
          <div className='flex items-center justify-between gap-2'>
            <div className='text-sm text-gray-600 font-medium whitespace-nowrap'>Количество:</div>
            <button
              disabled={quantity === 1}
              onClick={decrementProductQuantity}
              className='w-9 h-9 rounded-lg bg-[#0096ff14] color-[#005bff] text-lg cursor-pointer active:scale-95 disabled:bg-gray-100'
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={incrementProductQuantity}
              className='w-9 h-9 rounded-lg bg-[#0096ff14] text-lg cursor-pointer active:scale-95'
            >
              +
            </button>
          </div>
          <div className='flex-grow flex justify-end'>
            <button
              onClick={() => removeItem(id)}
              className='text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 active:scale-95 rounded-lg'
            >
              <TrashIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
