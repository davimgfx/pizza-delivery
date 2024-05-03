'use client'

import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <>
      {status === 'authenticated' && <p>{session.user?.email}</p>}
      {status === 'authenticated' && <p>{session.user?.name}</p>}
      <h1 className="text-4xl">Home</h1>
      <button onClick={() => signOut()}>Logout</button>
    </>
  )
}
