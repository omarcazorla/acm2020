import ProvinciaPageServer, { getProvinciaMetadata } from '@/components/ProvinciaPageServer'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return getProvinciaMetadata(locale, 'tarragona')
}

export default async function TarragonaPage({ params }: Props) {
  const { locale } = await params
  return <ProvinciaPageServer locale={locale} provinciaSlug="tarragona" />
}
