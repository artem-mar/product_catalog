"use client"

import { Suspense, lazy } from "react"

const CartPage = lazy(() => import("@/components/CartPage"))

export default function Page() {
  return (
    <Suspense fallback={<div className='text-center text-gray-600 py-8'>Загрузка...</div>}>
      <CartPage />
    </Suspense>
  )
}
