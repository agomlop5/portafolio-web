export interface Asignatura {
  slug: string
  nombre: string
  periodo: string
  ects?: number
  resumen: string
  descripcion: string[]
  objetivos?: string[]
  aprendido?: string[]
  proyectos: string[]
}

export const grado = {
  titulo: 'Grado en Bellas Artes',
  centro: 'Universitat Politècnica de València',
  periodo: '2023 – actualidad',
  introduccion: [
    'Mi trayectoria académica se centra en la creación y manipulación de imagen digital, la narrativa visual y el desarrollo proyectual estratégico, con dominio del paquete Adobe y de los procesos de producción gráfica contemporánea.',
  ],
}

export const asignaturas: Asignatura[] = [
  {
    slug: 'tecnologias-de-la-imagen-1',
    nombre: 'Tecnologías de la imagen I',
    periodo: 'Feb 2024 – jun 2024',
    ects: 9,
    resumen: 'Creación y manipulación de imagen digital 2D.',
    descripcion: [
      'Especialización en creación y manipulación de imagen digital 2D. Desarrollo de competencias técnicas en edición avanzada, postproducción y gestión de flujos de trabajo, con uso de software profesional, periféricos de captura y estándares de nomenclatura para la producción visual.',
    ],
    proyectos: [],
  },
  {
    slug: 'tecnologias-de-la-imagen-2',
    nombre: 'Tecnologías de la imagen II',
    periodo: 'Sep 2024 – feb 2025',
    ects: 9,
    resumen: 'Creación, captura y montaje digital de vídeo.',
    descripcion: [
      'Formación en creación, captura y montaje digital de vídeo. Desarrollo de competencias en postproducción, narrativa visual y gestión de flujos de trabajo dinámicos, con el software estándar de la industria para la manipulación de imagen en movimiento y nomenclaturas digitales profesionales.',
    ],
    proyectos: [],
  },
  {
    slug: 'elementos-del-diseno',
    nombre: 'Elementos del Diseño',
    periodo: 'Sep 2025 – feb 2026',
    ects: 12,
    resumen: 'Comunicación visual, maquetación y diseño de campañas.',
    descripcion: [
      'Formación avanzada en comunicación visual, maquetación y pintura digital. Dominio del paquete Adobe (Photoshop, Illustrator, InDesign) para la creación de identidades, cartelería y publicaciones editoriales.',
      'Especialización en preimpresión, narrativa retórica y diseño de campañas, equilibrando la experimentación estética con la funcionalidad técnica en soportes físicos y virtuales.',
    ],
    proyectos: ['sampler'],
  },
  {
    slug: 'teoria-de-la-ilustracion-y-diseno-grafico',
    nombre: 'Teoría de la ilustración y Diseño gráfico',
    periodo: 'Sep 2025 – feb 2026',
    ects: 4.5,
    resumen: 'Corrientes visuales y teorías del diseño.',
    descripcion: [
      'Estudio de la evolución y las metodologías de la producción gráfica actual. Capacitación en el análisis de corrientes visuales y teorías del diseño para la resolución estratégica de proyectos de ilustración y comunicación visual.',
    ],
    proyectos: [],
  },
  {
    slug: 'procesos-tecnicas-y-recursos',
    nombre: 'Procesos, Técnicas y Recursos en Ilustración y Diseño Gráfico',
    periodo: 'Sep 2025 – feb 2026',
    ects: 12,
    resumen: 'Desarrollo proyectual con aplicación empresarial.',
    descripcion: [
      'Especialización en el desarrollo proyectual con aplicación empresarial. Capacitación en procesos creativos estratégicos, técnicas de persuasión visual y metodologías gráficas para transformar ideas en soluciones profesionales que superan la intuición subjetiva.',
    ],
    proyectos: [],
  },
  {
    slug: 'apps-y-arte-multimedia',
    nombre: 'Apps y arte multimedia',
    periodo: 'Sep 2026 - feb 2027', 
    ects: 9,
    resumen: 'El código como herramienta creativa: Vue, TypeScript, Tailwind y P5.js.',
    descripcion: [
      'Un acercamiento práctico al código como herramienta creativa y de expresión artística, aprendiendo a construir aplicaciones web interactivas con herramientas del ecosistema profesional actual y explorando este medio no solo desde lo técnico, sino como un lenguaje con potencial estético propio.',
    ], 
    proyectos: [], 
   },
  {
    slug: 'diseno-editorial-y-publicaciones-interactivas',
    nombre: 'Diseño Editorial y Publicaciones Interactivas',
    periodo: 'Sep 2026 - feb 2027', 
    resumen: 'Proyectos editoriales interactivos con Realidad Aumentada y Virtual.',
    ects: 12,
    descripcion: [
      'Asignatura orientada a la realización de proyectos editoriales de carácter interactivo, que proporciona las herramientas necesarias para el diseño y desarrollo de publicaciones enriquecidas con Realidad Aumentada y Realidad Virtual, así como el uso de los recursos tecnológicos que potencien el propio concepto de libro.',
    ],
    proyectos: [],
  },
  {
    slug: 'diseno-y-desarrollo-web',
    nombre: 'Diseño y Desarrollo Web',
    periodo: 'Feb 2027 - jun 2027',
    resumen: 'Sitios web responsive con HTML5, CSS y JavaScript.',
    ects: 12,
    descripcion: [
      'En esta asignatura se aprende a diseñar y desarrollar sitios web con HTML5 y CSS, con interfaces adaptables a cualquier configuración de pantalla (Responsive Web Design). Paralelamente, se aportan los conocimientos necesarios para trabajar interacciones web más complejas con JavaScript, de modo que se puedan abordar proyectos con un mayor catálogo de recursos y elementos interactivos.',
    ],
    proyectos: [],
  },
  {
    slug: 'ilustracion-aplicada',
    nombre: 'Ilustración Aplicada',
    periodo: 'Feb 2027 - jun 2027',
    resumen: 'Ilustración analógica y digital con artefinalización para serigrafía.',
    ects: 12,
    descripcion: [
      'Asignatura práctica de los últimos cursos del Grado en Bellas Artes. Su función es consolidar las competencias profesionales en ilustración aplicada, integrando procesos analógicos y digitales y la artefinalización para serigrafía.',
    ],
    proyectos: [],
  },
  {
    slug: 'profesionalizacion-en-la-ilustracion-y-el-diseno-grafico',
    nombre: 'Profesionalización en la Ilustración y el Diseño Gráfico',
    periodo: 'Feb 2027 - jun 2027',
    resumen: 'Ámbitos, mercados y estrategias profesionales de la ilustración y el diseño.',
    ects: 6,
    descripcion: [
      'Asignatura teórico-práctica dirigida a consolidar los conocimientos en torno a la ilustración y el diseño, sus particularidades semánticas, procesos y mercados. El objetivo es dar a conocer los diferentes ámbitos en los que se requieren servicios de ilustración y diseño y profundizar en las áreas más afines a las inquietudes de cada estudiante.',
    ],
    proyectos: [],
  },
]