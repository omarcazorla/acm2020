import { redirect } from 'next/navigation'
import { verifySession } from '@/lib/auth'
import AdminShell from './AdminShell'

export const metadata = {
  title: 'Admin | ACM-2020',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await verifySession()

  if (!session) {
    redirect('/admin/login')
  }

  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">
        <AdminShell username={session.username}>{children}</AdminShell>
      </body>
    </html>
  )
}
