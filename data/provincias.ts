export interface Provincia {
  slug: 'barcelona' | 'girona' | 'lleida' | 'tarragona'
  name: string
  nameCa: string
  intro: { es: string; ca: string; en: string; fr: string }
  metaTitle: { es: string; ca: string; en: string; fr: string }
  metaDescription: { es: string; ca: string; en: string; fr: string }
}

export const provincias: Provincia[] = [
  {
    slug: 'barcelona',
    name: 'Barcelona',
    nameCa: 'Barcelona',
    intro: {
      es: 'La provincia de Barcelona cuenta con numerosos municipios clasificados como zonas de actuación prioritaria frente al gas radón. Las comarcas del interior como el Bages, el Berguedà, Osona y la Anoia presentan los niveles más elevados de exposición, mientras que las comarcas del Vallès y el Baix Llobregat se sitúan mayoritariamente en zona de exposición media. El Real Decreto 1029/2022 establece la obligatoriedad de realizar mediciones en centros de trabajo ubicados en estas zonas.',
      ca: 'La província de Barcelona compta amb nombrosos municipis classificats com a zones d\'actuació prioritària davant el gas radó. Les comarques de l\'interior com el Bages, el Berguedà, Osona i l\'Anoia presenten els nivells més elevats d\'exposició, mentre que les comarques del Vallès i el Baix Llobregat se situen majoritàriament en zona d\'exposició mitjana. El Reial Decret 1029/2022 estableix l\'obligatorietat de realitzar mesuraments en centres de treball ubicats en aquestes zones.',
      en: 'The province of Barcelona has numerous municipalities classified as priority action zones for radon gas. Interior regions such as Bages, Bergueda, Osona, and Anoia have the highest exposure levels, while the Valles and Baix Llobregat regions are mostly in the medium exposure zone. Royal Decree 1029/2022 mandates radon measurements in workplaces located in these zones.',
      fr: 'La province de Barcelone compte de nombreuses municipalités classées comme zones d\'action prioritaire pour le gaz radon. Les régions intérieures comme le Bages, le Berguedà, Osona et l\'Anoia présentent les niveaux d\'exposition les plus élevés, tandis que les régions du Vallès et du Baix Llobregat se situent principalement en zone d\'exposition moyenne. Le Décret Royal 1029/2022 impose des mesures de radon dans les lieux de travail situés dans ces zones.',
    },
    metaTitle: {
      es: 'Municipios de Actuación Prioritaria en Barcelona | ACM-2020',
      ca: 'Municipis d\'Actuació Prioritària a Barcelona | ACM-2020',
      en: 'Priority Action Municipalities in Barcelona | ACM-2020',
      fr: 'Municipalités d\'Action Prioritaire à Barcelone | ACM-2020',
    },
    metaDescription: {
      es: 'Lista completa de municipios de actuación prioritaria frente al gas radón en la provincia de Barcelona. Zona I y Zona II. Medición profesional ACM-2020.',
      ca: 'Llista completa de municipis d\'actuació prioritària davant el gas radó a la província de Barcelona. Zona I i Zona II. Mesurament professional ACM-2020.',
      en: 'Complete list of priority action municipalities for radon gas in the province of Barcelona. Zone I and Zone II. Professional measurement by ACM-2020.',
      fr: 'Liste complète des municipalités d\'action prioritaire pour le gaz radon dans la province de Barcelone. Zone I et Zone II. Mesure professionnelle ACM-2020.',
    },
  },
  {
    slug: 'girona',
    name: 'Girona',
    nameCa: 'Girona',
    intro: {
      es: 'La provincia de Girona destaca por sus elevados niveles de radón, especialmente en las comarcas pirenaicas y prepirenaicas. La Garrotxa, el Ripollès, la Cerdanya y la Selva concentran la mayor parte de municipios en Zona II (exposición alta). La geología granítica y volcánica de estas comarcas favorece la emanación natural de gas radón desde el subsuelo. Es fundamental realizar mediciones tanto en viviendas como en centros de trabajo según el RD 1029/2022.',
      ca: 'La província de Girona destaca pels seus elevats nivells de radó, especialment a les comarques pirinenques i prepirinenques. La Garrotxa, el Ripollès, la Cerdanya i la Selva concentren la major part de municipis en Zona II (exposició alta). La geologia granítica i volcànica d\'aquestes comarques afavoreix l\'emanació natural de gas radó des del subsòl. És fonamental realitzar mesuraments tant a habitatges com a centres de treball segons el RD 1029/2022.',
      en: 'The province of Girona stands out for its high radon levels, especially in the Pyrenean and pre-Pyrenean regions. La Garrotxa, Ripolles, Cerdanya, and Selva concentrate most municipalities in Zone II (high exposure). The granitic and volcanic geology of these regions favors the natural emanation of radon gas from the subsoil. It is essential to carry out measurements in both homes and workplaces according to RD 1029/2022.',
      fr: 'La province de Gérone se distingue par ses niveaux élevés de radon, notamment dans les régions pyrénéennes et pré-pyrénéennes. La Garrotxa, le Ripollès, la Cerdanya et la Selva concentrent la plupart des municipalités en Zone II (exposition élevée). La géologie granitique et volcanique de ces régions favorise l\'émanation naturelle de gaz radon depuis le sous-sol. Il est essentiel de réaliser des mesures dans les habitations et les lieux de travail selon le RD 1029/2022.',
    },
    metaTitle: {
      es: 'Municipios de Actuación Prioritaria en Girona | ACM-2020',
      ca: 'Municipis d\'Actuació Prioritària a Girona | ACM-2020',
      en: 'Priority Action Municipalities in Girona | ACM-2020',
      fr: 'Municipalités d\'Action Prioritaire à Gérone | ACM-2020',
    },
    metaDescription: {
      es: 'Lista completa de municipios de actuación prioritaria frente al gas radón en la provincia de Girona. Zona I y Zona II. Medición profesional ACM-2020.',
      ca: 'Llista completa de municipis d\'actuació prioritària davant el gas radó a la província de Girona. Zona I i Zona II. Mesurament professional ACM-2020.',
      en: 'Complete list of priority action municipalities for radon gas in the province of Girona. Zone I and Zone II. Professional measurement by ACM-2020.',
      fr: 'Liste complète des municipalités d\'action prioritaire pour le gaz radon dans la province de Gérone. Zone I et Zone II. Mesure professionnelle ACM-2020.',
    },
  },
  {
    slug: 'lleida',
    name: 'Lleida',
    nameCa: 'Lleida',
    intro: {
      es: 'La provincia de Lleida presenta municipios de actuación prioritaria distribuidos principalmente en las comarcas pirenaicas. El Alt Urgell, el Pallars Jussà, el Pallars Sobirà, la Val d\'Aran y la Alta Ribagorça cuentan con municipios clasificados en Zona II (exposición alta) debido a su geología granítica y a la altitud. También se encuentran municipios en Zona I (exposición media) en comarcas como la Noguera y la Segarra. La medición de radón es especialmente importante en estas zonas de montaña.',
      ca: 'La província de Lleida presenta municipis d\'actuació prioritària distribuïts principalment a les comarques pirinenques. L\'Alt Urgell, el Pallars Jussà, el Pallars Sobirà, la Val d\'Aran i l\'Alta Ribagorça compten amb municipis classificats en Zona II (exposició alta) a causa de la seva geologia granítica i l\'altitud. També es troben municipis en Zona I (exposició mitjana) a comarques com la Noguera i la Segarra. El mesurament de radó és especialment important en aquestes zones de muntanya.',
      en: 'The province of Lleida has priority action municipalities mainly in the Pyrenean regions. Alt Urgell, Pallars Jussa, Pallars Sobira, Val d\'Aran, and Alta Ribagorça have municipalities in Zone II (high exposure) due to granitic geology and altitude. Zone I (medium exposure) municipalities are also found in regions like Noguera and Segarra. Radon measurement is especially important in these mountain areas.',
      fr: 'La province de Lleida présente des municipalités d\'action prioritaire principalement dans les régions pyrénéennes. L\'Alt Urgell, le Pallars Jussà, le Pallars Sobirà, la Val d\'Aran et l\'Alta Ribagorça comptent des municipalités en Zone II (exposition élevée) en raison de leur géologie granitique et de l\'altitude. Des municipalités en Zone I (exposition moyenne) se trouvent également dans des régions comme la Noguera et la Segarra. La mesure du radon est particulièrement importante dans ces zones de montagne.',
    },
    metaTitle: {
      es: 'Municipios de Actuación Prioritaria en Lleida | ACM-2020',
      ca: 'Municipis d\'Actuació Prioritària a Lleida | ACM-2020',
      en: 'Priority Action Municipalities in Lleida | ACM-2020',
      fr: 'Municipalités d\'Action Prioritaire à Lleida | ACM-2020',
    },
    metaDescription: {
      es: 'Lista completa de municipios de actuación prioritaria frente al gas radón en la provincia de Lleida. Zona I y Zona II. Medición profesional ACM-2020.',
      ca: 'Llista completa de municipis d\'actuació prioritària davant el gas radó a la província de Lleida. Zona I i Zona II. Mesurament professional ACM-2020.',
      en: 'Complete list of priority action municipalities for radon gas in the province of Lleida. Zone I and Zone II. Professional measurement by ACM-2020.',
      fr: 'Liste complète des municipalités d\'action prioritaire pour le gaz radon dans la province de Lleida. Zone I et Zone II. Mesure professionnelle ACM-2020.',
    },
  },
  {
    slug: 'tarragona',
    name: 'Tarragona',
    nameCa: 'Tarragona',
    intro: {
      es: 'La provincia de Tarragona cuenta con municipios de actuación prioritaria concentrados principalmente en las comarcas del interior. La Conca de Barberà y el Priorat presentan municipios en Zona II (exposición alta), mientras que comarcas como el Alt Camp, la Terra Alta y el Baix Ebre cuentan con municipios en Zona I (exposición media). Aunque la franja costera presenta generalmente niveles bajos, las zonas interiores requieren especial atención en la medición de gas radón.',
      ca: 'La província de Tarragona compta amb municipis d\'actuació prioritària concentrats principalment a les comarques de l\'interior. La Conca de Barberà i el Priorat presenten municipis en Zona II (exposició alta), mentre que comarques com l\'Alt Camp, la Terra Alta i el Baix Ebre compten amb municipis en Zona I (exposició mitjana). Encara que la franja costanera presenta generalment nivells baixos, les zones interiors requereixen especial atenció en el mesurament de gas radó.',
      en: 'The province of Tarragona has priority action municipalities mainly concentrated in the interior regions. Conca de Barbera and Priorat have municipalities in Zone II (high exposure), while regions such as Alt Camp, Terra Alta, and Baix Ebre have municipalities in Zone I (medium exposure). Although the coastal strip generally has low levels, interior areas require special attention for radon gas measurement.',
      fr: 'La province de Tarragone compte des municipalités d\'action prioritaire concentrées principalement dans les régions intérieures. La Conca de Barberà et le Priorat présentent des municipalités en Zone II (exposition élevée), tandis que des régions comme l\'Alt Camp, la Terra Alta et le Baix Ebre comptent des municipalités en Zone I (exposition moyenne). Bien que la bande côtière présente généralement des niveaux faibles, les zones intérieures nécessitent une attention particulière pour la mesure du gaz radon.',
    },
    metaTitle: {
      es: 'Municipios de Actuación Prioritaria en Tarragona | ACM-2020',
      ca: 'Municipis d\'Actuació Prioritària a Tarragona | ACM-2020',
      en: 'Priority Action Municipalities in Tarragona | ACM-2020',
      fr: 'Municipalités d\'Action Prioritaire à Tarragone | ACM-2020',
    },
    metaDescription: {
      es: 'Lista completa de municipios de actuación prioritaria frente al gas radón en la provincia de Tarragona. Zona I y Zona II. Medición profesional ACM-2020.',
      ca: 'Llista completa de municipis d\'actuació prioritària davant el gas radó a la província de Tarragona. Zona I i Zona II. Mesurament professional ACM-2020.',
      en: 'Complete list of priority action municipalities for radon gas in the province of Tarragona. Zone I and Zone II. Professional measurement by ACM-2020.',
      fr: 'Liste complète des municipalités d\'action prioritaire pour le gaz radon dans la province de Tarragone. Zone I et Zone II. Mesure professionnelle ACM-2020.',
    },
  },
]

export function getProvinciaBySlug(slug: string): Provincia | undefined {
  return provincias.find((p) => p.slug === slug)
}

export function getProvinciasSlugs(): string[] {
  return provincias.map((p) => p.slug)
}
