'use client'
import { ifood, uberEats } from '@/assets'
import Image from 'next/image'
import { useRef } from 'react'
import { BsPeople } from 'react-icons/bs'
import { IoPhonePortraitOutline, IoStorefrontOutline } from 'react-icons/io5'
import { PiPizza } from 'react-icons/pi'
import { TbPigMoney } from 'react-icons/tb'
import { useMediaQuery } from 'react-responsive'

interface PopoverAboutUsProps {
  setPopoverVisible: (value: boolean) => void
}

export default function PopoverAboutUs({
  setPopoverVisible,
}: PopoverAboutUsProps) {
  const popoverRef = useRef(null)
  const isTablet = useMediaQuery({
    query: '(max-width: 1023px)',
  })

  const handlePopoverFunction = () => {
    setPopoverVisible(true)
  }

  return (
    <div
      className="lg:flex lg:static absolute z-20 w-[850px] 2xl:w-[410px] lg:bg-[#D9D9D9] lg:border-none lg:shadow-none border-gray-300 border bg-[#FFFFFF] top-full rounded-xl shadow-md left-0 "
      ref={popoverRef}
      onMouseEnter={isTablet? undefined : handlePopoverFunction}
  
    >
      <div className="flex gap-5 2xl:flex-col 2xl:gap-0">
        <div className="flex flex-col gap-4 p-6 lg:p-2 2xl:pt-6 2xl:pb-2 2xl:px-6">
          <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200 cursor-pointer">
            <div className="bg-gray-200 lg:bg-[#FFFFFF]  w-12 h-12 flex items-center justify-center rounded-md">
              <PiPizza className="text-xl text-gray-700" />
            </div>
            <div className="flex flex-col">
              <span>Nossos Produtos</span>
              <span className="text-sm text-gray-500 ">
                Pizzas, Pasteis, Refrigerantes e Sucos
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200 cursor-pointer">
            <div className="bg-gray-200 lg:bg-[#FFFFFF]  w-12 h-12 flex items-center justify-center rounded-md">
              <IoStorefrontOutline className="text-xl text-gray-700" />
            </div>
            <div className="flex flex-col">
              <span>Nossas Lojas</span>
              <span className="text-sm text-gray-500">
                Paralela, Pituaçu, Barra, Cajazeiras
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200 cursor-pointer">
            <div className="bg-gray-200 lg:bg-[#FFFFFF]  w-12 h-12 flex items-center justify-center rounded-md">
              <IoPhonePortraitOutline className="text-xl text-gray-700" />
            </div>
            <div className="flex flex-col">
              <span>Como pedir</span>
              <span className="text-sm text-gray-500">
                Telefone, WhatsApp, Ifood, UberEats
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200 cursor-pointer">
            <div className="bg-gray-200 lg:bg-[#FFFFFF] w-12 h-12 flex items-center justify-center rounded-md">
              <TbPigMoney className="text-xl text-gray-700" />
            </div>
            <div className="flex flex-col">
              <span>Seja um Franqueado</span>
              <span className="text-sm text-gray-500">
                Abrir franquia Pizza Delivery
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 hover:text-primary transition-colors duration-200 cursor-pointer">
            <div className="bg-gray-200 lg:bg-[#FFFFFF]  w-12 h-12 flex items-center justify-center rounded-md">
              <BsPeople className="text-xl text-gray-700" />
            </div>
            <div className="flex flex-col">
              <span>Quem somos</span>
              <span className="text-sm text-gray-500">
                Estamos 15 anos nesse mercado delicioso
              </span>
            </div>
          </div>
        </div>
        <div className="h-auto w-[1px] bg-gray-300 2xl:hidden" />
        <div className="p-6 lg:hidden">
          <h2 className="mb-2">Peça nos Aplicativos:</h2>
          <div className="flex gap-2 items-center">
            <Image
              src={ifood}
              alt="icone do ifood"
              className="rounded-lg w-[120px]"
            />
            <div className="flex flex-col">
              <p>Somos parceiros do ifood!</p>
              <p className="text-sm text-gray-500">
                Clique aqui para saber mais
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <Image
              src={uberEats}
              alt="icone do uberEats"
              className="rounded-lg w-[120px]"
            />
            <div className="flex flex-col">
              <p>Somos parceiros do UberEats!</p>
              <p className="text-sm text-gray-500">
                Clique aqui para saber mais
              </p>
            </div>
          </div>
          <h2 className="mt-4 mb-2">Outras formas:</h2>
          <p>WhatsApp: (71) 93201-1901</p>
          <p>Telefone: (71) 93777-9991</p>
          <p>Telefone: (71) 93457-9222</p>
        </div>
      </div>
    </div>
  )
}
