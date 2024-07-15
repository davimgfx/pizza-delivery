import React from 'react'
import { MdOutlineDiscount } from 'react-icons/md'
import { DashboardIcon, SearchIcon, ChatIcon } from './SideNavIcons'
import { CiPizza } from 'react-icons/ci'
import { FaChartBar } from 'react-icons/fa'

export const sideNavItems = [
  { id: 1, icon: <CiPizza className="w-6 h-6" />, text: 'Pedidos' },
  { id: 2, icon: <MdOutlineDiscount className="w-6 h-6" />, text: 'Cupons' },
  { id: 3, icon: <FaChartBar className="w-6 h-6" />, text: 'Vendas' },
  { id: 4, icon: <SearchIcon />, text: 'Sugestões' },
  { id: 5, icon: <ChatIcon />, text: 'Feedbacks' },
]
