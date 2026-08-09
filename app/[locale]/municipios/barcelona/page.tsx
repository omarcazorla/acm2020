import ProvinciaPageServer, { getProvinciaMetadata } from '@/components/ProvinciaPageServer'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return getProvinciaMetadata(locale, 'barcelona')
}

export default async function BarcelonaPage({ params }: Props) {
  const { locale } = await params
  return <ProvinciaPageServer locale={locale} provinciaSlug="barcelona" />
}
