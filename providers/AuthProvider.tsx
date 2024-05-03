'use client'
import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

export default function AuthContext({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <SessionProvider>{children}</SessionProvider>
}
