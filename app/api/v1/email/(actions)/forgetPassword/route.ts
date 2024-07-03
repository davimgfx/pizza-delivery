import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { sendMail } from '@/lib/email/email'
import { resetPasswordTemplate } from '@/lib/email/emailTemplates/resetPass'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { email } = body

    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'Email não cadastrado' },
        { status: 400 },
      )
    }

    if(user.verifytoken){
      return NextResponse.json(
        { message: 'Token já existe, verifique seu email' },
        { status: 400 },
      )
    }

    const token = nanoid(32)

    await db.user.update({
      where: {
        email: email,
      },
      data: {
        verifytoken: token,
      },
    })

    await sendMail({
      to: email,
      subject: 'Redefinir a senha? Equipe Pizza',
      body: resetPasswordTemplate(user.name, token),
    })

    return NextResponse.json(
      { message: 'Email sent', user: user, token: token },
      { status: 200 },
    )
  } catch (err) {
    return NextResponse.json(
      { message: 'Algo deu errado', error: err },
      { status: 400 },
    )
  }
}
