import { db } from '@/lib/db'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { password, token } = body

    const user = await db.user.findFirst({
      where: {
        verifytoken: token,
      },
    })

    if (!user) {
      return NextResponse.json(
        { user: null, message: 'Token errado, tente novamente' },
        { status: 400 },
      )
    }

    if (user.verifytoken !== token) {
      return NextResponse.json(
        { user: null, message: 'Token errado, tente novamente' },
        { status: 400 },
      )
    }

    const hashedNewPassword = await hash(password, 10)

    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedNewPassword,
        verifytoken: null,
      },
    })

    return NextResponse.json(
      { message: 'Senha atualizada com sucesso' },
      { status: 200 },
    )
  } catch (err) {
    return NextResponse.json(
      { message: 'Algo deu errado', error: err },
      { status: 400 },
    )
  }
}
