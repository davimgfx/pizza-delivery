'use client'
import axios from 'axios'
import React, {
  ChangeEvent,
  HTMLAttributes,
  SyntheticEvent,
  useState,
} from 'react'
import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
import { cn } from '@/lib/utils'
import {
  SpinnerIcon,
  GoogleIcon,
  WarningIcon,
  NotEye,
  Eye,
} from '@/components/icons'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'
import ProvidersAuth from '../../ProvidersAuth/ProvidersAuth'
import { useRouter } from 'next/navigation'

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

interface FormData {
  name: string
  email: string
  password: string
}

interface ErrorProps {
  name?: string
  email?: string
  password?: string
}

export default function UserAuthFormRegister({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  })
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFocus = (field: keyof ErrorProps) => {
    setError((prevError) => ({
      ...prevError,
      [field]: undefined,
    }))
  }

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const newError: ErrorProps = {}

    if (formData.name.length < 2) {
      newError.name = 'Pelo menos 2 caracteres'
    }

    if (!formData.name) {
      newError.name = 'Preencha o campo de nome'
    }

    if (!formData.email) {
      newError.email = 'Preencha o campo de email'
    }

    if (formData.password.length < 6) {
      newError.password = 'A senha deve ter pelo menos 6 caracteres'
    }

    if (!formData.password) {
      newError.password = 'Preencha o campo de senha'
    }

    if (Object.keys(newError).length > 0) {
      setError(newError)
      setIsLoading(false)
      return
    }

    setError({})

    try {
      const response = await axios.post('/api/v1/user/register', formData)

      if (response.status === 200) {
        await axios.post('/api/v1/email/createdAccount', {
          email: formData.email,
          name: formData.name,
        })
        setIsLoading(false)
        signIn('credentials', {
          email: formData.email,
          password: formData.password,
          callbackUrl: '/',
        })
        toast.success('Conta criada com sucesso')
        
      } else {
        setIsLoading(false)
        toast.warn(response.data.message)
      }
    } catch (error) {
      setIsLoading(false)
      toast.error('Erro ao criar conta')
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <ProvidersAuth
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          text="Cadastre com"
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
            <Label htmlFor="name">Primeiro nome</Label>
            <div className="relative">
              <Input
                id="name"
                name="name"
                placeholder="Paulo"
                type="text"
                disabled={isLoading}
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => handleFocus('name')}
                error={error.name}
              />
              {error.name && (
                <div className="absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center">
                  <div className="flex items-center right-3 pr-2 pl-2 inset-y-0 pointer-events-none text-red-900">
                    <WarningIcon data-testid="warning-icon-name" />
                  </div>
                </div>
              )}
            </div>
            {error.name && (
              <span className="text-sm font-medium text-red-500">
                {error.name}
              </span>
            )}
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                placeholder="email@exemplo.com.br"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => handleFocus('email')}
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
            <Label htmlFor="password">Senha</Label>

            <div className="relative">
              <Input
                id="password"
                name="password"
                placeholder={
                  passwordType === 'password' ? '**********' : 'exemplo-senha'
                }
                type={passwordType}
                disabled={isLoading}
                value={formData.password}
                onChange={handleInputChange}
                onFocusRemoveError={() => handleFocus('password')}
                error={error.password}
              />
              <div
                className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {error.password ? (
                  <WarningIcon data-testid="warning-icon-password" />
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
          <Button disabled={isLoading} variant={'outline'} className="mt-4">
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Criar uma conta
          </Button>
        </div>
      </form>
      <span className="mt-2 text-sm text-muted-foreground flex gap-1 justify-center">
        Já tem uma conta criada?
        <Link href="login" className="">
          <u>Faça Login</u>
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
