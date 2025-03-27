import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Product Catalog",
  description: "Каталог товаров с возможностью поиска и фильтрации",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru' className='overflow-y-scroll'>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
