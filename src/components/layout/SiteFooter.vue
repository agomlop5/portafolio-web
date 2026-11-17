<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ArrowUp, ArrowUpRight } from 'lucide-vue-next'
import AppContainer from '@/components/layout/AppContainer.vue'
import ContactBand from '@/components/layout/ContactBand.vue'
import { contacto } from '@/data/contact'

const route = useRoute()
const mostrarBanda = computed(() => route.path !== '/contacto')
const anio = new Date().getFullYear()

const navegacion = [
  { nombre: 'Inicio', ruta: '/' },
  { nombre: 'Trabajo', ruta: '/trabajo' },
  { nombre: 'Sobre mí', ruta: '/sobre-mi' },
  { nombre: 'Contacto', ruta: '/contacto' },
]

function subir() {
  const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reducir ? 'auto' : 'smooth' })
}
</script>

<template>
  <footer>
    <ContactBand v-if="mostrarBanda" />

    <div class="bg-ink text-paper">
      <AppContainer class="grid gap-8 py-8 sm:grid-cols-3 lg:grid-cols-4 lg:py-10">
        
        <div>
          <p class="font-display text-2xl uppercase">Alba Gómez</p>
          <p class="mt-1 font-serif text-xl italic">
            Diseño gráfico, ilustración y web.
          </p>
          <span class="mt-4 inline-flex items-center gap-2 border border-paper px-2 pt-1 py-0.5 font-mono text-[0.8rem] uppercase">
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-tangerine"></span>
            Disponible para prácticas
          </span>
        </div>

        
        <nav aria-label="Pie de página">
          <p class="mb-3 font-mono text-[0.8rem] uppercase tracking-widest text-paper/60">Navegación</p>
          <ul class="space-y-1.5">
            <li v-for="e in navegacion" :key="e.ruta">
              <RouterLink
                :to="e.ruta"
                class="font-mono text-s uppercase tracking-wider hover:text-tangerine focus-visible:outline-2 focus-visible:outline-tangerine"
              >
                {{ e.nombre }}
              </RouterLink>
            </li>
          </ul>
        </nav>

      
        <div>
          <p class="mb-3 font-mono text-[0.8rem] uppercase tracking-widest text-paper/60">Contacto</p>
          <ul class="space-y-1.5 font-mono text-s">
            <li>
              <a
                :href="`mailto:${contacto.email}`"
                class="break-all hover:text-tangerine focus-visible:outline-2 focus-visible:outline-tangerine"
              >
                {{ contacto.email }}
              </a>
            </li>
            <li>
              <a
                :href="contacto.instagram.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 hover:text-tangerine focus-visible:outline-2 focus-visible:outline-tangerine"
              >
                Instagram {{ contacto.instagram.usuario }}
                <ArrowUpRight class="h-3.5 w-3.5" aria-hidden="true" />
                <span class="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            </li>
            <li class="text-paper/60">{{ contacto.ciudad }}</li>
          </ul>
        </div>

        
        <div class="sm:col-span-2 lg:col-span-1 lg:text-right">
          <button
            type="button"
            class="inline-flex items-center gap-2 border border-paper px-3 py-1.5 font-mono text-xs uppercase transition-colors hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangerine"
            @click="subir"
          >
            Volver arriba <ArrowUp class="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </AppContainer>

      <div class="border-t border-paper/20">
        <AppContainer class="py-3 font-mono text-[0.65rem] uppercase tracking-wider text-paper/60">
          © {{ anio }} Alba Gómez · Diseñado y desarrollado con Vue y Tailwind
        </AppContainer>
      </div>
    </div>
  </footer>
</template>