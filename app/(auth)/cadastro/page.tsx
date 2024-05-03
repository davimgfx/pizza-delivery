'use client'

import { UserAuthFormRegister } from '@/components/auth'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden flex-col bg-muted p-10 text-white lg:flex dark:border-r h-[100vh]">
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Crie sua conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Apenas o seu nome, email e senha!
              </p>
            </div>
            <UserAuthFormRegister />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Clicando em continuar, voce concorda com os{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de Serviços
              </Link>{' '}
              e{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                a Politica de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
