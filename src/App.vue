<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<template>
  <a
    href="#contenido"
    class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
  >
    Saltar al contenido
  </a>
  <SiteHeader />
  <main id="contenido">
    <RouterView />
  </main>
  <SiteFooter />
</template>