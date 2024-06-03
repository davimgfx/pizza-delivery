import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'
import { get } from 'http'

interface FormAddressData {
  cep: string
  street: string
  neighborhood: string
  number: string
  complement: string
  phone: string
}

interface FormAddressProps {
  id: string
}

export default function FormAddress({ id }: FormAddressProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormAddressData>({
    cep: '',
    street: '',
    neighborhood: '',
    number: '',
    complement: '',
    phone: '',
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post('/api/user/address', {
        ...formData,
        user_id: id,
      })
      setIsLoading(false)
      toast.success('Endereço adicionado com sucesso')
    } catch (error) {
      setIsLoading(false)
      toast.error('Erro ao adicionar endereço')
    }
  }

  const getCep = async (cep: string) => {
    try{ 
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      if(response.data.uf !== 'BA' || response.data.localidade !== 'Salvador'){
        return toast.error('Entregamos apenas em Salvador - BA')
      }
      return toast.success('Cep encontrado')
      setFormData((prevState) => ({
        ...prevState,
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
      }))
      
    }catch(error){
      toast.error('Erro ao buscar cep')
    }
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
      <div className="flex w-full gap-4">
        <div className="flex flex-col w-1/3">
          <Label htmlFor="cep">Cep</Label>
          <InputMask
            name="cep"
            mask="999999-999"
            maskChar={null}
            disabled={isLoading}
            value={formData.cep}
            max="9"
            placeholder="000000-000"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <Label htmlFor="neighborhood">Bairro</Label>
          <Input
            id="neighborhood"
            name="neighborhood"
            placeholder="Bairro paralela"
            type="text"
            disabled={isLoading}
            value={formData.neighborhood}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <Label htmlFor="number">Número</Label>
          <Input
            id="number"
            name="number"
            placeholder="451"
            type="text"
            disabled={isLoading}
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex w-full gap-4">
        <div className="flex flex-col w-1/3">
          <Label htmlFor="street">Rua</Label>
          <Input
            id="street"
            name="street"
            placeholder="Bairro paralela"
            type="text"
            disabled={isLoading}
            value={formData.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <Label htmlFor="complement">Complemento</Label>
          <Input
            id="complement"
            name="complement"
            placeholder="Ao lado do mercado modelo"
            type="text"
            disabled={isLoading}
            value={formData.complement}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <Label htmlFor="phone">Número de telefone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(71) 98888-8888"
            type="text"
            disabled={isLoading}
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <Button>Enviar</Button>
    </form>
  )
}
