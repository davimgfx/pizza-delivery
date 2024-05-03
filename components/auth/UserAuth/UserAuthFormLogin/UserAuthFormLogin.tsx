'use client'
import React, { FormEvent, useState } from 'react'
import { Button } from '../../../ui/button'
import { Input } from '../../../ui/input'
import { Label } from '../../../ui/label'
import { SpinnerIcon, GoogleIcon } from '@/components/icons'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function UserAuthFormLogin({}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleFormSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    setIsLoading(true)
    await signIn('credentials', {
      email,
      password,
    })
    setIsLoading(false)
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleFormSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              placeholder="*******"
              type="password"
              disabled={isLoading}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <Link
            href="esqueceu-senha"
            className="text-sm text-muted-foreground"
          >
            <u>Esqueceu a senha ? Recupere agora</u>
          </Link>
          <Button variant="outline" disabled={isLoading}>
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Entrar
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            ou login com Google
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GoogleIcon className="mr-2 h-4 w-4" />
        )}{' '}
        Login com conta Google
      </Button>
      <Link
        href="cadastro"
        className="text-sm text-muted-foreground text-center"
      >
        <u>Não tem uma conta ainda ? Crie agora</u>
      </Link>
    </div>
  )
}
