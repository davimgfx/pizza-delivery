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
import { SpinnerIcon, GoogleIcon } from '@/components/icons'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

interface FormData {
  name: string
  email: string
  password: string
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const response = await axios.post('/api/user', formData)

    if (response.status === 200) {
      await axios.post('/api/email/createdAccount', {
        email: formData.email,
        name: formData.name,
      })
      setIsLoading(false)
      toast.success('Conta criada com sucesso')
    } else {
      setIsLoading(false)
      toast.warn(response.data.message)
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="name">Primeiro nome</Label>
            <Input
              id="name"
              name="name"
              placeholder="Paulo"
              type="text"
              disabled={isLoading}
              value={formData.name}
              onChange={handleInputChange}
            />
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.email}
              onChange={handleInputChange}
            />
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              placeholder="*******"
              type="password"
              disabled={isLoading}
              value={formData.password}
              onChange={handleInputChange}
            />
            <Link
              href={'/login'}
              className="relative flex text-xs text-muted-foreground"
            >
              <u>Se já tiver uma conta, clique aqui para login</u>
            </Link>
          </div>
          <Button disabled={isLoading} variant={'outline'}>
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Criar uma conta
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou crie com Google
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() =>
          signIn('google', { callbackUrl: 'http://localhost:3000/perfil' })
        }
      >
        {isLoading ? (
          <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GoogleIcon className="mr-2 h-4 w-4" />
        )}
        Crie com conta Google
      </Button>
    </div>
  )
}
