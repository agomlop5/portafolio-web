<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import AppContainer from '@/components/layout/AppContainer.vue'
</script>

<template>
  <AppContainer class="min-h-[60svh] py-16 md:py-24">
    <p class="font-mono text-sm uppercase tracking-widest">Error 404</p>
    <h1 class="mt-4 font-display uppercase leading-none text-[clamp(4rem,16vw,14rem)]">
      Página <span class="font-serif normal-case italic text-cobalt">no encontrada</span>
    </h1>
    <Button as-child size="lg" class="mt-10 h-auto rounded-none bg-cobalt px-6 py-3 font-mono uppercase text-paper hover:bg-ink">
      <RouterLink to="/">
        <ArrowLeft class="mr-2 h-4 w-4" /> Volver al inicio
      </RouterLink>
    </Button>
  </AppContainer>
</template>