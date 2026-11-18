<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import AppContainer from '@/components/layout/AppContainer.vue'
</script>

<template>
  <section class="relative overflow-hidden border-b border-ink">
    <AppContainer class="relative pt-10 md:pt-14">
      <div class="mb-6 flex flex-wrap items-center gap-3 font-mono uppercase tracking-widest text-[clamp(0.75rem,1.2vw,1.15rem)] md:mb-10">
        <span class="bg-ink px-2 py-1 text-paper">Portfolio 2026</span>
        <span> · Estudiante de Bellas Artes (UPV) · València</span>
      </div>

      <h1 class="relative z-10 font-display uppercase leading-[1.14] text-ink text-[clamp(3.25rem,15vw,24rem)]">
        Alba<br />Gómez
      </h1>

      <p class="relative z-10 mt-4 font-serif italic leading-tight text-[clamp(1.35rem,4.5vw,7rem)]">
        Diseño gráfico, <span class="text-cobalt">ilustración</span> <span class="text-tangerine-deep">y web.</span>
      </p>

      <div class="relative z-30 mt-8 flex flex-wrap gap-[clamp(0.75rem,1.2vw,1.5rem)] pb-10 md:mt-12 md:pb-16">
        <Button as-child size="lg" class="h-auto rounded-none bg-cobalt px-[clamp(1.25rem,1.8vw,2.25rem)] py-[clamp(0.75rem,1vw,1.15rem)] font-mono uppercase text-paper text-[clamp(0.85rem,1.1vw,1.15rem)] hover:bg-ink">
          <RouterLink to="/proyectos">
            Ver proyectos <ArrowRight class="ml-2 h-4 w-4" />
          </RouterLink>
        </Button>
        <Button as-child size="lg" variant="outline" class="h-auto rounded-none border-ink px-[clamp(1.25rem,1.8vw,2.25rem)] py-[clamp(0.75rem,1vw,1.15rem)] font-mono uppercase text-[clamp(0.85rem,1.1vw,1.15rem)]">
          <RouterLink to="/sobre-mi">Sobre mí</RouterLink>
        </Button>
      </div>

      <img
        src="/img/home/retrato-perfil.png"
        alt="Ilustración en blanco y negro de una mujer de perfil con un pendiente de perla"
        width="949"
        height="1180"
        class="pointer-events-none absolute bottom-0 right-0 z-20 w-[50%] max-w-[850px] md:w-[38%]"      />
    </AppContainer>
  </section>
</template>