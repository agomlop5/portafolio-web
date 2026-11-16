<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="relative overflow-hidden border-b border-ink">
    <div class="relative mx-auto max-w-[1550px] px-4 pt-10 md:px-12 md:pt-16">
      <p class="mb-10 font-mono uppercase tracking-widest text-[clamp(0.75rem,1.2vw,1.15rem)]">
        Estudiante de Bellas Artes (UPV) · València · Portfolio 2026
      </p>

      <h1 class="relative z-10 font-display uppercase leading-[1.12] text-ink text-[clamp(3.5rem,14vw,13rem)]">
        Diseño<br />
        gráfico, <span class="font-serif normal-case italic text-cobalt">ilustración</span><br />
        <span class="block -mt-[0.15em] font-serif normal-case text-tangerine-deep">y web.</span>
      </h1>

      <div class="relative z-30 mt-8 flex flex-wrap gap-[clamp(0.75rem,1.2vw,1.5rem)] pb-10 md:mt-12 md:pb-16">
        <Button as-child size="lg" class="h-auto rounded-none bg-cobalt px-[clamp(1.25rem,1.8vw,2.25rem)] py-[clamp(0.75rem,1vw,1.15rem)] font-mono uppercase text-paper text-[clamp(0.85rem,1.1vw,1.15rem)] hover:bg-ink">
          <RouterLink to="/trabajo">
            Ver trabajo <ArrowRight class="ml-2 h-4 w-4" />
          </RouterLink>
        </Button>
        <Button as-child size="lg" variant="outline" class="h-auto rounded-none border-ink px-[clamp(1.25rem,1.8vw,2.25rem)] py-[clamp(0.75rem,1vw,1.15rem)] font-mono uppercase text-[clamp(0.85rem,1.1vw,1.15rem)]">
          <RouterLink to="/contacto">Contacto</RouterLink>
        </Button>
      </div>

      <img
      src="/img/home/retrato-perfil.png"
      alt="Ilustración en blanco y negro de una mujer de perfil con un pendiente de perla"
      width="949"
      height="1180"
      class="pointer-events-none absolute bottom-0 right-0 z-20 w-1/2 max-w-[620px] md:w-[38%]"
      />
    </div>
  </section>


</template>