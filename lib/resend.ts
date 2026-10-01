import { Resend } from 'resend'
import type { Solicitud } from './types/solicitudes'

const resend = new Resend(process.env.RESEND_API_KEY)
const notificationEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'acm@acm2020.es'
const fromEmail = 'ACM-2020 <no-reply@acm2020.es>'

export async function sendNotificationEmail(solicitud: Solicitud) {
  const qualData = solicitud.qualification_data || {}
  const qualLines = Object.entries(qualData)
    .map(([k, v]) => `  - ${k}: ${v}`)
    .join('\n')

  const adminUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://acm2020.es'}/admin/solicitudes/${solicitud.id}`

  await resend.emails.send({
    from: fromEmail,
    to: notificationEmail,
    subject: `Nueva solicitud: ${solicitud.subject} - ${solicitud.name}`,
    text: [
      `Nueva solicitud recibida en ACM-2020`,
      ``,
      `Nombre: ${solicitud.name}`,
      `Email: ${solicitud.email}`,
      solicitud.phone ? `Telefono: ${solicitud.phone}` : null,
      solicitud.company ? `Empresa: ${solicitud.company}` : null,
      `Formulario: ${solicitud.form_id}`,
      solicitud.service_category ? `Categoria servicio: ${solicitud.service_category}` : null,
      `Asunto: ${solicitud.subject}`,
      ``,
      `Mensaje:`,
      solicitud.message,
      qualLines ? `\nDatos de cualificacion:\n${qualLines}` : null,
      solicitud.source_url ? `\nURL origen: ${solicitud.source_url}` : null,
      ``,
      `Ver en el dashboard: ${adminUrl}`,
    ]
      .filter(Boolean)
      .join('\n'),
  })
}

export async function sendResponseEmail(
  to: string,
  subject: string,
  body: string
) {
  await resend.emails.send({
    from: fromEmail,
    to,
    subject,
    text: body,
  })
}
