import React from 'react'
import { phoneApp } from '@/assets'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SiIfood, SiUbereats } from 'react-icons/si'

export interface AppsBannerProps {
  name: string
}

export default function AppsBanner() {
  return (
    <section className="w-full">
      <div className="mx-14 pt-14 md:mx-4 xl:mx-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-br from-primary via-[#ff8f1e] to-[#b16d29] block md:ml-0 font-bold">
              ESTAMOS NOS APPS
            </h3>
            <h2 className="block text-gray-700  text-3xl bg-clip-text bg-gradient-to-b from-foreground to-foreground-light">
              Peça agora pelo Ifood, pelo UberEats,
              <br /> ou se preferir pelo WhatsApp
            </h2>
            <p className="w-[720px]">
              Desfrute das melhores pizzas da cidade com a conveniência de um
              delivery rápido e eficiente. Garantimos que sua pizza chegará
              quente e saborosa em até 30 minutos, direto na porta da sua casa.
              Experimente agora e saboreie uma explosão de sabores sem precisar
              esperar!
            </p>
            <div className="flex gap-2">
              <Button className="flex gap-2" variant="outline">
                <SiIfood /> Peça pelo Ifood
              </Button>
              <Button  className="flex gap-2 text-white">
                <SiUbereats className='text-lg'/>
                Peça pelo UberEats
              </Button>
            </div>
          </div>
          <Image src={phoneApp} alt="imagem de uma mão segurando o celular" />
        </div>
      </div>
    </section>
  )
}
