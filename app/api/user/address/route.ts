import { NextResponse } from 'next/server'

import { db } from '@/lib/db'


export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      user_id,
      street,
      number,
      neighborhood,
      cep,
      complement,
    } = body

    const newAddress = await db.address.create({
      data: {
        userId: user_id,
        street,
        number,
        neighborhood,
        cep,
        complement,
      },
    })

    return NextResponse.json(
      {
        message: 'New address created with success!',
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Something go wrongs :(', error },
      { status: 400 },
    )
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json(
      { message: 'userId é necessário' },
      { status: 400 },
    )
  }

  try {
    const data = await db.address.findMany({
      where: {
        userId: userId,
      },
    })

    return NextResponse.json({ data: data }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: 'Algo deu errado', error: err },
      { status: 400 },
    )
  }
}
