import { db } from '@/lib/db'
import { deletePhotoCloud } from '@/lib/upload-image/delete-image-cloud'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { imageId, imageUrl, email } = body

    if( !imageId ||  !imageUrl || !email) {
      return NextResponse.json(
        { message: 'Faltando informaçoes' },
        { status: 400 },
      )
    }

    const existingUser = await db.user.findUnique({
      where: { email: email },
    })

    if(existingUser?.imageId && existingUser?.image){
      // delete from cloud
      deletePhotoCloud(existingUser.imageId)

      // delete from db
      const deleteUserImage = await db.user.update({
        where: { email },
        data: {
          image: null,
          imageId: null,
        },
      })
    }

    const updateUserImage = await db.user.update({
      where: { email },
      data: {
        image: imageUrl,
        imageId: imageId,
      },
    })

    return NextResponse.json(
      {
        email,
        imageId,
        image: imageUrl,
        resposta: 'deu ok',
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Algo deu errado :(', error },
      { status: 400 },
    )
  }
}
