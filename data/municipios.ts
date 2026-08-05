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
      es: `${name} es un municipio de la comarca ${comarca} (${provincia}) clasificado como zona de exposición ${zonaRadon === 'alta' ? 'alta' : zonaRadon === 'media' ? 'media' : 'baja'} al gas radón. ACM-2020 ofrece servicios profesionales de medición y control de radón en ${name}, cumpliendo con la normativa vigente del Real Decreto 1029/2022.`,
      ca: `${nameCa} és un municipi de la comarca ${comarca} (${provincia}) classificat com a zona d'exposició ${zonaRadon === 'alta' ? 'alta' : zonaRadon === 'media' ? 'mitjana' : 'baixa'} al gas radó. ACM-2020 ofereix serveis professionals de mesurament i control de radó a ${nameCa}, complint amb la normativa vigent del Reial Decret 1029/2022.`,
      en: `${name} is a municipality in the ${comarca} region (${provincia}) classified as a ${zonaRadon === 'alta' ? 'high' : zonaRadon === 'media' ? 'medium' : 'low'} radon gas exposure zone. ACM-2020 offers professional radon measurement and control services in ${name}, in compliance with Royal Decree 1029/2022.`,
      fr: `${name} est une municipalité de la région ${comarca} (${provincia}) classée comme zone d'exposition ${zonaRadon === 'alta' ? 'élevée' : zonaRadon === 'media' ? 'moyenne' : 'faible'} au gaz radon. ACM-2020 offre des services professionnels de mesure et de contrôle du radon à ${name}, en conformité avec le Décret Royal 1029/2022.`,
    },
    faqs: {
      es: [
        { q: `¿Cuál es el nivel de radón en ${name}?`, a: `${name} está clasificado como zona de exposición ${zonaRadon === 'alta' ? 'alta' : zonaRadon === 'media' ? 'media' : 'baja'} al gas radón según el mapa de potencial de radón del CSN.` },
        { q: `¿Es obligatorio medir el radón en ${name}?`, a: `Según el Real Decreto 1029/2022, es obligatorio realizar mediciones de radón en centros de trabajo ubicados en zonas de actuación prioritaria. Consulte con nuestros técnicos si su caso requiere medición.` },
        { q: `¿Cuánto cuesta una medición de radón en ${name}?`, a: `El coste depende del tipo de inmueble y la superficie. Contacte con nosotros para un presupuesto personalizado sin compromiso.` },
      ],
      ca: [
        { q: `Quin és el nivell de radó a ${nameCa}?`, a: `${nameCa} està classificat com a zona d'exposició ${zonaRadon === 'alta' ? 'alta' : zonaRadon === 'media' ? 'mitjana' : 'baixa'} al gas radó segons el mapa de potencial de radó del CSN.` },
        { q: `És obligatori mesurar el radó a ${nameCa}?`, a: `Segons el Reial Decret 1029/2022, és obligatori realitzar mesuraments de radó en centres de treball ubicats en zones d'actuació prioritària. Consulti amb els nostres tècnics si el seu cas requereix mesurament.` },
        { q: `Quant costa un mesurament de radó a ${nameCa}?`, a: `El cost depèn del tipus d'immoble i la superfície. Contacti amb nosaltres per a un pressupost personalitzat sense compromís.` },
      ],
      en: [
        { q: `What is the radon level in ${name}?`, a: `${name} is classified as a ${zonaRadon === 'alta' ? 'high' : zonaRadon === 'media' ? 'medium' : 'low'} radon gas exposure zone according to the CSN radon potential map.` },
        { q: `Is radon measurement mandatory in ${name}?`, a: `According to Royal Decree 1029/2022, radon measurements are mandatory in workplaces located in priority action zones. Contact our technicians to check if your case requires measurement.` },
        { q: `How much does a radon measurement cost in ${name}?`, a: `The cost depends on the type of property and surface area. Contact us for a personalized no-obligation quote.` },
      ],
      fr: [
        { q: `Quel est le niveau de radon à ${name} ?`, a: `${name} est classée comme zone d'exposition ${zonaRadon === 'alta' ? 'élevée' : zonaRadon === 'media' ? 'moyenne' : 'faible'} au gaz radon selon la carte de potentiel radon du CSN.` },
        { q: `La mesure du radon est-elle obligatoire à ${name} ?`, a: `Selon le Décret Royal 1029/2022, les mesures de radon sont obligatoires dans les lieux de travail situés dans les zones d'action prioritaire. Contactez nos techniciens pour vérifier si votre cas nécessite une mesure.` },
        { q: `Combien coûte une mesure de radon à ${name} ?`, a: `Le coût dépend du type de propriété et de la surface. Contactez-nous pour un devis personnalisé sans engagement.` },
      ],
    },
    metaTitle: {
      es: `Medición de Radón en ${name} | ACM-2020`,
      ca: `Mesurament de Radó a ${nameCa} | ACM-2020`,
      en: `Radon Measurement in ${name} | ACM-2020`,
      fr: `Mesure du Radon à ${name} | ACM-2020`,
    },
    metaDescription: {
      es: `Servicio profesional de medición y control de gas radón en ${name} (${comarca}, ${provincia}). Zona de exposición ${zonaRadon}. Solicite presupuesto sin compromiso.`,
      ca: `Servei professional de mesurament i control de gas radó a ${nameCa} (${comarca}, ${provincia}). Zona d'exposició ${zonaRadon}. Sol·liciti pressupost sense compromís.`,
      en: `Professional radon gas measurement and control service in ${name} (${comarca}, ${provincia}). ${zonaRadon === 'alta' ? 'High' : zonaRadon === 'media' ? 'Medium' : 'Low'} exposure zone. Request a no-obligation quote.`,
      fr: `Service professionnel de mesure et contrôle du gaz radon à ${name} (${comarca}, ${provincia}). Zone d'exposition ${zonaRadon === 'alta' ? 'élevée' : zonaRadon === 'media' ? 'moyenne' : 'faible'}. Demandez un devis sans engagement.`,
    },
  }
}

