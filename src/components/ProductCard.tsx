import Image from "next/image"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useCartStore } from "@/store/useCartStore"

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
          <button
            onClick={(e) => {
              e.stopPropagation()
              addItem(product)
            }}
            className='w-full bg-[#005bff] text-white px-4 py-2.5 rounded-lg hover:bg-[#0052e6] transition-colors flex items-center justify-center gap-2 font-medium cursor-pointer'
          >
            <ShoppingCartIcon className='h-5 w-5' />В корзину
          </button>
        </div>
      </div>
    </div>
  )
}
