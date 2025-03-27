"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/types"
import ProductSidePanel from "@/components/ProductSidePanel"
import { useProductsStore } from "@/store/useProductsStore"

const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"]

export default function HomePage() {
  const { loading, error, fetchProducts, filterProducts } = useProductsStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const filteredProducts = filterProducts(searchQuery, selectedCategory)

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center text-gray-600'>Загрузка...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center text-red-500'>Ошибка: {error}</div>
      </div>
    )
  }

  return (
    <main className='container py-8 w-screen mx-auto'>
      <div className='mb-8 px-4'>
        <input
          type='text'
          placeholder='Поиск товаров...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005bff] focus:border-transparent text-gray-800 placeholder-gray-400'
        />
      </div>

      <div className='flex gap-4 overflow-x-auto pb-10 px-4'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === category
                ? "bg-[#005bff] text-white shadow-lg shadow-[#005bff]/20"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {category === "all" ? "Все товары" : category}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className='text-center text-gray-600 py-12 px-4'>Товары не найдены</div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4'>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => {
                setSelectedProduct(product)
                setIsModalOpen((prev) => (product.id !== selectedProduct?.id ? true : !prev))
              }}
            />
          ))}
        </div>
      )}
      <ProductSidePanel
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  )
}
