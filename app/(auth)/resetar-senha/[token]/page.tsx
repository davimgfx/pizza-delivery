'use client'
import { UserAuthFormResetPassword } from '@/components/auth'

const page = () => {
  return (
    <>
      <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden flex-col bg-muted p-10 text-white lg:flex dark:border-r h-[100vh]"></div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Redefinir a senha
              </h1>
              <p className="text-sm text-muted-foreground">
                Insira uma nova senha para poder voltar para nosso sistema!
              </p>
            </div>
            <UserAuthFormResetPassword />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
