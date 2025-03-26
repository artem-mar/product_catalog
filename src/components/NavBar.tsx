"use client"

import Link from "next/link"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useCartStore } from "@/store/useCartStore"

export default function NavBar() {
  const itemsCount = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  )

  return (
    <nav className='bg-white border-b border-gray-100 sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link
            href='/'
            className='text-xl font-bold text-gray-800 hover:text-[#005bff] transition-colors'
          >
            Product Catalog
          </Link>
          <Link
            href='/cart'
            className='relative p-2 text-gray-600 hover:text-[#005bff] hover:bg-gray-50 rounded-lg transition-colors'
          >
            <ShoppingCartIcon className='h-6 w-6' />
            {itemsCount > 0 && (
              <span className='absolute -top-1 -right-1 bg-[#005bff] text-white text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center'>
                {itemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
