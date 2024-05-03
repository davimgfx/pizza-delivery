import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hash } from 'bcrypt'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, name, password } = body

    if (!email || !name || !password) {
      return NextResponse.json(
        { user: null, message: 'Email/Senha é necessário' },
        { status: 400 },
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { user: null, message: 'Senha deve ter pelo menos 6 caracteres' },
        { status: 400 },
      )
    }

    // check if email already exist

    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    })

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: 'Uma conta com esse email ja existe!' },
        { status: 400 },
      )
    }

    const hashedPassword = await hash(password, 10)

    const newUser = await db.user.create({
      data: { email, name, password: hashedPassword },
    })

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          image: newUser.image,
          createdAt: newUser.createdAt,
          updatedAt: newUser.updateAt,
        },
        message: 'User created',
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
