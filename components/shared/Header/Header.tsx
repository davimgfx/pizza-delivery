'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { PhoneTopHeader, PopoverAboutUs } from './utils'
import { MenuIcon } from '@/components/icons'
import { useMediaQuery } from 'react-responsive'
import { signOut, useSession } from 'next-auth/react'
import { userImage } from '@/assets'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoCartOutline } from 'react-icons/io5'
import { getOnlyFirstName } from '@/helpers'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function Header() {
  const { data: session } = useSession()
  const [isPopoverVisible, setPopoverVisible] = useState(false)
  const [isMenu, setIsMenu] = useState(false)
  const isTablet = useMediaQuery({
    query: '(max-width: 1023px)',
  })

  return (
    <header className="z-20 relative">
      <PhoneTopHeader />
      <nav className="border-gray-200 border-b ">
        <div
          className={`flex justify-between ${isMenu && 'lg:justify-start lg:px-10 lg:mx-0 lg:fixed lg:h-[100vh] lg:w-full lg:flex-col lg:bg-[#D9D9D9] '} mx-14 xl:mx-10 md:mx-0 py-4 md:px-4`}
        >
          <div
            className={`flex gap-4 items-center ${isMenu && 'lg:flex-col lg:items-start'}`}
          >
            <Image src={logo} alt="logo Pizza Delivery" className="w-32" />
            <ul
              className={`flex gap-4 ${isMenu ? 'lg:flex-col' : 'lg:hidden'}`}
            >
              <li className="cursor-pointer hover:text-primary transition-colors duration-200 p-2 ">
                Pedir Agora
              </li>

              <li className="cursor-pointer hover:text-primary transition-colors duration-200 p-2">
                Nossas Lojas
              </li>

              <li className=" cursor-pointer hover:text-primary transition-colors duration-200 p-2">
                Contatos
              </li>
              {session && isMenu && (
                <li
                  className={`cursor-pointer hover:text-primary transition-colors duration-200 p-2`}
                >
                  <Link href="perfil">Meu Perfil</Link>
                </li>
              )}
              <div
                className="relative "
                onMouseEnter={
                  isTablet ? undefined : () => setPopoverVisible(true)
                }
                onMouseLeave={
                  isTablet ? undefined : () => setPopoverVisible(false)
                }
                onClick={
                  isTablet
                    ? () => setPopoverVisible((item) => !item)
                    : undefined
                }
              >
                <li
                  className={` ${isPopoverVisible && 'text-primary'} flex items-center p-2 gap-1 transition-colors duration-200 cursor-pointer hover:text-primary `}
                >
                  Sobre Nós
                  <IoIosArrowDown
                    className={` ${isPopoverVisible && 'rotate-180'} transition duration-200 mt-1`}
                  />
                </li>

                {isPopoverVisible && (
                  <PopoverAboutUs setPopoverVisible={setPopoverVisible} />
                )}
              </div>
            </ul>
          </div>
          <ul className="flex gap-4 items-center justify-center sm:gap-1">
            <li>
              <IoCartOutline className={`${isMenu ? 'hidden' : 'text-2xl cursor-pointer'}`} />
            </li>
            {session ? (
              <>
                <li className="w-6 h-6 sm:hidden">
                  <Popover>
                    <PopoverTrigger>
                      <IoSettingsOutline
                        className={`${isMenu ? 'hidden' : 'text-2xl sm:hidden cursor-pointer'}`}
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <ul>
                        <li className='mb-1'>
                          <Link href="./perfil">Perfil</Link>
                        </li>
                        <li className='mb-1'>
                          <Link href="./carrinho">Carrinho</Link>
                        </li>
                        <li onClick={() => signOut()} className='cursor-pointer'>Sair</li>
                      </ul>
                    </PopoverContent>
                  </Popover>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={session.user.image || userImage}
                    alt="user image"
                    width={35}
                    height={20}
                    className={`${isMenu ? 'hidden' : 'rounded-full border-2 border-primary sm:hidden'}`}
                  />
                  <span className={`${isMenu ? 'hidden' : 'sm:hidden'}`}>
                    Olá,{' '}
                    {session.user.name && getOnlyFirstName(session.user.name)}
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className={`${isMenu ? 'lg:w-1/2 mt-5' : 'sm:hidden'}`}>
                  <Link href="/cadastro" className="lg:w-1/2">
                    <Button
                      variant={'outline'}
                      className={`lg:w-full lg:bg-[#FFFFFF] ${isMenu && 'lg:w-full'}`}
                    >
                      Cadastro
                    </Button>
                  </Link>
                </li>

                <li className={`${isMenu ? 'lg:w-1/2 mt-5' : 'sm:hidden'}`}>
                  <Link href="/login" className="lg:w-1/2">
                    <Button className={`text-white ${isMenu && 'lg:w-full'}`}>
                      Login
                    </Button>
                  </Link>
                </li>
              </>
            )}
            <li
              className={`${isMenu ? 'lg:absolute lg:top-4 lg:right-10  md:right-5' : ''} hidden lg:block`}
              onClick={() => setIsMenu((item) => !item)}
            >
              <MenuIcon isMenu={isMenu} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
