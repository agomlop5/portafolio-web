<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import AppContainer from '@/components/layout/AppContainer.vue'
import { categorias } from '@/data/categories'
import { proyectos } from '@/data/projects'

const props = defineProps<{ categoria: string; slug: string }>()

const proyecto = computed(() =>
  proyectos.find((p) => p.slug === props.slug && p.categoria === props.categoria),
)
const rama = computed(() => categorias.find((c) => c.slug === props.categoria))
</script>

<template>
  <AppContainer v-if="proyecto && rama" class="min-h-[60svh] py-8 md:py-12">
    <nav aria-label="Migas de pan" class="mb-8">
      <ol class="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest">
        <li><RouterLink to="/proyectos" class="hover:text-cobalt">Proyectos</RouterLink></li>
        <li aria-hidden="true">/</li>
        <li>
          <RouterLink :to="`/proyectos/${rama.slug}`" class="hover:text-cobalt">
            {{ rama.nombre }}
          </RouterLink>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{{ proyecto.titulo }}</li>
      </ol>
    </nav>

    <h1 class="font-display uppercase leading-[1.05] text-[clamp(2.5rem,8vw,8rem)]">
      {{ proyecto.titulo }}
    </h1>
    <p class="mt-4 max-w-3xl font-serif text-xl italic md:text-2xl">{{ proyecto.frase }}</p>
    <p class="mt-8 font-mono text-xs uppercase tracking-widest">Página en construcción</p>
  </AppContainer>
</template>