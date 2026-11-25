import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { asignaturas } from '@/data/formacion'
import { proyectos, type Proyecto } from '@/data/projects'

export function useAsignatura(slug: MaybeRefOrGetter<string>) {
  const asignatura = computed(() => asignaturas.find((a) => a.slug === toValue(slug)))

  const trabajos = computed<Proyecto[]>(() =>
    (asignatura.value?.proyectos ?? [])
      .map((s) => proyectos.find((p) => p.slug === s))
      .filter((p): p is Proyecto => p !== undefined),
  )

  const vecina = (desplazamiento: number) => {
    const n = asignaturas.length
    const i = asignaturas.findIndex((a) => a.slug === toValue(slug))
    if (n < 2 || i === -1) return null
    return asignaturas[(i + desplazamiento + n) % n]
  }

  const anterior = computed(() => vecina(-1))
  const siguiente = computed(() => vecina(1))

  return { asignatura, trabajos, anterior, siguiente }
}