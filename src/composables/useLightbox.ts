import { ref, toValue, type MaybeRefOrGetter } from 'vue'

export function useLightbox(total: MaybeRefOrGetter<number>) {
  const indice = ref<number | null>(null)

  function abrir(i: number) {
    indice.value = i
  }

  function cerrar() {
    indice.value = null
  }

  function siguiente() {
    if (indice.value === null) return
    indice.value = (indice.value + 1) % toValue(total)
  }

  function anterior() {
    if (indice.value === null) return
    indice.value = (indice.value - 1 + toValue(total)) % toValue(total)
  }

  return { indice, abrir, cerrar, siguiente, anterior }
}