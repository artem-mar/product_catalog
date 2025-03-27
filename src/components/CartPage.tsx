"use client"

import { useCartStore } from "@/store/useCartStore"
import Link from "next/link"
import CartItem from "./CartItem"

export default function CartPage() {
  const { items, getTotal } = useCartStore()
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
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
          />
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
