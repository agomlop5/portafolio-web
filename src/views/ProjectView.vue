<script setup lang="ts">
import { computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import AppContainer from '@/components/layout/AppContainer.vue'
import ImageLightbox from '@/components/project/ImageLightbox.vue'
import PaletaColores from '@/components/project/PaletaColores.vue'
import { useCategoria } from '@/composables/useCategoria'
import { useLightbox } from '@/composables/useLightbox'
import { categorias } from '@/data/categories'
import { proyectos, type Figura } from '@/data/projects'

const props = defineProps<{ categoria: string; slug: string }>()

const proyecto = computed(() =>
  proyectos.find((p) => p.slug === props.slug && p.categoria === props.categoria),
)
const { rama, delaRama } = useCategoria(() => props.categoria)
const detalle = computed(() => proyecto.value?.detalle)
const secciones = computed(() => detalle.value?.secciones ?? [])

// Todas las imágenes del proyecto, en orden, para la galería
const todas = computed<Figura[]>(() => secciones.value.flatMap((s) => (s.filas ?? []).flat()))
const indicePorSrc = computed(() => new Map(todas.value.map((f, i) => [f.src, i])))
const { indice, abrir, cerrar, siguiente, anterior } = useLightbox(() => todas.value.length)

function abrirFigura(f: Figura) {
  abrir(indicePorSrc.value.get(f.src) ?? 0)
}

watch(() => props.slug, cerrar)

function vecino(desplazamiento: number) {
  const n = delaRama.value.length
  if (n < 2) return null
  const i = delaRama.value.findIndex((p) => p.slug === props.slug)
  if (i === -1) return null
  return delaRama.value[(i + desplazamiento + n) % n]
}
const proyectoAnterior = computed(() => vecino(-1))
const proyectoSiguiente = computed(() => vecino(1))

function nombreDe(slug: string) {
  return categorias.find((c) => c.slug === slug)?.nombre
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

// Si una fila tiene una sola imagen, limitamos su altura máxima a unos 640 px
function estiloFila(fila: Figura[]) {
  if (fila.length !== 1) return undefined
  return { maxWidth: `${Math.round((fila[0].ancho / fila[0].alto) * 640)}px` }
}
</script>

<template>
  <AppContainer v-if="proyecto && rama" class="py-8 md:py-12">
    <nav aria-label="Migas de pan" class="mb-8 md:mb-10">
      <ol class="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest">
        <li>
          <RouterLink to="/proyectos" class="hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt">
            Proyectos
          </RouterLink>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <RouterLink
            :to="`/proyectos/${rama.slug}`"
            class="hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt"
          >
            {{ rama.nombre }}
          </RouterLink>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{{ proyecto.titulo }}</li>
      </ol>
    </nav>

    <header class="mb-8 md:mb-12">
      <p class="font-mono text-xs uppercase tracking-widest">
        {{ rama.nombre }} · {{ proyecto.anio }}
      </p>
      <h1 class="mt-3 font-display uppercase leading-[1.05] text-[clamp(2.5rem,8vw,8rem)]">
        {{ proyecto.titulo }}
      </h1>
      <p class="mt-4 max-w-3xl font-serif text-xl italic leading-snug md:text-2xl 2xl:text-3xl">
        {{ proyecto.frase }}
      </p>
    </header>

    <img
      :src="proyecto.portada"
      :alt="`Imagen principal del proyecto ${proyecto.titulo}`"
      class="mb-10 aspect-[16/9] w-full border border-ink object-cover md:mb-14"
    />

    <section class="grid gap-10 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-12">
      <dl class="space-y-4 lg:col-span-4">
        <div class="border-b border-ink/30 pb-3">
          <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">Año</dt>
          <dd class="mt-1 font-mono text-sm uppercase">{{ proyecto.anio }}</dd>
        </div>
        <div v-if="proyecto.contexto" class="border-b border-ink/30 pb-3">
          <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">Contexto</dt>
          <dd class="mt-1 font-mono text-sm uppercase">{{ proyecto.contexto }}</dd>
        </div>
        <div v-if="proyecto.formato" class="border-b border-ink/30 pb-3">
          <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">Formato</dt>
          <dd class="mt-1 font-mono text-sm uppercase">{{ proyecto.formato }}</dd>
        </div>
        <div v-for="d in detalle?.datos ?? []" :key="d.clave" class="border-b border-ink/30 pb-3">
          <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">{{ d.clave }}</dt>
          <dd class="mt-1 font-mono text-sm uppercase">{{ d.valor }}</dd>
        </div>
        <div v-if="proyecto.herramientas.length" class="border-b border-ink/30 pb-3">
          <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">Herramientas</dt>
          <dd class="mt-2">
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="h in proyecto.herramientas"
                :key="h"
                class="border border-ink px-2 py-1 font-mono text-xs uppercase"
              >
                {{ h }}
              </li>
            </ul>
          </dd>
        </div>
        <div v-if="proyecto.tambien?.length" class="border-b border-ink/30 pb-3">
          <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">También en</dt>
          <dd class="mt-1 font-mono text-sm uppercase">
            <RouterLink
              v-for="t in proyecto.tambien"
              :key="t"
              :to="`/proyectos/${t}`"
              class="mr-3 underline underline-offset-4 hover:text-cobalt"
            >
              {{ nombreDe(t) }}
            </RouterLink>
          </dd>
        </div>
        <div v-if="detalle?.descarga">
          <a
            :href="detalle.descarga.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block border-b-2 border-ink pb-1 font-mono text-sm uppercase hover:text-cobalt"
          >
            {{ detalle.descarga.texto }}
          </a>
        </div>
      </dl>

      <div class="space-y-5 lg:col-span-8">
        <template v-if="detalle">
          <p
            v-for="(p, i) in detalle.descripcion"
            :key="i"
            class="max-w-3xl font-serif text-lg leading-relaxed md:text-xl 2xl:text-2xl"
          >
            {{ p }}
          </p>
        </template>
        <p v-else class="max-w-3xl font-serif text-lg leading-relaxed md:text-xl 2xl:text-2xl">
          {{ proyecto.resumen }}
        </p>
      </div>
    </section>

    <section
      v-for="(s, n) in secciones"
      :key="s.titulo"
      class="mt-14 grid gap-6 border-t border-ink pt-8 md:mt-20 lg:grid-cols-12 lg:gap-12"
    >
      <div class="lg:col-span-4">
        <div class="lg:sticky lg:top-24">
          <p class="font-mono text-xs uppercase tracking-widest">{{ pad(n + 1) }}</p>
          <h2 class="mt-2 font-display text-3xl uppercase leading-[1.1] md:text-4xl 2xl:text-5xl">
            {{ s.titulo }}
          </h2>
        </div>
      </div>

      <div class="lg:col-span-8">
        <div v-if="s.texto?.length" class="max-w-3xl space-y-4">
          <p v-for="(t, i) in s.texto" :key="i" class="text-base leading-relaxed md:text-lg">
            {{ t }}
          </p>
        </div>

        <PaletaColores v-if="s.colores?.length" :colores="s.colores" />

        <div
          v-for="(fila, r) in s.filas"
          :key="r"
          class="mt-6 flex flex-col gap-4 md:flex-row md:items-start"
          :style="estiloFila(fila)"
        >
          <figure
            v-for="f in fila"
            :key="f.src"
            class="min-w-0 md:basis-0"
            :style="{ flexGrow: f.ancho / f.alto }"
          >
            <button
              type="button"
              class="block w-full cursor-zoom-in border border-ink bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              :aria-label="`Ampliar imagen: ${f.pie ?? f.alt}`"
              @click="abrirFigura(f)"
            >
              <img
                :src="f.src"
                :alt="f.alt"
                :width="f.ancho"
                :height="f.alto"
                loading="lazy"
                class="block h-auto w-full"
              />
            </button>
            <figcaption
              v-if="f.pie"
              class="mt-2 font-mono text-xs uppercase tracking-wider text-ink/70"
            >
              {{ f.pie }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <nav
      v-if="proyectoAnterior && proyectoSiguiente"
      aria-label="Navegación entre proyectos"
      class="mt-16 grid grid-cols-2 border-y border-ink md:mt-24"
    >
      <RouterLink
        :to="`/proyectos/${proyectoAnterior.categoria}/${proyectoAnterior.slug}`"
        rel="prev"
        class="group flex flex-col items-start gap-2 border-r border-ink py-6 pr-4 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cobalt md:gap-3 md:py-8 md:pr-8"
      >
        <span class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
          <ArrowLeft
            class="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:-translate-x-1"
            aria-hidden="true"
          />
          Proyecto anterior
        </span>
        <span class="font-display text-xl uppercase leading-tight transition-colors group-hover:text-cobalt md:text-3xl">
          {{ proyectoAnterior.titulo }}
        </span>
      </RouterLink>

      <RouterLink
        :to="`/proyectos/${proyectoSiguiente.categoria}/${proyectoSiguiente.slug}`"
        rel="next"
        class="group flex flex-col items-end gap-2 py-6 pl-4 text-right focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cobalt md:gap-3 md:py-8 md:pl-8"
      >
        <span class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
          Proyecto siguiente
          <ArrowRight
            class="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
        <span class="font-display text-xl uppercase leading-tight transition-colors group-hover:text-tangerine-deep md:text-3xl">
          {{ proyectoSiguiente.titulo }}
        </span>
      </RouterLink>
    </nav>

    <ImageLightbox
      :imagenes="todas"
      :indice="indice"
      @cerrar="cerrar"
      @anterior="anterior"
      @siguiente="siguiente"
    />
  </AppContainer>
</template>