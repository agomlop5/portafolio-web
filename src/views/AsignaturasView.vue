<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import AppContainer from '@/components/layout/AppContainer.vue'
import { useAsignatura } from '@/composables/useAsignatura'

type Pestana = 'aprendido' | 'objetivos'

const props = defineProps<{ asignatura: string }>()

const { asignatura: datos, trabajos, anterior, siguiente } = useAsignatura(() => props.asignatura)
const imagenesRotas = reactive<Record<string, boolean>>({})

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function ects(n: number) {
  return String(n).replace('.', ',')
}

// Pestañas: solo las que tienen contenido
const pestanas = computed(() => {
  const lista: { id: Pestana; texto: string; items: string[] }[] = []
  if (datos.value?.aprendido?.length) {
    lista.push({ id: 'aprendido', texto: 'Lo que he aprendido', items: datos.value.aprendido })
  }
  if (datos.value?.objetivos?.length) {
    lista.push({ id: 'objetivos', texto: 'Objetivos de la asignatura', items: datos.value.objetivos })
  }
  return lista
})

const pestanaActiva = ref<Pestana>('aprendido')

watch(
  () => props.asignatura,
  () => {
    pestanaActiva.value = pestanas.value[0]?.id ?? 'aprendido'
  },
  { immediate: true },
)

async function moverPestana(desplazamiento: number) {
  const lista = pestanas.value
  if (lista.length < 2) return
  const i = lista.findIndex((p) => p.id === pestanaActiva.value)
  const nueva = lista[(i + desplazamiento + lista.length) % lista.length]
  pestanaActiva.value = nueva.id
  await nextTick()
  document.getElementById(`tab-${nueva.id}`)?.focus()
}
</script>

<template>
  <AppContainer v-if="datos" class="py-8 md:py-12">
    <nav aria-label="Migas de pan" class="mb-8 md:mb-10">
      <ol class="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest">
        <li>
          <RouterLink to="/sobre-mi" class="hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt">
            Sobre mí
          </RouterLink>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <RouterLink
            to="/sobre-mi/formacion"
            class="hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt"
          >
            Formación
          </RouterLink>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{{ datos.nombre }}</li>
      </ol>
    </nav>

    <header class="mb-10 grid gap-6 border-b border-ink pb-10 md:mb-14 md:pb-14 lg:grid-cols-12 lg:items-end lg:gap-12">
      <div class="lg:col-span-7">
        <p class="font-mono text-xs uppercase tracking-widest">
          {{ datos.periodo }}
          <template v-if="datos.ects !== undefined"> · {{ ects(datos.ects) }} ECTS</template>
        </p>
        <h1 class="mt-3 font-display uppercase leading-[1.05] text-[clamp(2.5rem,7vw,7rem)]">
          {{ datos.nombre }}
        </h1>
      </div>
      <div class="space-y-4 lg:col-span-5">
        <p
          v-for="(p, i) in datos.descripcion"
          :key="i"
          class="font-serif text-lg leading-relaxed md:text-xl"
        >
          {{ p }}
        </p>
      </div>
    </header>

    <section v-if="pestanas.length" class="mb-12 md:mb-16" aria-label="Detalle de la asignatura">
      <div
        role="tablist"
        aria-label="Contenido de la asignatura"
        class="flex flex-wrap gap-2 border-b border-ink"
        @keydown.right.prevent="moverPestana(1)"
        @keydown.left.prevent="moverPestana(-1)"
      >
        <button
          v-for="p in pestanas"
          :id="`tab-${p.id}`"
          :key="p.id"
          type="button"
          role="tab"
          :aria-selected="pestanaActiva === p.id"
          :aria-controls="`panel-${p.id}`"
          :tabindex="pestanaActiva === p.id ? 0 : -1"
          class="border border-b-0 border-ink px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt md:text-sm"
          :class="pestanaActiva === p.id ? 'bg-ink text-paper' : 'hover:bg-ink/10'"
          @click="pestanaActiva = p.id"
        >
          {{ p.texto }}
        </button>
      </div>

      <div
        v-for="p in pestanas"
        v-show="pestanaActiva === p.id"
        :id="`panel-${p.id}`"
        :key="p.id"
        role="tabpanel"
        :aria-labelledby="`tab-${p.id}`"
        tabindex="0"
        class="pt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
      >
        <ul class="max-w-4xl">
          <li
            v-for="(t, i) in p.items"
            :key="i"
            class="grid grid-cols-[auto_1fr] gap-4 border-b border-ink/30 py-4 first:pt-0 last:border-b-0"
          >
            <span class="pt-1 font-mono text-xs uppercase tracking-widest text-ink/60">
              {{ pad(i + 1) }}
            </span>
            <p class="font-serif text-lg leading-relaxed md:text-xl">{{ t }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="trabajos-titulo">
      <h2 id="trabajos-titulo" class="mb-6 font-display text-3xl uppercase md:text-4xl">
        Trabajos de esta asignatura
      </h2>

      <ul v-if="trabajos.length" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <li v-for="(p, i) in trabajos" :key="p.slug">
          <RouterLink
            :to="`/proyectos/${p.categoria}/${p.slug}`"
            class="group block h-full border border-ink transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
            :class="i % 2 === 0 ? 'hover:bg-cobalt hover:text-paper' : 'hover:bg-tangerine hover:text-ink'"
          >
            <div class="relative aspect-[4/3] overflow-hidden border-b border-ink bg-ink/10">
              <img
                v-if="!imagenesRotas[p.slug]"
                :src="p.portada"
                alt=""
                loading="lazy"
                class="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                @error="imagenesRotas[p.slug] = true"
              />
            </div>
            <div class="p-4">
              <p class="font-mono text-xs uppercase tracking-widest">{{ p.anio }}</p>
              <h3 class="mt-2 font-display text-2xl uppercase leading-[1.1]">{{ p.titulo }}</h3>
              <p class="mt-2 font-serif text-base italic">{{ p.frase }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>

      <p v-else class="font-mono text-sm uppercase tracking-wider">
        Todavía no hay trabajos publicados de esta asignatura.
      </p>
    </section>

    <nav
      v-if="anterior && siguiente"
      aria-label="Navegación entre asignaturas"
      class="mt-16 grid grid-cols-2 border-y border-ink md:mt-24"
    >
      <RouterLink
        :to="`/sobre-mi/formacion/${anterior.slug}`"
        rel="prev"
        class="group flex flex-col items-start gap-2 border-r border-ink py-6 pr-4 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cobalt md:gap-3 md:py-8 md:pr-8"
      >
        <span class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
          <ArrowLeft
            class="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:-translate-x-1"
            aria-hidden="true"
          />
          Anterior
        </span>
        <span class="font-display text-lg uppercase leading-tight transition-colors group-hover:text-cobalt md:text-2xl">
          {{ anterior.nombre }}
        </span>
      </RouterLink>

      <RouterLink
        :to="`/sobre-mi/formacion/${siguiente.slug}`"
        rel="next"
        class="group flex flex-col items-end gap-2 py-6 pl-4 text-right focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cobalt md:gap-3 md:py-8 md:pl-8"
      >
        <span class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
          Siguiente
          <ArrowRight
            class="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
        <span class="font-display text-lg uppercase leading-tight transition-colors group-hover:text-tangerine-deep md:text-2xl">
          {{ siguiente.nombre }}
        </span>
      </RouterLink>
    </nav>
  </AppContainer>
</template>