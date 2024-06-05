import React from 'react'
import { cart, location, menu, motocycle } from '@/assets'
import Image from 'next/image'

export default function LineTutorial() {
  return (
    <section className="w-full bg-white">
      <div className='mx-14 py-14 md:mx-4 xl:mx-10'>
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-br from-primary via-[#ff8f1e] to-[#b16d29] block md:ml-0 font-bold">
            CHEGA RÁPIDO
          </h3>
          <h2 className="block text-gray-700  text-3xl bg-clip-text bg-gradient-to-b from-foreground to-foreground-light">
            No máximo em 30 minutos
          </h2>
          <p className="mx-40 text-center mb-10">
            Desfrute das melhores pizzas da cidade com a conveniência de um
            delivery rápido e eficiente. Garantimos que sua pizza chegará quente e
            saborosa em até 30 minutos, direto na porta da sua casa. Experimente
            agora e saboreie uma explosão de sabores sem precisar esperar!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative flex-col justify-center flex">
            <Image src={menu} alt="icone de menu" className="w-14 mx-auto" />
            <span className="text-center text-sm mx-auto mt-2">
              Selecione seu pedido
            </span>
            <div className="flex justify-center  w-[320px]">
              <div className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-primary transform translate-y-4 relative">
                <div className=" absolute w-3 h-3 rounded-full bg-primary transform translate-x-[5px] translate-y-[5px]" />
              </div>
            </div>
            <div className="w-[345px] h-[21px] bg-primary rounded-l-full" />
          </div>
          <div className="relative flex-col justify-center flex">
            <Image
              src={cart}
              alt="icone de menu"
              className="w-14 mx-auto mt-[7.8px]"
            />
            <span className="text-center text-sm mx-auto mt-2">
              Confirme seu pedido
            </span>
            <div className="flex justify-center  w-[320px] ">
              <div className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-primary transform translate-y-4 relative">
                <div className=" absolute w-3 h-3 rounded-full bg-primary transform translate-x-[5px] translate-y-[5px]" />
              </div>
            </div>
            <div className="w-[345px] h-[21px] bg-primary" />
          </div>
          <div className="relative flex-col justify-center flex">
            <Image
              src={location}
              alt="icone de menu"
              className="w-24 mx-auto mt-[4.8px]"
            />
            <span className="text-center text-sm mx-auto mt-2">
              Adicione seu endereço
            </span>
            <div className="flex justify-center  w-[320px] ">
              <div className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-primary transform translate-y-4 relative">
                <div className=" absolute w-3 h-3 rounded-full bg-primary transform translate-x-[5px] translate-y-[5px]" />
              </div>
            </div>
            <div className="w-[345px] h-[21px] bg-primary" />
          </div>
          <div className="relative flex-col justify-center flex">
            <Image src={motocycle} alt="icone de menu" className="w-14 mx-auto" />
            <span className="text-center text-sm mx-auto mt-2">
              Aguarde no máximo 30 minutos
            </span>
            <div className="flex justify-center  w-[320px] ">
              <div className="w-6 h-6 rounded-full bg-[#FFFFFF] border border-primary transform translate-y-4 relative">
                <div className=" absolute w-3 h-3 rounded-full bg-primary transform translate-x-[5px] translate-y-[5px]" />
              </div>
            </div>
            <div className="w-[345px] h-[21px] bg-primary rounded-r-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
