'use client'
import { userImage } from '@/assets'
import axios from 'axios'
import { signOut, useSession } from 'next-auth/react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { IoCamera } from 'react-icons/io5'
import { Button } from '@/components/ui/button'

export default function UserInfosCard() {
  const { data: session } = useSession()
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null)

  const handleSuccess = async (result: any) => {
    if (
      result.info.public_id &&
      result.info.secure_url &&
      session?.user?.email
    ) {
      setUploadedImageUrl(result.info.secure_url)
      const response = await axios.post('api/v1/user/upload-image', {
        imageId: result.info.public_id,
        imageUrl: result.info.secure_url,
        email: session.user.email,
      })

      if (response.status === 200) {
        toast.success('Imagem trocada com sucesso!')
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4 pt-4 px-4">
        <p>Seu Perfil</p>
        <div className="w-[150px] h-[150px] rounded-full relative">
          <Image
            src={uploadedImageUrl || session?.user?.image || userImage}
            width={150}
            height={150}
            alt="User Image"
            className="rounded-full border-primary border-2"
            priority
          />
          <CldUploadWidget
            uploadPreset="Next_pizza_delivery"
            options={{ multiple: false, sources: ['local', 'camera'] }}
            onSuccess={handleSuccess}
          >
            {({ open }) => {
              return (
                <div className="absolute bottom-[-10px] right-0 text-2xl p-1 bg-[#FFFFFF] shadow-md rounded-full cursor-pointer">
                  <div className="p-3 bg-primary rounded-full ">
                    <IoCamera
                      onClick={() => open()}
                      className=" text-[#FFFFFF]"
                    />
                  </div>
                </div>
              )
            }}
          </CldUploadWidget>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl">{session?.user?.name}</h2>
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ">
            Cliente Normal
          </span>
          <span className="text-gray-600">{session?.user?.email}</span>
        </div>
      </div>
      <div className="">
        <p className="border-t border-b py-2 px-1 border-gray-500 ">
          Pedidos a caminho: 0
        </p>
        <p className="py-2 px-1 border-gray-500 ">Pedidos Passados: 0</p>
        <p className="border-b  border-t py-2 px-1 border-gray-500 ">
          Falta apenas{' '}
          <mark className="bg-[#fde0c2a4] text-primary text-xs font-medium px-2.5 rounded ">
            2
          </mark>{' '}
          pedidos para subir de rank e receber mais descontos e promoções
        </p>
      </div>

      <Button variant="outline" className="mb-2" onClick={() => signOut({ callbackUrl: './' })}>
        Sair da Conta
      </Button>
    </div>
  )
}
