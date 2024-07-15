'use client'
import { DashboardContext } from '@/providers/DashboardProvider'
import React, { useContext, useState } from 'react'

export default function SideNavItem({
  item,
  isActive,
  isPhone,
  mensagemChat,
}: any) {
  const [isHovered, setIsHovered] = useState(false)
  const { setActiveItem, activeItem } = useContext(DashboardContext)

  return (
    <span
      className={`flex items-center mdx:justify-center w-full h-12 px-3 mt-2 rounded-md hover-bg-gray-700 relative ${
        isActive === item.text ? 'bg-gray-700 gradient-to-r' : ''
      }`}
      onMouseEnter={() => isPhone && setIsHovered(true)}
      onMouseLeave={() => isPhone && setIsHovered(false)}
      onTouchStart={() => isPhone && setIsHovered(true)}
      onTouchEnd={() => isPhone && setIsHovered(false)}
      onClick={() => setActiveItem(item.text)}
   
    >
      {item.icon}
      <span className="ml-2 text-sm font-medium mdx:hidden">{item.text}</span>
      {isHovered && (
        <div className="absolute top-full left-10 px-2 py-1 bg-gray-700 rounded-md">
          <span className="text-sm font-medium">{item.text}</span>
        </div>
      )}
      {mensagemChat && isActive && (
        <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full hover-bg-gray-700 gradient-to-r"></span>
      )}
    </span>
  )
}
