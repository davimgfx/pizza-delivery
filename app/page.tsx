"use client"
import { Hero, PizzaCard } from '@/components/home'
import type { PizzaProps } from '@/components/home'
import { Footer, Header } from '@/components/shared'
import axios from 'axios'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Home() {
  const { data: session, status } = useSession()
  const [pizzas, setPizzas] = useState<PizzaProps[]>([])

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await axios.get('/api/pizzas')
        setPizzas(response.data.pizzas)
      } catch (error) {
        toast.error('Error fetching pizzas')
      }
    }
    getPizzas()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      {status === 'authenticated' && <p>{session.user?.email}</p>}
      {status === 'authenticated' && <p>{session.user?.name}</p>}
      <h1 className="text-4xl">Home</h1>
      <div className='w-[1200px] mx-auto flex gap-4'>
        {pizzas.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
      </div>
      <button onClick={() => signOut()}>Logout</button>
      <Footer />
    </>
  )
}
