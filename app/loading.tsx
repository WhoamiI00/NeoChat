// app/loading.tsx
'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 border-4 border-emerald-600 dark:border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Loading NeoCha...
        </p>
      </div>
    </div>
  )
}