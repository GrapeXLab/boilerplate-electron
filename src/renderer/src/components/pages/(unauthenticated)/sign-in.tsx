import { ReactElement } from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@renderer/components/ui/card'
import { Label } from '@renderer/components/ui/label'
import { Checkbox } from '@renderer/components/ui/checkbox'
import { Separator } from '@renderer/components/ui/separator'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { useAuth } from '@renderer/context/auth'

export default function LoginPage(): ReactElement {
  const { login } = useAuth()

  const schema = z.object({
    username: z.string().min(3, { message: 'O nome de usuário deve ter no mínimo 3 caracteres' }),
    password: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  })

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      await login(values)
    } catch (error) {
      console.error(error)
    }
  }

  const form = useForm<z.infer<typeof schema>>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50  p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center">Bem-vindo de volta</h2>
          <p className="text-sm text-muted-foreground">Entre na sua conta para continuar</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="user">User</Label>
              <Input id="user" placeholder="user" {...form.register('username')} />
              {form.formState.errors.username && (
                <span className="text-xs text-destructive ">
                  {form.formState.errors.username.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...form.register('password')} />
              {form.formState.errors.password && (
                <span className="text-xs text-destructive ">
                  {form.formState.errors.password.message}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lembrar de mim
              </label>
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
        <Separator className="my-4" />
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            Não tem uma conta?{' '}
            <Link to={'/sign-up'} className="text-blue-500 hover:underline">
              Registre-se
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
