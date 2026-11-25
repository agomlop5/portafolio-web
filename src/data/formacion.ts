export interface Asignatura {
  slug: string
  nombre: string
  periodo: string
  ects: number
  resumen: string
  descripcion: string[]
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
    periodo: 'Feb – jun 2024',
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
]