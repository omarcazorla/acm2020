import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { verifySession } from '@/lib/auth'
import type { SolicitudUpdate } from '@/lib/types/solicitudes'

type RouteContext = {
  params: Promise<{ id: string }>
}

export async function GET(_request: NextRequest, context: RouteContext) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { id } = await context.params
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('solicitudes')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Solicitud no encontrada' }, { status: 404 })
  }

  return NextResponse.json(data)
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { id } = await context.params
  const body = (await request.json()) as SolicitudUpdate

  const supabase = createServerClient()
  const updateData: Record<string, unknown> = {}

  if (body.status) updateData.status = body.status
  if (body.priority) updateData.priority = body.priority
  if (body.category) updateData.category = body.category
  if (body.assigned_to !== undefined) updateData.assigned_to = body.assigned_to
  if (body.notes !== undefined) updateData.notes = body.notes

  const { data, error } = await supabase
    .from('solicitudes')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
