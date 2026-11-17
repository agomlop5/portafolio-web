<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import AppContainer from '@/components/layout/AppContainer.vue'

const abierto = ref(false)
const enlaces = [
  { nombre: 'Trabajo', ruta: '/trabajo' },
  { nombre: 'Sobre mí', ruta: '/sobre-mi' },
  { nombre: 'Contacto', ruta: '/contacto' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-ink bg-paper/90 backdrop-blur">
    <AppContainer class="flex items-center justify-between py-3">
      <RouterLink to="/" class="font-display text-2xl uppercase tracking-wide 2xl:text-3xl">
        Alba Gómez
      </RouterLink>

      <nav aria-label="Principal" class="hidden items-center gap-8 md:flex 2xl:gap-12">
        <RouterLink
          v-for="e in enlaces"
          :key="e.ruta"
          :to="e.ruta"
          class="font-mono text-sm uppercase tracking-wider hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt 2xl:text-base"
          active-class="text-cobalt underline underline-offset-4"
        >
          {{ e.nombre }}
        </RouterLink>
        <span class="flex items-center gap-2 border border-ink px-3 py-1 font-mono text-xs uppercase 2xl:text-sm">
          <span class="h-2 w-2 animate-pulse rounded-full bg-tangerine"></span>
          Disponible para prácticas
        </span>
      </nav>

      <button
        class="md:hidden"
        :aria-expanded="abierto"
        aria-label="Abrir menú"
        @click="abierto = !abierto"
      >
        <component :is="abierto ? X : Menu" class="h-6 w-6" />
      </button>
    </AppContainer>

    <nav v-if="abierto" aria-label="Móvil" class="border-t border-ink md:hidden">
      <RouterLink
        v-for="e in enlaces"
        :key="e.ruta"
        :to="e.ruta"
        class="block border-b border-ink px-4 py-4 font-display text-3xl uppercase"
        @click="abierto = false"
      >
        {{ e.nombre }}
      </RouterLink>
    </nav>
  </header>
</template>