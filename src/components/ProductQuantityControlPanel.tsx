import React from "react"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useCartStore } from "@/store/useCartStore"
import { Product } from "@/types"

const ProductQuantityControlPanel = ({ product }: { product: Product }) => {
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const addItem = useCartStore((state) => state.addItem)
  const items = useCartStore((state) => state.items)

  const isInCart = items.some((item) => item.id === product.id)
  const itemsCount = items.find((item) => item.id === product.id)?.quantity as number

  const decrementProductQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (itemsCount === 1) {
      removeItem(product.id)
    }
    updateQuantity(product.id, itemsCount - 1)
  }

  const incrementProductQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    updateQuantity(product.id, itemsCount + 1)
  }

  return isInCart ? (
    <div className='grid grid-cols-2 gap-4 w-full'>
      <Link
        href='/cart'
        className='block text-center w-full px-4 py-1 bg-[#10c44c] text-white rounded-lg hover:bg-[#11d452] active:scale-99 transition-colors cursor-pointer'
      >
        <p className='text-sm font-medium'>В корзине</p>
        <p className='text-xs'>Перейти</p>
      </Link>
      <div className='flex items-center justify-between'>
        <button
          onClick={decrementProductQuantity}
          className='w-11 h-11 rounded-lg bg-[#0096ff14] color-[#005bff] text-lg cursor-pointer active:scale-95'
        >
          -
        </button>
        <span>{itemsCount}</span>
        <button
          onClick={incrementProductQuantity}
          className='w-11 h-11 rounded-lg bg-[#0096ff14] text-lg cursor-pointer active:scale-95'
        >
          +
        </button>
      </div>
    </div>
  ) : (
    <button
      onClick={(e) => {
        e.stopPropagation()
        addItem(product)
      }}
      className='w-full bg-[#005bff] text-white px-4 py-2.5 rounded-lg hover:bg-[#0052e6] active:scale-99 transition-colors flex items-center justify-center gap-2 font-medium cursor-pointer'
    >
      <ShoppingCartIcon className='h-5 w-5' />В корзину
    </button>
  )
}

export default ProductQuantityControlPanel
