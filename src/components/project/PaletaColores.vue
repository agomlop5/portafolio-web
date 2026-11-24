<script setup lang="ts">
import { computed, ref } from 'vue'
import { Check, Copy } from 'lucide-vue-next'
import { useCopyToClipboard } from '@/composables/useCopyToClipboard'
import type { ColorMarca } from '@/data/projects'

const props = defineProps<{ colores: ColorMarca[] }>()

const grupos = computed(() =>
  [
    { titulo: 'Principales', colores: props.colores.filter((c) => c.rol === 'principal') },
    { titulo: 'Secundarios', colores: props.colores.filter((c) => c.rol === 'secundario') },
  ].filter((g) => g.colores.length),
)

const { copiado, copiar } = useCopyToClipboard()
const ultimo = ref('')

function copiarHex(hex: string) {
  ultimo.value = hex
  copiar(hex)
}
</script>

<template>
  <div class="mt-6 space-y-8">
    <div v-for="g in grupos" :key="g.titulo">
      <p class="mb-3 font-mono text-xs uppercase tracking-widest">{{ g.titulo }}</p>
      <ul class="grid grid-cols-3 gap-3 md:gap-4">
        <li v-for="c in g.colores" :key="c.hex">
          <button
            type="button"
            class="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            :aria-label="`Copiar ${c.nombre}, ${c.hex}`"
            @click="copiarHex(c.hex)"
          >
            <span
              class="relative block aspect-[4/3] border border-ink"
              :style="{ backgroundColor: c.hex }"
            >
              <span
                class="absolute bottom-2 right-2 inline-flex items-center gap-1 bg-paper px-2 py-1 font-mono text-[0.65rem] uppercase transition-opacity"
                :class="
                  copiado && ultimo === c.hex
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
                "
              >
                <component
                  :is="copiado && ultimo === c.hex ? Check : Copy"
                  class="h-3 w-3"
                  aria-hidden="true"
                />
                {{ copiado && ultimo === c.hex ? 'Copiado' : 'Copiar' }}
              </span>
            </span>
            <span class="mt-2 block font-display text-lg uppercase leading-none md:text-xl">
              {{ c.nombre }}
            </span>
            <span class="mt-1 block font-mono text-[0.7rem] uppercase leading-relaxed text-ink/70 md:text-xs">
              {{ c.hex }}<br />{{ c.rgb }}<br />{{ c.cmyk }}
            </span>
          </button>
        </li>
      </ul>
    </div>

    <span class="sr-only" role="status" aria-live="polite">
      {{ copiado ? `Color ${ultimo} copiado` : '' }}
    </span>
  </div>
</template>