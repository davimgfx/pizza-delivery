'use client'
import { SpinnerIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

export default function UserAuthFormForgetPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleFormSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    setIsLoading(true)

    const response = await axios.post('api/email/forgetPassword', { email })

    if (response.status === 200) {
      setIsLoading(false)
      toast.success('Email enviado com sucesso')
    } else {
      setIsLoading(false)
      toast.warn(response.data.message)
    }

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
          </div>
          <Link href="./login" className="text-sm text-muted-foreground">
            <u>Lembrou a senha? Faça o login</u>
          </Link>
          <Button variant="outline" disabled={isLoading}>
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Recuperar senha
          </Button>
        </div>
      </form>
      <Link
        href="cadastro"
        className="text-sm text-muted-foreground text-center"
      >
        <u>Não tem uma conta ainda ? Crie agora</u>
      </Link>
    </div>
  )
}
