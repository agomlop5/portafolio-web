<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import AppContainer from '@/components/layout/AppContainer.vue'
import { useCategoria } from '@/composables/useCategoria'
import { categorias } from '@/data/categories'

const props = defineProps<{ categoria: string }>()

const { rama, delaRama, siguiente } = useCategoria(() => props.categoria)
const imagenesRotas = reactive<Record<string, boolean>>({})

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function nombreDe(slug: string) {
  return categorias.find((c) => c.slug === slug)?.nombre
}
</script>

<template>
  <AppContainer class="py-8 md:py-12">
    <template v-if="rama">
      
      <nav aria-label="Migas de pan" class="mb-8 md:mb-10">
        <ol class="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
          <li>
            <RouterLink to="/proyectos" class="hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt">
              Proyectos
            </RouterLink>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{{ rama.nombre }}</li>
        </ol>
      </nav>

   
      <header class="mb-10 grid gap-6 border-b border-ink pb-10 md:mb-14 md:pb-14 lg:grid-cols-12 lg:items-end lg:gap-12">
        <h1 class="font-display uppercase leading-[1.05] text-[clamp(3rem,9vw,9rem)] lg:col-span-7">
          {{ rama.nombre }}
        </h1>
        <div class="lg:col-span-5">
          <p class="font-serif text-xl italic leading-snug md:text-2xl 2xl:text-3xl">
            {{ rama.introduccion }}
          </p>
          <p class="mt-4 font-mono text-xs uppercase tracking-widest">
            ({{ pad(delaRama.length) }}) proyectos
          </p>
        </div>
      </header>

      
      <ul>
        <li v-for="(p, i) in delaRama" :key="p.slug" class="border-b border-ink last:border-b-0">
          <RouterLink
            :to="`/proyectos/${p.categoria}/${p.slug}`"
            class="group grid gap-6 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt md:grid-cols-12 md:items-center md:gap-10 md:py-10"
          >
            <div class="relative aspect-[4/3] overflow-hidden border border-ink bg-ink/10 md:col-span-7">
              <img
                v-if="!imagenesRotas[p.slug]"
                :src="p.portada"
                alt=""
                loading="lazy"
                class="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                @error="imagenesRotas[p.slug] = true"
              />
              <div
                v-else
                class="flex h-full w-full items-center justify-center font-display text-[6rem] leading-none text-ink/20"
              >
                {{ pad(i + 1) }}
              </div>
            </div>

            <div class="md:col-span-5">
              <p
                v-if="p.categoria !== categoria"
                class="mb-3 inline-block bg-ink px-2 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-paper"
              >
                Proyecto de {{ nombreDe(p.categoria) }}
              </p>

              <p class="font-mono text-xs uppercase tracking-widest">
                {{ pad(i + 1) }} · {{ p.anio }}
              </p>
              <h2
                class="mt-3 font-display text-3xl uppercase leading-[1.1] transition-colors md:text-5xl 2xl:text-6xl"
                :class="i % 2 === 0 ? 'group-hover:text-cobalt' : 'group-hover:text-tangerine-deep'"
              >
                {{ p.titulo }}
              </h2>
              <p class="mt-4 font-serif text-lg italic leading-snug md:text-xl">
                {{ p.frase }}
              </p>

              <ul v-if="p.herramientas.length" class="mt-5 flex flex-wrap gap-2" aria-label="Herramientas">
                <li v-for="h in p.herramientas" :key="h">
                  <Badge variant="outline" class="rounded-none border-ink font-mono text-xs uppercase">
                    {{ h }}
                  </Badge>
                </li>
              </ul>

              <span class="mt-6 inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-mono text-sm uppercase">
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

   
      <RouterLink
        v-if="siguiente"
        :to="`/proyectos/${siguiente.slug}`"
        class="group mt-12 flex items-center justify-between gap-4 border-y border-ink py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt md:mt-16 md:py-8"
      >
        <span class="font-mono text-xs uppercase tracking-widest">Siguiente</span>
        <span class="font-display text-3xl uppercase leading-none transition-colors group-hover:text-cobalt md:text-6xl">
          {{ siguiente.nombre }}
        </span>
        <ArrowRight
          class="h-6 w-6 shrink-0 md:h-10 md:w-10 motion-safe:transition-transform motion-safe:group-hover:translate-x-2"
          aria-hidden="true"
        />
      </RouterLink>
    </template>

    <p v-else class="font-mono text-sm uppercase">Esta rama no existe.</p>
  </AppContainer>
</template>