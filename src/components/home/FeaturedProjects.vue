<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import AppContainer from '@/components/layout/AppContainer.vue'
import { useDestacados } from '@/composables/useDestacados'

const { destacados } = useDestacados()
const imagenesRotas = reactive<Record<string, boolean>>({})

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function celda(i: number, total: number): string {
  if (total === 3) {
    return [
      'lg:col-span-7 lg:row-span-2',
      'lg:col-span-5',
      'md:col-span-2 lg:col-span-5',
    ][i]
  }
  const sola = total % 2 === 1 && i === total - 1
  if (sola) return 'md:col-span-2 lg:col-span-12'
  const fila = Math.floor(i / 2)
  const primera = i % 2 === 0
  if (fila % 2 === 0) return primera ? 'lg:col-span-7' : 'lg:col-span-5'
  return primera ? 'lg:col-span-5' : 'lg:col-span-7'
}
</script>

<template>
  <section v-if="destacados.length" aria-labelledby="destacados-titulo" class="border-b border-ink">
    <AppContainer class="py-12 md:py-16">
      <header class="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12">
        <div>
          <p class="font-mono text-xs uppercase tracking-widest">
            Selección · ({{ pad(destacados.length) }})
          </p>
          <h2
            id="destacados-titulo"
            class="mt-2 font-display uppercase leading-[1.05] text-[clamp(2.5rem,6vw,6rem)]"
          >
            Proyectos
            <span class="font-serif normal-case italic text-cobalt">destacados</span>
          </h2>
        </div>

        <Button
          as-child
          size="lg"
          variant="outline"
          class="h-auto rounded-none border-ink px-5 py-3 font-mono text-sm uppercase"
        >
          <RouterLink to="/proyectos">
            Ver todos los proyectos <ArrowRight class="ml-2 h-4 w-4" />
          </RouterLink>
        </Button>
      </header>

      <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        <li v-for="(p, i) in destacados" :key="p.slug" :class="celda(i, destacados.length)">
          <RouterLink
            :to="`/proyectos/${p.categoria}/${p.slug}`"
            class="group relative block h-full min-h-[20rem] overflow-hidden border border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt md:min-h-[24rem] 2xl:min-h-[30rem]"
          >
            <img
              v-if="!imagenesRotas[p.slug]"
              :src="p.portada"
              alt=""
              loading="lazy"
              class="absolute inset-0 h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
              @error="imagenesRotas[p.slug] = true"
            />
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center bg-ink/10 font-display text-[8rem] leading-none text-ink/20"
            >
              {{ pad(i + 1) }}
            </div>

            <div
              class="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,17,0.85),rgba(17,17,17,0.15)_55%,transparent)]"
              aria-hidden="true"
            ></div>

            <div
              class="absolute inset-0 transition-colors duration-300"
              :class="i % 2 === 0 ? 'group-hover:bg-cobalt/50' : 'group-hover:bg-tangerine/50'"
              aria-hidden="true"
            ></div>

            <span class="absolute left-3 top-3 bg-ink px-2 py-1 font-mono text-xs text-paper">
              {{ pad(i + 1) }}
            </span>

            <div class="absolute inset-x-0 bottom-0 p-4 text-paper md:p-6">
              <p class="font-mono text-xs uppercase tracking-widest">
                {{ p.ramaNombre }} · {{ p.anio }}
              </p>
              <h3 class="mt-2 font-display text-3xl uppercase leading-[1.05] md:text-4xl 2xl:text-5xl">
                {{ p.titulo }}
              </h3>
              <p class="mt-2 hidden max-w-xl font-serif text-base italic leading-snug md:block md:text-lg">
                {{ p.frase }}
              </p>
              <span
                class="mt-4 inline-flex items-center gap-2 border-b-2 border-paper pb-1 font-mono text-xs uppercase"
              >
                Ver proyecto
                <ArrowRight
                  class="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </AppContainer>
  </section>
</template>