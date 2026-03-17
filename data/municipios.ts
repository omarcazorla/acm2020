export interface Municipio {
  slug: string
  name: string
  nameCa: string
  provincia: string
  comarca: string
  zonaRadon: 'alta' | 'media' | 'baja'
  zonaActuacion: 'I' | 'II' | undefined
  descripcion: {
    es: string
    ca: string
    en: string
    fr: string
  }
  faqs: {
    es: { q: string; a: string }[]
    ca: { q: string; a: string }[]
    en: { q: string; a: string }[]
    fr: { q: string; a: string }[]
  }
  metaTitle: {
    es: string
    ca: string
    en: string
    fr: string
  }
  metaDescription: {
    es: string
    ca: string
    en: string
    fr: string
  }
}

function generateMunicipioData(
  slug: string,
  name: string,
  nameCa: string,
  provincia: string,
  comarca: string,
  zonaRadon: 'alta' | 'media' | 'baja'
): Municipio {
  return {
    slug,
    name,
    nameCa,
    provincia,
    comarca,
    zonaRadon,
    zonaActuacion: zonaRadon === 'alta' ? 'II' as const : zonaRadon === 'media' ? 'I' as const : undefined,
    descripcion: {
      es: `${name} es un municipio de la comarca ${comarca} (${provincia}) clasificado como zona de exposicion ${zonaRadon === 'alta' ? 'alta' : zonaRadon === 'media' ? 'media' : 'baja'} al gas radon. ACM-2020 ofrece servicios profesionales de medicion y control de radon en ${name}, cumpliendo con la normativa vigente del Real Decreto 1029/2022.`,
      ca: `${nameCa} es un municipi de la comarca ${comarca} (${provincia}) classificat com a zona d'exposicio ${zonaRadon === 'alta' ? 'alta' : zonaRadon === 'media' ? 'mitjana' : 'baixa'} al gas rado. ACM-2020 ofereix serveis professionals de mesurament i control de rado a ${nameCa}, complint amb la normativa vigent del Reial Decret 1029/2022.`,
      en: `${name} is a municipality in the ${comarca} region (${provincia}) classified as a ${zonaRadon === 'alta' ? 'high' : zonaRadon === 'media' ? 'medium' : 'low'} radon gas exposure zone. ACM-2020 offers professional radon measurement and control services in ${name}, in compliance with Royal Decree 1029/2022.`,
      fr: `${name} est une municipalite de la region ${comarca} (${provincia}) classee comme zone d'exposition ${zonaRadon === 'alta' ? 'elevee' : zonaRadon === 'media' ? 'moyenne' : 'faible'} au gaz radon. ACM-2020 offre des services professionnels de mesure et de controle du radon a ${name}, en conformite avec le Decret Royal 1029/2022.`,
    },
    faqs: {
      es: [
        { q: `¿Cual es el nivel de radon en ${name}?`, a: `${name} esta clasificado como zona de exposicion ${zonaRadon === 'alta' ? 'alta' : zonaRadon === 'media' ? 'media' : 'baja'} al gas radon segun el mapa de potencial de radon del CSN.` },
        { q: `¿Es obligatorio medir el radon en ${name}?`, a: `Segun el Real Decreto 1029/2022, es obligatorio realizar mediciones de radon en centros de trabajo ubicados en zonas de actuacion prioritaria. Consulte con nuestros tecnicos si su caso requiere medicion.` },
        { q: `¿Cuanto cuesta una medicion de radon en ${name}?`, a: `El coste depende del tipo de inmueble y la superficie. Contacte con nosotros para un presupuesto personalizado sin compromiso.` },
      ],
      ca: [
        { q: `Quin es el nivell de rado a ${nameCa}?`, a: `${nameCa} esta classificat com a zona d'exposicio ${zonaRadon === 'alta' ? 'alta' : zonaRadon === 'media' ? 'mitjana' : 'baixa'} al gas rado segons el mapa de potencial de rado del CSN.` },
        { q: `Es obligatori mesurar el rado a ${nameCa}?`, a: `Segons el Reial Decret 1029/2022, es obligatori realitzar mesuraments de rado en centres de treball ubicats en zones d'actuacio prioritaria. Consulti amb els nostres tecnics si el seu cas requereix mesurament.` },
        { q: `Quant costa un mesurament de rado a ${nameCa}?`, a: `El cost depen del tipus d'immoble i la superficie. Contacti amb nosaltres per a un pressupost personalitzat sense compromis.` },
      ],
      en: [
        { q: `What is the radon level in ${name}?`, a: `${name} is classified as a ${zonaRadon === 'alta' ? 'high' : zonaRadon === 'media' ? 'medium' : 'low'} radon gas exposure zone according to the CSN radon potential map.` },
        { q: `Is radon measurement mandatory in ${name}?`, a: `According to Royal Decree 1029/2022, radon measurements are mandatory in workplaces located in priority action zones. Contact our technicians to check if your case requires measurement.` },
        { q: `How much does a radon measurement cost in ${name}?`, a: `The cost depends on the type of property and surface area. Contact us for a personalized no-obligation quote.` },
      ],
      fr: [
        { q: `Quel est le niveau de radon a ${name} ?`, a: `${name} est classee comme zone d'exposition ${zonaRadon === 'alta' ? 'elevee' : zonaRadon === 'media' ? 'moyenne' : 'faible'} au gaz radon selon la carte de potentiel radon du CSN.` },
        { q: `La mesure du radon est-elle obligatoire a ${name} ?`, a: `Selon le Decret Royal 1029/2022, les mesures de radon sont obligatoires dans les lieux de travail situes dans les zones d'action prioritaire. Contactez nos techniciens pour verifier si votre cas necessite une mesure.` },
        { q: `Combien coute une mesure de radon a ${name} ?`, a: `Le cout depend du type de propriete et de la surface. Contactez-nous pour un devis personnalise sans engagement.` },
      ],
    },
    metaTitle: {
      es: `Medicion de Radon en ${name} | ACM-2020`,
      ca: `Mesurament de Rado a ${nameCa} | ACM-2020`,
      en: `Radon Measurement in ${name} | ACM-2020`,
      fr: `Mesure du Radon a ${name} | ACM-2020`,
    },
    metaDescription: {
      es: `Servicio profesional de medicion y control de gas radon en ${name} (${comarca}, ${provincia}). Zona de exposicion ${zonaRadon}. Solicite presupuesto sin compromiso.`,
      ca: `Servei professional de mesurament i control de gas rado a ${nameCa} (${comarca}, ${provincia}). Zona d'exposicio ${zonaRadon}. Sol·liciti pressupost sense compromis.`,
      en: `Professional radon gas measurement and control service in ${name} (${comarca}, ${provincia}). ${zonaRadon === 'alta' ? 'High' : zonaRadon === 'media' ? 'Medium' : 'Low'} exposure zone. Request a no-obligation quote.`,
      fr: `Service professionnel de mesure et controle du gaz radon a ${name} (${comarca}, ${provincia}). Zone d'exposition ${zonaRadon === 'alta' ? 'elevee' : zonaRadon === 'media' ? 'moyenne' : 'faible'}. Demandez un devis sans engagement.`,
    },
  }
}

