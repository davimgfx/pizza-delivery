"use client"

import { db } from '@/lib/db'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import FormAddress from '../FormAddress/FormAddress'
import axios from 'axios'
import { toast } from 'react-toastify'

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


  return (
    <div>
      <p className="text-[#16ff92] p-5 bg-black">Endereços:</p>
      {userAddresses.length > 0 ? (
        userAddresses.map((address) => (
          <div key={address.id}>
            <p>Rua: {address.street}</p>
            <p>Número: {address.number}</p>
            <p>Bairro: {address.neighborhood}</p>
            <p>CEP: {address.cep}</p>
            {address.complement && (
              <p>Complemento: {address.complement}</p>
            )}
            <hr />
          </div>
        ))
      ) : (
        <span>Você não tem nenhum endereço cadastrado</span>
      )}
      <FormAddress id={session?.user?.id || ''}/>
    </div>
  )
}
