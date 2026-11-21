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

  const siguiente = computed(() => {
    const lista = categoriasConProyectos.value
    if (lista.length < 2) return null
    const i = lista.findIndex((c) => c.slug === toValue(slug))
    if (i === -1) return null
    return lista[(i + 1) % lista.length]
  })

  return { rama, delaRama, siguiente }
}