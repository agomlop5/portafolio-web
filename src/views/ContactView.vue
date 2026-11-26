<script setup lang="ts">
import { ArrowUpRight, Check, Copy, Send } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import AppContainer from '@/components/layout/AppContainer.vue'
import { useCopyToClipboard } from '@/composables/useCopyToClipboard'
import { useFormularioContacto } from '@/composables/useFormularioContacto'
import { asuntos, contacto } from '@/data/contact'
import { nextTick, ref } from 'vue'

const { copiado, copiar } = useCopyToClipboard()
const { campos, errores, intentado, enviado, enviar, reiniciar } = useFormularioContacto()
const telefonoVisible = ref(false)

async function alEnviar() {
  const correcto = enviar()
  if (!correcto) {
    await nextTick()
    document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
  }
}

const estiloCampo =
  'w-full border bg-transparent px-4 py-3 font-mono text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt md:text-base'
</script>

<template>
  <AppContainer class="py-8 md:py-12">
    <header class="mb-10 md:mb-14">
      <p class="font-mono text-xs uppercase tracking-widest">Contacto</p>
      <h1 class="mt-3 font-display uppercase leading-[1.05] text-[clamp(3rem,10vw,10rem)]">
        Hablemos
      </h1>
      <p class="mt-4 max-w-3xl font-serif text-xl italic leading-snug md:text-2xl 2xl:text-3xl">
        ¿Tienes un proyecto, unas prácticas o simplemente quieres saludar? Escríbeme y te respondo
        lo antes posible.
      </p>
    </header>

    <div class="grid gap-12 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-12">
      <aside class="lg:col-span-4">
        <dl class="space-y-6">
          <div class="border-b border-ink/30 pb-4">
            <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">Correo</dt>
            <dd class="mt-2">
              <button
                type="button"
                class="inline-flex items-center gap-2 break-all text-left font-display text-2xl normal-case hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt md:text-3xl"
                @click="copiar(contacto.email)"
              >
                {{ copiado ? '¡Copiado!' : contacto.email }}
                <component :is="copiado ? Check : Copy" class="h-5 w-5 shrink-0" aria-hidden="true" />
              </button>
              <span class="sr-only" role="status" aria-live="polite">
                {{ copiado ? 'Correo copiado' : '' }}
              </span>
              <p class="mt-2 font-mono text-xs uppercase tracking-wider text-ink/60">
                Clic para copiar
              </p>
            </dd>
          </div>

          <div class="border-b border-ink/30 pb-4">
            <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">Instagram</dt>
            <dd class="mt-2">
              <a
                :href="contacto.instagram.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 font-display text-2xl hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt md:text-3xl"
              >
                {{ contacto.instagram.usuario }}
                <ArrowUpRight class="h-5 w-5" aria-hidden="true" />
                <span class="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            </dd>
          </div>

          <div class="border-b border-ink/30 pb-4">
            <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">Teléfono</dt>
            <dd class="mt-2">
              <a
                v-if="telefonoVisible"
                :href="contacto.telefono.enlace"
                class="font-display text-2xl hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt md:text-3xl"
              >
                {{ contacto.telefono.texto }}
              </a>
              <button
                v-else
                type="button"
                class="border border-ink px-3 py-2 font-mono text-xs uppercase transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
                @click="telefonoVisible = true"
              >
                Mostrar teléfono
              </button>
            </dd>
          </div>
          
          <div class="border-b border-ink/30 pb-4">
            <dt class="font-mono text-xs uppercase tracking-widest text-ink/60">Ciudad</dt>
            <dd class="mt-2 font-display text-2xl uppercase md:text-3xl">{{ contacto.ciudad }}</dd>
          </div>

          <div>
            <dt class="sr-only">Disponibilidad</dt>
            <dd>
              <span class="inline-flex items-center gap-2 border border-ink px-3 py-1 font-mono text-xs uppercase">
                <span class="h-2 w-2 animate-pulse rounded-full bg-tangerine"></span>
                Disponible para prácticas
              </span>
            </dd>
          </div>
        </dl>
      </aside>

      <div class="lg:col-span-8">
        <h2 class="mb-6 font-display text-3xl uppercase md:text-4xl">Escríbeme un mensaje</h2>

        <div
          v-if="enviado"
          role="status"
          class="mb-8 border border-ink bg-cobalt p-5 text-paper"
        >
          <p class="font-display text-2xl uppercase">Casi está</p>
          <p class="mt-2 text-base md:text-lg">
            Se está abriendo tu aplicación de correo con el mensaje preparado: solo te falta darle a
            enviar. Si no se abre, copia mi correo y escríbeme desde donde prefieras.
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              class="inline-flex items-center gap-2 border border-paper px-4 py-2 font-mono text-xs uppercase transition-colors hover:bg-paper hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              @click="copiar(contacto.email)"
            >
              <component :is="copiado ? Check : Copy" class="h-4 w-4" aria-hidden="true" />
              {{ copiado ? 'Copiado' : 'Copiar correo' }}
            </button>
            <button
              type="button"
              class="inline-flex items-center gap-2 border border-paper px-4 py-2 font-mono text-xs uppercase transition-colors hover:bg-paper hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              @click="reiniciar"
            >
              Escribir otro mensaje
            </button>
          </div>
        </div>

        <form class="space-y-6" novalidate @submit.prevent="alEnviar">
          <div class="grid gap-6 md:grid-cols-2">
            <!-- Nombre -->
            <div>
              <label for="campo-nombre" class="mb-2 block font-mono text-xs uppercase tracking-widest">
                Nombre
              </label>
              <input
                id="campo-nombre"
                v-model="campos.nombre"
                type="text"
                autocomplete="name"
                :class="[estiloCampo, intentado && errores.nombre ? 'border-2 border-tangerine-deep' : 'border-ink']"
                :aria-invalid="intentado && !!errores.nombre"
                :aria-describedby="intentado && errores.nombre ? 'error-nombre' : undefined"
              />
              <p
                v-if="intentado && errores.nombre"
                id="error-nombre"
                class="mt-2 font-mono text-xs uppercase tracking-wider"
              >
                Error: {{ errores.nombre }}
              </p>
            </div>

            <div>
              <label for="campo-correo" class="mb-2 block font-mono text-xs uppercase tracking-widest">
                Tu correo <span class="text-ink/60">(opcional)</span>
              </label>
              <input
                id="campo-correo"
                v-model="campos.correo"
                type="email"
                autocomplete="email"
                :class="[estiloCampo, intentado && errores.correo ? 'border-2 border-tangerine-deep' : 'border-ink']"
                :aria-invalid="intentado && !!errores.correo"
                :aria-describedby="intentado && errores.correo ? 'error-correo' : undefined"
              />
              <p
                v-if="intentado && errores.correo"
                id="error-correo"
                class="mt-2 font-mono text-xs uppercase tracking-wider"
              >
                Error: {{ errores.correo }}
              </p>
            </div>
          </div>

          <div>
            <label for="campo-asunto" class="mb-2 block font-mono text-xs uppercase tracking-widest">
              Asunto
            </label>
            <select id="campo-asunto" v-model="campos.asunto" :class="[estiloCampo, 'border-ink']">
              <option v-for="a in asuntos" :key="a" :value="a">{{ a }}</option>
            </select>
          </div>

          <div>
            <label for="campo-mensaje" class="mb-2 block font-mono text-xs uppercase tracking-widest">
              Mensaje
            </label>
            <textarea
              id="campo-mensaje"
              v-model="campos.mensaje"
              rows="7"
              :class="[estiloCampo, intentado && errores.mensaje ? 'border-2 border-tangerine-deep' : 'border-ink']"
              :aria-invalid="intentado && !!errores.mensaje"
              :aria-describedby="intentado && errores.mensaje ? 'error-mensaje' : undefined"
            ></textarea>
            <p
              v-if="intentado && errores.mensaje"
              id="error-mensaje"
              class="mt-2 font-mono text-xs uppercase tracking-wider"
            >
              Error: {{ errores.mensaje }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <Button
              type="submit"
              size="lg"
              class="h-auto rounded-none bg-cobalt px-6 py-3 font-mono uppercase text-paper hover:bg-ink"
            >
              Enviar mensaje <Send class="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <p class="max-w-md font-mono text-xs uppercase leading-relaxed tracking-wider text-ink/60">
              No guardo ningún dato: el mensaje se abre en tu aplicación de correo.
            </p>
          </div>
        </form>
      </div>
    </div>
  </AppContainer>
</template>