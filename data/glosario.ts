export interface GlossaryTerm {
  slug: string
  term: { es: string; ca: string; en: string; fr: string }
  definition: { es: string; ca: string; en: string; fr: string }
}

export const glosario: GlossaryTerm[] = [
  {
    slug: 'amianto',
    term: { es: 'Amianto', ca: 'Amiant', en: 'Asbestos', fr: 'Amiante' },
    definition: {
      es: 'Mineral fibroso de origen natural utilizado ampliamente en la construcción por sus propiedades aislantes y resistentes al fuego. Su inhalación está asociada a enfermedades graves como el mesotelioma y la asbestosis.',
      ca: 'Mineral fibrós d\'origen natural utilitzat àmpliament en la construcció per les seves propietats aïllants i resistents al foc. La seva inhalació està associada a malalties greus com el mesotelioma i l\'asbestosi.',
      en: 'A naturally occurring fibrous mineral widely used in construction for its insulating and fire-resistant properties. Its inhalation is associated with serious diseases such as mesothelioma and asbestosis.',
      fr: 'Un minéral fibreux naturel largement utilisé dans la construction pour ses propriétés isolantes et résistantes au feu. Son inhalation est associée à des maladies graves comme le mésothéliome et l\'asbestose.',
    },
  },
  {
    slug: 'radon',
    term: { es: 'Gas radón', ca: 'Gas radó', en: 'Radon gas', fr: 'Gaz radon' },
    definition: {
      es: 'Gas radiactivo de origen natural que se produce por la desintegración del uranio presente en suelos y rocas. Es la segunda causa de cáncer de pulmón después del tabaco.',
      ca: 'Gas radioactiu d\'origen natural que es produeix per la desintegració de l\'urani present en sòls i roques. És la segona causa de càncer de pulmó després del tabac.',
      en: 'A naturally occurring radioactive gas produced by the decay of uranium found in soils and rocks. It is the second leading cause of lung cancer after smoking.',
      fr: 'Un gaz radioactif naturel produit par la désintégration de l\'uranium présent dans les sols et les roches. C\'est la deuxième cause de cancer du poumon après le tabac.',
    },
  },
  {
    slug: 'mca',
    term: { es: 'MCA', ca: 'MCA', en: 'ACM', fr: 'MCA' },
    definition: {
      es: 'Materiales con Contenido de Amianto. Término que engloba todos los productos y materiales de construcción que contienen fibras de amianto en su composición.',
      ca: 'Materials amb Contingut d\'Amiant. Terme que engloba tots els productes i materials de construcció que contenen fibres d\'amiant en la seva composició.',
      en: 'Asbestos-Containing Materials. Term that encompasses all construction products and materials containing asbestos fibers in their composition.',
      fr: 'Matériaux Contenant de l\'Amiante. Terme qui englobe tous les produits et matériaux de construction contenant des fibres d\'amiante dans leur composition.',
    },
  },
  {
    slug: 'rera',
    term: { es: 'RERA', ca: 'RERA', en: 'RERA', fr: 'RERA' },
    definition: {
      es: 'Registro de Empresas con Riesgo de Amianto. Registro obligatorio para empresas que realizan actividades con riesgo de exposición al amianto.',
      ca: 'Registre d\'Empreses amb Risc d\'Amiant. Registre obligatori per a empreses que realitzen activitats amb risc d\'exposició a l\'amiant.',
      en: 'Registry of Companies with Asbestos Risk. Mandatory registry for companies carrying out activities with risk of asbestos exposure.',
      fr: 'Registre des Entreprises à Risque d\'Amiante. Registre obligatoire pour les entreprises exerçant des activités avec risque d\'exposition à l\'amiante.',
    },
  },
  {
    slug: 'desamiantado',
    term: { es: 'Desamiantado', ca: 'Desamiantatge', en: 'Asbestos removal', fr: 'Désamiantage' },
    definition: {
      es: 'Proceso de retirada segura de materiales que contienen amianto de un edificio o instalación, siguiendo protocolos estrictos de seguridad y normativa.',
      ca: 'Procés de retirada segura de materials que contenen amiant d\'un edifici o instal·lació, seguint protocols estrictes de seguretat i normativa.',
      en: 'The process of safely removing asbestos-containing materials from a building or facility, following strict safety and regulatory protocols.',
      fr: 'Processus de retrait sécurisé des matériaux contenant de l\'amiante d\'un bâtiment ou d\'une installation, en suivant des protocoles stricts de sécurité et de réglementation.',
    },
  },
  {
    slug: 'mesotelioma',
    term: { es: 'Mesotelioma', ca: 'Mesotelioma', en: 'Mesothelioma', fr: 'Mésothéliome' },
    definition: {
      es: 'Tipo de cáncer que afecta al mesotelio (membrana que recubre los órganos internos), directamente relacionado con la exposición al amianto.',
      ca: 'Tipus de càncer que afecta el mesoteli (membrana que recobreix els òrgans interns), directament relacionat amb l\'exposició a l\'amiant.',
      en: 'A type of cancer affecting the mesothelium (the membrane lining internal organs), directly related to asbestos exposure.',
      fr: 'Type de cancer affectant le mésothélium (la membrane tapissant les organes internes), directement lié à l\'exposition à l\'amiante.',
    },
  },
  {
    slug: 'asbestosis',
    term: { es: 'Asbestosis', ca: 'Asbestosi', en: 'Asbestosis', fr: 'Asbestose' },
    definition: {
      es: 'Enfermedad pulmonar crónica causada por la inhalación prolongada de fibras de amianto, que provoca cicatrización del tejido pulmonar.',
      ca: 'Malaltia pulmonar crònica causada per la inhalació prolongada de fibres d\'amiant, que provoca cicatrització del teixit pulmonar.',
      en: 'A chronic lung disease caused by prolonged inhalation of asbestos fibers, causing scarring of lung tissue.',
      fr: 'Maladie pulmonaire chronique causée par l\'inhalation prolongée de fibres d\'amiante, provoquant une cicatrisation du tissu pulmonaire.',
    },
  },
  {
    slug: 'becquerel',
    term: { es: 'Becquerel (Bq)', ca: 'Becquerel (Bq)', en: 'Becquerel (Bq)', fr: 'Becquerel (Bq)' },
    definition: {
      es: 'Unidad de medida de la actividad radiactiva en el Sistema Internacional. Para el radón, se mide en Bq/m3 (becquerelios por metro cúbico de aire).',
      ca: 'Unitat de mesura de l\'activitat radioactiva en el Sistema Internacional. Per al radó, es mesura en Bq/m3 (becquerels per metre cúbic d\'aire).',
      en: 'The SI unit of radioactivity measurement. For radon, it is measured in Bq/m3 (becquerels per cubic meter of air).',
      fr: 'Unité de mesure de l\'activité radioactive dans le Système International. Pour le radon, il est mesuré en Bq/m3 (becquerels par mètre cube d\'air).',
    },
  },
  {
    slug: 'nivel-referencia-radon',
    term: { es: 'Nivel de referencia', ca: 'Nivell de referència', en: 'Reference level', fr: 'Niveau de référence' },
    definition: {
      es: 'Concentración máxima de radón establecida por la normativa, fijada en 300 Bq/m3 para viviendas y centros de trabajo según el Real Decreto 1029/2022.',
      ca: 'Concentració màxima de radó establerta per la normativa, fixada en 300 Bq/m3 per a habitatges i centres de treball segons el Reial Decret 1029/2022.',
      en: 'Maximum radon concentration established by regulations, set at 300 Bq/m3 for homes and workplaces according to Royal Decree 1029/2022.',
      fr: 'Concentration maximale de radon établie par la réglementation, fixée à 300 Bq/m3 pour les habitations et les lieux de travail selon le Décret Royal 1029/2022.',
    },
  },
  {
    slug: 'fibrocemento',
    term: { es: 'Fibrocemento', ca: 'Fibrocement', en: 'Fiber cement', fr: 'Fibrociment' },
    definition: {
      es: 'Material de construcción compuesto por cemento reforzado con fibras, históricamente de amianto (conocido como uralita). Su fabricación con amianto está prohibida desde 2002.',
      ca: 'Material de construcció compost per ciment reforçat amb fibres, històricament d\'amiant (conegut com a uralita). La seva fabricació amb amiant està prohibida des de 2002.',
      en: 'A construction material made of cement reinforced with fibers, historically asbestos (known as uralita in Spain). Its manufacture with asbestos has been banned since 2002.',
      fr: 'Matériau de construction composé de ciment renforcé de fibres, historiquement d\'amiante (connu sous le nom d\'uralite). Sa fabrication avec de l\'amiante est interdite depuis 2002.',
    },
  },
  {
    slug: 'plan-gestion-amianto',
    term: { es: 'Plan de gestión de amianto', ca: 'Pla de gestió d\'amiant', en: 'Asbestos management plan', fr: 'Plan de gestion de l\'amiante' },
    definition: {
      es: 'Documento que establece las medidas necesarias para gestionar de forma segura los materiales con amianto presentes en un edificio o instalación.',
      ca: 'Document que estableix les mesures necessàries per gestionar de forma segura els materials amb amiant presents en un edifici o instal·lació.',
      en: 'A document establishing the necessary measures for safely managing asbestos-containing materials present in a building or facility.',
      fr: 'Document établissant les mesures nécessaires pour gérer de manière sécurisée les matériaux contenant de l\'amiante présents dans un bâtiment ou une installation.',
    },
  },
  {
    slug: 'zona-actuacion-prioritaria',
    term: { es: 'Zona de actuación prioritaria', ca: 'Zona d\'actuació prioritària', en: 'Priority action zone', fr: 'Zone d\'action prioritaire' },
    definition: {
      es: 'Área geográfica donde se estima que un porcentaje significativo de edificios supera el nivel de referencia de radón, requiriendo mediciones obligatorias.',
      ca: 'Àrea geogràfica on s\'estima que un percentatge significatiu d\'edificis supera el nivell de referència de radó, requerint mesuraments obligatoris.',
      en: 'A geographical area where a significant percentage of buildings are estimated to exceed the radon reference level, requiring mandatory measurements.',
      fr: 'Zone géographique où un pourcentage significatif de bâtiments est estimé dépasser le niveau de référence du radon, nécessitant des mesures obligatoires.',
    },
  },
]
