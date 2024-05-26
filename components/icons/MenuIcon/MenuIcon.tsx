import React from 'react'
import { LuMenu } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'

interface MenuIconProps {
  isMenu: boolean
}

export default function MenuIcon({ isMenu }: MenuIconProps) {
  return (
    <button className="justify-center cursor-pointer flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 bg-white focus-visible:outline-offset-1 border text-foreground hover:bg-gray-200 border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover shadow-sm text-xs px-2.5 py-1 h-[40px]">
      {isMenu ? (
        <IoClose
          className="text-gray-400 text-xl cursor-pointer z-10"
          data-testid="eyeIcon"
        />
      ) : (
        
        <LuMenu
          className="text-gray-400 text-xl cursor-pointer z-10"
          data-testid="eyeIcon"
        />
      )}
    </button>
  )
}
