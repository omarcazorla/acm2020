import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { verifySession } from '@/lib/auth'
import { sendResponseEmail } from '@/lib/resend'

type RouteContext = {
  params: Promise<{ id: string }>
}

export async function POST(request: NextRequest, context: RouteContext) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { id } = await context.params
  const { subject, body } = (await request.json()) as {
    subject: string
    body: string
  }

  if (!subject?.trim() || !body?.trim()) {
    return NextResponse.json(
      { error: 'Asunto y cuerpo son obligatorios' },
      { status: 400 }
    )
  }

  const supabase = createServerClient()

  // Get solicitud to find email
  const { data: solicitud, error: fetchError } = await supabase
    .from('solicitudes')
    .select('email, name')
    .eq('id', id)
    .single()

  if (fetchError || !solicitud) {
    return NextResponse.json({ error: 'Solicitud no encontrada' }, { status: 404 })
  }

  // Send email
  try {
    await sendResponseEmail(solicitud.email, subject.trim(), body.trim())
  } catch (emailError) {
    console.error('Send response email error:', emailError)
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    )
  }

  // Update solicitud status
  await supabase
    .from('solicitudes')
    .update({
      status: 'respondida',
      replied_at: new Date().toISOString(),
    })
    .eq('id', id)

  return NextResponse.json({ success: true })
}
