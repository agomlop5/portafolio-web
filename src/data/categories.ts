export type CategoriaSlug =
  | 'identidad-visual'
  | 'carteleria'
  | 'ilustracion'
  | 'editorial'
  | 'pintura-dibujo'
  | 'web'

export interface Categoria {
  slug: CategoriaSlug
  nombre: string
  descripcion: string
  introduccion: string
}

export const categorias: Categoria[] = [
  {
    slug: 'identidad-visual',
    nombre: 'Identidad visual',
    descripcion: 'Marcas, sistemas gráficos y sus aplicaciones',
    introduccion:
      'Una identidad visual reúne símbolo, tipografía, color y aplicaciones para que una marca sea reconocible. Aquí hay dos sistemas completos: uno nace de la arquitectura de un jardín botánico y el otro de la idea de que el sonido también puede verse.',
  },
  {
    slug: 'carteleria',
    nombre: 'Cartelería y campañas',
    descripcion: 'Carteles, campañas y piezas para eventos',
    introduccion:
      'Carteles para festivales y eventos culturales, donde la imagen, la tipografía y la jerarquía de la información tienen que funcionar a primera vista.',
  },
  {
    slug: 'ilustracion',
    nombre: 'Ilustración',
    descripcion: 'Personajes, series y narrativa visual',
    introduccion:
      'Personajes, series y piezas narrativas, trabajadas a partir de un briefing o de una idea propia.',
  },
  {
    slug: 'editorial',
    nombre: 'Editorial',
    descripcion: 'Cubiertas, maquetación e ilustración de libros y revistas',
    introduccion:
      'Cubiertas, maquetación e ilustración para libros y revistas, con la tipografía y la retícula como estructura.',
  },
  {
    slug: 'pintura-dibujo',
    nombre: 'Pintura y dibujo',
    descripcion: 'Obra manual: pintura, dibujo y series',
    introduccion:
      'Obra manual en la que la técnica y la materia son las protagonistas: pintura, dibujo y series.',
  },
  {
    slug: 'web',
    nombre: 'Web y apps',
    descripcion: 'Diseño y desarrollo de interfaces',
    introduccion: 'Diseño y desarrollo de interfaces, del boceto al código.',
  },
]