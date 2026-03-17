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
      es: 'Mineral fibroso de origen natural utilizado ampliamente en la construccion por sus propiedades aislantes y resistentes al fuego. Su inhalacion esta asociada a enfermedades graves como el mesotelioma y la asbestosis.',
      ca: 'Mineral fibros d\'origen natural utilitzat amplament en la construccio per les seves propietats aillants i resistents al foc. La seva inhalacio esta associada a malalties greus com el mesotelioma i l\'asbestosi.',
      en: 'A naturally occurring fibrous mineral widely used in construction for its insulating and fire-resistant properties. Its inhalation is associated with serious diseases such as mesothelioma and asbestosis.',
      fr: 'Un mineral fibreux naturel largement utilise dans la construction pour ses proprietes isolantes et resistantes au feu. Son inhalation est associee a des maladies graves comme le mesotheliome et l\'asbestose.',
    },
  },
  {
    slug: 'radon',
    term: { es: 'Gas radon', ca: 'Gas rado', en: 'Radon gas', fr: 'Gaz radon' },
    definition: {
      es: 'Gas radiactivo de origen natural que se produce por la desintegracion del uranio presente en suelos y rocas. Es la segunda causa de cancer de pulmon despues del tabaco.',
      ca: 'Gas radioactiu d\'origen natural que es produeix per la desintegracio de l\'urani present en sols i roques. Es la segona causa de cancer de pulmo despres del tabac.',
      en: 'A naturally occurring radioactive gas produced by the decay of uranium found in soils and rocks. It is the second leading cause of lung cancer after smoking.',
      fr: 'Un gaz radioactif naturel produit par la desintegration de l\'uranium present dans les sols et les roches. C\'est la deuxieme cause de cancer du poumon apres le tabac.',
    },
  },
  {
    slug: 'mca',
    term: { es: 'MCA', ca: 'MCA', en: 'ACM', fr: 'MCA' },
    definition: {
      es: 'Materiales con Contenido de Amianto. Termino que engloba todos los productos y materiales de construccion que contienen fibras de amianto en su composicion.',
      ca: 'Materials amb Contingut d\'Amiant. Terme que engloba tots els productes i materials de construccio que contenen fibres d\'amiant en la seva composicio.',
      en: 'Asbestos-Containing Materials. Term that encompasses all construction products and materials containing asbestos fibers in their composition.',
      fr: 'Materiaux Contenant de l\'Amiante. Terme qui englobe tous les produits et materiaux de construction contenant des fibres d\'amiante dans leur composition.',
    },
  },
  {
    slug: 'rera',
    term: { es: 'RERA', ca: 'RERA', en: 'RERA', fr: 'RERA' },
    definition: {
      es: 'Registro de Empresas con Riesgo de Amianto. Registro obligatorio para empresas que realizan actividades con riesgo de exposicion al amianto.',
      ca: 'Registre d\'Empreses amb Risc d\'Amiant. Registre obligatori per a empreses que realitzen activitats amb risc d\'exposicio a l\'amiant.',
      en: 'Registry of Companies with Asbestos Risk. Mandatory registry for companies carrying out activities with risk of asbestos exposure.',
      fr: 'Registre des Entreprises a Risque d\'Amiante. Registre obligatoire pour les entreprises exercant des activites avec risque d\'exposition a l\'amiante.',
    },
  },
  {
    slug: 'desamiantado',
    term: { es: 'Desamiantado', ca: 'Desamiantatge', en: 'Asbestos removal', fr: 'Desamiantage' },
    definition: {
      es: 'Proceso de retirada segura de materiales que contienen amianto de un edificio o instalacion, siguiendo protocolos estrictos de seguridad y normativa.',
      ca: 'Proces de retirada segura de materials que contenen amiant d\'un edifici o instal·lacio, seguint protocols estrictes de seguretat i normativa.',
      en: 'The process of safely removing asbestos-containing materials from a building or facility, following strict safety and regulatory protocols.',
      fr: 'Processus de retrait securise des materiaux contenant de l\'amiante d\'un batiment ou d\'une installation, en suivant des protocoles stricts de securite et de reglementation.',
    },
  },
  {
    slug: 'mesotelioma',
    term: { es: 'Mesotelioma', ca: 'Mesotelioma', en: 'Mesothelioma', fr: 'Mesotheliome' },
    definition: {
      es: 'Tipo de cancer que afecta al mesotelio (membrana que recubre los organos internos), directamente relacionado con la exposicion al amianto.',
      ca: 'Tipus de cancer que afecta el mesoteli (membrana que recobreix els organs interns), directament relacionat amb l\'exposicio a l\'amiant.',
      en: 'A type of cancer affecting the mesothelium (the membrane lining internal organs), directly related to asbestos exposure.',
      fr: 'Type de cancer affectant le mesothelium (la membrane tapissant les organes internes), directement lie a l\'exposition a l\'amiante.',
    },
  },
  {
    slug: 'asbestosis',
    term: { es: 'Asbestosis', ca: 'Asbestosi', en: 'Asbestosis', fr: 'Asbestose' },
    definition: {
      es: 'Enfermedad pulmonar cronica causada por la inhalacion prolongada de fibras de amianto, que provoca cicatrizacion del tejido pulmonar.',
      ca: 'Malaltia pulmonar cronica causada per la inhalacio prolongada de fibres d\'amiant, que provoca cicatritzacio del teixit pulmonar.',
      en: 'A chronic lung disease caused by prolonged inhalation of asbestos fibers, causing scarring of lung tissue.',
      fr: 'Maladie pulmonaire chronique causee par l\'inhalation prolongee de fibres d\'amiante, provoquant une cicatrisation du tissu pulmonaire.',
    },
  },
  {
    slug: 'becquerel',
    term: { es: 'Becquerel (Bq)', ca: 'Becquerel (Bq)', en: 'Becquerel (Bq)', fr: 'Becquerel (Bq)' },
    definition: {
      es: 'Unidad de medida de la actividad radiactiva en el Sistema Internacional. Para el radon, se mide en Bq/m3 (becquerelios por metro cubico de aire).',
      ca: 'Unitat de mesura de l\'activitat radioactiva en el Sistema Internacional. Per al rado, es mesura en Bq/m3 (becquerels per metre cubic d\'aire).',
      en: 'The SI unit of radioactivity measurement. For radon, it is measured in Bq/m3 (becquerels per cubic meter of air).',
      fr: 'Unite de mesure de l\'activite radioactive dans le Systeme International. Pour le radon, il est mesure en Bq/m3 (becquerels par metre cube d\'air).',
    },
  },
  {
    slug: 'nivel-referencia-radon',
    term: { es: 'Nivel de referencia', ca: 'Nivell de referencia', en: 'Reference level', fr: 'Niveau de reference' },
    definition: {
      es: 'Concentracion maxima de radon establecida por la normativa, fijada en 300 Bq/m3 para viviendas y centros de trabajo segun el Real Decreto 1029/2022.',
      ca: 'Concentracio maxima de rado establerta per la normativa, fixada en 300 Bq/m3 per a habitatges i centres de treball segons el Reial Decret 1029/2022.',
      en: 'Maximum radon concentration established by regulations, set at 300 Bq/m3 for homes and workplaces according to Royal Decree 1029/2022.',
      fr: 'Concentration maximale de radon etablie par la reglementation, fixee a 300 Bq/m3 pour les habitations et les lieux de travail selon le Decret Royal 1029/2022.',
    },
  },
  {
    slug: 'fibrocemento',
    term: { es: 'Fibrocemento', ca: 'Fibrocement', en: 'Fiber cement', fr: 'Fibrociment' },
    definition: {
      es: 'Material de construccion compuesto por cemento reforzado con fibras, historicamente de amianto (conocido como uralita). Su fabricacion con amianto esta prohibida desde 2002.',
      ca: 'Material de construccio compost per ciment reforçat amb fibres, historicament d\'amiant (conegut com a uralita). La seva fabricacio amb amiant esta prohibida des de 2002.',
      en: 'A construction material made of cement reinforced with fibers, historically asbestos (known as uralita in Spain). Its manufacture with asbestos has been banned since 2002.',
      fr: 'Materiau de construction compose de ciment renforce de fibres, historiquement d\'amiante (connu sous le nom d\'uralite). Sa fabrication avec de l\'amiante est interdite depuis 2002.',
    },
  },
  {
    slug: 'plan-gestion-amianto',
    term: { es: 'Plan de gestion de amianto', ca: 'Pla de gestio d\'amiant', en: 'Asbestos management plan', fr: 'Plan de gestion de l\'amiante' },
    definition: {
      es: 'Documento que establece las medidas necesarias para gestionar de forma segura los materiales con amianto presentes en un edificio o instalacion.',
      ca: 'Document que estableix les mesures necessaries per gestionar de forma segura els materials amb amiant presents en un edifici o instal·lacio.',
      en: 'A document establishing the necessary measures for safely managing asbestos-containing materials present in a building or facility.',
      fr: 'Document etablissant les mesures necessaires pour gerer de maniere securisee les materiaux contenant de l\'amiante presents dans un batiment ou une installation.',
    },
  },
  {
    slug: 'zona-actuacion-prioritaria',
    term: { es: 'Zona de actuacion prioritaria', ca: 'Zona d\'actuacio prioritaria', en: 'Priority action zone', fr: 'Zone d\'action prioritaire' },
    definition: {
      es: 'Area geografica donde se estima que un porcentaje significativo de edificios supera el nivel de referencia de radon, requiriendo mediciones obligatorias.',
      ca: 'Area geografica on s\'estima que un percentatge significatiu d\'edificis supera el nivell de referencia de rado, requerint mesuraments obligatoris.',
      en: 'A geographical area where a significant percentage of buildings are estimated to exceed the radon reference level, requiring mandatory measurements.',
      fr: 'Zone geographique ou un pourcentage significatif de batiments est estime depasser le niveau de reference du radon, necessitant des mesures obligatoires.',
    },
  },
]
