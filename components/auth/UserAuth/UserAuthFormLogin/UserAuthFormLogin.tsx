'use client'
import React, { FormEvent, SyntheticEvent, useState } from 'react'
import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
import { SpinnerIcon, WarningIcon } from '@/components/icons'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { ProvidersAuth } from '@/components/auth'
import { toast } from 'react-toastify'
import Eye from '@/components/icons/PasswordIcons/Eye/Eye'
import NotEye from '@/components/icons/PasswordIcons/NotEye/NotEye' // Assume you have an EyeOff icon for hiding password

interface ErrorProps {
  email?: string
  password?: string
}

export default function UserAuthFormLogin({}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorProps>({})
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    'password',
  )

  const togglePasswordVisibility = () => {
    if (!error.password) {
      setPasswordType((prevType) =>
        prevType === 'password' ? 'text' : 'password',
      )
    }
  }

  const handleFocus = (field: keyof ErrorProps) => {
    setError((prevError) => ({
      ...prevError,
      [field]: undefined,
    }))
  }

  async function onSubmit(ev: SyntheticEvent) {
    ev.preventDefault()

    setIsLoading(true)

    const newError: ErrorProps = {}

    if (email === '') {
      newError.email = 'Preencha o campo de email'
    }

    if (password.length < 6) {
      newError.password = 'A senha deve ter pelo menos 6 caracteres'
    }

    if (password === '') {
      newError.password = 'Preencha o campo de senha'
    }

    if (Object.keys(newError).length > 0) {
      setError(newError)
      setPasswordType('password')
      setIsLoading(false)
      return
    }

    setError({})

    const res = await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    })

    if (res?.error) toast.error(res.error)

    setIsLoading(false)
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <ProvidersAuth
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          text="Faça login com"
        />
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground bg-[#FFFFFF]">
              OU
            </span>
          </div>
        </div>

        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                placeholder="email@exemplo.com.br"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                onFocusRemoveError={() => handleFocus('email')}
                error={error.email}
              />

              {error.email && (
                <div className="absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center">
                  <div className="flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-900">
                    <WarningIcon data-testid="warning-icon-email" />
                  </div>
                </div>
              )}
            </div>
            {error.email && (
              <span className="text-sm font-medium text-red-500">
                {error.email}
              </span>
            )}
            <div className="flex justify-between mt-4">
              <Label htmlFor="password">Senha</Label>
              <Link href="esqueceu-senha" className="text-sm text-gray-500">
                Esqueceu a senha?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                placeholder={
                  passwordType === 'password' ? '**********' : 'exemplo-senha'
                }
                type={passwordType}
                disabled={isLoading}
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                onFocusRemoveError={() => handleFocus('password')}
                error={error.password}
              />
              <div
                className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {error.password ? (
                  <WarningIcon
                    className="text-red-500"
                    data-testid="warning-icon-password"
                  />
                ) : passwordType === 'password' ? (
                  <NotEye />
                ) : (
                  <Eye />
                )}
              </div>
            </div>
            {error.password && (
              <span className="text-sm font-medium text-red-500">
                {error.password}
              </span>
            )}
          </div>

          <Button variant="outline" disabled={isLoading} className="mt-4">
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Entrar
          </Button>
        </div>
      </form>

      <span className="mt-2 text-sm text-muted-foreground flex gap-1 justify-center">
        Não tem uma conta ainda?
        <Link href="cadastro" className="">
          <u>Crie agora</u>
        </Link>
      </span>

      <div className="absolute bottom-10 w-[350px] text-xs text-center sm:hidden">
        <span>
          Ao continuar, você concorda com os <u>Termos de Serviço</u> e a{' '}
          <u>Política de Privacidade</u> do Pizza delivery, e em receber e-mails
          periódicos com atualizações.
        </span>
      </div>
    </div>
  )
}
