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
      es: 'La provincia de Barcelona cuenta con numerosos municipios clasificados como zonas de actuacion prioritaria frente al gas radon. Las comarcas del interior como el Bages, el Bergueda, Osona y la Anoia presentan los niveles mas elevados de exposicion, mientras que las comarcas del Valles y el Baix Llobregat se situan mayoritariamente en zona de exposicion media. El Real Decreto 1029/2022 establece la obligatoriedad de realizar mediciones en centros de trabajo ubicados en estas zonas.',
      ca: 'La provincia de Barcelona compta amb nombrosos municipis classificats com a zones d\'actuacio prioritaria davant el gas rado. Les comarques de l\'interior com el Bages, el Bergueda, Osona i l\'Anoia presenten els nivells mes elevats d\'exposicio, mentre que les comarques del Valles i el Baix Llobregat se situen majoritariament en zona d\'exposicio mitjana. El Reial Decret 1029/2022 estableix l\'obligatorietat de realitzar mesuraments en centres de treball ubicats en aquestes zones.',
      en: 'The province of Barcelona has numerous municipalities classified as priority action zones for radon gas. Interior regions such as Bages, Bergueda, Osona, and Anoia have the highest exposure levels, while the Valles and Baix Llobregat regions are mostly in the medium exposure zone. Royal Decree 1029/2022 mandates radon measurements in workplaces located in these zones.',
      fr: 'La province de Barcelone compte de nombreuses municipalites classees comme zones d\'action prioritaire pour le gaz radon. Les regions interieures comme le Bages, le Bergueda, Osona et l\'Anoia presentent les niveaux d\'exposition les plus eleves, tandis que les regions du Valles et du Baix Llobregat se situent principalement en zone d\'exposition moyenne. Le Decret Royal 1029/2022 impose des mesures de radon dans les lieux de travail situes dans ces zones.',
    },
    metaTitle: {
      es: 'Municipios de Actuacion Prioritaria en Barcelona | ACM-2020',
      ca: 'Municipis d\'Actuacio Prioritaria a Barcelona | ACM-2020',
      en: 'Priority Action Municipalities in Barcelona | ACM-2020',
      fr: 'Municipalites d\'Action Prioritaire a Barcelone | ACM-2020',
    },
    metaDescription: {
      es: 'Lista completa de municipios de actuacion prioritaria frente al gas radon en la provincia de Barcelona. Zona I y Zona II. Medicion profesional ACM-2020.',
      ca: 'Llista completa de municipis d\'actuacio prioritaria davant el gas rado a la provincia de Barcelona. Zona I i Zona II. Mesurament professional ACM-2020.',
      en: 'Complete list of priority action municipalities for radon gas in the province of Barcelona. Zone I and Zone II. Professional measurement by ACM-2020.',
      fr: 'Liste complete des municipalites d\'action prioritaire pour le gaz radon dans la province de Barcelone. Zone I et Zone II. Mesure professionnelle ACM-2020.',
    },
  },
  {
    slug: 'girona',
    name: 'Girona',
    nameCa: 'Girona',
    intro: {
      es: 'La provincia de Girona destaca por sus elevados niveles de radon, especialmente en las comarcas pirenaicas y prepirenaicas. La Garrotxa, el Ripolles, la Cerdanya y la Selva concentran la mayor parte de municipios en Zona II (exposicion alta). La geologia granitica y volcanica de estas comarcas favorece la emanacion natural de gas radon desde el subsuelo. Es fundamental realizar mediciones tanto en viviendas como en centros de trabajo segun el RD 1029/2022.',
      ca: 'La provincia de Girona destaca pels seus elevats nivells de rado, especialment a les comarques pirinenques i prepirinenques. La Garrotxa, el Ripolles, la Cerdanya i la Selva concentren la major part de municipis en Zona II (exposicio alta). La geologia granitica i volcanica d\'aquestes comarques afavoreix l\'emanacio natural de gas rado des del subsol. Es fonamental realitzar mesuraments tant a habitatges com a centres de treball segons el RD 1029/2022.',
      en: 'The province of Girona stands out for its high radon levels, especially in the Pyrenean and pre-Pyrenean regions. La Garrotxa, Ripolles, Cerdanya, and Selva concentrate most municipalities in Zone II (high exposure). The granitic and volcanic geology of these regions favors the natural emanation of radon gas from the subsoil. It is essential to carry out measurements in both homes and workplaces according to RD 1029/2022.',
      fr: 'La province de Gerone se distingue par ses niveaux eleves de radon, notamment dans les regions pyreneennes et pre-pyreneennes. La Garrotxa, le Ripolles, la Cerdanya et la Selva concentrent la plupart des municipalites en Zone II (exposition elevee). La geologie granitique et volcanique de ces regions favorise l\'emanation naturelle de gaz radon depuis le sous-sol. Il est essentiel de realiser des mesures dans les habitations et les lieux de travail selon le RD 1029/2022.',
    },
    metaTitle: {
      es: 'Municipios de Actuacion Prioritaria en Girona | ACM-2020',
      ca: 'Municipis d\'Actuacio Prioritaria a Girona | ACM-2020',
      en: 'Priority Action Municipalities in Girona | ACM-2020',
      fr: 'Municipalites d\'Action Prioritaire a Gerone | ACM-2020',
    },
    metaDescription: {
      es: 'Lista completa de municipios de actuacion prioritaria frente al gas radon en la provincia de Girona. Zona I y Zona II. Medicion profesional ACM-2020.',
      ca: 'Llista completa de municipis d\'actuacio prioritaria davant el gas rado a la provincia de Girona. Zona I i Zona II. Mesurament professional ACM-2020.',
      en: 'Complete list of priority action municipalities for radon gas in the province of Girona. Zone I and Zone II. Professional measurement by ACM-2020.',
      fr: 'Liste complete des municipalites d\'action prioritaire pour le gaz radon dans la province de Gerone. Zone I et Zone II. Mesure professionnelle ACM-2020.',
    },
  },
  {
    slug: 'lleida',
    name: 'Lleida',
    nameCa: 'Lleida',
    intro: {
      es: 'La provincia de Lleida presenta municipios de actuacion prioritaria distribuidos principalmente en las comarcas pirenaicas. El Alt Urgell, el Pallars Jussa, el Pallars Sobira, la Val d\'Aran y la Alta Ribagorça cuentan con municipios clasificados en Zona II (exposicion alta) debido a su geologia granitica y a la altitud. Tambien se encuentran municipios en Zona I (exposicion media) en comarcas como la Noguera y la Segarra. La medicion de radon es especialmente importante en estas zonas de montana.',
      ca: 'La provincia de Lleida presenta municipis d\'actuacio prioritaria distribuits principalment a les comarques pirinenques. L\'Alt Urgell, el Pallars Jussa, el Pallars Sobira, la Val d\'Aran i l\'Alta Ribagorça compten amb municipis classificats en Zona II (exposicio alta) a causa de la seva geologia granitica i l\'altitud. Tambe es troben municipis en Zona I (exposicio mitjana) a comarques com la Noguera i la Segarra. El mesurament de rado es especialment important en aquestes zones de muntanya.',
      en: 'The province of Lleida has priority action municipalities mainly in the Pyrenean regions. Alt Urgell, Pallars Jussa, Pallars Sobira, Val d\'Aran, and Alta Ribagorça have municipalities in Zone II (high exposure) due to granitic geology and altitude. Zone I (medium exposure) municipalities are also found in regions like Noguera and Segarra. Radon measurement is especially important in these mountain areas.',
      fr: 'La province de Lleida presente des municipalites d\'action prioritaire principalement dans les regions pyreneennes. L\'Alt Urgell, le Pallars Jussa, le Pallars Sobira, la Val d\'Aran et l\'Alta Ribagorça comptent des municipalites en Zone II (exposition elevee) en raison de leur geologie granitique et de l\'altitude. Des municipalites en Zone I (exposition moyenne) se trouvent egalement dans des regions comme la Noguera et la Segarra. La mesure du radon est particulierement importante dans ces zones de montagne.',
    },
    metaTitle: {
      es: 'Municipios de Actuacion Prioritaria en Lleida | ACM-2020',
      ca: 'Municipis d\'Actuacio Prioritaria a Lleida | ACM-2020',
      en: 'Priority Action Municipalities in Lleida | ACM-2020',
      fr: 'Municipalites d\'Action Prioritaire a Lleida | ACM-2020',
    },
    metaDescription: {
      es: 'Lista completa de municipios de actuacion prioritaria frente al gas radon en la provincia de Lleida. Zona I y Zona II. Medicion profesional ACM-2020.',
      ca: 'Llista completa de municipis d\'actuacio prioritaria davant el gas rado a la provincia de Lleida. Zona I i Zona II. Mesurament professional ACM-2020.',
      en: 'Complete list of priority action municipalities for radon gas in the province of Lleida. Zone I and Zone II. Professional measurement by ACM-2020.',
      fr: 'Liste complete des municipalites d\'action prioritaire pour le gaz radon dans la province de Lleida. Zone I et Zone II. Mesure professionnelle ACM-2020.',
    },
  },
  {
    slug: 'tarragona',
    name: 'Tarragona',
    nameCa: 'Tarragona',
    intro: {
      es: 'La provincia de Tarragona cuenta con municipios de actuacion prioritaria concentrados principalmente en las comarcas del interior. La Conca de Barbera y el Priorat presentan municipios en Zona II (exposicion alta), mientras que comarcas como el Alt Camp, la Terra Alta y el Baix Ebre cuentan con municipios en Zona I (exposicion media). Aunque la franja costera presenta generalmente niveles bajos, las zonas interiores requieren especial atencion en la medicion de gas radon.',
      ca: 'La provincia de Tarragona compta amb municipis d\'actuacio prioritaria concentrats principalment a les comarques de l\'interior. La Conca de Barbera i el Priorat presenten municipis en Zona II (exposicio alta), mentre que comarques com l\'Alt Camp, la Terra Alta i el Baix Ebre compten amb municipis en Zona I (exposicio mitjana). Encara que la franja costanera presenta generalment nivells baixos, les zones interiors requereixen especial atencio en el mesurament de gas rado.',
      en: 'The province of Tarragona has priority action municipalities mainly concentrated in the interior regions. Conca de Barbera and Priorat have municipalities in Zone II (high exposure), while regions such as Alt Camp, Terra Alta, and Baix Ebre have municipalities in Zone I (medium exposure). Although the coastal strip generally has low levels, interior areas require special attention for radon gas measurement.',
      fr: 'La province de Tarragone compte des municipalites d\'action prioritaire concentrees principalement dans les regions interieures. La Conca de Barbera et le Priorat presentent des municipalites en Zone II (exposition elevee), tandis que des regions comme l\'Alt Camp, la Terra Alta et le Baix Ebre comptent des municipalites en Zone I (exposition moyenne). Bien que la bande cotiere presente generalement des niveaux faibles, les zones interieures necessitent une attention particuliere pour la mesure du gaz radon.',
    },
    metaTitle: {
      es: 'Municipios de Actuacion Prioritaria en Tarragona | ACM-2020',
      ca: 'Municipis d\'Actuacio Prioritaria a Tarragona | ACM-2020',
      en: 'Priority Action Municipalities in Tarragona | ACM-2020',
      fr: 'Municipalites d\'Action Prioritaire a Tarragone | ACM-2020',
    },
    metaDescription: {
      es: 'Lista completa de municipios de actuacion prioritaria frente al gas radon en la provincia de Tarragona. Zona I y Zona II. Medicion profesional ACM-2020.',
      ca: 'Llista completa de municipis d\'actuacio prioritaria davant el gas rado a la provincia de Tarragona. Zona I i Zona II. Mesurament professional ACM-2020.',
      en: 'Complete list of priority action municipalities for radon gas in the province of Tarragona. Zone I and Zone II. Professional measurement by ACM-2020.',
      fr: 'Liste complete des municipalites d\'action prioritaire pour le gaz radon dans la province de Tarragone. Zone I et Zone II. Mesure professionnelle ACM-2020.',
    },
  },
]

export function getProvinciaBySlug(slug: string): Provincia | undefined {
  return provincias.find((p) => p.slug === slug)
}

export function getProvinciasSlugs(): string[] {
  return provincias.map((p) => p.slug)
}
