import type { CategoriaSlug } from './categories'

export interface Proyecto {
  slug: string
  titulo: string
  anio: number
  categoria: CategoriaSlug
  contexto?: string
  formato?: string
  herramientas: string[]
  portada: string
  imagenes: string[]
  resumen: string
  destacado?: boolean
}

export const proyectos: Proyecto[] = [
  {
    slug: 'jardi-botanic',
    titulo: 'Identidad visual Jardí Botànic',
    anio: 2025,
    categoria: 'identidad-visual',
    contexto: 'Jardí Botànic UV',
    formato: 'Manual de identidad A4, papelería 85x55 mm y señalética de gran formato',
    herramientas: ['Illustrator', 'Photoshop', 'InDesign'], 
    portada: '/img/proyectos/jardi-botanic/cover.webp',
    imagenes: [
      '/img/proyectos/jardi-botanic/01.webp',
      '/img/proyectos/jardi-botanic/02.webp',
    ],
    resumen:
      'Rediseño de la identidad del Jardí Botànic de la UV a partir de un símbolo de círculos inspirado en la entrada principal del jardín. Tipografía Futura y paleta de tonos tierra y verdes.',
    destacado: true,
  },
  {
    slug: 'sampler',
    titulo: 'Campaña Sampler',
    anio: 2025,
    categoria: 'carteleria',
    contexto: 'Festival de artes sonoras',
    formato: 'Cartelería vertical 50x70 cm, banderolas de calle y banners web',
    herramientas: ['Illustrator', 'Photoshop'],
    portada: '/img/proyectos/sampler/cover.webp',
    imagenes: [
      '/img/proyectos/sampler/01.webp',
      '/img/proyectos/sampler/02.webp',
    ],
    resumen:
      'Campaña para un festival que cruza sonido, tecnología y performance. El concepto "el sonido como forma" se traduce en mallas y ondas fluidas, con azules y morados y tipografía Poppins.',
    destacado: true,
  },
  {
    slug: 'althisar',
    titulo: 'Althisar',
    anio: 2025,
    categoria: 'ilustracion',
    contexto: 'Diseño de personaje / concept art a partir de briefing',
    formato: '29,7 x 42 cm (A3)',
    herramientas: ['Photoshop'],
    portada: '/img/proyectos/althisar/cover.webp',
    imagenes: [
      '/img/proyectos/althisar/01.webp',
      '/img/proyectos/althisar/02.webp',
    ],
    resumen:
      'Concept art de una criatura de tres metros que domina las tormentas. Silueta clara, paleta azulada e iridiscente y edición no destructiva con objetos inteligentes y máscaras.',
  },
  {
    slug: 'tom-sawyer',
    titulo: 'Las aventuras de Tom Sawyer',
    anio: 2026,
    categoria: 'editorial',
    contexto: 'Rediseño de cubierta e ilustraciones, novela juvenil',
    formato: 'A5',
    herramientas: ['Photoshop', 'InDesign'],
    portada: '/img/proyectos/tom-sawyer/cover.webp',
    imagenes: [
      '/img/proyectos/tom-sawyer/01.webp',
      '/img/proyectos/tom-sawyer/02.webp',
    ],
    resumen:
      'Actualización de la escena del blanqueado de la valla: el muro de madera pasa a ser una pared urbana llena de graffitis. Tipografía Georgia y retícula de una columna.',
    destacado: true,
  },
  {
    slug: 'serie-espirales',
    titulo: 'Serie de espirales',
    anio: 2025,
    categoria: 'pintura-dibujo',
    herramientas: [],
    portada: '/img/proyectos/serie-espirales/cover.webp',
    imagenes: [
      '/img/proyectos/serie-espirales/01.webp',
      '/img/proyectos/serie-espirales/02.webp',
    ],
    resumen: 'Texto pendiente de escribir.',
  },
]