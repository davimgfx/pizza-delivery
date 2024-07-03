import { sendMail } from '@/lib/email/email'
import { createdAccountTemplate } from '@/lib/email/emailTemplates/createdAccount'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, name } = body

    await sendMail({
      to: email,
      subject: 'Vamos pedir uma pizza com desconto hoje? 🍕',
      body: createdAccountTemplate(name),
    })
    return NextResponse.json({ message: 'Email enviado' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Algo deu errado', error },
      { status: 400 },
    )
  }
}
