<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import AppContainer from '@/components/layout/AppContainer.vue'
import { asignaturas, grado } from '@/data/formacion'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function ects(n: number | undefined) {
  return n === undefined ? '—' : String(n).replace('.', ',')
}
</script>

<template>
  <AppContainer class="py-8 md:py-12">
    <nav aria-label="Migas de pan" class="mb-8 md:mb-10">
      <ol class="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest">
        <li>
          <RouterLink to="/sobre-mi" class="hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt">
            Sobre mí
          </RouterLink>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">Formación</li>
      </ol>
    </nav>

    <header class="mb-10 grid gap-6 border-b border-ink pb-10 md:mb-14 md:pb-14 lg:grid-cols-12 lg:items-end lg:gap-12">
      <div class="lg:col-span-7">
        <p class="font-mono text-xs uppercase tracking-widest">
          {{ grado.centro }} · {{ grado.periodo }}
        </p>
        <h1 class="mt-3 font-display uppercase leading-[1.05] text-[clamp(2.5rem,8vw,8rem)]">
          {{ grado.titulo }}
        </h1>
      </div>
      <div class="lg:col-span-5">
        <p
          v-for="(p, i) in grado.introduccion"
          :key="i"
          class="font-serif text-xl italic leading-snug md:text-2xl"
        >
          {{ p }}
        </p>
        <p class="mt-4 font-mono text-xs uppercase tracking-widest">
          ({{ pad(asignaturas.length) }}) asignaturas
        </p>
      </div>
    </header>

    <ul class="border-t border-ink">
      <li v-for="(a, i) in asignaturas" :key="a.slug" class="border-b border-ink">
        <RouterLink
          :to="`/sobre-mi/formacion/${a.slug}`"
          class="group grid gap-3 py-6 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cobalt md:grid-cols-12 md:items-center md:gap-8 md:py-8"
        >
          <p class="font-mono text-xs uppercase tracking-widest md:col-span-1">{{ pad(i + 1) }}</p>

          <div class="md:col-span-6">
            <h2
              class="font-display text-2xl uppercase leading-[1.1] transition-colors md:text-4xl"
              :class="i % 2 === 0 ? 'group-hover:text-cobalt' : 'group-hover:text-tangerine-deep'"
            >
              {{ a.nombre }}
            </h2>
            <p class="mt-2 font-serif text-lg italic">{{ a.resumen }}</p>
          </div>

          <p class="font-mono text-xs uppercase leading-relaxed tracking-wider md:col-span-3">
            {{ a.periodo }}<br />{{ ects(a.ects) }} ECTS
          </p>

          <p class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider md:col-span-2 md:justify-end">
            <span v-if="a.proyectos.length">
              {{ pad(a.proyectos.length) }} {{ a.proyectos.length === 1 ? 'trabajo' : 'trabajos' }}
            </span>
            <ArrowRight
              class="h-5 w-5 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden="true"
            />
          </p>
        </RouterLink>
      </li>
    </ul>
  </AppContainer>
</template>