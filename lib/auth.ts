import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'
import { createServerClient } from './supabase'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'fallback-secret-change-me'
)
const COOKIE_NAME = 'acm_session'

interface SessionPayload {
  userId: string
  username: string
  email: string
  role: string
}

export async function verifyCredentials(username: string, password: string) {
  const supabase = createServerClient()
  const { data: user, error } = await supabase
    .from('users')
    .select('id, username, email, role, password_hash')
    .eq('username', username)
    .single()

  if (error || !user) return null

  const valid = await bcrypt.compare(password, user.password_hash)
  if (!valid) return null

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  }
}

export async function createSession(user: {
  id: string
  username: string
  email: string
  role: string
}) {
  const token = await new SignJWT({
    userId: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  } satisfies SessionPayload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .setIssuedAt()
    .sign(JWT_SECRET)

  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return token
}

export async function verifySession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as unknown as SessionPayload
  } catch {
    return null
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}
