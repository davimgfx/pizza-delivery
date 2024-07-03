import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await db.pizzas.findMany()

    return NextResponse.json({ pizzas: data }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: 'Algo deu errado', error: err },
      { status: 400 },
    )
  }
}
