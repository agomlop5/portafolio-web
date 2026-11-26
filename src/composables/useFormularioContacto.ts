import { computed, reactive, ref } from 'vue'
import { asuntos, contacto } from '@/data/contact'

export function useFormularioContacto() {
  const campos = reactive({
    nombre: '',
    correo: '',
    asunto: asuntos[0],
    mensaje: '',
  })

  // Solo enseñamos los errores después del primer intento de envío
  const intentado = ref(false)
  const enviado = ref(false)

  const errores = computed(() => ({
    nombre: campos.nombre.trim().length < 2 ? 'Escribe tu nombre.' : '',
    correo:
      campos.correo.trim() !== '' && !/^\S+@\S+\.\S+$/.test(campos.correo.trim())
        ? 'El correo no parece válido.'
        : '',
    mensaje:
      campos.mensaje.trim().length < 10
        ? 'Cuéntame algo más (mínimo 10 caracteres).'
        : '',
  }))

  const valido = computed(
    () => !errores.value.nombre && !errores.value.correo && !errores.value.mensaje,
  )

  // Construimos el enlace mailto con el asunto y el cuerpo ya preparados
  const enlaceMailto = computed(() => {
    const nombre = campos.nombre.trim()
    const asunto = `[Portfolio] ${campos.asunto} · ${nombre}`
    const respuesta = campos.correo.trim() ? `\n\nMi correo: ${campos.correo.trim()}` : ''
    const cuerpo = `Hola Alba,\n\n${campos.mensaje.trim()}\n\n${nombre}${respuesta}`
    return `mailto:${contacto.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
  })

  function enviar(): boolean {
    intentado.value = true
    if (!valido.value) return false
    enviado.value = true
    window.location.href = enlaceMailto.value
    return true
  }

  function reiniciar() {
    campos.nombre = ''
    campos.correo = ''
    campos.asunto = asuntos[0]
    campos.mensaje = ''
    intentado.value = false
    enviado.value = false
  }

  return { campos, errores, intentado, enviado, enviar, reiniciar }
}