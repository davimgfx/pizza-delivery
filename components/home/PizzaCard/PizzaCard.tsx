import Image from 'next/image'
import React from 'react'
import type { PizzaCardProps } from '../'
import { Textarea } from '@/components/ui/textarea'

export default function PizzaCard({ pizza }: PizzaCardProps) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="p-8 rounded-t-lg"
        src={pizza.image}
        alt={`foto de ${pizza.name}`}
        width={500}
        height={500}
      />

      <div className="px-5 pb-5 text-center ">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {pizza.name}
        </h2>
        <p className='text-sm'>{pizza.description}</p>
      </div>
      <div className="px-10">
        <div className="flex justify-between">
          <p>Pizza Pequena</p>
          <p>{pizza.priceSmall}</p>
        </div>
        <div className="flex justify-between">
          <p>Pizza Media</p>
          <p>{pizza.priceMedium}</p>
        </div>
        <div className="flex justify-between">
          <p>Pizza Família</p>
          <p>{pizza.priceLarge}</p>
        </div>
        <Textarea
          placeholder="Sem cebola, sem tomate..."
          className="resize-none mt-2"
        />
      </div>
    </div>
  )
}
