'use client'
import { useContext, useState } from 'react'
import SideNavItems from './SideNavItems'
import { MdOutlineCancel } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'
import { DashboardContext } from '@/providers/DashboardProvider'

export default function SideNav() {
  const [mensagem, setMensagem] = useState(false)
  const isTablet = useMediaQuery({ maxWidth: 1200 })
  const { showSidebar, setShowSidebar, activeItem } =
    useContext(DashboardContext)

  return (
    <div
      style={{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
      }}
      className={`flex flex-col h-[calc(100vh_-_32px)] text-white bg-gray-900 rounded-xl p-2 m-4 mdx:m-0 w-64 z-50 selection:transition-all duration-500 ease-in-out relative xl:fixed xl:top-0 xl:bottom-0 mdx:h-[520px] mdx:my-auto mdx:w-24  mdx:justify-center ${
        !showSidebar ? '-left-[100%]' : 'left-0'
      }`}
    >
      <div className="flex flex-col items-center relative">
        {isTablet && (
          <MdOutlineCancel
            onClick={() => setShowSidebar(false)}
            className="absolute top-0 right-0 text-[20px] text-[#929DAE] cursor-pointer"
          />
        )}
        <SideNavItems mensagemChat={mensagem} />
      </div>
    </div>
  )
}
