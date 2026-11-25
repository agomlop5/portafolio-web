<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import AppContainer from '@/components/layout/AppContainer.vue'
import SectionRow from '@/components/layout/SectionRow.vue'
import {
  perfil,
  estudios,
  experiencia,
  herramientas,
  idiomas,
  otrosDatos,
} from '@/data/about'

const fotoRota = ref(false)
</script>

<template>
  <AppContainer class="py-8 md:py-12">
    <header class="mb-8 md:mb-12">
      <p class="font-mono text-xs uppercase tracking-widest">{{ perfil.titular }}</p>
      <h1 class="mt-3 font-display uppercase leading-[1.05] text-[clamp(3rem,10vw,10rem)]">
        Sobre mí
      </h1>
    </header>

    <!-- Foto y descripción -->
    <section class="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-4">
        <img
          v-if="!fotoRota"
          src="/img/sobre-mi/foto.webp"
          :alt="`Retrato de ${perfil.nombre}`"
          width="899"
          height="1200"
          class="aspect-[4/5] w-full max-w-md rounded-t-[999px] border border-ink object-cover object-top"
          @error="fotoRota = true"
        />
        <div
          v-else
          class="flex aspect-[4/5] w-full max-w-md items-center justify-center rounded-t-[999px] border border-ink bg-ink/10 font-display text-8xl text-ink/30"
        >
          AG
        </div>
      </div>

      <div class="lg:col-span-8">
        <div class="max-w-3xl space-y-5">
          <p
            v-for="(p, i) in perfil.descripcion"
            :key="i"
            class="font-serif leading-relaxed"
            :class="i === 0 ? 'text-xl md:text-2xl 2xl:text-3xl' : 'text-lg md:text-xl 2xl:text-2xl'"
          >
            {{ p }}
          </p>
        </div>

        <dl class="mt-8 grid gap-4 border-t border-ink pt-6 sm:grid-cols-3">
          <div v-for="d in perfil.datos" :key="d.clave">
            <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">{{ d.clave }}</dt>
            <dd class="mt-1 font-mono text-sm uppercase">{{ d.valor }}</dd>
          </div>
        </dl>

        <div class="mt-8 flex flex-wrap gap-3">
          <Button as-child size="lg" class="h-auto rounded-none bg-cobalt px-6 py-3 font-mono uppercase text-paper hover:bg-ink">
            <RouterLink to="/proyectos">
              Ver proyectos <ArrowRight class="ml-2 h-4 w-4" />
            </RouterLink>
          </Button>
          <Button as-child size="lg" variant="outline" class="h-auto rounded-none border-ink px-6 py-3 font-mono uppercase">
            <RouterLink to="/contacto">Contacto</RouterLink>
          </Button>
        </div>
      </div>
    </section>

    <SectionRow numero="01" titulo="Formación">
      <ul class="space-y-8">
        <li v-for="e in estudios" :key="e.titulo" class="border-b border-ink/30 pb-8 last:border-b-0">
          <p class="font-mono text-xs uppercase tracking-widest text-ink/60">{{ e.periodo }}</p>
          <h3 class="mt-2 font-display text-2xl uppercase leading-[1.1] md:text-4xl">{{ e.titulo }}</h3>
          <p class="mt-1 font-mono text-sm uppercase tracking-wider">{{ e.centro }}</p>
          <p v-if="e.descripcion" class="mt-4 max-w-2xl font-serif text-lg italic md:text-xl">
            {{ e.descripcion }}
          </p>
          <RouterLink
            v-if="e.enlace"
            :to="e.enlace"
            class="group mt-5 inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-mono text-sm uppercase hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          >
            Ver asignaturas y trabajos
            <ArrowRight
              class="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
              aria-hidden="true"
            />
          </RouterLink>
        </li>
      </ul>
    </SectionRow>

    <SectionRow numero="02" titulo="Experiencia">
      <ul class="space-y-8">
        <li
          v-for="x in experiencia"
          :key="x.puesto + x.periodo"
          class="grid gap-3 border-b border-ink/30 pb-8 last:border-b-0 md:grid-cols-12 md:gap-6"
        >
          <p class="font-mono text-xs uppercase tracking-widest text-ink/60 md:col-span-3">
            {{ x.periodo }}
          </p>
          <div class="md:col-span-9">
            <h3 class="font-display text-2xl uppercase leading-[1.1] md:text-3xl">{{ x.puesto }}</h3>
            <p class="mt-1 font-mono text-sm uppercase tracking-wider">{{ x.lugar }}</p>
            <ul class="mt-4 list-disc space-y-1 pl-5 text-base md:text-lg">
              <li v-for="(p, i) in x.puntos" :key="i">{{ p }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </SectionRow>

    <SectionRow numero="03" titulo="Herramientas">
      <div class="space-y-8">
        <div v-for="g in herramientas" :key="g.grupo">
          <h3 class="mb-3 font-mono text-xs uppercase tracking-widest text-ink/60">{{ g.grupo }}</h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="h in g.items"
              :key="h"
              class="border border-ink px-3 py-1.5 font-mono text-xs uppercase md:text-sm"
            >
              {{ h }}
            </li>
          </ul>
        </div>
      </div>
    </SectionRow>

    <SectionRow numero="04" titulo="Idiomas y otros datos">
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 class="mb-3 font-mono text-xs uppercase tracking-widest text-ink/60">Idiomas</h3>
          <ul class="space-y-2">
            <li
              v-for="i in idiomas"
              :key="i.nombre"
              class="flex items-baseline justify-between gap-4 border-b border-ink/30 pb-2"
            >
              <span class="font-display text-xl uppercase md:text-2xl">{{ i.nombre }}</span>
              <span class="font-mono text-xs uppercase tracking-wider">{{ i.nivel }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-3 font-mono text-xs uppercase tracking-widest text-ink/60">Otros datos</h3>
          <ul class="space-y-2">
            <li
              v-for="o in otrosDatos"
              :key="o"
              class="border-b border-ink/30 pb-2 font-mono text-sm uppercase"
            >
              {{ o }}
            </li>
          </ul>
        </div>
      </div>
    </SectionRow>
  </AppContainer>
</template>