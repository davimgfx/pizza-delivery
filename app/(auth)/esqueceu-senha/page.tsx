'use client'
import Image from 'next/image'

import { UserAuthFormForgetPassword } from '@/components/auth'

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
                Recuperar a sua senha
              </h1>
              <p className="text-sm text-muted-foreground">
                Apenas coloque seu email que enviaremos uma mensagem!
              </p>
            </div>
            <UserAuthFormForgetPassword />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
