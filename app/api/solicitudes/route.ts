import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, createAnonClient } from '@/lib/supabase'
import { verifySession } from '@/lib/auth'
import { sendNotificationEmail } from '@/lib/resend'
import type { SolicitudInsert, Solicitud } from '@/lib/types/solicitudes'

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SolicitudInsert & { _hp?: string }

    // Honeypot check
    if (body._hp) {
      // Silently accept but don't save
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son obligatorios' },
        { status: 400 }
      )
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: 'Email no valido' },
        { status: 400 }
      )
    }

    const supabase = createAnonClient()

    const insertData: Record<string, unknown> = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || null,
      company: body.company?.trim() || null,
      subject: body.subject?.trim() || 'Consulta general',
      message: body.message.trim(),
      source: 'web-acm2020',
      source_url: body.source_url || null,
      form_id: body.form_id || 'general',
      service_id: body.service_id || null,
      service_category: body.service_category || null,
      locale: body.locale || 'es',
      utm_campaign: body.utm_campaign || null,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      qualification_data: body.qualification_data || {},
      privacy_accepted: body.privacy_accepted || false,
      consent_timestamp: body.privacy_accepted ? new Date().toISOString() : null,
      honeypot: null,
      status: 'nueva',
      priority: 'media',
      category: 'consulta',
    }

    const { data, error } = await supabase
      .from('solicitudes')
      .insert(insertData)
      .select()
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Error al guardar la solicitud' },
        { status: 500 }
      )
    }

    // Send notification email (non-blocking)
    try {
      await sendNotificationEmail(data as Solicitud)
    } catch (emailError) {
      console.error('Email notification error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true, id: data.id })
  } catch {
    return NextResponse.json(
      { error: 'Error procesando la solicitud' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const supabase = createServerClient()
  const { searchParams } = new URL(request.url)

  const status = searchParams.get('status')
  const priority = searchParams.get('priority')
  const serviceCategory = searchParams.get('service_category')
  const page = parseInt(searchParams.get('page') || '1', 10)
  const perPage = parseInt(searchParams.get('per_page') || '20', 10)
  const offset = (page - 1) * perPage

  let query = supabase
    .from('solicitudes')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + perPage - 1)

  if (status) query = query.eq('status', status)
  if (priority) query = query.eq('priority', priority)
  if (serviceCategory) query = query.eq('service_category', serviceCategory)

  const { data, error, count } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    data,
    pagination: {
      page,
      perPage,
      total: count || 0,
      totalPages: Math.ceil((count || 0) / perPage),
    },
  })
}
