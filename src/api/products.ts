import axios from "axios"
import { Product } from "@/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com"

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>(`${API_URL}/products`)
  return data
}
