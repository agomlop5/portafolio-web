<script setup lang="ts">
import { Copy, Check, ArrowUpRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import AppContainer from '@/components/layout/AppContainer.vue'
import { useCopyToClipboard } from '@/composables/useCopyToClipboard'
import { contacto } from '@/data/contact'

const { copiado, copiar } = useCopyToClipboard()
</script>

<template>
  <section aria-labelledby="contacto-titulo">
    <AppContainer class="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-8">
      <h2
        id="contacto-titulo"
        class="font-display text-2xl uppercase leading-none md:text-3xl"
      >
        ¿Trabajamos  
        <span class="font-serif normal-case italic text-cobalt">  juntos?</span>
      </h2>

      <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="button"
          class="inline-flex items-center gap-2 font-mono text-s hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          @click="copiar(contacto.email)"
        >
          {{ copiado ? '¡Copiado!' : contacto.email }}
          <component
            :is="copiado ? Check : Copy"
            class="h-4 w-4"
            aria-hidden="true"
          />
        </button>

        <span class="sr-only" role="status" aria-live="polite">
          {{ copiado ? 'Correo copiado' : '' }}
        </span>

        <Button
          as-child
          class="h-auto rounded-none bg-cobalt px-4 py-2 font-mono text-s uppercase text-paper hover:bg-ink"
        >
          <a :href="`mailto:${contacto.email}`">
            Escríbeme <ArrowUpRight class="ml-2 h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </AppContainer>
  </section>
</template>