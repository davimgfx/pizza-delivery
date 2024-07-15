'use client'
import { DashboardProvider } from '@/providers/DashboardProvider'
import { useSession } from 'next-auth/react'

export default function ProfilePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession()

  return session?.user.email === 'adm@adm.com' ? (
    <DashboardProvider>{children}</DashboardProvider>
  ) : (
    <section className="container mx-auto p-4 h-full flex flex-row min-h-screen justify-center items-center text-2xl">
      Você não tem permissão para acessar essa página
    </section>
  )
}
