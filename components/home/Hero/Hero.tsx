import { heroimg } from '@/assets'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="mx-14 flex justify-between">
      <div className="flex flex-col justify-center h-[600px] w-[800px] gap-4 ">
        <h1 className="text-foreground text-6xl sm:text-5xl sm:leading-none lg:text-7xl flex flex-col ">
          <span className="block text-gray-700  text-7xl bg-clip-text bg-gradient-to-b from-foreground to-foreground-light">
            Simplismente,
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-[#ff8f1e] to-[#b16d29] block md:ml-0">
            A melhor pizza de Salvador
          </span>
        </h1>
        <p>
          Peça diretamenta da sua casa, nos apps do Ifood, UberEats ou Whatsapp.
          Se quiser, ligue para gente e faça seu pedido. O que você preferir,
          estamos a disposição.
        </p>
        <Button className="w-48" variant="outline">
          Veja Nosso Cardapio
        </Button>
      </div>
      <div className="h-[600px] relative flex justify-center items-center  mt-20">
        <Image
          src={heroimg}
          alt="pizza mobile"
          className="z-10 relative w-[580px]"
        />
        <div
          className="border-l-[350px] border-l-transparent
            border-b-[500px] border-b-primary
            border-r-[350px] border-r-transparent absolute top-[-40px] right-0"
        />
      </div>
    </section>
  )
}
