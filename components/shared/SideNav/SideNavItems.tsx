'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { sideNavItems } from './sideNavItemMock'
import SideNavItem from './SideNavItem'
import { logo_icon } from '@/assets'

export default function SideNavItems({ mensagemChat }: any) {
  const isPhone = useMediaQuery({ maxWidth: 890 })

  return (
    <>
      <Image
        src={logo_icon}
        alt="simbolo StartAPL"
        className="flex items-center w-20 px-3 mt-3 mdx:w-16"
      />

      <div className="w-full px-2">
        <hr className="custom-border" />
        <div className="flex flex-col items-center w-full mt-3">
          {sideNavItems.map((item) => (
            <SideNavItem
              key={item.id}
              item={item}
              isPhone={isPhone}
              mensagem={mensagemChat}
            />
          ))}
        </div>
      </div>
    </>
  )
}

/* {mensagem && (
  <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full hover-bg-gray-700 gradient-to-r"></span>
)} */
