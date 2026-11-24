import type { CategoriaSlug } from './categories'
import { detalleJardiBotanic } from './detalles/jardi-botanic'

export interface Figura {
  src: string
  alt: string
  pie?: string
  ancho: number
  alto: number
}

export interface ColorMarca {
  nombre: string
  hex: string
  rgb: string
  cmyk: string
  rol: 'principal' | 'secundario'
}

export interface Seccion {
  titulo: string
  texto?: string[]
  colores?: ColorMarca[]
  filas?: Figura[][]
}

export interface Detalle {
  descripcion: string[]
  datos?: { clave: string; valor: string }[]
  descarga?: { texto: string; url: string }
  secciones: Seccion[]
}

export interface Proyecto {
  slug: string
  titulo: string
  anio: number
  categoria: CategoriaSlug
  tambien?: CategoriaSlug[]
  contexto?: string
  formato?: string
  herramientas: string[]
  portada: string
  imagenes: string[]
  frase: string
  resumen: string
  destacado?: boolean
  detalle?: Detalle
}

export const proyectos: Proyecto[] = [
  {
    slug: 'jardi-botanic',
    titulo: 'Identidad visual Jardí Botànic',
    anio: 2025,
    categoria: 'identidad-visual',
    contexto: 'Jardí Botànic · Universitat de València',
    formato: 'Manual de identidad A4, papelería 85x55 mm y señalética de gran formato',
    herramientas: ['Illustrator', 'Photoshop', 'InDesign'],
    portada: '/img/proyectos/jardi-botanic/cover.webp',
    imagenes: [],
    frase:
      'Rediseño de la identidad del jardín botánico de la UV, con un símbolo nacido de su entrada principal.',
    resumen:
      'Rediseño de la identidad del Jardí Botànic de la UV a partir de un símbolo de círculos inspirado en la entrada principal del jardín. Tipografía Futura y paleta de tonos tierra y verdes.',
    destacado: true,
    detalle: detalleJardiBotanic,
  },
  {
    slug: 'sampler',
    titulo: 'Campaña Sampler',
    anio: 2025,
    categoria: 'identidad-visual',
    tambien: ['carteleria'],
    contexto: 'Festival de artes sonoras',
    formato: 'Cartelería vertical 50x70 cm, banderolas de calle y banners web',
    herramientas: ['Illustrator', 'Photoshop'],
    portada: '/img/proyectos/sampler/cover.webp',
    imagenes: [
      '/img/proyectos/sampler/01.webp',
      '/img/proyectos/sampler/02.webp',
    ],
    frase:
      'Identidad y campaña para un festival de artes sonoras, donde el sonido se convierte en forma.',
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
    frase: 'Concept art de una criatura que domina las tormentas, a partir de un briefing.',
    resumen:
      'Concept art de una criatura de tres metros que domina las tormentas. Silueta clara, paleta azulada e iridiscente y edición no destructiva con objetos inteligentes y máscaras.',
  },
  {
    slug: 'seda',
    titulo: 'Seda. Recetario de cocina valenciana',
    anio: 2026,
    categoria: 'editorial',
    contexto: 'Rediseño de maquetación de un recetario de cocina valenciana',
    formato: 'A5',
    herramientas: ['Photoshop', 'InDesign'],
    portada: '/img/proyectos/seda/cover.webp',
    imagenes: [
      '/img/proyectos/seda/01.webp',
      '/img/proyectos/seda/02.webp',
    ],
    frase: 'Maquetación editorial de un recetario por la ruta de la seda valenciana.',
    resumen:
      'Maquetación en colores que recuerdan a la seda valenciana de un recetario que nos acompaña por la ruta de la seda junto a los mejores cocineros de València.',
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
    frase: 'Frase pendiente de escribir.',
    resumen: 'Texto pendiente de escribir.',
  },
]

export function perteneceA(proyecto: Proyecto, slug: string): boolean {
  return proyecto.categoria === slug || (proyecto.tambien ?? []).some((c) => c === slug)
}