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
}

export const categorias: Categoria[] = [
  {
    slug: 'identidad-visual',
    nombre: 'Identidad visual',
    descripcion: 'Marcas, sistemas gráficos y sus aplicaciones',
  },
  {
    slug: 'carteleria',
    nombre: 'Cartelería y campañas',
    descripcion: 'Carteles, campañas y piezas para eventos',
  },
  {
    slug: 'ilustracion',
    nombre: 'Ilustración',
    descripcion: 'Personajes, series y narrativa visual',
  },
  {
    slug: 'editorial',
    nombre: 'Editorial',
    descripcion: 'Cubiertas, maquetación e ilustración de libros y revistas',
  },
  {
    slug: 'pintura-dibujo',
    nombre: 'Pintura y dibujo',
    descripcion: 'Obra manual: pintura, dibujo y series',
  },
  {
    slug: 'web',
    nombre: 'Web y apps',
    descripcion: 'Diseño y desarrollo de interfaces',
  },
]