import { Card, CardContent, CardHeader } from '@renderer/components/ui/card'
import { Label } from '@renderer/components/ui/label'
import { Separator } from '@renderer/components/ui/separator'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Link } from 'react-router-dom'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center">Crie sua conta</h2>
          <p className="text-sm text-muted-foreground">
            Preencha os dados abaixo para se registrar
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input id="firstName" type="text" placeholder="João" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input id="lastName" type="text" placeholder="Silva" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="joao@exemplo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirme a senha</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Criar conta
            </Button>
          </form>
          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="text-sm text-center">
              Já tem uma conta?{' '}
              <Link to={'/sign-in'} className="text-blue-500 hover:underline">
                Faça login
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