export const municipios: Municipio[] = [
  // Barcelona - Alt Penedès
  generateMunicipioData('vilafranca-del-penedes', 'Vilafranca del Penedès', 'Vilafranca del Penedès', 'Barcelona', 'Alt Penedès', 'media'),
  generateMunicipioData('sant-sadurni-danoia', 'Sant Sadurní d\'Anoia', 'Sant Sadurní d\'Anoia', 'Barcelona', 'Alt Penedès', 'media'),
  generateMunicipioData('gelida', 'Gelida', 'Gelida', 'Barcelona', 'Alt Penedès', 'media'),
  // Barcelona - Anoia
  generateMunicipioData('igualada', 'Igualada', 'Igualada', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('vilanova-del-cami', 'Vilanova del Camí', 'Vilanova del Camí', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('santa-margarida-de-montbui', 'Santa Margarida de Montbui', 'Santa Margarida de Montbui', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('piera', 'Piera', 'Piera', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('capellades', 'Capellades', 'Capellades', 'Barcelona', 'Anoia', 'alta'),
  // Barcelona - Bages
  generateMunicipioData('manresa', 'Manresa', 'Manresa', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-joan-de-vilatorrada', 'Sant Joan de Vilatorrada', 'Sant Joan de Vilatorrada', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('santpedor', 'Santpedor', 'Santpedor', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('navarcles', 'Navarcles', 'Navarcles', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sallent', 'Sallent', 'Sallent', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('suria', 'Súria', 'Súria', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('cardona', 'Cardona', 'Cardona', 'Barcelona', 'Bages', 'alta'),
  // Barcelona - Berguedà
  generateMunicipioData('berga', 'Berga', 'Berga', 'Barcelona', 'Berguedà', 'alta'),
  generateMunicipioData('gironella', 'Gironella', 'Gironella', 'Barcelona', 'Berguedà', 'alta'),
  generateMunicipioData('puig-reig', 'Puig-reig', 'Puig-reig', 'Barcelona', 'Berguedà', 'alta'),
  generateMunicipioData('baga', 'Bagà', 'Bagà', 'Barcelona', 'Berguedà', 'alta'),
  generateMunicipioData('guardiola-de-bergueda', 'Guardiola de Berguedà', 'Guardiola de Berguedà', 'Barcelona', 'Berguedà', 'alta'),
  // Barcelona - Osona
  generateMunicipioData('vic', 'Vic', 'Vic', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('manlleu', 'Manlleu', 'Manlleu', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('tona', 'Tona', 'Tona', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('centelles', 'Centelles', 'Centelles', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('taradell', 'Taradell', 'Taradell', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('roda-de-ter', 'Roda de Ter', 'Roda de Ter', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('seva', 'Seva', 'Seva', 'Barcelona', 'Osona', 'alta'),
  // Barcelona - Vallès Occidental
  generateMunicipioData('terrassa', 'Terrassa', 'Terrassa', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('sabadell', 'Sabadell', 'Sabadell', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('sant-cugat-del-valles', 'Sant Cugat del Vallès', 'Sant Cugat del Vallès', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('rubí', 'Rubí', 'Rubí', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('castellar-del-valles', 'Castellar del Vallès', 'Castellar del Vallès', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('matadepera', 'Matadepera', 'Matadepera', 'Barcelona', 'Vallès Occidental', 'alta'),
  generateMunicipioData('vacarisses', 'Vacarisses', 'Vacarisses', 'Barcelona', 'Vallès Occidental', 'alta'),
  generateMunicipioData('ullastrell', 'Ullastrell', 'Ullastrell', 'Barcelona', 'Vallès Occidental', 'media'),
  // Barcelona - Vallès Oriental
  generateMunicipioData('granollers', 'Granollers', 'Granollers', 'Barcelona', 'Vallès Oriental', 'media'),
  generateMunicipioData('mollet-del-valles', 'Mollet del Vallès', 'Mollet del Vallès', 'Barcelona', 'Vallès Oriental', 'baja'),
  generateMunicipioData('la-garriga', 'La Garriga', 'la Garriga', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('llinars-del-valles', 'Llinars del Vallès', 'Llinars del Vallès', 'Barcelona', 'Vallès Oriental', 'media'),
  generateMunicipioData('caldes-de-montbui', 'Caldes de Montbui', 'Caldes de Montbui', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('sant-celoni', 'Sant Celoni', 'Sant Celoni', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('cardedeu', 'Cardedeu', 'Cardedeu', 'Barcelona', 'Vallès Oriental', 'media'),
  // Barcelona - Baix Llobregat
  generateMunicipioData('martorell', 'Martorell', 'Martorell', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('olesa-de-montserrat', 'Olesa de Montserrat', 'Olesa de Montserrat', 'Barcelona', 'Baix Llobregat', 'alta'),
  generateMunicipioData('esparreguera', 'Esparreguera', 'Esparreguera', 'Barcelona', 'Baix Llobregat', 'alta'),
  generateMunicipioData('abrera', 'Abrera', 'Abrera', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('collbato', 'Collbató', 'Collbató', 'Barcelona', 'Baix Llobregat', 'alta'),
  // Barcelona - Barcelonès
  generateMunicipioData('barcelona', 'Barcelona', 'Barcelona', 'Barcelona', 'Barcelonès', 'baja'),
  generateMunicipioData('badalona', 'Badalona', 'Badalona', 'Barcelona', 'Barcelonès', 'alta'),
  generateMunicipioData('santa-coloma-de-gramenet', 'Santa Coloma de Gramenet', 'Santa Coloma de Gramenet', 'Barcelona', 'Barcelonès', 'alta'),
  // Barcelona - Maresme
  generateMunicipioData('mataro', 'Mataró', 'Mataró', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('argentona', 'Argentona', 'Argentona', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('dosrius', 'Dosrius', 'Dosrius', 'Barcelona', 'Maresme', 'alta'),
  // Barcelona - Solsonès
  generateMunicipioData('solsona', 'Solsona', 'Solsona', 'Barcelona', 'Solsonès', 'alta'),
  // Barcelona - Moianès
  generateMunicipioData('moià', 'Moià', 'Moià', 'Barcelona', 'Moianès', 'alta'),
  generateMunicipioData('calders', 'Calders', 'Calders', 'Barcelona', 'Moianès', 'alta'),
  // Barcelona - Lluçanès
  generateMunicipioData('prats-de-llucanes', 'Prats de Lluçanès', 'Prats de Lluçanès', 'Barcelona', 'Lluçanès', 'alta'),
  // Barcelona - Garraf
  generateMunicipioData('vilanova-i-la-geltru', 'Vilanova i la Geltrú', 'Vilanova i la Geltrú', 'Barcelona', 'Garraf', 'baja'),
  generateMunicipioData('sitges', 'Sitges', 'Sitges', 'Barcelona', 'Garraf', 'baja'),
  // Girona - Gironès
  generateMunicipioData('girona', 'Girona', 'Girona', 'Girona', 'Gironès', 'media'),
  generateMunicipioData('salt', 'Salt', 'Salt', 'Girona', 'Gironès', 'media'),
  generateMunicipioData('sarria-de-ter', 'Sarrià de Ter', 'Sarrià de Ter', 'Girona', 'Gironès', 'media'),
  // Girona - Selva
  generateMunicipioData('santa-coloma-de-farners', 'Santa Coloma de Farners', 'Santa Coloma de Farners', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('breda', 'Breda', 'Breda', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('hostalric', 'Hostalric', 'Hostalric', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('arbucies', 'Arbúcies', 'Arbúcies', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('vidreres', 'Vidreres', 'Vidreres', 'Girona', 'Selva', 'media'),
  // Girona - Garrotxa
  generateMunicipioData('olot', 'Olot', 'Olot', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('les-preses', 'Les Preses', 'Les Preses', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('santa-pau', 'Santa Pau', 'Santa Pau', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('besalu', 'Besalú', 'Besalú', 'Girona', 'Garrotxa', 'alta'),
  // Girona - Ripollès
  generateMunicipioData('ripoll', 'Ripoll', 'Ripoll', 'Girona', 'Ripollès', 'alta'),
  generateMunicipioData('sant-joan-de-les-abadesses', 'Sant Joan de les Abadesses', 'Sant Joan de les Abadesses', 'Girona', 'Ripollès', 'alta'),
  generateMunicipioData('camprodon', 'Camprodon', 'Camprodon', 'Girona', 'Ripollès', 'alta'),
  // Girona - Cerdanya
  generateMunicipioData('puigcerda', 'Puigcerdà', 'Puigcerdà', 'Girona', 'Cerdanya', 'alta'),
  generateMunicipioData('llívia', 'Llívia', 'Llívia', 'Girona', 'Cerdanya', 'alta'),
  // Girona - Pla de l'Estany
  generateMunicipioData('banyoles', 'Banyoles', 'Banyoles', 'Girona', 'Pla de l\'Estany', 'media'),
  // Girona - Empordà
  generateMunicipioData('figueres', 'Figueres', 'Figueres', 'Girona', 'Alt Empordà', 'media'),
  generateMunicipioData('roses', 'Roses', 'Roses', 'Girona', 'Alt Empordà', 'media'),
  generateMunicipioData('la-bisbal-demporda', 'La Bisbal d\'Empordà', 'la Bisbal d\'Empordà', 'Girona', 'Baix Empordà', 'media'),
  generateMunicipioData('palafrugell', 'Palafrugell', 'Palafrugell', 'Girona', 'Baix Empordà', 'media'),
  // Lleida - Segrià
  generateMunicipioData('lleida', 'Lleida', 'Lleida', 'Lleida', 'Segrià', 'baja'),
  // Lleida - Solsonès
  generateMunicipioData('solsona-lleida', 'Solsona', 'Solsona', 'Lleida', 'Solsonès', 'alta'),
  // Lleida - Alt Urgell
  generateMunicipioData('la-seu-durgell', 'La Seu d\'Urgell', 'la Seu d\'Urgell', 'Lleida', 'Alt Urgell', 'alta'),
  // Lleida - Pallars Jussà
  generateMunicipioData('tremp', 'Tremp', 'Tremp', 'Lleida', 'Pallars Jussà', 'alta'),
  // Lleida - Pallars Sobirà
  generateMunicipioData('sort', 'Sort', 'Sort', 'Lleida', 'Pallars Sobirà', 'alta'),
  // Lleida - Val d'Aran
  generateMunicipioData('vielha', 'Vielha', 'Vielha', 'Lleida', 'Val d\'Aran', 'alta'),
  // Lleida - Noguera
  generateMunicipioData('balaguer', 'Balaguer', 'Balaguer', 'Lleida', 'Noguera', 'media'),
  // Lleida - Urgell
  generateMunicipioData('tarrega', 'Tàrrega', 'Tàrrega', 'Lleida', 'Urgell', 'baja'),
  // Lleida - Alta Ribagorça
  generateMunicipioData('el-pont-de-suert', 'El Pont de Suert', 'el Pont de Suert', 'Lleida', 'Alta Ribagorça', 'alta'),
  // Tarragona - Tarragonès
  generateMunicipioData('tarragona', 'Tarragona', 'Tarragona', 'Tarragona', 'Tarragonès', 'baja'),
  // Tarragona - Baix Camp
  generateMunicipioData('reus', 'Reus', 'Reus', 'Tarragona', 'Baix Camp', 'baja'),
  // Tarragona - Alt Camp
  generateMunicipioData('valls', 'Valls', 'Valls', 'Tarragona', 'Alt Camp', 'media'),
  // Tarragona - Conca de Barberà
  generateMunicipioData('montblanc', 'Montblanc', 'Montblanc', 'Tarragona', 'Conca de Barberà', 'alta'),
  // Tarragona - Priorat
  generateMunicipioData('falset', 'Falset', 'Falset', 'Tarragona', 'Priorat', 'alta'),
  // Tarragona - Baix Penedès
  generateMunicipioData('el-vendrell', 'El Vendrell', 'el Vendrell', 'Tarragona', 'Baix Penedès', 'baja'),
  // Tarragona - Terra Alta
  generateMunicipioData('gandesa', 'Gandesa', 'Gandesa', 'Tarragona', 'Terra Alta', 'media'),
  // Additional Barcelona municipalities
  generateMunicipioData('badia-del-valles', 'Badia del Vallès', 'Badia del Vallès', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('cerdanyola-del-valles', 'Cerdanyola del Vallès', 'Cerdanyola del Vallès', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('barbera-del-valles', 'Barberà del Vallès', 'Barberà del Vallès', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('sentmenat', 'Sentmenat', 'Sentmenat', 'Barcelona', 'Vallès Occidental', 'alta'),
  generateMunicipioData('palau-de-plegamans', 'Palau-solità i Plegamans', 'Palau-solità i Plegamans', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('polinyà', 'Polinyà', 'Polinyà', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('montcada-i-reixac', 'Montcada i Reixac', 'Montcada i Reixac', 'Barcelona', 'Vallès Occidental', 'media'),
  generateMunicipioData('ripollet', 'Ripollet', 'Ripollet', 'Barcelona', 'Vallès Occidental', 'baja'),
  // More Vallès Oriental
  generateMunicipioData('parets-del-valles', 'Parets del Vallès', 'Parets del Vallès', 'Barcelona', 'Vallès Oriental', 'baja'),
  generateMunicipioData('les-franqueses-del-valles', 'Les Franqueses del Vallès', 'les Franqueses del Vallès', 'Barcelona', 'Vallès Oriental', 'media'),
  generateMunicipioData('canovelles', 'Canovelles', 'Canovelles', 'Barcelona', 'Vallès Oriental', 'media'),
  generateMunicipioData('aiguafreda', 'Aiguafreda', 'Aiguafreda', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('bigues-i-riells', 'Bigues i Riells', 'Bigues i Riells', 'Barcelona', 'Vallès Oriental', 'alta'),
  // More Bages
  generateMunicipioData('monistrol-de-montserrat', 'Monistrol de Montserrat', 'Monistrol de Montserrat', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('castellbell-i-el-vilar', 'Castellbell i el Vilar', 'Castellbell i el Vilar', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-vicenç-de-castellet', 'Sant Vicenç de Castellet', 'Sant Vicenç de Castellet', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('el-pont-de-vilomara-i-rocafort', 'El Pont de Vilomara i Rocafort', 'el Pont de Vilomara i Rocafort', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('artes', 'Artés', 'Artés', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('avinyó', 'Avinyó', 'Avinyó', 'Barcelona', 'Bages', 'alta'),
  // More Osona
  generateMunicipioData('el-brull', 'El Brull', 'el Brull', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('sant-hipolit-de-voltrega', 'Sant Hipòlit de Voltregà', 'Sant Hipòlit de Voltregà', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('santa-eugenia-de-berga', 'Santa Eugènia de Berga', 'Santa Eugènia de Berga', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('sant-pere-de-torello', 'Sant Pere de Torelló', 'Sant Pere de Torelló', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('torello', 'Torelló', 'Torelló', 'Barcelona', 'Osona', 'alta'),
  // More Berguedà
  generateMunicipioData('cal-rosal', 'Cal Rosal', 'Cal Rosal', 'Barcelona', 'Berguedà', 'alta'),
  generateMunicipioData('casserres', 'Casserres', 'Casserres', 'Barcelona', 'Berguedà', 'alta'),
  generateMunicipioData('la-pobla-de-lillet', 'La Pobla de Lillet', 'la Pobla de Lillet', 'Barcelona', 'Berguedà', 'alta'),
  // More Girona - Selva
  generateMunicipioData('amer', 'Amer', 'Amer', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('angles', 'Anglès', 'Anglès', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('osor', 'Osor', 'Osor', 'Girona', 'Selva', 'alta'),
  // More Garrotxa
  generateMunicipioData('la-vall-den-bas', 'La Vall d\'en Bas', 'la Vall d\'en Bas', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('sant-joan-les-fonts', 'Sant Joan les Fonts', 'Sant Joan les Fonts', 'Girona', 'Garrotxa', 'alta'),
  generateMunicipioData('castellfollit-de-la-roca', 'Castellfollit de la Roca', 'Castellfollit de la Roca', 'Girona', 'Garrotxa', 'alta'),
  // More Ripollès
  generateMunicipioData('ribes-de-freser', 'Ribes de Freser', 'Ribes de Freser', 'Girona', 'Ripollès', 'alta'),
  generateMunicipioData('sant-joan-de-les-abadesses-2', 'Gombrèn', 'Gombrèn', 'Girona', 'Ripollès', 'alta'),
  // More Barcelona misc
  generateMunicipioData('el-hospitalet-de-llobregat', 'L\'Hospitalet de Llobregat', 'l\'Hospitalet de Llobregat', 'Barcelona', 'Barcelonès', 'baja'),
  generateMunicipioData('cornella-de-llobregat', 'Cornellà de Llobregat', 'Cornellà de Llobregat', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('sant-boi-de-llobregat', 'Sant Boi de Llobregat', 'Sant Boi de Llobregat', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('gava', 'Gavà', 'Gavà', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('castelldefels', 'Castelldefels', 'Castelldefels', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('sant-feliu-de-llobregat', 'Sant Feliu de Llobregat', 'Sant Feliu de Llobregat', 'Barcelona', 'Baix Llobregat', 'baja'),
  generateMunicipioData('sant-just-desvern', 'Sant Just Desvern', 'Sant Just Desvern', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('el-papiol', 'El Papiol', 'el Papiol', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('castellbisbal', 'Castellbisbal', 'Castellbisbal', 'Barcelona', 'Vallès Occidental', 'media'),
  // Lleida additional
  generateMunicipioData('mollerussa', 'Mollerussa', 'Mollerussa', 'Lleida', 'Pla d\'Urgell', 'baja'),
  generateMunicipioData('cervera', 'Cervera', 'Cervera', 'Lleida', 'Segarra', 'media'),
  generateMunicipioData('ponts', 'Ponts', 'Ponts', 'Lleida', 'Noguera', 'alta'),
  // Tarragona additional
  generateMunicipioData('tortosa', 'Tortosa', 'Tortosa', 'Tarragona', 'Baix Ebre', 'media'),
  generateMunicipioData('amposta', 'Amposta', 'Amposta', 'Tarragona', 'Montsià', 'baja'),
  generateMunicipioData('cambrils', 'Cambrils', 'Cambrils', 'Tarragona', 'Baix Camp', 'baja'),
  generateMunicipioData('calafell', 'Calafell', 'Calafell', 'Tarragona', 'Baix Penedès', 'baja'),
  // More Girona
  generateMunicipioData('lloret-de-mar', 'Lloret de Mar', 'Lloret de Mar', 'Girona', 'Selva', 'media'),
  generateMunicipioData('blanes', 'Blanes', 'Blanes', 'Girona', 'Selva', 'media'),
  generateMunicipioData('sant-feliu-de-guixols', 'Sant Feliu de Guíxols', 'Sant Feliu de Guíxols', 'Girona', 'Baix Empordà', 'media'),
  generateMunicipioData('palamos', 'Palamós', 'Palamós', 'Girona', 'Baix Empordà', 'media'),
  // More Barcelona Anoia
  generateMunicipioData('la-pobla-de-claramunt', 'La Pobla de Claramunt', 'la Pobla de Claramunt', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('els-hostalets-de-pierola', 'Els Hostalets de Pierola', 'els Hostalets de Pierola', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('masquefa', 'Masquefa', 'Masquefa', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('jorba', 'Jorba', 'Jorba', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('odena', 'Òdena', 'Òdena', 'Barcelona', 'Anoia', 'alta'),
  generateMunicipioData('santa-maria-de-miralles', 'Santa Maria de Miralles', 'Santa Maria de Miralles', 'Barcelona', 'Anoia', 'alta'),
  // Fill to 150+
  generateMunicipioData('sant-pere-de-ribes', 'Sant Pere de Ribes', 'Sant Pere de Ribes', 'Barcelona', 'Garraf', 'baja'),
  generateMunicipioData('olivella', 'Olivella', 'Olivella', 'Barcelona', 'Garraf', 'media'),
  generateMunicipioData('begues', 'Begues', 'Begues', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('cervelló', 'Cervelló', 'Cervelló', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('vallirana', 'Vallirana', 'Vallirana', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('corbera-de-llobregat', 'Corbera de Llobregat', 'Corbera de Llobregat', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('la-palma-de-cervello', 'La Palma de Cervelló', 'la Palma de Cervelló', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('torrelles-de-llobregat', 'Torrelles de Llobregat', 'Torrelles de Llobregat', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('sant-andreu-de-la-barca', 'Sant Andreu de la Barca', 'Sant Andreu de la Barca', 'Barcelona', 'Baix Llobregat', 'media'),
  generateMunicipioData('sant-esteve-sesrovires', 'Sant Esteve Sesrovires', 'Sant Esteve Sesrovires', 'Barcelona', 'Baix Llobregat', 'media'),
  // Extra Bages/Osona/Berguedà
  generateMunicipioData('balsareny', 'Balsareny', 'Balsareny', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('callus', 'Callús', 'Callús', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-fruitós-de-bages', 'Sant Fruitós de Bages', 'Sant Fruitós de Bages', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-salvador-de-guardiola', 'Sant Salvador de Guardiola', 'Sant Salvador de Guardiola', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('sant-mateu-de-bages', 'Sant Mateu de Bages', 'Sant Mateu de Bages', 'Barcelona', 'Bages', 'alta'),
  generateMunicipioData('les-masies-de-voltrega', 'Les Masies de Voltregà', 'les Masies de Voltregà', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('sant-quirze-de-besora', 'Sant Quirze de Besora', 'Sant Quirze de Besora', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('prats-de-llucanes-osona', 'Sant Boi de Lluçanès', 'Sant Boi de Lluçanès', 'Barcelona', 'Osona', 'alta'),
  // Old sitemap municipios not previously included
  generateMunicipioData('sils', 'Sils', 'Sils', 'Girona', 'Selva', 'alta'),
  generateMunicipioData('alins', 'Alins', 'Alins', 'Lleida', 'Pallars Sobirà', 'alta'),
  generateMunicipioData('espolla', 'Espolla', 'Espolla', 'Girona', 'Alt Empordà', 'alta'),
  generateMunicipioData('botarell', 'Botarell', 'Botarell', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('vilaller', 'Vilaller', 'Vilaller', 'Lleida', 'Alta Ribagorça', 'alta'),
  generateMunicipioData('aleixar', 'L\'Aleixar', 'l\'Aleixar', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('montgat', 'Montgat', 'Montgat', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('alp', 'Alp', 'Alp', 'Girona', 'Cerdanya', 'alta'),
  generateMunicipioData('llanars', 'Llanars', 'Llanars', 'Girona', 'Ripollès', 'alta'),
  generateMunicipioData('riudecanyes', 'Riudecanyes', 'Riudecanyes', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('riudecols', 'Riudecols', 'Riudecols', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('ger', 'Ger', 'Ger', 'Girona', 'Cerdanya', 'alta'),
  generateMunicipioData('cadaques', 'Cadaqués', 'Cadaqués', 'Girona', 'Alt Empordà', 'alta'),
  generateMunicipioData('calonge', 'Calonge', 'Calonge', 'Girona', 'Baix Empordà', 'media'),
  generateMunicipioData('almoster', 'Almoster', 'Almoster', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('portbou', 'Portbou', 'Portbou', 'Girona', 'Alt Empordà', 'alta'),
  generateMunicipioData('tiana', 'Tiana', 'Tiana', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('alforja', 'Alforja', 'Alforja', 'Tarragona', 'Baix Camp', 'alta'),
  generateMunicipioData('llança', 'Llança', 'Llança', 'Girona', 'Alt Empordà', 'alta'),
  // Barcelona - Maresme (new from old site scrape)
  generateMunicipioData('alella', 'Alella', 'Alella', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('cabrera-de-mar', 'Cabrera de Mar', 'Cabrera de Mar', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('tordera', 'Tordera', 'Tordera', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('arenys-de-mar', 'Arenys de Mar', 'Arenys de Mar', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('cabrils', 'Cabrils', 'Cabrils', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('sant-andreu-de-llavaneres', 'Sant Andreu de Llavaneres', 'Sant Andreu de Llavaneres', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('sant-cebria-de-vallalta', 'Sant Cebrià de Vallalta', 'Sant Cebrià de Vallalta', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('santa-susanna', 'Santa Susanna', 'Santa Susanna', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('vilassar-de-dalt', 'Vilassar de Dalt', 'Vilassar de Dalt', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('arenys-de-munt', 'Arenys de Munt', 'Arenys de Munt', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('pineda-de-mar', 'Pineda de Mar', 'Pineda de Mar', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('vilassar-de-mar', 'Vilassar de Mar', 'Vilassar de Mar', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('canet-de-mar', 'Canet de Mar', 'Canet de Mar', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('caldes-d-estrac', 'Caldes d\'Estrac', 'Caldes d\'Estrac', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('sant-iscle-de-vallalta', 'Sant Iscle de Vallalta', 'Sant Iscle de Vallalta', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('premia-de-mar', 'Premià de Mar', 'Premià de Mar', 'Barcelona', 'Maresme', 'media'),
  generateMunicipioData('teia', 'Teià', 'Teià', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('orrius', 'Òrrius', 'Òrrius', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('palafolls', 'Palafolls', 'Palafolls', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('calella', 'Calella', 'Calella', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('malgrat-de-mar', 'Malgrat de Mar', 'Malgrat de Mar', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('sant-vicenc-de-montalt', 'Sant Vicenç de Montalt', 'Sant Vicenç de Montalt', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('premia-de-dalt', 'Premià de Dalt', 'Premià de Dalt', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('el-masnou', 'El Masnou', 'el Masnou', 'Barcelona', 'Maresme', 'alta'),
  generateMunicipioData('sant-pol-de-mar', 'Sant Pol de Mar', 'Sant Pol de Mar', 'Barcelona', 'Maresme', 'alta'),
  // Barcelona - Vallès Oriental (new from old site scrape)
  generateMunicipioData('vallromanes', 'Vallromanes', 'Vallromanes', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('figaro-montmany', 'Figaró-Montmany', 'Figaró-Montmany', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('montornes-del-valles', 'Montornès del Vallès', 'Montornès del Vallès', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('sant-fost-de-campsentelles', 'Sant Fost de Campsentelles', 'Sant Fost de Campsentelles', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('santa-eulalia-de-roncana', 'Santa Eulàlia de Ronçana', 'Santa Eulàlia de Ronçana', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('gualba', 'Gualba', 'Gualba', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('la-roca-del-valles', 'La Roca del Vallès', 'la Roca del Vallès', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('martorelles', 'Martorelles', 'Martorelles', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('vilalba-sasserra', 'Vilalba Sasserra', 'Vilalba Sasserra', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('vallgorguina', 'Vallgorguina', 'Vallgorguina', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('santa-maria-de-palautordera', 'Santa Maria de Palautordera', 'Santa Maria de Palautordera', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('ametlla-del-valles', 'L\'Ametlla del Vallès', 'l\'Ametlla del Vallès', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('vilanova-del-valles', 'Vilanova del Vallès', 'Vilanova del Vallès', 'Barcelona', 'Vallès Oriental', 'alta'),
  generateMunicipioData('santa-maria-de-martorelles', 'Santa Maria de Martorelles', 'Santa Maria de Martorelles', 'Barcelona', 'Vallès Oriental', 'alta'),
  // Barcelona - Osona (new from old site scrape)
  generateMunicipioData('sant-sadurni-d-osormort', 'Sant Sadurní d\'Osormort', 'Sant Sadurní d\'Osormort', 'Barcelona', 'Osona', 'alta'),
  generateMunicipioData('vilanova-de-sau', 'Vilanova de Sau', 'Vilanova de Sau', 'Barcelona', 'Osona', 'alta'),
  // Barcelona - Berguedà (new from old site scrape)
  generateMunicipioData('castellar-de-n-hug', 'Castellar de n\'Hug', 'Castellar de n\'Hug', 'Barcelona', 'Berguedà', 'alta'),
  // Barcelona - Selva (new from old site scrape)
  generateMunicipioData('fogars-de-la-selva', 'Fogars de la Selva', 'Fogars de la Selva', 'Barcelona', 'Selva', 'alta'),
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
