import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="text-center">
        <Loader2 className="w-16 h-16 animate-spin text-blue-600 dark:text-blue-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Carregando
          <span className="inline-block w-16 text-left">{dots}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Por favor, aguarde enquanto preparamos tudo para você.
        </p>
      </div>
    </div>
  )
}