export const municipios: Municipio[] = [
  // Barcelona - Alt Penedes
  generateMunicipioData('vilafranca-del-penedes', 'Vilafranca del Penedes', 'Vilafranca del Penedes', 'Barcelona', 'Alt Penedes', 'media'),
  generateMunicipioData('sant-sadurni-danoia', 'Sant Sadurni d\'Anoia', 'Sant Sadurni d\'Anoia', 'Barcelona', 'Alt Penedes', 'media'),
  generateMunicipioData('gelida', 'Gelida', 'Gelida', 'Barcelona', 'Alt Penedes', 'media'),
  // Barcelona - Anoia
  generateMunicipioData('igualada', 'Igualada', 'Igualada', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('vilanova-del-cami', 'Vilanova del Cami', 'Vilanova del Cami', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('santa-margarida-de-montbui', 'Santa Margarida de Montbui', 'Santa Margarida de Montbui', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('piera', 'Piera', 'Piera', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('capellades', 'Capellades', 'Capellades', 'Barcelona', 'Anoia', 'alta'),
  // Barcelona - Bages
  generateMunicipioData('manresa', 'Manresa', 'Manresa', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-joan-de-vilatorrada', 'Sant Joan de Vilatorrada', 'Sant Joan de Vilatorrada', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('santpedor', 'Santpedor', 'Santpedor', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('navarcles', 'Navarcles', 'Navarcles', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sallent', 'Sallent', 'Sallent', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('suria', 'Suria', 'Suria', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('cardona', 'Cardona', 'Cardona', 'Barcelona', 'Bages', 'alta'),
  // Barcelona - Bergueda
  generateMunicipioData('berga', 'Berga', 'Berga', 'Barcelona', 'Bergueda', 'alta'),
  generateMunicipioData('gironella', 'Gironella', 'Gironella', 'Barcelona', 'Bergueda', 'alta'),
  generateMunicipioData('puig-reig', 'Puig-reig', 'Puig-reig', 'Barcelona', 'Bergueda', 'alta'),
  generateMunicipioData('baga', 'Baga', 'Baga', 'Barcelona', 'Bergueda', 'alta'),
  generateMunicipioData('guardiola-de-bergueda', 'Guardiola de Bergueda', 'Guardiola de Bergueda', 'Barcelona', 'Bergueda', 'alta'),
  // Barcelona - Osona
  generateMunicipioData('vic', 'Vic', 'Vic', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('manlleu', 'Manlleu', 'Manlleu', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('tona', 'Tona', 'Tona', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('centelles', 'Centelles', 'Centelles', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('taradell', 'Taradell', 'Taradell', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('roda-de-ter', 'Roda de Ter', 'Roda de Ter', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('seva', 'Seva', 'Seva', 'Barcelona', 'Osona', 'alta'),
  // Barcelona - Valles Occidental
  generateMunicipioData('terrassa', 'Terrassa', 'Terrassa', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('sabadell', 'Sabadell', 'Sabadell', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('sant-cugat-del-valles', 'Sant Cugat del Valles', 'Sant Cugat del Valles', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('rubí', 'Rubi', 'Rubi', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('castellar-del-valles', 'Castellar del Valles', 'Castellar del Valles', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('matadepera', 'Matadepera', 'Matadepera', 'Barcelona', 'Valles Occidental', 'alta'),
  generateMunicipioData('vacarisses', 'Vacarisses', 'Vacarisses', 'Barcelona', 'Valles Occidental', 'alta'),
  generateMunicipioData('ullastrell', 'Ullastrell', 'Ullastrell', 'Barcelona', 'Valles Occidental', 'media'),
  // Barcelona - Valles Oriental
  generateMunicipioData('granollers', 'Granollers', 'Granollers', 'Barcelona', 'Valles Oriental', 'media'),
  generateMunicipioData('mollet-del-valles', 'Mollet del Valles', 'Mollet del Valles', 'Barcelona', 'Valles Oriental', 'baja'),
  generateMunicipioData('la-garriga', 'La Garriga', 'la Garriga', 'Barcelona', 'Valles Oriental', 'alta'),
  generateMunicipioData('llinars-del-valles', 'Llinars del Valles', 'Llinars del Valles', 'Barcelona', 'Valles Oriental', 'media'),
  generateMunicipioData('caldes-de-montbui', 'Caldes de Montbui', 'Caldes de Montbui', 'Barcelona', 'Valles Oriental', 'alta'),
  generateMunicipioData('sant-celoni', 'Sant Celoni', 'Sant Celoni', 'Barcelona', 'Valles Oriental', 'alta'),
  generateMunicipioData('cardedeu', 'Cardedeu', 'Cardedeu', 'Barcelona', 'Valles Oriental', 'media'),
  // Barcelona - Baix Llobregat
  generateMunicipioData('martorell', 'Martorell', 'Martorell', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('olesa-de-montserrat', 'Olesa de Montserrat', 'Olesa de Montserrat', 'Barcelona', 'Baix Llobregat', 'alta'),
  generateMunicipioData('esparreguera', 'Esparreguera', 'Esparreguera', 'Barcelona', 'Baix Llobregat', 'alta'),
  generateMunicipioData('abrera', 'Abrera', 'Abrera', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('collbato', 'Collbato', 'Collbato', 'Barcelona', 'Baix Llobregat', 'alta'),
  // Barcelona - Barcelones
  generateMunicipioData('barcelona', 'Barcelona', 'Barcelona', 'Barcelona', 'Barcelones', 'baja'),
  generateMunicipioData('badalona', 'Badalona', 'Badalona', 'Barcelona', 'Barcelones', 'baja'),
  generateMunicipioData('santa-coloma-de-gramenet', 'Santa Coloma de Gramenet', 'Santa Coloma de Gramenet', 'Barcelona', 'Barcelones', 'baja'),
  // Barcelona - Maresme
  generateMunicipioData('mataro', 'Mataro', 'Mataro', 'Barcelona', 'Maresme', 'baja'),
  generateMunicipioData('argentona', 'Argentona', 'Argentona', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('dosrius', 'Dosrius', 'Dosrius', 'Barcelona', 'Maresme', 'alta'),
  // Barcelona - Solsones
  generateMunicipioData('solsona', 'Solsona', 'Solsona', 'Barcelona', 'Solsones', 'alta'),
  // Barcelona - Moianes
  generateMunicipioData('moià', 'Moia', 'Moia', 'Barcelona', 'Moianes', 'alta'),
  generateMunicipioData('calders', 'Calders', 'Calders', 'Barcelona', 'Moianes', 'alta'),
  // Barcelona - Lluçanes
  generateMunicipioData('prats-de-llucanes', 'Prats de Llucanes', 'Prats de Lluçanes', 'Barcelona', 'Lluçanes', 'alta'),
  // Barcelona - Garraf
  generateMunicipioData('vilanova-i-la-geltru', 'Vilanova i la Geltru', 'Vilanova i la Geltru', 'Barcelona', 'Garraf', 'baja'),
  generateMunicipioData('sitges', 'Sitges', 'Sitges', 'Barcelona', 'Garraf', 'baja'),
  // Girona - Girones
  generateMunicipioData('girona', 'Girona', 'Girona', 'Girona', 'Girones', 'media'),
  generateMunicipioData('salt', 'Salt', 'Salt', 'Girona', 'Girones', 'media'),
  generateMunicipioData('sarria-de-ter', 'Sarria de Ter', 'Sarria de Ter', 'Girona', 'Girones', 'media'),
  // Girona - Selva
  generateMunicipioData('santa-coloma-de-farners', 'Santa Coloma de Farners', 'Santa Coloma de Farners', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('breda', 'Breda', 'Breda', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('hostalric', 'Hostalric', 'Hostalric', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('arbucies', 'Arbucies', 'Arbucies', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('vidreres', 'Vidreres', 'Vidreres', 'Girona', 'Selva', 'media'),
  // Girona - Garrotxa
  generateMunicipioData('olot', 'Olot', 'Olot', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('les-preses', 'Les Preses', 'Les Preses', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('santa-pau', 'Santa Pau', 'Santa Pau', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('besalu', 'Besalu', 'Besalu', 'Girona', 'Garrotxa', 'alta'),
  // Girona - Ripolles
  generateMunicipioData('ripoll', 'Ripoll', 'Ripoll', 'Girona', 'Ripolles', 'alta'),
  generateMunicipioData('sant-joan-de-les-abadesses', 'Sant Joan de les Abadesses', 'Sant Joan de les Abadesses', 'Girona', 'Ripolles', 'alta'),
  generateMunicipioData('camprodon', 'Camprodon', 'Camprodon', 'Girona', 'Ripolles', 'alta'),
  // Girona - Cerdanya
  generateMunicipioData('puigcerda', 'Puigcerda', 'Puigcerda', 'Girona', 'Cerdanya', 'alta'),
  generateMunicipioData('llívia', 'Llivia', 'Llivia', 'Girona', 'Cerdanya', 'alta'),
  // Girona - Pla de l'Estany
  generateMunicipioData('banyoles', 'Banyoles', 'Banyoles', 'Girona', 'Pla de l\'Estany', 'media'),
  // Girona - Emporda
  generateMunicipioData('figueres', 'Figueres', 'Figueres', 'Girona', 'Alt Emporda', 'media'),
  generateMunicipioData('roses', 'Roses', 'Roses', 'Girona', 'Alt Emporda', 'baja'),
  generateMunicipioData('la-bisbal-demporda', 'La Bisbal d\'Emporda', 'la Bisbal d\'Emporda', 'Girona', 'Baix Emporda', 'media'),
  generateMunicipioData('palafrugell', 'Palafrugell', 'Palafrugell', 'Girona', 'Baix Emporda', 'baja'),
  // Lleida - Segria
  generateMunicipioData('lleida', 'Lleida', 'Lleida', 'Lleida', 'Segria', 'baja'),
  // Lleida - Solsones
  generateMunicipioData('solsona-lleida', 'Solsona', 'Solsona', 'Lleida', 'Solsones', 'alta'),
  // Lleida - Alt Urgell
  generateMunicipioData('la-seu-durgell', 'La Seu d\'Urgell', 'la Seu d\'Urgell', 'Lleida', 'Alt Urgell', 'alta'),
  // Lleida - Pallars Jussa
  generateMunicipioData('tremp', 'Tremp', 'Tremp', 'Lleida', 'Pallars Jussa', 'alta'),
  // Lleida - Pallars Sobira
  generateMunicipioData('sort', 'Sort', 'Sort', 'Lleida', 'Pallars Sobira', 'alta'),
  // Lleida - Val d'Aran
  generateMunicipioData('vielha', 'Vielha', 'Vielha', 'Lleida', 'Val d\'Aran', 'alta'),
  // Lleida - Noguera
  generateMunicipioData('balaguer', 'Balaguer', 'Balaguer', 'Lleida', 'Noguera', 'media'),
  // Lleida - Urgell
  generateMunicipioData('tarrega', 'Tarrega', 'Tarrega', 'Lleida', 'Urgell', 'baja'),
  // Lleida - Alta Ribagorça
  generateMunicipioData('el-pont-de-suert', 'El Pont de Suert', 'el Pont de Suert', 'Lleida', 'Alta Ribagorça', 'alta'),
  // Tarragona - Tarragones
  generateMunicipioData('tarragona', 'Tarragona', 'Tarragona', 'Tarragona', 'Tarragones', 'baja'),
  // Tarragona - Baix Camp
  generateMunicipioData('reus', 'Reus', 'Reus', 'Tarragona', 'Baix Camp', 'baja'),
  // Tarragona - Alt Camp
  generateMunicipioData('valls', 'Valls', 'Valls', 'Tarragona', 'Alt Camp', 'media'),
  // Tarragona - Conca de Barbera
  generateMunicipioData('montblanc', 'Montblanc', 'Montblanc', 'Tarragona', 'Conca de Barbera', 'alta'),
  // Tarragona - Priorat
  generateMunicipioData('falset', 'Falset', 'Falset', 'Tarragona', 'Priorat', 'alta'),
  // Tarragona - Baix Penedes
  generateMunicipioData('el-vendrell', 'El Vendrell', 'el Vendrell', 'Tarragona', 'Baix Penedes', 'baja'),
  // Tarragona - Terra Alta
  generateMunicipioData('gandesa', 'Gandesa', 'Gandesa', 'Tarragona', 'Terra Alta', 'media'),
  // Additional Barcelona municipalities
  generateMunicipioData('badia-del-valles', 'Badia del Valles', 'Badia del Valles', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('cerdanyola-del-valles', 'Cerdanyola del Valles', 'Cerdanyola del Valles', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('barbera-del-valles', 'Barbera del Valles', 'Barbera del Valles', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('sentmenat', 'Sentmenat', 'Sentmenat', 'Barcelona', 'Valles Occidental', 'alta'),
  generateMunicipioData('palau-de-plegamans', 'Palau-solita i Plegamans', 'Palau-solita i Plegamans', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('polinyà', 'Polinya', 'Polinya', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('montcada-i-reixac', 'Montcada i Reixac', 'Montcada i Reixac', 'Barcelona', 'Valles Occidental', 'media'),
  generateMunicipioData('ripollet', 'Ripollet', 'Ripollet', 'Barcelona', 'Valles Occidental', 'baja'),
  // More Valles Oriental
  generateMunicipioData('parets-del-valles', 'Parets del Valles', 'Parets del Valles', 'Barcelona', 'Valles Oriental', 'baja'),
  generateMunicipioData('les-franqueses-del-valles', 'Les Franqueses del Valles', 'les Franqueses del Valles', 'Barcelona', 'Valles Oriental', 'media'),
  generateMunicipioData('canovelles', 'Canovelles', 'Canovelles', 'Barcelona', 'Valles Oriental', 'media'),
  generateMunicipioData('aiguafreda', 'Aiguafreda', 'Aiguafreda', 'Barcelona', 'Valles Oriental', 'alta'),
  generateMunicipioData('bigues-i-riells', 'Bigues i Riells', 'Bigues i Riells', 'Barcelona', 'Valles Oriental', 'alta'),
  // More Bages
  generateMunicipioData('monistrol-de-montserrat', 'Monistrol de Montserrat', 'Monistrol de Montserrat', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('castellbell-i-el-vilar', 'Castellbell i el Vilar', 'Castellbell i el Vilar', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-vicenç-de-castellet', 'Sant Vicenç de Castellet', 'Sant Vicenç de Castellet', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('el-pont-de-vilomara-i-rocafort', 'El Pont de Vilomara i Rocafort', 'el Pont de Vilomara i Rocafort', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('artes', 'Artes', 'Artes', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('avinyó', 'Avinyo', 'Avinyo', 'Barcelona', 'Bages', 'alta'),
  // More Osona
  generateMunicipioData('el-brull', 'El Brull', 'el Brull', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('sant-hipolit-de-voltrega', 'Sant Hipolit de Voltrega', 'Sant Hipolit de Voltrega', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('santa-eugenia-de-berga', 'Santa Eugenia de Berga', 'Santa Eugenia de Berga', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('sant-pere-de-torello', 'Sant Pere de Torello', 'Sant Pere de Torello', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('torello', 'Torello', 'Torello', 'Barcelona', 'Osona', 'alta'),
  // More Bergueda
  generateMunicipioData('cal-rosal', 'Cal Rosal', 'Cal Rosal', 'Barcelona', 'Bergueda', 'alta'),
  generateMunicipioData('casserres', 'Casserres', 'Casserres', 'Barcelona', 'Bergueda', 'alta'),
  generateMunicipioData('la-pobla-de-lillet', 'La Pobla de Lillet', 'la Pobla de Lillet', 'Barcelona', 'Bergueda', 'alta'),
  // More Girona - Selva
  generateMunicipioData('amer', 'Amer', 'Amer', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('angles', 'Angles', 'Angles', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('osor', 'Osor', 'Osor', 'Girona', 'Selva', 'alta'),
  // More Garrotxa
  generateMunicipioData('la-vall-den-bas', 'La Vall d\'en Bas', 'la Vall d\'en Bas', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('sant-joan-les-fonts', 'Sant Joan les Fonts', 'Sant Joan les Fonts', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('castellfollit-de-la-roca', 'Castellfollit de la Roca', 'Castellfollit de la Roca', 'Girona', 'Garrotxa', 'alta'),
  // More Ripolles
  generateMunicipioData('ribes-de-freser', 'Ribes de Freser', 'Ribes de Freser', 'Girona', 'Ripolles', 'alta'),
  generateMunicipioData('sant-joan-de-les-abadesses-2', 'Gombrèn', 'Gombrèn', 'Girona', 'Ripolles', 'alta'),
  // More Barcelona misc
  generateMunicipioData('el-hospitalet-de-llobregat', 'L\'Hospitalet de Llobregat', 'l\'Hospitalet de Llobregat', 'Barcelona', 'Barcelones', 'baja'),
  generateMunicipioData('cornella-de-llobregat', 'Cornella de Llobregat', 'Cornella de Llobregat', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('sant-boi-de-llobregat', 'Sant Boi de Llobregat', 'Sant Boi de Llobregat', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('gava', 'Gava', 'Gava', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('castelldefels', 'Castelldefels', 'Castelldefels', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('sant-feliu-de-llobregat', 'Sant Feliu de Llobregat', 'Sant Feliu de Llobregat', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('sant-just-desvern', 'Sant Just Desvern', 'Sant Just Desvern', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('el-papiol', 'El Papiol', 'el Papiol', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('castellbisbal', 'Castellbisbal', 'Castellbisbal', 'Barcelona', 'Valles Occidental', 'media'),
  // Lleida additional
  generateMunicipioData('mollerussa', 'Mollerussa', 'Mollerussa', 'Lleida', 'Pla d\'Urgell', 'baja'),
  generateMunicipioData('cervera', 'Cervera', 'Cervera', 'Lleida', 'Segarra', 'media'),
  generateMunicipioData('ponts', 'Ponts', 'Ponts', 'Lleida', 'Noguera', 'alta'),
  // Tarragona additional
  generateMunicipioData('tortosa', 'Tortosa', 'Tortosa', 'Tarragona', 'Baix Ebre', 'media'),
  generateMunicipioData('amposta', 'Amposta', 'Amposta', 'Tarragona', 'Montsia', 'baja'),
  generateMunicipioData('cambrils', 'Cambrils', 'Cambrils', 'Tarragona', 'Baix Camp', 'baja'),
  generateMunicipioData('calafell', 'Calafell', 'Calafell', 'Tarragona', 'Baix Penedes', 'baja'),
  // More Girona
  generateMunicipioData('lloret-de-mar', 'Lloret de Mar', 'Lloret de Mar', 'Girona', 'Selva', 'media'),
  generateMunicipioData('blanes', 'Blanes', 'Blanes', 'Girona', 'Selva', 'media'),
  generateMunicipioData('sant-feliu-de-guixols', 'Sant Feliu de Guixols', 'Sant Feliu de Guixols', 'Girona', 'Baix Emporda', 'baja'),
  generateMunicipioData('palamos', 'Palamos', 'Palamos', 'Girona', 'Baix Emporda', 'baja'),
  // More Barcelona Anoia
  generateMunicipioData('la-pobla-de-claramunt', 'La Pobla de Claramunt', 'la Pobla de Claramunt', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('els-hostalets-de-pierola', 'Els Hostalets de Pierola', 'els Hostalets de Pierola', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('masquefa', 'Masquefa', 'Masquefa', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('jorba', 'Jorba', 'Jorba', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('odena', 'Odena', 'Odena', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('santa-maria-de-miralles', 'Santa Maria de Miralles', 'Santa Maria de Miralles', 'Barcelona', 'Anoia', 'alta'),
  // Fill to 150+
  generateMunicipioData('sant-pere-de-ribes', 'Sant Pere de Ribes', 'Sant Pere de Ribes', 'Barcelona', 'Garraf', 'baja'),
  generateMunicipioData('olivella', 'Olivella', 'Olivella', 'Barcelona', 'Garraf', 'media'),
  generateMunicipioData('begues', 'Begues', 'Begues', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('cervelló', 'Cervello', 'Cervello', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('vallirana', 'Vallirana', 'Vallirana', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('corbera-de-llobregat', 'Corbera de Llobregat', 'Corbera de Llobregat', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('la-palma-de-cervello', 'La Palma de Cervello', 'la Palma de Cervello', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('torrelles-de-llobregat', 'Torrelles de Llobregat', 'Torrelles de Llobregat', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('sant-andreu-de-la-barca', 'Sant Andreu de la Barca', 'Sant Andreu de la Barca', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('sant-esteve-sesrovires', 'Sant Esteve Sesrovires', 'Sant Esteve Sesrovires', 'Barcelona', 'Baix Llobregat', 'media'),
  // Extra Bages/Osona/Bergueda
  generateMunicipioData('balsareny', 'Balsareny', 'Balsareny', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('callus', 'Callus', 'Callus', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-fruitós-de-bages', 'Sant Fruitos de Bages', 'Sant Fruitos de Bages', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-salvador-de-guardiola', 'Sant Salvador de Guardiola', 'Sant Salvador de Guardiola', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-mateu-de-bages', 'Sant Mateu de Bages', 'Sant Mateu de Bages', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('les-masies-de-voltrega', 'Les Masies de Voltrega', 'les Masies de Voltrega', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('sant-quirze-de-besora', 'Sant Quirze de Besora', 'Sant Quirze de Besora', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('prats-de-llucanes-osona', 'Sant Boi de Lluçanes', 'Sant Boi de Lluçanes', 'Barcelona', 'Osona', 'alta'),
  // Old sitemap municipios not previously included
  generateMunicipioData('sils', 'Sils', 'Sils', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('alins', 'Alins', 'Alins', 'Lleida', 'Pallars Sobira', 'alta'),
  generateMunicipioData('espolla', 'Espolla', 'Espolla', 'Girona', 'Alt Emporda', 'alta'),
  generateMunicipioData('botarell', 'Botarell', 'Botarell', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('vilaller', 'Vilaller', 'Vilaller', 'Lleida', 'Alta Ribagorça', 'alta'),
  generateMunicipioData('aleixar', 'L\'Aleixar', 'l\'Aleixar', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('montgat', 'Montgat', 'Montgat', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('alp', 'Alp', 'Alp', 'Girona', 'Cerdanya', 'alta'),
  generateMunicipioData('llanars', 'Llanars', 'Llanars', 'Girona', 'Ripolles', 'alta'),
  generateMunicipioData('riudecanyes', 'Riudecanyes', 'Riudecanyes', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('riudecols', 'Riudecols', 'Riudecols', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('ger', 'Ger', 'Ger', 'Girona', 'Cerdanya', 'alta'),
  generateMunicipioData('cadaques', 'Cadaques', 'Cadaques', 'Girona', 'Alt Emporda', 'alta'),
  generateMunicipioData('calonge', 'Calonge', 'Calonge', 'Girona', 'Baix Emporda', 'media'),
  generateMunicipioData('almoster', 'Almoster', 'Almoster', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('portbou', 'Portbou', 'Portbou', 'Girona', 'Alt Emporda', 'alta'),
  generateMunicipioData('tiana', 'Tiana', 'Tiana', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('alforja', 'Alforja', 'Alforja', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('llança', 'Llança', 'Llança', 'Girona', 'Alt Emporda', 'alta'),
]

export function getMunicipioBySlug(slug: string): Municipio | undefined {
  return municipios.find((m) => m.slug === slug)
}

export function getMunicipiosByProvincia(provincia: string): Municipio[] {
  return municipios.filter((m) => m.provincia === provincia)
}

export function getMunicipiosByZona(zona: 'alta' | 'media' | 'baja'): Municipio[] {
  return municipios.filter((m) => m.zonaRadon === zona)
}

export function getMunicipiosByProvinciaAndZona(provincia: string, zonaActuacion: 'I' | 'II'): Municipio[] {
  return municipios.filter((m) => m.provincia === provincia && m.zonaActuacion === zonaActuacion)
}

export function getComarcasByProvincia(provincia: string): string[] {
  const comarcas = new Set(
    municipios.filter((m) => m.provincia === provincia).map((m) => m.comarca)
  )
  return [...comarcas].sort()
}

export function getMunicipiosByComarca(comarca: string): Municipio[] {
  return municipios.filter((m) => m.comarca === comarca)
}
