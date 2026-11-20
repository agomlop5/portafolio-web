import { computed } from 'vue'
import { categorias } from '@/data/categories'
import { proyectos } from '@/data/projects'

export function useCategorias() {
  const categoriasConProyectos = computed(() =>
    categorias
      .map((c) => {
        const delaRama = proyectos.filter((p) => p.categoria === c.slug)
        return {
          ...c,
          total: delaRama.length,
          portada: delaRama[0]?.portada ?? null,
        }
      })
      .filter((c) => c.total > 0),
  )

  return { categoriasConProyectos }
}