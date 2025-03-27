import Image from "next/image"
import ProductQuantityControlPanel from "./ProductQuantityControlPanel"
import { Product } from "@/types"
interface ProductCardProps {
  product: Product
  onClick: () => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
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

          <ProductQuantityControlPanel product={product} />
        </div>
      </div>
    </div>
  )
}
