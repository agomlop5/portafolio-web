<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import type { Figura } from '@/data/projects'

const props = defineProps<{ imagenes: Figura[]; indice: number | null }>()
const emit = defineEmits<{
  (e: 'cerrar'): void
  (e: 'anterior'): void
  (e: 'siguiente'): void
}>()

const dialogo = ref<HTMLElement | null>(null)
const botonCerrar = ref<HTMLButtonElement | null>(null)
let elementoPrevio: HTMLElement | null = null

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function alPulsarTecla(ev: KeyboardEvent) {
  if (ev.key === 'Escape') {
    emit('cerrar')
  } else if (ev.key === 'ArrowLeft') {
    emit('anterior')
  } else if (ev.key === 'ArrowRight') {
    emit('siguiente')
  } else if (ev.key === 'Tab' && dialogo.value) {
    // Mantiene el foco dentro de la galería mientras está abierta
    const focoables = Array.from(dialogo.value.querySelectorAll<HTMLElement>('button'))
    if (!focoables.length) return
    const primero = focoables[0]
    const ultimo = focoables[focoables.length - 1]
    if (ev.shiftKey && document.activeElement === primero) {
      ev.preventDefault()
      ultimo.focus()
    } else if (!ev.shiftKey && document.activeElement === ultimo) {
      ev.preventDefault()
      primero.focus()
    }
  }
}

watch(
  () => props.indice !== null,
  async (abierta) => {
    if (abierta) {
      elementoPrevio = document.activeElement as HTMLElement | null
      document.addEventListener('keydown', alPulsarTecla)
      document.body.style.overflow = 'hidden'
      await nextTick()
      botonCerrar.value?.focus()
    } else {
      document.removeEventListener('keydown', alPulsarTecla)
      document.body.style.overflow = ''
      elementoPrevio?.focus()
    }
  },
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', alPulsarTecla)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="motion-safe:transition-opacity motion-safe:duration-200"
      enter-from-class="opacity-0"
      leave-active-class="motion-safe:transition-opacity motion-safe:duration-150"
      leave-to-class="opacity-0"
    >
      <div
        v-if="indice !== null && imagenes[indice]"
        ref="dialogo"
        role="dialog"
        aria-modal="true"
        aria-label="Galería de imágenes"
        class="fixed inset-0 z-[100] flex flex-col bg-ink/95 text-paper"
        @click.self="emit('cerrar')"
      >
        <div class="flex items-center justify-between px-4 py-3 md:px-8">
          <p class="font-mono text-xs uppercase tracking-widest" aria-live="polite">
            {{ pad(indice + 1) }} / {{ pad(imagenes.length) }}
          </p>
          <button
            ref="botonCerrar"
            type="button"
            aria-label="Cerrar galería"
            class="p-2 hover:text-tangerine focus-visible:outline-2 focus-visible:outline-tangerine"
            @click="emit('cerrar')"
          >
            <X class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div
          class="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24"
          @click.self="emit('cerrar')"
        >
          <button
            type="button"
            aria-label="Imagen anterior"
            class="absolute left-2 p-2 hover:text-tangerine focus-visible:outline-2 focus-visible:outline-tangerine md:left-6"
            @click="emit('anterior')"
          >
            <ChevronLeft class="h-8 w-8 md:h-10 md:w-10" aria-hidden="true" />
          </button>

          <img
            :key="imagenes[indice].src"
            :src="imagenes[indice].src"
            :alt="imagenes[indice].alt"
            class="max-h-full max-w-full object-contain"
          />

          <button
            type="button"
            aria-label="Imagen siguiente"
            class="absolute right-2 p-2 hover:text-tangerine focus-visible:outline-2 focus-visible:outline-tangerine md:right-6"
            @click="emit('siguiente')"
          >
            <ChevronRight class="h-8 w-8 md:h-10 md:w-10" aria-hidden="true" />
          </button>
        </div>

        <p class="px-4 py-4 text-center font-mono text-xs uppercase tracking-widest md:px-8">
          {{ imagenes[indice].pie }}
        </p>
      </div>
    </Transition>
  </Teleport>
</template>