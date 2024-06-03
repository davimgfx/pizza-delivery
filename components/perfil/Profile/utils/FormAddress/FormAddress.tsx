import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'
import { SpinnerIcon } from '@/components/icons'

interface FormAddressData {
  name: string
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
    name: '',
    cep: '',
    street: '',
    neighborhood: '',
    number: '',
    complement: '',
    phone: '',
  })
  const [isNotSuccessAddress, isNotSetSuccessAddress] = useState(true)
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    if (name === 'cep' && value.length === 9) {
      fetchAddressByCep(value)
    }
  }

  const fetchAddressByCep = async (cep: string) => {
    setIsLoading(true)
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      if (
        response.data.uf !== 'BA' ||
        response.data.localidade !== 'Salvador'
      ) {
        setIsLoading(false)
        isNotSetSuccessAddress(false)
        setIsLoadingSubmit(false)
        return toast.error('Entregamos apenas em Salvador - BA')
      }
      setFormData((prevState) => ({
        ...prevState,
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
      }))
      setIsLoading(false)
      isNotSetSuccessAddress(false)
      setIsLoadingSubmit(false)
      toast.success('Cep encontrado')
    } catch (error) {
      toast.error('Erro ao buscar cep')
      setIsLoading(false)
      setIsLoadingSubmit(false)
    }
  }

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setIsLoadingSubmit(true)
    if (
      !formData.cep ||
      !formData.street ||
      !formData.neighborhood ||
      !formData.number ||
      !formData.phone
    ) {
      setIsLoading(false)
      setIsLoadingSubmit(false)
      return toast.error('Preencha todos os campos')
    }

    try {
      const response = await axios.post('/api/v1/user/address', {
        ...formData,
        user_id: id,
      })
      setIsLoading(false)
      setIsLoadingSubmit(false)
      toast.success('Endereço adicionado com sucesso')
    } catch (error) {
      setIsLoading(false)
      setIsLoadingSubmit(false)
      toast.error('Erro ao adicionar endereço')
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4">
      <h2>Adicionar endereço</h2>
      <div className="flex flex-col w-[32%]">
        <Label htmlFor="cep">Nome</Label>
        <Input
          id="name"
          name="name"
          placeholder="Ex: Casa, Empresa, etc (opcional)"
          type="text"
          disabled={isLoading}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex w-full gap-4">
        <div className="flex flex-col w-1/3">
          <Label htmlFor="cep">Cep</Label>
          <InputMask
            name="cep"
            mask="99999-999"
            maskChar={null}
            disabled={isLoading}
            value={formData.cep}
            placeholder="00000-000"
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
            disabled={isNotSuccessAddress || isLoading}
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
            disabled={isNotSuccessAddress || isLoading}
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
            placeholder="Rua"
            type="text"
            disabled={isNotSuccessAddress || isLoading}
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
            disabled={isNotSuccessAddress || isLoading}
            value={formData.complement}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <Label htmlFor="phone">Número de telefone</Label>
          <InputMask
            name="phone"
            mask="(99) 99999-9999"
            maskChar={null}
            disabled={isLoading}
            value={formData.phone}
            placeholder="(00) 00000-0000"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <Button disabled={isLoadingSubmit} className='w-24 ml-auto text-white'>
        {isLoadingSubmit && (
          <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
        )}
        Enviar
      </Button>
    </form>
  )
}
