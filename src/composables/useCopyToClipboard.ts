import { ref } from 'vue'

export function useCopyToClipboard(resetMs = 2000) {
  const copiado = ref(false)
  let temporizador: ReturnType<typeof setTimeout> | undefined

  async function copiar(texto: string) {
    try {
      await navigator.clipboard.writeText(texto)
      copiado.value = true
      clearTimeout(temporizador)
      temporizador = setTimeout(() => {
        copiado.value = false
      }, resetMs)
    } catch {
      copiado.value = false
    }
  }

  return { copiado, copiar }
}