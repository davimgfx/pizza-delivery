'use client'
import { UserAuthFormLogin } from '@/components/auth'
import Image from 'next/image'
import { logo, mockUser } from '@/assets'

export default function LoginPage() {
  return (
    <section className="min-h-[100vh] flex ">
      <Image
        src={logo}
        alt="Logo"
        width={130}
        height={130}
        className="mt-4 ml-4 absolute top-4 left-4 cursor-pointer sm:hidden"
      />

      <div className="flex flex-1">
        <main className="flex flex-col items-center flex-1 flex-shrink-0 pb-8 border-r shadow-lg bg-studio border-default justify-center">
          <div className="mx-auto flex flex-col justify-center space-y-6 w-[400px] md:w-[330px]">
            <div className="flex flex-col space-y-2 text-center mb-3">
              <h1 className="text-2xl flex text-left font-semibold tracking-tight">
                Bem Vindo de Volta!
              </h1>
              <p className="text-sm text-muted-foreground text-left">
                Entre na sua conta Pizza Delivery
              </p>
            </div>

            <UserAuthFormLogin />
          </div>
        </main>
        <aside className="flex-col items-center justify-center flex-1 flex-shrink xl:hidden basis-1/4 flex bg-white">
          <div className="flex flex-col relative gap-6">
            <div className="absolute select-none -top-14 -left-12 z-1">
              <span className="text-[160px] leading-none text-gray-200 font-serif">
                “
              </span>
            </div>
            <blockquote className="z-10 max-w-lg text-3xl relative">
              @PizzaDelivery sem dúvidas é a melhor pizzaria que já comi em
              Salvador. Recomendo!
            </blockquote>
            <div className="flex items-center gap-3">
              <Image
                src={mockUser}
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p>@davimgfx </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
