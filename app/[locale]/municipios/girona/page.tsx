import ProvinciaPageServer, { getProvinciaMetadata } from '@/components/ProvinciaPageServer'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return getProvinciaMetadata(locale, 'girona')
}

export default async function GironaPage({ params }: Props) {
  const { locale } = await params
  return <ProvinciaPageServer locale={locale} provinciaSlug="girona" />
}
