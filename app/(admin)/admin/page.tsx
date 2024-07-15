'use client'

import SideNav from '@/components/shared/SideNav/SideNav'
import { DashboardContext } from '@/providers/DashboardProvider'
import { useContext } from 'react'
import { GoSidebarExpand, GoSidebarCollapse } from 'react-icons/go'
import { FormCoupon } from '@/components/admin'

export default function AdmPage() {
  const { showSidebar, setShowSidebar, activeItem } =
    useContext(DashboardContext)

  return (
    <div className="flex">
      <SideNav />
      <section className="w-full">
        <h2 className="mt-4">Navbar</h2>
        <button onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </button>
        {activeItem === 'Cupons' && (
          <section>
            <h2 className='mb-4'>Adicionar um Cupom</h2>
            <FormCoupon />
          </section>
        )}
      </section>
    </div>
  )
}
