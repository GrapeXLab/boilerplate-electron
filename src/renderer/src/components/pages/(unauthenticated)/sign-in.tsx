import React, { ReactElement } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '@renderer/context/auth'
import { Input } from '@renderer/components/ui/input'
import { Button } from '@renderer/components/ui/button'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Label } from '@renderer/components/ui/label'
import { cn } from '@renderer/lib/utils'

export default function LoginPage(): ReactElement {
  const [showPassword, setShowPassword] = React.useState(false)
  const { login } = useAuth()

  const schema = z.object({
    username: z
      .string()
      .email({ message: 'Por favor insira um email válido' })
      .min(3, { message: 'O nome de usuário deve ter no mínimo 3 caracteres' }),
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
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-11">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white">Seja bem vindo!</h1>
          <p className="text-sm text-zinc-400">Por favor insira seus dados</p>
        </div>

        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              placeholder="Digite seu email"
              {...form.register('username')}
              className={cn(
                form.formState.errors.username && [
                  'focus-visible:ring-1 focus-visible:ring-red-500',
                  'border-red-500'
                ]
              )}
            />
            {form.formState.errors.username && (
              <p className="text-sm text-red-400">{form.formState.errors.username.message}</p>
            )}
          </div>
          <div className="space-y-2 relative">
            <Label>Senha</Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              {...form.register('password')}
              placeholder="Digite sua senha"
              className={cn(
                form.formState.errors.password && [
                  'focus-visible:ring-1 focus-visible:ring-red-500',
                  'border-red-500'
                ]
              )}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-6 text-zinc-400 hover:text-white hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </Button>
            {form.formState.errors.password && (
              <p className="text-sm text-red-400">{form.formState.errors.password.message}</p>
            )}
          </div>
          <Button className="w-full mt-8" type="submit">
            Entrar
          </Button>
        </form>

        <div className="text-center text-sm">
          <span className="text-zinc-400">Esqueceu a senha? </span>
          <a href="#" className="text-purple-400 hover:text-purple-300">
            Crie uma conta
          </a>
        </div>
      </div>
    </div>
  )
}
