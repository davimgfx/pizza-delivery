import { SpinnerIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'
interface FormData {
  password: string
  confirmPassword: string
}

export default function UserAuthFormResetPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    password: '',
    confirmPassword: '',
  })

  const params = useParams()

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

    if (formData.password !== formData.confirmPassword) {
      setIsLoading(false)
      return toast.warn('As senhas são diferentes!')
    }

    const response = await axios.post('../api/v1/email/resetPassword', {
      password: formData.password,
      token: params.token,
    })

    if (response.status === 200) {
      setIsLoading(false)
      toast.success('Senha redefinida com sucesso')
    } else {
      setIsLoading(false)
      toast.warn(response.data.message)
    }

    setIsLoading(false)
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="password">Nova Senha</Label>
            <Input
              id="password"
              name="password"
              placeholder="*******"
              type="password"
              disabled={isLoading}
              value={formData.password}
              onChange={handleInputChange}
            />

            <Label htmlFor="password">Confirmar senha</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="*******"
              type="password"
              disabled={isLoading}
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <Button disabled={isLoading} variant={'outline'}>
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Redefinir a senha
          </Button>
        </div>
      </form>
    </div>
  )
}
