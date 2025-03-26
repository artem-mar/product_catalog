import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Каталог товаров",
  description: "Каталог товаров с корзиной и фильтрацией",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={`${inter.className} bg-gray-50`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
