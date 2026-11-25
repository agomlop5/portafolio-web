<script setup lang="ts">
defineProps<{ numero: string; titulo: string }>()
</script>

<template>
  <section class="mt-14 grid gap-6 border-t border-ink pt-8 md:mt-20 lg:grid-cols-12 lg:gap-12">
    <div class="lg:col-span-4">
      <div class="lg:sticky lg:top-24">
        <p class="font-mono text-xs uppercase tracking-widest">{{ numero }}</p>
        <h2 class="mt-2 font-display text-3xl uppercase leading-[1.1] md:text-4xl 2xl:text-5xl">
          {{ titulo }}
        </h2>
      </div>
    </div>
    <div class="lg:col-span-8">
      <slot />
    </div>
  </section>
</template>