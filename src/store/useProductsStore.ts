import { create } from "zustand"
import { Product } from "@/types"
import { fetchProducts as apiFetchProducts } from "@/api/products"

interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
  filterProducts: (searchQuery: string, selectedCategory: string) => Product[]
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null })
    try {
      const products = await apiFetchProducts()
      set({ products })
    } catch {
      set({ error: "Ошибка при загрузке товаров" })
    } finally {
      set({ loading: false })
    }
  },

  filterProducts: (searchQuery: string, selectedCategory: string) => {
    const { products } = get()
    return products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  },
}))
