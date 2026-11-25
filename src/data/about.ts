export const perfil = {
  nombre: 'Alba Gómez López',
  titular: 'Estudiante de Bellas Artes · diseño gráfico e ilustración',
  descripcion: [
    'Soy estudiante del Grado en Bellas Artes en la Universitat Politècnica de València, con la formación orientada al diseño gráfico y la ilustración.',
    'Desarrollo proyectos de diseño gráfico e ilustración como formas de comunicación visual que conectan concepto y emoción. Trabajo desde la investigación y la experimentación gráfica para transformar ideas en imágenes claras, coherentes y con identidad propia.',
    'Me interesa especialmente la creación de identidades visuales y narrativas ilustradas aplicadas a contextos culturales y contemporáneos. A través de procesos de análisis, bocetaje y desarrollo formal, busco soluciones que equilibren sensibilidad artística y funcionalidad.',
  ],
  datos: [
    { clave: 'Estudios', valor: 'Bellas Artes · UPV' },
    { clave: 'Ciudad', valor: 'València' },
    { clave: 'Idiomas', valor: 'Español y valenciano · Inglés B2' },
  ],
}

export interface Estudio {
  titulo: string
  centro: string
  periodo: string
  descripcion?: string
  enlace?: string
}

export const estudios: Estudio[] = [
  {
    titulo: 'Grado en Bellas Artes',
    centro: 'Universitat Politècnica de València',
    periodo: '2023 – actualidad',
    descripcion:
      'Orientado al diseño gráfico y la ilustración: creación y manipulación de imagen digital, narrativa visual y desarrollo proyectual.',
    enlace: '/sobre-mi/formacion',
  },
  {
    titulo: 'Bachillerato Artístico',
    centro: 'IES Vicent Andrés Estellés',
    periodo: '2021 – 2023',
  },
]

export interface Experiencia {
  puesto: string
  lugar: string
  periodo: string
  puntos: string[]
}

export const experiencia: Experiencia[] = [
  {
    puesto: 'Azafata de eventos',
    lugar: 'Activando · Pub Down Monkey (València) y Samara Pub Café (Alaquàs)',
    periodo: 'Sep 2025',
    puntos: [
      'Atención al cliente y promoción de marca',
      'Entrega de obsequios y merchandising',
      'Gestión de sorteos y promoción en Instagram',
      'Apoyo en fotografía y difusión del evento',
    ],
  },
  {
    puesto: 'Auxiliar de seguridad y acreditaciones',
    lugar: 'Pirata Festival (Gandia) y Arenal Sound (Burriana)',
    periodo: 'Jul – ago 2025',
    puntos: [
      'Control de accesos, incluidas zonas VIP y Dream VIP',
      'Verificación de pulseras',
      'Supervisión del parking y vigilancia de puertas de emergencia',
    ],
  },
  {
    puesto: 'Almacén y redes sociales',
    lugar: 'Doctor Sistemas Antihurto',
    periodo: 'Jul – oct 2024',
    puntos: [
      'Organización del almacén y gestión de stock',
      'Diseño de publicaciones y gestión de redes sociales',
    ],
  },
]

export const herramientas = [
  {
    grupo: 'Diseño e ilustración',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Ilustración digital'],
  },
  { grupo: 'Audiovisual', items: ['Postproducción audiovisual'] },
  { grupo: 'Web', items: ['Vue', 'TypeScript', 'Tailwind CSS', 'shadcn-vue'] },
  {
    grupo: 'Competencias',
    items: [
      'Atención al cliente',
      'Trabajo en equipo',
      'Creatividad',
      'Flexibilidad',
      'Aprendizaje continuo',
      'Organización',
    ],
  },
]

export const idiomas = [
  { nombre: 'Español', nivel: 'Nativo' },
  { nombre: 'Valenciano', nivel: 'Nativo' },
  { nombre: 'Inglés', nivel: 'B2' },
]

export const otrosDatos = ['Carnet de conducir B', 'Vehículo propio']