import { createContext, useState } from 'react'

interface DashboardContextProps {
  activeItem: string
  setActiveItem: (value: SideNavItemKey) => void
  showSidebar: boolean
  setShowSidebar: (value: boolean) => void
}

export type SideNavItemKey =
  | 'Dashboard'
  | 'Denuncias'
  | 'Busca'
  | 'Chat'
  | 'Análises'
  | 'Documentos'
  | 'Produtos'
  | 'Configurações'
  | 'Formulário Diagnostico'

export const DashboardContext = createContext({} as DashboardContextProps)

export const DashboardProvider = ({ children }: any) => {
  const [activeItem, setActiveItem] = useState<SideNavItemKey>('Dashboard')
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <DashboardContext.Provider
      value={{ activeItem, setActiveItem, showSidebar, setShowSidebar }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
