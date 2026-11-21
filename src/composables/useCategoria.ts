import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { categorias } from '@/data/categories'
import { proyectos, perteneceA } from '@/data/projects'
import { useCategorias } from '@/composables/useCategorias'

export function useCategoria(slug: MaybeRefOrGetter<string>) {
  const { categoriasConProyectos } = useCategorias()

  const rama = computed(() => categorias.find((c) => c.slug === toValue(slug)))

  const delaRama = computed(() =>
    proyectos
      .filter((p) => perteneceA(p, toValue(slug)))
      .sort(
        (a, b) =>
          Number(b.categoria === toValue(slug)) - Number(a.categoria === toValue(slug)),
      ),
  )

  // Posición de esta rama dentro de las ramas que tienen proyectos
  const posicion = computed(() =>
    categoriasConProyectos.value.findIndex((c) => c.slug === toValue(slug)),
  )

  const vecina = (desplazamiento: number) => {
    const lista = categoriasConProyectos.value
    if (lista.length < 2 || posicion.value === -1) return null
    return lista[(posicion.value + desplazamiento + lista.length) % lista.length]
  }

  const anterior = computed(() => vecina(-1))
  const siguiente = computed(() => vecina(1))

  return { rama, delaRama, anterior, siguiente }
}