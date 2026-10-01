import { NextRequest, NextResponse } from 'next/server'
import { verifyCredentials, createSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = (await request.json()) as {
      username: string
      password: string
    }

    if (!username?.trim() || !password) {
      return NextResponse.json(
        { error: 'Usuario y contrasena son obligatorios' },
        { status: 400 }
      )
    }

    const user = await verifyCredentials(username.trim(), password)
    if (!user) {
      return NextResponse.json(
        { error: 'Credenciales incorrectas' },
        { status: 401 }
      )
    }

    await createSession(user)

    return NextResponse.json({
      success: true,
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'Error en el inicio de sesion' },
      { status: 500 }
    )
  }
}
