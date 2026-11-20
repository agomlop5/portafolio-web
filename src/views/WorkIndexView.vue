<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'
import AppContainer from '@/components/layout/AppContainer.vue'
import { useCategorias } from '@/composables/useCategorias'

const { categoriasConProyectos } = useCategorias()
const imagenesRotas = reactive<Record<string, boolean>>({})

function pad(n: number) {
  return String(n).padStart(2, '0')
}
</script>

<template>
  <AppContainer class="py-8 md:py-12">
    <header class="mb-8 md:mb-12">
      <p class="mb-3 font-mono text-xs uppercase tracking-widest md:text-sm">
        Proyectos seleccionados · {{ categoriasConProyectos.length }} categorías
      </p>
      <h1 class="font-display uppercase leading-[1.1] text-[clamp(3.5rem,13vw,12rem)]">
        Proyectos
      </h1>
      <p class="mt-3 max-w-2xl font-serif text-xl italic md:text-3xl">
        Elige una rama y entra a ver los proyectos.
      </p>
    </header>

    <p v-if="!categoriasConProyectos.length" class="font-mono text-sm uppercase">
      Todavía no hay proyectos.
    </p>

    <ul v-else class="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
      <li v-for="(c, i) in categoriasConProyectos" :key="c.slug">
        <RouterLink
          :to="`/proyectos/${c.slug}`"
          class="group block border border-ink transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          :class="i % 2 === 0 ? 'hover:bg-cobalt hover:text-paper' : 'hover:bg-tangerine hover:text-ink'"
        >
          <div class="relative aspect-[4/3] overflow-hidden border-b border-ink bg-ink/10">
            <img
              v-if="c.portada && !imagenesRotas[c.slug]"
              :src="c.portada"
              alt=""
              loading="lazy"
              class="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
              @error="imagenesRotas[c.slug] = true"
            />
            <div
              v-else
              class="flex h-full w-full items-center justify-center font-display text-[8rem] leading-none text-ink/20"
            >
              {{ pad(i + 1) }}
            </div>
            <span class="absolute left-3 top-3 bg-ink px-2 py-1 font-mono text-xs text-paper">
              {{ pad(i + 1) }}
            </span>
          </div>

          <div class="flex items-end justify-between gap-4 p-4 md:p-6">
            <div>
              <h2 class="font-display text-3xl uppercase leading-[1.15] md:text-5xl">
                {{ c.nombre }}
              </h2>
              <p class="mt-3 max-w-md font-mono text-xs uppercase tracking-wider opacity-80 md:text-sm">
                {{ c.descripcion }}
              </p>
            </div>

            <div class="flex shrink-0 flex-col items-end gap-2">
              <span class="font-serif text-2xl italic md:text-3xl">
                ({{ pad(c.total) }})<span class="sr-only"> proyectos</span>
              </span>
              <ArrowUpRight
                class="h-6 w-6 md:h-8 md:w-8 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </AppContainer>
</template>