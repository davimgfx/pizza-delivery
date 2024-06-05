'use client'
import { Hero, LineTutorial, AppsBanner } from '@/components/home'
import { Footer, Header } from '@/components/shared'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LineTutorial />
      <AppsBanner />
      <Footer />
    </>
  )
}
