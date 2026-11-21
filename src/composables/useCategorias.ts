import { computed } from 'vue'
import { categorias } from '@/data/categories'
import { proyectos, perteneceA } from '@/data/projects'

export function useCategorias() {
  const categoriasConProyectos = computed(() =>
    categorias
      .map((c) => {
        const delaRama = proyectos.filter((p) => perteneceA(p, c.slug))
        const principal = delaRama.find((p) => p.categoria === c.slug) ?? delaRama[0]
        return {
          ...c,
          total: delaRama.length,
          portada: principal?.portada ?? null,
        }
      })
      .filter((c) => c.total > 0),
  )

  return { categoriasConProyectos }
}