<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import AppContainer from '@/components/layout/AppContainer.vue'
import { categorias } from '@/data/categories'
import { proyectos } from '@/data/projects'

const props = defineProps<{ categoria: string }>()

const rama = computed(() => categorias.find((c) => c.slug === props.categoria))
const delaRama = computed(() => proyectos.filter((p) => p.categoria === props.categoria))
</script>

<template>
  <AppContainer class="min-h-[60svh] py-10 md:py-16">
    <RouterLink
      to="/trabajo"
      class="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-cobalt"
    >
      <ArrowLeft class="h-4 w-4" aria-hidden="true" /> Volver a trabajo
    </RouterLink>

    <template v-if="rama">
      <h1 class="font-display uppercase leading-none text-[clamp(3rem,10vw,9rem)]">
        {{ rama.nombre }}
      </h1>
      <ul class="mt-8 space-y-2 font-mono text-sm uppercase">
        <li v-for="p in delaRama" :key="p.slug">{{ p.titulo }} · {{ p.anio }}</li>
      </ul>
      <p class="mt-8 font-mono text-xs uppercase tracking-widest">Página en construcción</p>
    </template>

    <p v-else class="font-mono text-sm uppercase">Esta rama no existe.</p>
  </AppContainer>
</template>