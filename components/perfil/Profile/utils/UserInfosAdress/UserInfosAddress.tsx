"use client"

import { db } from '@/lib/db'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import FormAddress from '../FormAddress/FormAddress'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Accordion } from '@radix-ui/react-accordion'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export default function UserInfosAddress() {
  const { data: session } = useSession()
  const [userAddresses, setUserAddresses] = useState<any[]>([])

  useEffect(() => {
    const  getAddresses = async () => {
      try {
        const response = await axios.get(`/api/user/address?userId=${session?.user?.id}`)
        setUserAddresses(response.data.data)
      } catch (error) {
        toast.error('Error fetching address')
      }
    }
    if(session?.user?.id){
      getAddresses()
    }
   
  }, [session])

  const handleDelete = async (id: string) => {
    try {
      await axios.delete('/api/v1/user/address', { data: { id } })
      toast.success('Endereço deletado com sucesso!')
      setUserAddresses(userAddresses.filter((address) => address.id !== id))
    } catch (error) {
      toast.error('Erro ao deletar o endereço')
    }
  }

  return (
    <div>
      <h2>Endereços:</h2>
      {userAddresses.length > 0 ? (
        <Accordion type="single" collapsible className="w-full">
          {userAddresses.map((address, index) => (
            <AccordionItem value={`item-${index}`} key={address.id}>
              <AccordionTrigger>
                {address.title || `Endereço ${index + 1}`}
              </AccordionTrigger>
              <AccordionContent>
                <p>Rua: {address.street}</p>
                <p>Número: {address.number}</p>
                <p>Bairro: {address.neighborhood}</p>
                <p>CEP: {address.cep}</p>
                {address.complement && <p>Complemento: {address.complement}</p>}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Remover</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Tem certeza que quer remover esse endereço ?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Não será possível refazer essa ação.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <div className="flex justify-end items-center gap-2">
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                          className="h-10 transform translate-y-1"
                          onClick={() => handleDelete(address.id)}
                        >
                          Continuar
                        </AlertDialogAction>
                      </div>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <span>Você não tem nenhum endereço cadastrado</span>
      )}
      <FormAddress id={session?.user?.id || ''} />
    </div>
  )
}
