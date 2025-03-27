import Image from "next/image"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useCartStore } from "@/store/useCartStore"
import Link from "next/link"
interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
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

  return (
    <div
      onClick={onClick}
      className='group bg-white rounded-xl border border-gray-100 hover:border-[#005bff] transition-all duration-200 overflow-hidden cursor-pointer'
    >
      <div className='relative h-56 w-full bg-white p-4 flex items-center justify-center'>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className='object-contain p-4 group-hover:scale-105 transition-transform duration-200'
        />
      </div>
      <div className='p-4 h-56 flex flex-col'>
        <div className='flex flex-col flex-grow justify-start'>
          <h3 className='text-base font-medium mb-2 line-clamp-2 text-gray-800 group-hover:text-[#005bff] transition-colors'>
            {product.title}
          </h3>
          <p className='text-gray-500 text-sm line-clamp-2'>{product.description}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-2xl font-bold text-[#005bff]'>${product.price}</span>

          {isInCart ? (
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <Link
                  href='/cart'
                  className='block text-center w-full px-4 py-1 bg-[#10c44c] text-white rounded-lg hover:bg-[#11d452] active:scale-99 transition-colors cursor-pointer'
                >
                  <p className='text-sm font-medium'>В корзине</p>
                  <p className='text-xs'>Перейти</p>
                </Link>
              </div>
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
          )}
        </div>
      </div>
    </div>
  )
}
