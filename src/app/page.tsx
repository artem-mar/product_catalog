"use client"

import { Suspense, lazy } from "react"

const HomePage = lazy(() => import("@/components/HomePage"))

export default function Page() {
  return (
    <Suspense fallback={<div className='text-center text-gray-600 py-8'>Загрузка...</div>}>
      <HomePage />
    </Suspense>
  )
}
