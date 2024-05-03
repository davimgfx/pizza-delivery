import Handlebars from 'handlebars'
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { resetPasswordTemplate } from './emailTemplates/resetPass'

export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string
  subject: string
  body: string
}) {
  const { SMPT_EMAIL, SMPT_PASSWORD } = process.env
  //
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMPT_EMAIL,
      pass: SMPT_PASSWORD,
    },
  })

  try {
    const sendResult = await transport.sendMail({
      from: SMPT_EMAIL,
      to,
      subject,
      html: body,
    })
    NextResponse.json({ message: 'Email sent', sendResult }, { status: 200 })
    return sendResult
  } catch (e) {
    NextResponse.json(
      { message: 'Something went wrong', error: e },
      { status: 400 },
    )
  }
}
