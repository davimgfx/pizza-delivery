'use client'
import { UserAuthFormLogin } from '@/components/auth'
import Image from 'next/image'
import { mockLogin, newLogo } from '@/assets'

const page = () => {
  return (
    <>
      <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden flex-col bg-muted p-10 text-white lg:flex dark:border-r h-[100vh]">
          <Image
            src={mockLogin}
            alt="imagem da pizzaria"
            className="absolute inset-0 h-[100vh]"
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image src={newLogo} alt="imagem da pizzaria" className="w-10" />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Entre com sua conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Apenas coloque seu email e senha!
              </p>
            </div>
            <UserAuthFormLogin />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
