"use client"

import Image from "next/image"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useCartStore } from "@/store/useCartStore"
import Link from "next/link"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const total = getTotal()

  if (items.length === 0) {
    return (
      <div className='container mx-auto px-4 py-8 text-center'>
        <h1 className='text-2xl font-bold mb-6 text-gray-800'>Корзина пуста</h1>
        <Link
          href='/'
          className='inline-block bg-[#005bff] text-white px-8 py-3 rounded-xl hover:bg-[#0052e6] transition-colors font-medium'
        >
          Вернуться к каталогу
        </Link>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-8 text-gray-800'>Корзина</h1>
      <div className='grid gap-4'>
        {items.map((item) => (
          <div
            key={item.id}
            className='flex flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-[#005bff] transition-all duration-200'
          >
            <div className='relative w-24 sm:w-32 aspect-square bg-white p-3 flex items-center justify-center'>
              <Image src={item.image} alt={item.title} fill className='object-contain' />
            </div>
            <div className='flex-1 w-full'>
              <h3 className='font-medium text-gray-800 text-lg mb-2'>{item.title}</h3>
              <p className='text-[#005bff] font-semibold text-lg mb-4'>${item.price}</p>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                <div className='flex items-center gap-3 w-full sm:w-auto'>
                  <label
                    htmlFor={`quantity-${item.id}`}
                    className='text-gray-600 font-medium whitespace-nowrap'
                  >
                    Количество:
                  </label>
                  <input
                    type='number'
                    id={`quantity-${item.id}`}
                    min='1'
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className='w-24 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005bff] focus:border-transparent text-gray-800'
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className='text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg'
                  >
                    <TrashIcon className='h-5 w-5' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-8 bg-white p-4 sm:p-6 rounded-xl border border-gray-100'>
        <div className='flex justify-between items-center'>
          <span className='text-lg sm:text-xl font-bold text-gray-800'>Итого:</span>
          <span className='text-2xl sm:text-3xl font-bold text-[#005bff]'>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
