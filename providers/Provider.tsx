'use client'
import { ReactNode } from 'react'
import AuthContext from './AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Provider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <AuthContext>
      <ToastContainer />
      {children}
    </AuthContext>
  )
}
