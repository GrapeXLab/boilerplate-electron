/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Link } from 'react-router-dom'
import { Button } from '@renderer/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Página não encontrada</h2>
      <p className="text-muted-foreground mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Button asChild>
        <Link to={'/'}>Voltar para a página inicial</Link>
      </Button>
    </div>
  )
}
